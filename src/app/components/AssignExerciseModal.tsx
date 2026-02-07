import { useState, useEffect } from 'react';
import { X, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { subscribeToWorkoutsInRange, WorkoutDoc } from '../lib/workoutService';
import { getCurrentWeekDates, isoToDisplayDate } from '../utils/helpers';

interface Exercise {
  id: number;
  name: string;
  source: string;
  category: string;
  equipment: string;
  videoUrl?: string;
}

interface FirestoreAthlete {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface AssignExerciseModalProps {
  exercise: Exercise;
  onClose: () => void;
}

export function AssignExerciseModal({ exercise, onClose }: AssignExerciseModalProps) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAthleteId, setSelectedAthleteId] = useState<string | null>(null);
  const [athletes, setAthletes] = useState<FirestoreAthlete[]>([]);
  const [weekWorkouts, setWeekWorkouts] = useState<Map<string, WorkoutDoc>>(new Map());
  const [loading, setLoading] = useState(true);

  // Fetch coach's athletes from Firestore
  useEffect(() => {
    if (!user?.id) return;

    const fetchAthletes = async () => {
      const snap = await getDoc(doc(db, 'users', user.id));
      if (snap.exists()) {
        const data = snap.data();
        const athletesMap = data.athletes || {};
        const list: FirestoreAthlete[] = Object.entries(athletesMap).map(([uid, info]: [string, any]) => ({
          id: uid,
          firstName: info.firstName,
          lastName: info.lastName,
          email: info.email,
        }));
        setAthletes(list);
      }
      setLoading(false);
    };

    fetchAthletes();
  }, [user?.id]);

  // Subscribe to selected athlete's current week workouts
  useEffect(() => {
    if (!selectedAthleteId) return;

    const weekDates = getCurrentWeekDates();
    const startDate = weekDates[0].date;
    const endDate = weekDates[weekDates.length - 1].date;

    const unsubscribe = subscribeToWorkoutsInRange(selectedAthleteId, startDate, endDate, (workoutsMap) => {
      setWeekWorkouts(workoutsMap);
    });

    return unsubscribe;
  }, [selectedAthleteId]);

  const filteredAthletes = athletes.filter(a =>
    `${a.firstName} ${a.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectAthlete = (athleteId: string) => {
    setSelectedAthleteId(athleteId);
  };

  const handleBack = () => {
    setSelectedAthleteId(null);
    setSearchQuery('');
    setWeekWorkouts(new Map());
  };

  const handleSelectDate = (dateISO: string, dayName: string) => {
    navigate(`/coach/workout/${dateISO}`, {
      state: {
        workoutDate: dateISO,
        workoutDay: dayName,
        athleteId: selectedAthleteId,
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
              {loading ? (
                <div className="text-center py-8 text-gray-500">Loading athletes...</div>
              ) : filteredAthletes.length === 0 ? (
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
                        {athlete.firstName[0]}{athlete.lastName[0]}
                      </div>
                      <div className="text-left">
                        <h4 className="font-medium">{athlete.firstName} {athlete.lastName}</h4>
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

  // Show workout date selection screen
  const selectedAthlete = athletes.find(a => a.id === selectedAthleteId);
  const weekDates = getCurrentWeekDates();

  // Filter out rest days from the available dates
  const availableDates = weekDates.filter(wd => {
    const existing = weekWorkouts.get(wd.date);
    return !existing?.isRestDay;
  });

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
                Add "{exercise.name}" to {selectedAthlete?.firstName} {selectedAthlete?.lastName}'s workout
              </p>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-3">
            {availableDates.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No available dates this week.
              </div>
            ) : (
              availableDates.map((wd) => {
                const existing = weekWorkouts.get(wd.date);
                const exerciseCount = existing?.exercises?.length || 0;
                return (
                  <button
                    key={wd.date}
                    onClick={() => handleSelectDate(wd.date, wd.day)}
                    className="w-full bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors flex items-center justify-between group"
                  >
                    <div className="text-left">
                      <h4 className="font-medium">{wd.day} <span className="text-xs">·</span> {isoToDisplayDate(wd.date)}</h4>
                      {exerciseCount > 0 && (
                        <p className="text-xs text-gray-500 mt-1">
                          {exerciseCount} exercise{exerciseCount !== 1 ? 's' : ''}
                        </p>
                      )}
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                  </button>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
