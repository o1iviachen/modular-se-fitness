import { useState } from 'react';
import { X, ChevronRight, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router';

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

const mockAthletes = [
  { id: 1, name: 'John Doe', activeWorkouts: 4 },
  { id: 2, name: 'Jane Smith', activeWorkouts: 3 },
  { id: 3, name: 'Mike Johnson', activeWorkouts: 5 },
  { id: 4, name: 'Sarah Williams', activeWorkouts: 2 }
];

const mockWorkouts: { [key: number]: any[] } = {
  1: [
    { id: 1, name: 'Lower Body Strength', date: 'Feb 5, 2026', day: 'Monday', exerciseCount: 6 },
    { id: 2, name: 'Upper Body Power', date: 'Feb 6, 2026', day: 'Tuesday', exerciseCount: 5 },
    { id: 3, name: 'Leg Day', date: 'Feb 8, 2026', day: 'Thursday', exerciseCount: 7 },
    { id: 4, name: 'Full Body', date: 'Feb 9, 2026', day: 'Friday', exerciseCount: 8 }
  ],
  2: [
    { id: 5, name: 'Strength Training', date: 'Feb 5, 2026', day: 'Monday', exerciseCount: 5 },
    { id: 6, name: 'Cardio & Core', date: 'Feb 7, 2026', day: 'Wednesday', exerciseCount: 4 },
    { id: 7, name: 'Upper Body', date: 'Feb 9, 2026', day: 'Friday', exerciseCount: 6 }
  ],
  3: [
    { id: 8, name: 'Power Training', date: 'Feb 4, 2026', day: 'Sunday', exerciseCount: 7 },
    { id: 9, name: 'Olympic Lifts', date: 'Feb 6, 2026', day: 'Tuesday', exerciseCount: 4 },
    { id: 10, name: 'Accessory Work', date: 'Feb 7, 2026', day: 'Wednesday', exerciseCount: 5 },
    { id: 11, name: 'Max Effort Day', date: 'Feb 9, 2026', day: 'Friday', exerciseCount: 6 },
    { id: 12, name: 'Recovery Session', date: 'Feb 10, 2026', day: 'Saturday', exerciseCount: 3 }
  ],
  4: [
    { id: 13, name: 'Full Body Workout', date: 'Feb 6, 2026', day: 'Tuesday', exerciseCount: 8 },
    { id: 14, name: 'Active Recovery', date: 'Feb 9, 2026', day: 'Friday', exerciseCount: 4 }
  ]
};

export function AssignExerciseModal({ exercise, onClose }: AssignExerciseModalProps) {
  const navigate = useNavigate();
  const [step, setStep] = useState<'select-athlete' | 'select-workout'>('select-athlete');
  const [selectedAthlete, setSelectedAthlete] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAthletes = mockAthletes.filter(a => a.name.toLowerCase().includes(searchQuery.toLowerCase()));
  const athleteName = selectedAthlete ? mockAthletes.find(a => a.id === selectedAthlete)?.name : '';
  const workouts = selectedAthlete ? mockWorkouts[selectedAthlete] || [] : [];

  const handleSelectAthlete = (id: number) => {
    setSelectedAthlete(id);
    setStep('select-workout');
  };

  const handleSelectWorkout = (workout: any) => {
    navigate(`/coach/workout/${workout.id}`, {
      state: {
        workoutName: workout.name,
        workoutDate: workout.date,
        workoutDay: workout.day,
        athleteId: selectedAthlete,
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

  const handleBack = () => {
    setStep('select-athlete');
    setSelectedAthlete(null);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              {step === 'select-workout' && (
                <button onClick={handleBack} className="text-sm text-gray-600 hover:text-black mb-2">
                  ← Back to Athletes
                </button>
              )}
              <h2 className="text-xl font-semibold">
                {step === 'select-athlete' ? 'Select Athlete' : `Select Workout for ${athleteName}`}
              </h2>
              <p className="text-sm text-gray-600 mt-1">Assign "{exercise.name}" to a workout</p>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {step === 'select-athlete' && (
            <div className="relative mt-4">
              <input
                type="text"
                placeholder="Search athletes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-4 py-2 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
              />
            </div>
          )}
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {step === 'select-athlete' ? (
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
                        <p className="text-sm text-gray-600">{athlete.activeWorkouts} active workouts</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                  </button>
                ))
              )}
            </div>
          ) : (
            <div className="space-y-3">
              {workouts.length === 0 ? (
                <div className="text-center py-8 text-gray-500">No workouts found for this athlete</div>
              ) : (
                workouts.map((workout) => (
                  <button
                    key={workout.id}
                    onClick={() => handleSelectWorkout(workout)}
                    className="w-full bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3 flex-1 text-left">
                        <div className="w-10 h-10 bg-[#FFD000] rounded-lg flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-5 h-5 text-black" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium mb-1">{workout.name}</h4>
                          <p className="text-sm text-gray-600">{workout.day} • {workout.date}</p>
                          <p className="text-xs text-gray-500 mt-1">{workout.exerciseCount} exercises</p>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 flex-shrink-0 mt-2" />
                    </div>
                  </button>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
