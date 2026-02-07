import { useParams, useNavigate, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import logo from 'figma:asset/6715fa8a90369e65d79802402e0679daa2d685be.png';
import { WorkoutCard } from '../../components/WorkoutCard';
import { getCurrentWeekDates, isoToDisplayDate } from '../../utils/helpers';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { subscribeToWorkoutsInRange, setRestDay as firestoreSetRestDay } from '../../lib/workoutService';

interface AthleteProfile {
  id: string;
  name: string;
  email: string;
  age: number | null;
  gender: string | null;
  weight: string | null;
  height: string | null;
  streak: number;
  workoutsCompleted: number;
  workoutCompletionRate: number;
  isArchived: boolean;
}

interface ScheduleDay {
  date: string;       // ISO format
  day: string;
  dateObj: Date;
  workout: string | null;
  completed: boolean;
  exercises: Array<{ name: string; sets: string }>;
  isRestDay?: boolean;
}

export function AthleteDetail() {
  const { athleteId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const routeState = location.state as Partial<AthleteProfile> | null;

  const [athlete, setAthlete] = useState<AthleteProfile | null>(
    routeState?.name ? (routeState as AthleteProfile) : null
  );
  const [loading, setLoading] = useState(!routeState?.name);

  // Generate 7-day week schedule (starts empty, populated by Firestore)
  const [schedule, setSchedule] = useState<ScheduleDay[]>(() => {
    return getCurrentWeekDates().map(({ date, day, dateObj }) => ({
      date,
      day,
      dateObj,
      workout: null,
      completed: false,
      exercises: [],
    }));
  });

  // Fetch athlete profile
  useEffect(() => {
    if (!athleteId) {
      setLoading(false);
      return;
    }
    const fetchAthlete = async () => {
      const snap = await getDoc(doc(db, 'users', athleteId));
      if (snap.exists()) {
        const data = snap.data();
        setAthlete({
          id: snap.id,
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          age: data.age ?? null,
          gender: data.gender ?? null,
          weight: data.weight ?? null,
          height: data.height ?? null,
          streak: data.streak ?? 0,
          workoutsCompleted: data.workoutsCompleted ?? 0,
          workoutCompletionRate: data.workoutCompletionRate ?? 0,
          isArchived: data.isArchived ?? false,
        });
      }
      setLoading(false);
    };
    fetchAthlete();
  }, [athleteId]);

  // Subscribe to workouts for this week in real-time
  useEffect(() => {
    if (!athleteId) return;

    const weekDates = getCurrentWeekDates();
    const startDate = weekDates[0].date;
    const endDate = weekDates[6].date;

    const unsubscribe = subscribeToWorkoutsInRange(
      athleteId,
      startDate,
      endDate,
      (workoutMap) => {
        setSchedule(weekDates.map(({ date, day, dateObj }) => {
          const workout = workoutMap.get(date);
          if (workout) {
            return {
              date,
              day,
              dateObj,
              workout: workout.isRestDay ? 'Rest day' : (workout.exercises.length > 0 ? 'Workout' : null),
              completed: workout.completed,
              exercises: workout.exercises.map(ex => ({ name: ex.name, sets: ex.sets })),
              isRestDay: workout.isRestDay,
            };
          }
          return { date, day, dateObj, workout: null, completed: false, exercises: [] };
        }));
      }
    );
    return unsubscribe;
  }, [athleteId]);

  const handleWorkoutClick = (workout: ScheduleDay) => {
    if (workout.workout === 'Rest day' || athlete?.isArchived) return;
    navigate(`/coach/workout/${workout.date}`, {
      state: {
        workoutDate: workout.date,
        workoutDay: workout.day,
        athleteId,
      },
    });
  };

  const handleAddWorkout = (workout: ScheduleDay, e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/coach/workout/${workout.date}`, {
      state: {
        workoutDate: workout.date,
        workoutDay: workout.day,
        athleteId,
      },
    });
  };

  const handleSetRestDay = async (workout: ScheduleDay, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!athleteId) return;
    const isCurrentlyRestDay = workout.workout === 'Rest day';
    await firestoreSetRestDay(athleteId, workout.date, !isCurrentlyRestDay);
  };

  if (loading) return null;

  if (!athlete) {
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
          onClick={() => navigate('/coach')}
          className="text-white mb-4 hover:text-[#FFD000] transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <img src={logo} alt="SE Fitness" className="h-10 w-auto mb-3" />
        <h1 className="text-xl mb-1 font-semibold">{athlete.name}</h1>
        <p className="text-gray-400 text-sm">{athlete.email}</p>
      </div>

      {/* Stats Cards */}
      <div className="px-6 -mt-4 mb-6 grid grid-cols-3 gap-3">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="text-2xl mb-1">{athlete.workoutsCompleted}</div>
          <div className="text-xs text-gray-500">Workouts</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="text-2xl mb-1">{athlete.workoutCompletionRate}%</div>
          <div className="text-xs text-gray-500">Completion</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="text-2xl mb-1">{athlete.streak}</div>
          <div className="text-xs text-gray-500">Day Streak</div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="px-6 mb-6">
        <h3 className="text-lg font-semibold mb-3">Personal Information</h3>
        <div className="bg-white rounded-xl shadow-sm divide-y divide-gray-100">
          <div className="p-4 flex justify-between">
            <span className="text-gray-600">Age</span>
            <span className="text-gray-900">{athlete.age ?? '—'}</span>
          </div>
          <div className="p-4 flex justify-between">
            <span className="text-gray-600">Gender</span>
            <span className="text-gray-900">{athlete.gender ?? '—'}</span>
          </div>
          <div className="p-4 flex justify-between">
            <span className="text-gray-600">Weight</span>
            <span className="text-gray-900">{athlete.weight ?? '—'}</span>
          </div>
          <div className="p-4 flex justify-between">
            <span className="text-gray-600">Height</span>
            <span className="text-gray-900">{athlete.height ?? '—'}</span>
          </div>
        </div>
      </div>

      {/* Weekly Schedule */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold">This Week's Schedule</h3>
          <button
            onClick={() => navigate(`/coach/athlete/${athleteId}/workouts`, { state: { athleteName: athlete.name, isArchived: athlete.isArchived } })}
            className="text-[#FFD000] hover:underline"
          >
            View All
          </button>
        </div>
        <div className="space-y-3">
          {schedule.map((workout, idx) => (
            <WorkoutCard
              key={idx}
              date={isoToDisplayDate(workout.date)}
              day={workout.day}
              workout={workout.workout}
              completed={workout.completed}
              exercises={workout.exercises}
              onClick={!athlete.isArchived ? () => handleWorkoutClick(workout) : undefined}
              onAddWorkout={!athlete.isArchived ? (e) => handleAddWorkout(workout, e) : undefined}
              onSetRestDay={!athlete.isArchived ? (e) => handleSetRestDay(workout, e) : undefined}
              showActions={!athlete.isArchived}
            />
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 grid grid-cols-2 gap-3">
        <button
          onClick={() => navigate(`/coach/athlete/${athleteId}/goals`, { state: { athleteName: athlete.name } })}
          className="bg-white rounded-xl p-4 shadow-sm hover:bg-gray-50 transition-colors"
        >
          <div className="text-left">
            <div className="text-lg font-semibold mb-1">Goals</div>
            <div className="text-xs text-gray-500">View & manage goals</div>
          </div>
        </button>
        <button
          onClick={() => navigate(`/coach/athlete/${athleteId}/documents`, { state: { athleteName: athlete.name } })}
          className="bg-white rounded-xl p-4 shadow-sm hover:bg-gray-50 transition-colors"
        >
          <div className="text-left">
            <div className="text-lg font-semibold mb-1">Documents</div>
            <div className="text-xs text-gray-500">View & upload files</div>
          </div>
        </button>
      </div>
    </div>
  );
}
