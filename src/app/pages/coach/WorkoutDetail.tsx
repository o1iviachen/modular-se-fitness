import { useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router';
import { ArrowLeft, Plus, Trash2, GripVertical, Play } from 'lucide-react';
import logo from 'figma:asset/6715fa8a90369e65d79802402e0679daa2d685be.png';
import { ExerciseSearchInput } from '../../components/ExerciseSearchInput';

interface Exercise {
  id: number;
  name: string;
  sets: string;
  reps: string;
  weight: string;
  notes: string;
  videoUrl?: string;
}

// Global workout storage
const workoutStorage: { [key: string]: Exercise[] } = {};

export function WorkoutDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { workoutId } = useParams();
  const { workoutName, workoutDate = '', workoutDay = '', athleteId = '', exerciseToAdd = null } = location.state || {};

  // If no workout name provided, redirect back
  if (!workoutName) {
    navigate(-1);
    return null;
  }

  const workoutKey = `${athleteId}-${workoutId}`;

  const [exercises, setExercises] = useState<Exercise[]>(() => {
    // Check if workout already exists in storage
    if (workoutStorage[workoutKey]) {
      // If there's an exercise to add, add it to existing exercises
      if (exerciseToAdd) {
        const exists = workoutStorage[workoutKey].some(e => e.name === exerciseToAdd.name);
        if (!exists) {
          const updated = [...workoutStorage[workoutKey], exerciseToAdd];
          workoutStorage[workoutKey] = updated;
          return updated;
        }
      }
      return workoutStorage[workoutKey];
    }

    // New workout - initialize with exerciseToAdd if provided
    if (exerciseToAdd) {
      workoutStorage[workoutKey] = [exerciseToAdd];
      return [exerciseToAdd];
    }

    // Empty workout
    workoutStorage[workoutKey] = [];
    return [];
  });

  const [workoutNotes, setWorkoutNotes] = useState('Remember to warm up with 10 min cardio and dynamic stretching');

  const updateStorage = (newExercises: Exercise[]) => {
    workoutStorage[workoutKey] = newExercises;
    setExercises(newExercises);
  };

  const handleAddExercise = () => {
    const newExercise: Exercise = {
      id: Date.now(),
      name: 'New Exercise',
      sets: '3',
      reps: '10',
      weight: '',
      notes: ''
    };
    updateStorage([...exercises, newExercise]);
  };

  const handleDeleteExercise = (id: number) => {
    updateStorage(exercises.filter(ex => ex.id !== id));
  };

  const handleUpdateExercise = (id: number, field: keyof Exercise, value: string) => {
    updateStorage(exercises.map(ex => ex.id === id ? { ...ex, [field]: value } : ex));
  };

  const handleSave = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-black text-white px-6 py-8">
        <button onClick={() => navigate(-1)} className="text-white mb-4 hover:text-[#FFD000] transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <img src={logo} alt="SE Fitness" className="h-10 w-auto mb-3" />
        {workoutDay && workoutDate && <div className="text-sm text-gray-400 mb-1">{workoutDay} • {workoutDate}</div>}
        <h1 className="text-xl font-semibold">{workoutName}</h1>
      </div>

      <div className="px-6 py-6">
        <div className="mb-6">
          <h3 className="font-semibold mb-4">Exercises ({exercises.length})</h3>
          <div className="space-y-3">
            {exercises.map((exercise) => (
              <div key={exercise.id} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-gray-400 mt-2">
                    <GripVertical className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <ExerciseSearchInput
                      value={exercise.name}
                      onChange={(value) => handleUpdateExercise(exercise.id, 'name', value)}
                    />
                    <div className="grid grid-cols-3 gap-2 mb-2">
                      <div>
                        <label className="text-xs text-gray-600 block mb-1">Sets</label>
                        <input
                          type="text"
                          value={exercise.sets}
                          onChange={(e) => handleUpdateExercise(exercise.id, 'sets', e.target.value)}
                          className="w-full bg-gray-50 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-600 block mb-1">Reps</label>
                        <input
                          type="text"
                          value={exercise.reps}
                          onChange={(e) => handleUpdateExercise(exercise.id, 'reps', e.target.value)}
                          className="w-full bg-gray-50 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-600 block mb-1">Weight</label>
                        <input
                          type="text"
                          value={exercise.weight}
                          onChange={(e) => handleUpdateExercise(exercise.id, 'weight', e.target.value)}
                          className="w-full bg-gray-50 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
                        />
                      </div>
                    </div>
                    <input
                      type="text"
                      value={exercise.notes}
                      onChange={(e) => handleUpdateExercise(exercise.id, 'notes', e.target.value)}
                      className="w-full bg-gray-50 rounded-lg px-3 py-2 text-xs text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
                      placeholder="Notes (optional)"
                    />
                    {exercise.videoUrl && (
                      <button
                        className="mt-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                        onClick={() => window.open(exercise.videoUrl, '_blank')}
                      >
                        <Play className="w-4 h-4 inline-block mr-1" />
                        Watch Video
                      </button>
                    )}
                  </div>
                  <button
                    onClick={() => handleDeleteExercise(exercise.id)}
                    className="text-red-500 hover:text-red-700 transition-colors mt-2"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleAddExercise}
            className="w-full mt-3 border-2 border-dashed border-gray-300 rounded-xl py-3 flex items-center justify-center gap-2 text-gray-600 hover:border-[#FFD000] hover:text-[#FFD000] transition-colors bg-white"
          >
            <Plus className="w-5 h-5" />
            <span>Add Exercise</span>
          </button>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-3">Workout Notes</h3>
          <textarea
            value={workoutNotes}
            onChange={(e) => setWorkoutNotes(e.target.value)}
            className="w-full bg-white rounded-xl px-4 py-3 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-[#FFD000] resize-none shadow-sm"
            placeholder="Add notes about this workout..."
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => navigate(-1)}
            className="flex-1 bg-gray-100 text-black rounded-xl py-3 hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 bg-[#FFD000] text-black rounded-xl py-3 hover:bg-[#FFD000]/90 transition-colors font-medium"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}