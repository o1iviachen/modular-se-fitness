import { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { collection, addDoc, doc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase';


export function CreateExercise() {
  const navigate = useNavigate();
  const location = useLocation();
  const { exerciseId } = useParams();
  const isEditMode = !!exerciseId;
  const { user } = useAuth();
  const returnToWorkout = (location.state as any)?.returnToWorkout as { athleteId: string; workoutDate: string; workoutDay: string } | undefined;
  const [formData, setFormData] = useState({
    name: '',
    category: [] as string[],
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
          category: Array.isArray(data.category) ? data.category : data.category ? [data.category] : [],
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
    'Isometrics',
    'Cardio',
    'Core',
    'Other'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.id || saving) return;
    if (formData.category.length === 0) return;
    setSaving(true);
    try {
      if (isEditMode && exerciseId) {
        await updateDoc(doc(db, 'users', user.id, 'customExercises', exerciseId), {
          name: formData.name,
          category: formData.category,
          description: formData.description,
          videoUrl: formData.videoUrl || null,
          updatedAt: serverTimestamp(),
        });
      } else {
        await addDoc(collection(db, 'users', user.id, 'customExercises'), {
          name: formData.name,
          category: formData.category,
          description: formData.description,
          videoUrl: formData.videoUrl || null,
          source: 'custom',
          createdAt: serverTimestamp(),
        });
      }
      if (returnToWorkout && !isEditMode) {
        navigate(`/coach/workout/${returnToWorkout.workoutDate}`, {
          state: {
            athleteId: returnToWorkout.athleteId,
            workoutDate: returnToWorkout.workoutDate,
            workoutDay: returnToWorkout.workoutDay,
            exerciseToAdd: {
              name: formData.name,
              sets: '',
              reps: '',
              weight: '',
              notes: '',
              videoUrl: formData.videoUrl || undefined,
            },
          },
        });
      } else {
        navigate('/coach/library');
      }
    } catch (err) {
      console.error('Failed to save exercise:', err);
      setSaving(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const hasUnsavedChanges = formData.name.trim() !== '' || formData.category.length > 0 || formData.description.trim() !== '' || formData.videoUrl.trim() !== '';

  const goBack = () => {
    if (returnToWorkout) {
      navigate(`/coach/workout/${returnToWorkout.workoutDate}`, {
        state: {
          athleteId: returnToWorkout.athleteId,
          workoutDate: returnToWorkout.workoutDate,
          workoutDay: returnToWorkout.workoutDay,
        },
      });
    } else {
      navigate('/coach/library');
    }
  };

  const handleBack = () => {
    if (hasUnsavedChanges) {
      if (!window.confirm('You have unsaved changes. Are you sure you want to leave?')) return;
    }
    goBack();
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
          onClick={handleBack}
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
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setFormData((prev) => ({
                      ...prev,
                      category: prev.category.includes(cat)
                        ? prev.category.filter((c) => c !== cat)
                        : [...prev.category, cat],
                    }));
                  }}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    formData.category.includes(cat)
                      ? 'bg-[#FFD000] text-black font-medium'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              className="w-full bg-gray-50 rounded-lg px-4 py-3 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-[#FFD000] resize-none"
              placeholder="Describe the exercise, its benefits, and proper form..."
            />
          </div>
        </div>

        {/* Video URL */}
        <div className="mb-6">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <label className="block text-sm font-medium mb-2">Video URL</label>
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
            onClick={goBack}
            className="flex-1 bg-gray-100 text-black rounded-xl py-3 hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
