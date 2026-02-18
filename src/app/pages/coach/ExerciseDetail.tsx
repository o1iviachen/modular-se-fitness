import { useParams, useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';

import { exerciseLibrary, LibraryExercise } from '../../data/exerciseLibrary';
import { AssignExerciseModal } from '../../components/AssignExerciseModal';
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { getSourceBadgeColor, getSourceName } from '../../utils/exerciseHelpers';
import { toEmbedUrl, formatCategory } from '../../utils/helpers';

export function ExerciseDetail() {
  const { exerciseId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [customExercise, setCustomExercise] = useState<LibraryExercise | null>(null);
  const [loading, setLoading] = useState(false);

  // Try static library first
  const staticExercise = exerciseLibrary.find(ex => ex.id === Number(exerciseId));

  // If not found in static library, try Firestore custom exercises
  useEffect(() => {
    if (staticExercise || !exerciseId || !user?.id) return;
    setLoading(true);
    getDoc(doc(db, 'users', user.id, 'customExercises', exerciseId)).then((snap) => {
      if (snap.exists()) {
        const data = snap.data();
        setCustomExercise({
          id: snap.id as any,
          name: data.name,
          source: 'custom',
          category: data.category,
          equipment: data.equipment || 'Bodyweight',
          description: data.description,
          videoUrl: data.videoUrl || undefined,
        });
      }
      setLoading(false);
    });
  }, [exerciseId, user?.id, staticExercise]);

  const exercise = staticExercise || customExercise;

  if (loading) {
    return (
      <div className="min-h-full bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!exercise) {
    return (
      <div className="min-h-full bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Exercise not found</p>
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
        <div className="flex items-center gap-2 mb-2">
          <h1 className="text-xl font-semibold">{exercise.name}</h1>
          <span className={`text-xs px-2 py-1 rounded-full ${getSourceBadgeColor(exercise.source)}`}>
            {getSourceName(exercise.source)}
          </span>
        </div>
        <p className="text-gray-400 text-sm">{formatCategory(exercise.category)} • {exercise.equipment}</p>
      </div>

      {/* Video Section */}
      {exercise.videoUrl && (
        <div className="px-6 mt-6 mb-6">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="aspect-video bg-black relative">
              <iframe
                src={toEmbedUrl(exercise.videoUrl!)}
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={exercise.name}
              />
            </div>
          </div>
        </div>
      )}

      {/* Description */}
      <div className="px-6 mb-6">
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <h3 className="font-semibold mb-3">Description</h3>
          <p className="text-gray-700 leading-relaxed">{exercise.description}</p>
        </div>
      </div>

      {/* Exercise Details */}
      <div className="px-6 mb-6">
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <h3 className="font-semibold mb-3">Exercise Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Category</span>
              <span className="font-medium">{formatCategory(exercise.category)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Equipment</span>
              <span className="font-medium">{exercise.equipment}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Source</span>
              <span className="font-medium">{getSourceName(exercise.source)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-6">
        <button 
          onClick={() => setShowAssignModal(true)}
          className="w-full bg-[#FFD000] text-black rounded-xl p-4 hover:bg-[#FFD000]/90 transition-colors shadow-sm font-medium"
        >
          Assign to Athlete
        </button>
      </div>

      {/* Assign Modal */}
      {showAssignModal && (
        <AssignExerciseModal
          exercise={exercise}
          onClose={() => setShowAssignModal(false)}
        />
      )}
    </div>
  );
}