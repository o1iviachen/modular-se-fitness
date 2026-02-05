import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, Play } from 'lucide-react';
import logo from 'figma:asset/6715fa8a90369e65d79802402e0679daa2d685be.png';
import { exerciseLibrary } from '../../data/exerciseLibrary';
import { AssignExerciseModal } from '../../components/AssignExerciseModal';
import { useState } from 'react';

export function ExerciseDetail() {
  const { exerciseId } = useParams();
  const navigate = useNavigate();
  const [showAssignModal, setShowAssignModal] = useState(false);

  const exercise = exerciseLibrary.find(ex => ex.id === Number(exerciseId));

  if (!exercise) {
    return (
      <div className="min-h-full bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Exercise not found</p>
      </div>
    );
  }

  const getSourceBadgeColor = (source: string) => {
    switch (source) {
      case 'stretch-affect':
        return 'bg-purple-100 text-purple-700';
      case 'central-athlete':
        return 'bg-blue-100 text-blue-700';
      case 'custom':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getSourceName = (source: string) => {
    switch (source) {
      case 'stretch-affect':
        return 'Stretch Affect';
      case 'central-athlete':
        return 'Central Athlete';
      case 'custom':
        return 'Custom Exercise';
      default:
        return source;
    }
  };

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
        <img src={logo} alt="SE Fitness" className="h-10 w-auto mb-3" />
        <div className="flex items-center gap-2 mb-2">
          <h1 className="text-xl font-semibold">{exercise.name}</h1>
          <span className={`text-xs px-2 py-1 rounded-full ${getSourceBadgeColor(exercise.source)}`}>
            {getSourceName(exercise.source)}
          </span>
        </div>
        <p className="text-gray-400 text-sm">{exercise.category} • {exercise.equipment}</p>
      </div>

      {/* Video Section */}
      {exercise.videoUrl && (
        <div className="px-6 mt-6 mb-6">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="aspect-video bg-black relative">
              <iframe
                src={exercise.videoUrl}
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
              <span className="font-medium">{exercise.category}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Equipment</span>
              <span className="font-medium">{exercise.equipment}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Duration</span>
              <span className="font-medium">{exercise.duration}</span>
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