import { useParams, useNavigate, useLocation } from 'react-router';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import logo from 'figma:asset/6715fa8a90369e65d79802402e0679daa2d685be.png';
import { formatMonthYear, isSameMonth, getPreviousMonth, getNextMonth, filterWorkoutsByMonth, isoToDisplayDate, isoToDayName } from '../../utils/helpers';
import { WorkoutCard } from '../../components/WorkoutCard';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { subscribeToAllWorkouts, setRestDay as firestoreSetRestDay, WorkoutDoc } from '../../lib/workoutService';

interface DisplayWorkout {
  date: string;       // ISO format
  day: string;
  workout: string | null;
  completed: boolean;
  exercises: Array<{ name: string; sets: string }>;
  isRestDay?: boolean;
}

export function AthleteWorkouts() {
  const { athleteId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const routeState = location.state as { athleteName?: string; isArchived?: boolean } | null;

  const [athleteName, setAthleteName] = useState(routeState?.athleteName ?? '');
  const [isArchived, setIsArchived] = useState(routeState?.isArchived ?? false);
  const [loading, setLoading] = useState(!routeState?.athleteName);
  const [allWorkouts, setAllWorkouts] = useState<DisplayWorkout[]>([]);

  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const currentMonth = new Date();

  // Fetch athlete name if not passed via route state
  useEffect(() => {
    if (!athleteId || routeState?.athleteName) return;
    const fetchAthlete = async () => {
      const snap = await getDoc(doc(db, 'users', athleteId));
      if (snap.exists()) {
        const data = snap.data();
        setAthleteName(`${data.firstName} ${data.lastName}`);
        setIsArchived(data.isArchived ?? false);
      }
      setLoading(false);
    };
    fetchAthlete();
  }, [athleteId, routeState]);

  // Subscribe to all workouts from Firestore in real-time
  useEffect(() => {
    if (!athleteId) return;

    const unsubscribe = subscribeToAllWorkouts(athleteId, (workoutDocs) => {
      const display: DisplayWorkout[] = workoutDocs.map((w) => ({
        date: w.date,
        day: isoToDayName(w.date),
        workout: w.isRestDay ? 'Rest day' : (w.exercises.length > 0 ? 'Workout' : null),
        completed: w.completed,
        exercises: w.exercises.map(ex => ({ name: ex.name, sets: ex.sets })),
        isRestDay: w.isRestDay,
      }));
      setAllWorkouts(display);
    });

    return unsubscribe;
  }, [athleteId]);

  const workoutsInMonth = filterWorkoutsByMonth(allWorkouts, selectedMonth);
  const isCurrentMonth = isSameMonth(selectedMonth, currentMonth);

  const goToPreviousMonth = () => setSelectedMonth(getPreviousMonth(selectedMonth));
  const goToNextMonth = () => {
    if (!isCurrentMonth) {
      setSelectedMonth(getNextMonth(selectedMonth));
    }
  };

  const handleWorkoutClick = (workout: DisplayWorkout) => {
    if (workout.workout === 'Rest day' || isArchived) return;
    navigate(`/coach/workout/${workout.date}`, {
      state: {
        workoutDate: workout.date,
        workoutDay: workout.day,
        athleteId,
      },
    });
  };

  const handleAddWorkout = (workout: DisplayWorkout, e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/coach/workout/${workout.date}`, {
      state: {
        workoutDate: workout.date,
        workoutDay: workout.day,
        athleteId,
      },
    });
  };

  const handleSetRestDay = async (workout: DisplayWorkout, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!athleteId) return;
    const isCurrentlyRestDay = workout.workout === 'Rest day';
    await firestoreSetRestDay(athleteId, workout.date, !isCurrentlyRestDay);
  };

  if (loading) return null;

  if (!athleteName) {
    return (
      <div className="min-h-full bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Athlete not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-gray-50 pb-6">
      {/* Header */}
      <div className="bg-black text-white px-6 py-8">
        <button
          onClick={() => navigate(-1)}
          className="text-white mb-4 hover:text-[#FFD000] transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <img src={logo} alt="SE Fitness" className="h-10 w-auto mb-3" />
        <h1 className="text-xl mb-1 font-semibold">{athleteName}'s Workouts</h1>
        <p className="text-gray-400 text-sm">View all assigned workouts</p>
      </div>

      {/* Month Navigation */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <button
          onClick={goToPreviousMonth}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        <h2 className="text-lg font-medium text-gray-900">
          {formatMonthYear(selectedMonth)}
        </h2>

        <button
          onClick={goToNextMonth}
          disabled={isCurrentMonth}
          className={`p-2 rounded-lg transition-colors ${
            isCurrentMonth
              ? 'text-gray-300 cursor-not-allowed'
              : 'hover:bg-gray-100 text-gray-700'
          }`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Workouts List */}
      <div className="px-6 mt-6 space-y-3">
        {workoutsInMonth.length > 0 ? (
          workoutsInMonth.map((workout: DisplayWorkout, idx: number) => (
            <WorkoutCard
              key={idx}
              date={isoToDisplayDate(workout.date)}
              day={workout.day}
              workout={workout.workout}
              completed={workout.completed}
              exercises={workout.exercises}
              onClick={!isArchived ? () => handleWorkoutClick(workout) : undefined}
              onAddWorkout={!isArchived ? (e) => handleAddWorkout(workout, e) : undefined}
              onSetRestDay={!isArchived ? (e) => handleSetRestDay(workout, e) : undefined}
              showActions={!isArchived}
            />
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No workouts for this month</p>
          </div>
        )}
      </div>
    </div>
  );
}
