import { useParams, useNavigate, useLocation } from 'react-router';
import { useState, useEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';

import { WorkoutCard } from '../../components/WorkoutCard';
import { getCurrentWeekDates, isoToDisplayDate, getTodayISO } from '../../utils/helpers';
import { doc, getDoc, updateDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { subscribeToWorkoutsInRange, subscribeToAllWorkouts, setRestDay as firestoreSetRestDay, WorkoutDoc } from '../../lib/workoutService';

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
  exercises: Array<{ name: string; sets: string; supersetWithPrev?: boolean }>;
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

  // Stats computed from real workout data
  const [stats, setStats] = useState({ workoutsCompleted: 0, workoutCompletionRate: 0, streak: 0, lastWorkoutDate: '' });
  const prevStatsRef = useRef('');

  // Subscribe to ALL workouts to compute stats
  useEffect(() => {
    if (!athleteId) return;
    return subscribeToAllWorkouts(athleteId, (workouts: WorkoutDoc[]) => {
      const todayISO = getTodayISO();
      // Only count non-rest-day workouts that are on or before today
      const pastWorkouts = workouts.filter(w => w.date <= todayISO && !w.isRestDay);
      const completedCount = pastWorkouts.filter(w => w.completed).length;
      const totalCount = pastWorkouts.length;
      const rate = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

      // Streak: consecutive completed workouts going backward from most recent
      // Only counts assigned workout days (ignores calendar gaps and rest days)
      const pastAssigned = workouts
        .filter(w => w.date <= todayISO && !w.isRestDay)
        .sort((a, b) => b.date.localeCompare(a.date)); // most recent first
      let streak = 0;
      for (const w of pastAssigned) {
        if (w.completed) streak++;
        else break;
      }

      // Last workout date: most recent completed non-rest-day workout
      const lastCompleted = pastAssigned.find(w => w.completed);
      const lastWorkoutDate = lastCompleted?.date ?? '';

      setStats({ workoutsCompleted: completedCount, workoutCompletionRate: rate, streak, lastWorkoutDate });
    });
  }, [athleteId]);

  // Persist computed stats to user profile so CoachHome stays accurate
  useEffect(() => {
    if (!athleteId) return;
    const key = JSON.stringify(stats);
    if (key === prevStatsRef.current) return;
    prevStatsRef.current = key;
    const updates: Record<string, any> = {
      workoutsCompleted: stats.workoutsCompleted,
      workoutCompletionRate: stats.workoutCompletionRate,
      streak: stats.streak,
    };
    if (stats.lastWorkoutDate) {
      updates.lastWorkoutDate = Timestamp.fromDate(new Date(stats.lastWorkoutDate + 'T12:00:00'));
    }
    updateDoc(doc(db, 'users', athleteId), updates).catch(() => {});
  }, [athleteId, stats]);

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
              exercises: workout.exercises.map(ex => ({ name: ex.name, sets: ex.sets, supersetWithPrev: ex.supersetWithPrev })),
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
        <img src="/se-logo.png" alt="SE Fitness" className="h-10 w-auto mb-3" />
        <h1 className="text-xl mb-1 font-semibold">{athlete.name}</h1>
        <p className="text-gray-400 text-sm">{athlete.email}</p>
      </div>

      {/* Stats Cards */}
      <div className="px-6 -mt-4 mb-6 grid grid-cols-3 gap-3">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="text-2xl mb-1">{stats.workoutsCompleted}</div>
          <div className="text-xs text-gray-500">Workouts</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="text-2xl mb-1">{stats.workoutCompletionRate}%</div>
          <div className="text-xs text-gray-500">Completion</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="text-2xl mb-1">{stats.streak}</div>
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
            <span className="text-gray-900">{athlete.weight ? `${athlete.weight} kg` : '—'}</span>
          </div>
          <div className="p-4 flex justify-between">
            <span className="text-gray-600">Height</span>
            <span className="text-gray-900">{athlete.height ? `${athlete.height} cm` : '—'}</span>
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
          onClick={() => navigate(`/coach/athlete/${athleteId}/goals`, { state: { athleteName: athlete.name, isArchived: athlete.isArchived } })}
          className="bg-white rounded-xl p-4 shadow-sm hover:bg-gray-50 transition-colors"
        >
          <div className="text-left">
            <div className="text-lg font-semibold mb-1">Goals</div>
            <div className="text-xs text-gray-500">View and manage goals</div>
          </div>
        </button>
        <button
          onClick={() => navigate(`/coach/athlete/${athleteId}/documents`, { state: { athleteName: athlete.name, isArchived: athlete.isArchived } })}
          className="bg-white rounded-xl p-4 shadow-sm hover:bg-gray-50 transition-colors"
        >
          <div className="text-left">
            <div className="text-lg font-semibold mb-1">Documents</div>
            <div className="text-xs text-gray-500">View and upload files</div>
          </div>
        </button>
      </div>
    </div>
  );
}
