import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { collection, addDoc, doc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase';


export function CreateExercise() {
  const navigate = useNavigate();
  const { exerciseId } = useParams();
  const isEditMode = !!exerciseId;
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    equipment: '',
    description: '',
    videoUrl: ''
  });
  const [saving, setSaving] = useState(false);
  const [loadingExercise, setLoadingExercise] = useState(isEditMode);

  // Load existing exercise data in edit mode
  useEffect(() => {
    if (!isEditMode || !user?.id || !exerciseId) return;
    getDoc(doc(db, 'users', user.id, 'customExercises', exerciseId)).then((snap) => {
      if (snap.exists()) {
        const data = snap.data();
        setFormData({
          name: data.name || '',
          category: data.category || '',
          equipment: data.equipment || '',
          description: data.description || '',
          videoUrl: data.videoUrl || '',
        });
      }
      setLoadingExercise(false);
    });
  }, [isEditMode, user?.id, exerciseId]);

  const categories = [
    'Strength',
    'Mobility',
    'Flexibility',
    'Olympic Lifting',
    'Gymnastics',
    'Cardio',
    'Core',
    'Other'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.id || saving) return;
    setSaving(true);
    try {
      if (isEditMode && exerciseId) {
        await updateDoc(doc(db, 'users', user.id, 'customExercises', exerciseId), {
          name: formData.name,
          category: formData.category,
          equipment: formData.equipment || 'Bodyweight',
          description: formData.description,
          videoUrl: formData.videoUrl || null,
          updatedAt: serverTimestamp(),
        });
      } else {
        await addDoc(collection(db, 'users', user.id, 'customExercises'), {
          name: formData.name,
          category: formData.category,
          equipment: formData.equipment || 'Bodyweight',
          description: formData.description,
          videoUrl: formData.videoUrl || null,
          source: 'custom',
          createdAt: serverTimestamp(),
        });
      }
      navigate('/coach/library');
    } catch (err) {
      console.error('Failed to save exercise:', err);
      setSaving(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  if (loadingExercise) {
    return (
      <div className="min-h-full bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-gray-50 pb-6">
      {/* Header */}
      <div className="bg-black text-white px-6 py-8">
        <button
          onClick={() => navigate('/coach/library')}
          className="text-white mb-4 hover:text-[#FFD000] transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <img src="/se-logo.png" alt="SE Fitness" className="h-10 w-auto mb-3" />
        <h1 className="text-xl font-semibold mb-1">{isEditMode ? 'Edit Exercise' : 'Create Custom Exercise'}</h1>
        <p className="text-gray-400 text-sm">{isEditMode ? 'Update your custom exercise' : 'Add a new exercise to your library'}</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="px-6 -mt-4">
        {/* Exercise Name */}
        <div className="mb-6">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <label className="block text-sm font-medium mb-2">Exercise Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full bg-gray-50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
              placeholder="e.g., Bulgarian Split Squat"
              required
            />
          </div>
        </div>

        {/* Category */}
        <div className="mb-6">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <label className="block text-sm font-medium mb-2">Category *</label>
            <select
              value={formData.category}
              onChange={(e) => handleChange('category', e.target.value)}
              className="w-full bg-gray-50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
              required
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Equipment */}
        <div className="mb-6">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <label className="block text-sm font-medium mb-2">Equipment</label>
            <input
              type="text"
              value={formData.equipment}
              onChange={(e) => handleChange('equipment', e.target.value)}
              className="w-full bg-gray-50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
              placeholder="e.g., Dumbbells"
            />
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <label className="block text-sm font-medium mb-2">Description *</label>
            <textarea
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              className="w-full bg-gray-50 rounded-lg px-4 py-3 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-[#FFD000] resize-none"
              placeholder="Describe the exercise, its benefits, and proper form..."
              required
            />
          </div>
        </div>

        {/* Video URL */}
        <div className="mb-6">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <label className="block text-sm font-medium mb-2">Video URL (Optional)</label>
            <input
              type="url"
              value={formData.videoUrl}
              onChange={(e) => handleChange('videoUrl', e.target.value)}
              className="w-full bg-gray-50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
              placeholder="https://player.vimeo.com/video/..."
            />
            <p className="text-xs text-gray-500 mt-2">
              Enter a Vimeo or YouTube embed URL for the exercise demonstration
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            type="submit"
            disabled={saving}
            className="flex-1 bg-[#FFD000] text-black rounded-xl py-3 hover:bg-[#FFD000]/90 transition-colors font-medium disabled:opacity-50"
          >
            {saving ? 'Saving...' : isEditMode ? 'Save Changes' : 'Create Exercise'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/coach/library')}
            className="flex-1 bg-gray-100 text-black rounded-xl py-3 hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
