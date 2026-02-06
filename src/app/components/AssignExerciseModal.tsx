import { useState } from 'react';
import { X, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router';
import { getActiveAthletes, getAthleteWorkouts } from '../data/mockData';

interface Exercise {
  id: number;
  name: string;
  source: string;
  category: string;
  equipment: string;
  videoUrl?: string;
}

interface AssignExerciseModalProps {
  exercise: Exercise;
  onClose: () => void;
}

export function AssignExerciseModal({ exercise, onClose }: AssignExerciseModalProps) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAthleteId, setSelectedAthleteId] = useState<number | null>(null);

  const athletes = getActiveAthletes();
  const filteredAthletes = athletes.filter(a => a.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleSelectAthlete = (athleteId: number) => {
    setSelectedAthleteId(athleteId);
  };

  const handleBack = () => {
    setSelectedAthleteId(null);
    setSearchQuery('');
  };

  const handleSelectWorkout = (workout: any, athleteId: number) => {
    // Navigate to workout detail with the exercise to add
    navigate(`/coach/workout/${workout.date}`, {
      state: {
        workoutName: workout.workout || 'New Workout',
        workoutDate: workout.date,
        workoutDay: workout.day,
        athleteId: athleteId,
        exerciseToAdd: {
          id: Date.now(),
          name: exercise.name,
          sets: '3',
          reps: '10',
          weight: '',
          notes: '',
          videoUrl: exercise.videoUrl
        }
      }
    });
    onClose();
  };

  // Show athlete selection screen
  if (!selectedAthleteId) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h2 className="text-xl font-semibold">Select Athlete</h2>
                <p className="text-sm text-gray-600 mt-1">Assign "{exercise.name}" to an athlete</p>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="relative mt-4">
              <input
                type="text"
                placeholder="Search athletes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-4 py-2 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-3">
              {filteredAthletes.length === 0 ? (
                <div className="text-center py-8 text-gray-500">No athletes found</div>
              ) : (
                filteredAthletes.map((athlete) => (
                  <button
                    key={athlete.id}
                    onClick={() => handleSelectAthlete(athlete.id)}
                    className="w-full bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#FFD000] rounded-full flex items-center justify-center text-black font-medium">
                        {athlete.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="text-left">
                        <h4 className="font-medium">{athlete.name}</h4>
                        <p className="text-sm text-gray-600">{athlete.email}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show workout selection screen
  const selectedAthlete = athletes.find(a => a.id === selectedAthleteId);
  const workouts = getAthleteWorkouts(selectedAthleteId);
  // Only show workouts that aren't rest days and have dates
  const availableWorkouts = workouts.filter(w => w.workout !== 'Rest day' && w.date);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <button 
                onClick={handleBack}
                className="text-sm text-gray-600 hover:text-gray-900 mb-2 flex items-center gap-1"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                Back to Athletes
              </button>
              <h2 className="text-xl font-semibold">Select Workout</h2>
              <p className="text-sm text-gray-600 mt-1">
                Add "{exercise.name}" to {selectedAthlete?.name}'s workout
              </p>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-3">
            {availableWorkouts.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No workouts available. Create a workout first.
              </div>
            ) : (
              availableWorkouts.map((workout, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectWorkout(workout, selectedAthleteId)}
                  className="w-full bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors flex items-center justify-between group"
                >
                  <div className="text-left">
                    <h4 className="font-medium">{workout.day} <span className="text-xs">·</span> {workout.date}</h4>
                    {workout.exercises && workout.exercises.length > 0 && (
                      <p className="text-xs text-gray-500 mt-1">
                        {workout.exercises.length} exercise{workout.exercises.length !== 1 ? 's' : ''}
                      </p>
                    )}
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                </button>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}