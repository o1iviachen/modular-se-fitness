import { useAuth } from '../../context/AuthContext';
import { ChevronRight, Check, X, ChevronLeft, CalendarX } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { usePageState } from '../../hooks/usePageState';
import logo from 'figma:asset/6715fa8a90369e65d79802402e0679daa2d685be.png';
import { subscribeToAllWorkouts } from '../../lib/workoutService';
import { isoToDisplayDate, isoToDayName, getTodayISO, parseISODate, formatMonthYear, getPreviousMonth, getNextMonth, isSameMonth, filterWorkoutsByMonth, getExerciseLabels } from '../../utils/helpers';

// Helper to get time-based greeting
const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
};

interface DisplayWorkout {
  date: string;       // ISO format
  day: string;
  isRestDay: boolean;
  completed: boolean;
  exercises: Array<{ name: string; sets: string; supersetWithPrev?: boolean }>;
}

function ExerciseList({ exercises, onClickDate }: { exercises: DisplayWorkout['exercises']; onClickDate: () => void }) {
  const labels = getExerciseLabels(exercises);
  return (
    <div className="divide-y divide-gray-100">
      {exercises.map((exercise, idx) => (
        <button
          key={idx}
          onClick={onClickDate}
          className={`w-full p-4 hover:bg-gray-50 transition-colors text-left flex items-center gap-3 ${exercise.supersetWithPrev ? 'border-l-4 border-[#FFD000]' : ''}`}
        >
          <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-sm font-medium text-gray-700">
            {labels[idx]}
          </div>
          <div className="text-gray-700">{exercise.name}</div>
        </button>
      ))}
    </div>
  );
}

export function AthleteHome() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = usePageState<'upcoming' | 'past'>('athlete-home-tab', 'upcoming');
  const [selectedMonthString, setSelectedMonthString] = usePageState('athlete-home-month', getTodayISO());
  const [allWorkouts, setAllWorkouts] = useState<DisplayWorkout[]>([]);

  // Convert string back to Date
  const selectedMonth = new Date(selectedMonthString);
  const setSelectedMonth = (date: Date) => setSelectedMonthString(date.toISOString().split('T')[0]);

  const todayISO = getTodayISO();
  const currentMonth = parseISODate(todayISO);

  // Subscribe to all workouts from Firestore
  useEffect(() => {
    if (!user?.id) return;

    const unsubscribe = subscribeToAllWorkouts(user.id, (workoutDocs) => {
      const display: DisplayWorkout[] = workoutDocs.map((w) => ({
        date: w.date,
        day: w.date === todayISO ? 'Today' : isoToDayName(w.date),
        isRestDay: w.isRestDay,
        completed: w.completed,
        exercises: w.exercises.map(ex => ({ name: ex.name, sets: ex.sets, supersetWithPrev: ex.supersetWithPrev })),
      }));
      setAllWorkouts(display);
    });

    return unsubscribe;
  }, [user?.id]);

  const isCurrentMonth = isSameMonth(selectedMonth, currentMonth);

  // Filter workouts
  const todayWorkout = allWorkouts.find(w => w.date === todayISO);
  const workoutsInSelectedMonth = filterWorkoutsByMonth(allWorkouts, selectedMonth);

  const upcomingWorkouts = allWorkouts.filter(w => w.date > todayISO);
  const pastWorkouts = workoutsInSelectedMonth.filter(w => w.date < todayISO);

  const displayWorkouts = activeTab === 'upcoming' ? upcomingWorkouts : pastWorkouts;

  return (
    <div className="min-h-full bg-gray-50 pb-6">
      {/* Header */}
      <div className={`bg-black text-white px-6 pt-12 ${activeTab === 'upcoming' ? 'pb-12' : 'pb-6'}`}>
        <div className="flex items-center justify-center gap-3 mb-6">
          <img src={logo} alt="SE Fitness" className="h-8 w-auto" />
          <h1 className="text-xl font-semibold">{getGreeting()}, {user?.firstName}</h1>
        </div>

        {/* Toggle with border and background - smaller size */}
        <div className="bg-gray-900 p-0.5 rounded-lg flex gap-0.5 max-w-[280px] mx-auto">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`flex-1 py-2 px-3 rounded-md text-center transition-all text-sm ${
              activeTab === 'upcoming'
                ? 'bg-[#FFD000] text-black font-medium'
                : 'text-gray-400'
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`flex-1 py-2 px-3 rounded-md text-center transition-all text-sm ${
              activeTab === 'past'
                ? 'bg-[#FFD000] text-black font-medium'
                : 'text-gray-400'
            }`}
          >
            Past
          </button>
        </div>
      </div>

      {/* Month Navigation - Only for Past Workouts */}
      {activeTab === 'past' && (
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setSelectedMonth(getPreviousMonth(selectedMonth))}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          <h2 className="text-lg font-medium text-gray-900">
            {formatMonthYear(selectedMonth)}
          </h2>

          <button
            onClick={() => setSelectedMonth(getNextMonth(selectedMonth))}
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
      )}

      {activeTab === 'upcoming' ? (
        <>
          {/* Today's Workout Card */}
          {todayWorkout && (
            <div className="px-6 -mt-8">
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                {/* Date Header */}
                <button
                  onClick={() => !todayWorkout.isRestDay && navigate(`/athlete/workout/${todayWorkout.date}`)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-[#FFD000] border-b border-gray-200 hover:bg-[#FFD000]/90 transition-colors"
                >
                  <div className="text-sm text-black">
                    {isoToDisplayDate(todayWorkout.date)} <span className="text-xs">·</span> Today
                  </div>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${todayWorkout.completed ? 'bg-green-500' : 'bg-gray-400'}`}>
                    <Check className="w-4 h-4 text-white" />
                  </div>
                </button>

                {/* Workout Content */}
                {todayWorkout.isRestDay ? (
                  <div className="p-4 text-gray-600">Rest day</div>
                ) : (
                  <ExerciseList exercises={todayWorkout.exercises} onClickDate={() => navigate(`/athlete/workout/${todayWorkout.date}`)} />
                )}
              </div>
            </div>
          )}

          {/* Upcoming Workouts */}
          <div className="px-6 mt-6">
            <h3 className="text-lg font-semibold mb-4">Upcoming Workouts</h3>
            {!todayWorkout && displayWorkouts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <CalendarX className="w-8 h-8 text-gray-300" />
                </div>
                <p className="text-gray-400 text-sm">No workouts scheduled</p>
              </div>
            ) : displayWorkouts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12">
                <p className="text-gray-400 text-sm">No upcoming workouts</p>
              </div>
            ) : (
            <div className="space-y-3">
              {displayWorkouts.map((workout) => (
                <div key={workout.date} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  {/* Date Header */}
                  <button
                    onClick={() => !workout.isRestDay && navigate(`/athlete/workout/${workout.date}`)}
                    className="w-full flex items-center justify-between px-4 py-3 bg-gray-100 border-b border-gray-200 hover:bg-gray-200 transition-colors"
                  >
                    <div className="text-sm text-gray-700">
                      {isoToDisplayDate(workout.date)} <span className="text-xs">·</span> {workout.day}
                    </div>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${workout.completed ? 'bg-green-500' : 'bg-gray-400'}`}>
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </button>

                  {/* Workout Content */}
                  {workout.isRestDay ? (
                    <div className="p-4 text-gray-600">Rest day</div>
                  ) : (
                    <ExerciseList exercises={workout.exercises} onClickDate={() => navigate(`/athlete/workout/${workout.date}`)} />
                  )}
                </div>
              ))}
            </div>
            )}
          </div>
        </>
      ) : (
        <>
          {/* Past Workouts */}
          <div className="px-6 mt-6 space-y-4">
            {displayWorkouts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <CalendarX className="w-8 h-8 text-gray-300" />
                </div>
                <p className="text-gray-400 text-sm">No workouts this month</p>
              </div>
            ) : displayWorkouts.map((workout) => (
              <div key={workout.date} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                {/* Date Header with Completion Icon */}
                <button
                  onClick={() => !workout.isRestDay && navigate(`/athlete/workout/${workout.date}`)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-gray-100 border-b border-gray-200 hover:bg-gray-200 transition-colors"
                >
                  <div className="text-sm text-gray-700">
                    {isoToDisplayDate(workout.date)} <span className="text-xs">·</span> {workout.day}
                  </div>
                  {workout.completed ? (
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                      <X className="w-4 h-4 text-white" />
                    </div>
                  )}
                </button>

                {/* Workout Content */}
                {workout.isRestDay ? (
                  <div className="p-4 text-gray-600">Rest day</div>
                ) : (
                  <ExerciseList exercises={workout.exercises} onClickDate={() => navigate(`/athlete/workout/${workout.date}`)} />
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
