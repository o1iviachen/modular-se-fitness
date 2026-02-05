import { useAuth } from '../../context/AuthContext';
import { ChevronRight, Calendar, Check, X, ChevronLeft, Circle } from 'lucide-react';
import { useNavigate } from 'react-router';
import { usePageState } from '../../hooks/usePageState';
import logo from 'figma:asset/6715fa8a90369e65d79802402e0679daa2d685be.png';

// Mock workout data
const allWorkouts = [
  // Past workouts
  {
    id: 10,
    date: 'Feb 3, 2026',
    day: 'Monday',
    dateObj: new Date('2026-02-03'),
    title: 'Lower Body Strength',
    completed: true,
    exercises: [
      { name: 'Back Squats', sets: '4x8' },
      { name: 'Romanian Deadlifts', sets: '3x10' },
      { name: 'Leg Press', sets: '3x12' }
    ]
  },
  {
    id: 11,
    date: 'Feb 2, 2026',
    day: 'Sunday',
    dateObj: new Date('2026-02-02'),
    title: 'Active Recovery',
    completed: true,
    exercises: [
      { name: 'Light Yoga', sets: '30 min' },
      { name: 'Foam Rolling', sets: '15 min' }
    ]
  },
  {
    id: 12,
    date: 'Feb 1, 2026',
    day: 'Saturday',
    dateObj: new Date('2026-02-01'),
    title: 'Upper Body Power',
    completed: false,
    exercises: [
      { name: 'Bench Press', sets: '5x5' },
      { name: 'Rows', sets: '4x8' },
      { name: 'Dips', sets: '3x10' }
    ]
  },
  // Today - Feb 4
  {
    id: 1,
    date: 'Feb 4, 2026',
    day: 'Today',
    dateObj: new Date('2026-02-04'),
    title: 'Upper Body Strength',
    completed: false,
    exercises: [
      { name: 'Bench Press', sets: '4x8' },
      { name: 'Barbell Rows', sets: '4x8' },
      { name: 'Overhead Press', sets: '3x10' },
      { name: 'Pull-ups', sets: '3x8' }
    ]
  },
  // Future workouts
  {
    id: 2,
    date: 'Feb 5, 2026',
    day: 'Wednesday',
    dateObj: new Date('2026-02-05'),
    title: 'Lower Body Hypertrophy',
    completed: false,
    exercises: [
      { name: 'Moving Pogos', sets: '3x12' },
      { name: 'Lateral Moving Pogo Hops', sets: '3x10' },
      { name: 'A marches', sets: '3x20' },
      { name: 'Lateral Bound with Mini Bounce', sets: '3x8' },
      { name: 'Chin-Up', sets: '4x6' },
      { name: 'Barbell Bench Press', sets: '4x8' },
      { name: 'Wide Grip Seated Row', sets: '3x12' },
      { name: 'Poliquin Lateral Raise', sets: '3x15' }
    ]
  },
  {
    id: 3,
    date: 'Feb 6, 2026',
    day: 'Thursday',
    dateObj: new Date('2026-02-06'),
    title: 'Rest day',
    completed: false,
    exercises: []
  },
  {
    id: 4,
    date: 'Feb 7, 2026',
    day: 'Friday',
    dateObj: new Date('2026-02-07'),
    title: 'Core & Conditioning',
    completed: false,
    exercises: [
      { name: 'Planks', sets: '3x60s' },
      { name: 'Russian Twists', sets: '3x20' },
      { name: 'Burpees', sets: '4x15' }
    ]
  },
  {
    id: 5,
    date: 'Feb 8, 2026',
    day: 'Saturday',
    dateObj: new Date('2026-02-08'),
    title: 'Upper Body Power',
    completed: false,
    exercises: [
      { name: 'Overhead Press', sets: '5x5' },
      { name: 'Weighted Pull-ups', sets: '4x6' },
      { name: 'Close Grip Bench', sets: '3x8' }
    ]
  }
];

// Helper to get time-based greeting
const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
};

// Helper to check if a date is today
const isToday = (date: Date) => {
  const today = new Date('2026-02-04'); // Using Feb 4, 2026 as "today"
  return date.toDateString() === today.toDateString();
};

export function AthleteHome() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = usePageState<'upcoming' | 'past'>('athlete-home-tab', 'upcoming');
  const [selectedMonthString, setSelectedMonthString] = usePageState('athlete-home-month', '2026-02-04');
  
  // Convert string back to Date
  const selectedMonth = new Date(selectedMonthString);
  const setSelectedMonth = (date: Date) => setSelectedMonthString(date.toISOString().split('T')[0]);

  // Current month for comparison
  const currentMonth = new Date('2026-02-04');

  // Helper functions for month navigation
  const getMonthName = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const goToPreviousMonth = () => {
    const newMonth = new Date(selectedMonth);
    newMonth.setMonth(newMonth.getMonth() - 1);
    setSelectedMonth(newMonth);
  };

  const goToNextMonth = () => {
    const newMonth = new Date(selectedMonth);
    newMonth.setMonth(newMonth.getMonth() + 1);
    // Don't go beyond current month
    if (newMonth <= currentMonth) {
      setSelectedMonth(newMonth);
    }
  };

  const isCurrentMonth = () => {
    return selectedMonth.getMonth() === currentMonth.getMonth() && 
           selectedMonth.getFullYear() === currentMonth.getFullYear();
  };

  // Filter workouts based on active tab
  const today = new Date('2026-02-04');
  const todayWorkout = allWorkouts.find(w => isToday(w.dateObj));
  
  // Filter workouts by selected month (only for Past tab)
  const workoutsInSelectedMonth = allWorkouts.filter(w => {
    return w.dateObj.getMonth() === selectedMonth.getMonth() && 
           w.dateObj.getFullYear() === selectedMonth.getFullYear();
  });

  const upcomingWorkouts = allWorkouts.filter(w => w.dateObj > today);
  const pastWorkouts = workoutsInSelectedMonth.filter(w => w.dateObj < today);

  const displayWorkouts = activeTab === 'upcoming' ? upcomingWorkouts : pastWorkouts;

  return (
    <div className="min-h-full bg-gray-50 pb-6">
      {/* Header */}
      <div className={`bg-black text-white px-6 py-8 ${activeTab === 'upcoming' ? 'pb-12' : 'pb-6'}`}>
        <div className="flex items-center gap-3 mb-6">
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
            onClick={goToPreviousMonth}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          
          <h2 className="text-lg font-medium text-gray-900">
            {getMonthName(selectedMonth)}
          </h2>
          
          <button 
            onClick={goToNextMonth}
            disabled={isCurrentMonth()}
            className={`p-2 rounded-lg transition-colors ${
              isCurrentMonth() 
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
                  onClick={() => navigate(`/athlete/workout/${todayWorkout.id}`)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-[#FFD000] border-b border-gray-200 hover:bg-[#FFD000]/90 transition-colors"
                >
                  <div className="text-sm text-black">
                    {todayWorkout.date} <span className="text-xs">·</span> {todayWorkout.day}
                  </div>
                  <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                </button>

                {/* Workout Content */}
                {todayWorkout.title === 'Rest day' ? (
                  <div className="p-4 text-gray-600">Rest day</div>
                ) : (
                  <div className="divide-y divide-gray-100">
                    {todayWorkout.exercises.map((exercise, idx) => (
                      <button
                        key={idx}
                        onClick={() => navigate(`/athlete/workout/${todayWorkout.id}`)}
                        className="w-full p-4 hover:bg-gray-50 transition-colors text-left flex items-center gap-3"
                      >
                        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-sm font-medium text-gray-700">
                          {String.fromCharCode(65 + idx)}
                        </div>
                        <div className="text-gray-700">{exercise.name}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Upcoming Workouts */}
          <div className="px-6 mt-6">
            <h3 className="text-lg font-semibold mb-4">Upcoming Workouts</h3>
            <div className="space-y-3">
              {displayWorkouts.map((workout) => (
                <div key={workout.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  {/* Date Header */}
                  <button
                    onClick={() => navigate(`/athlete/workout/${workout.id}`)}
                    className="w-full flex items-center justify-between px-4 py-3 bg-gray-100 border-b border-gray-200 hover:bg-gray-200 transition-colors"
                  >
                    <div className="text-sm text-gray-700">
                      {workout.date} <span className="text-xs">·</span> {workout.day}
                    </div>
                    <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </button>

                  {/* Workout Content */}
                  {workout.title === 'Rest day' ? (
                    <div className="p-4 text-gray-600">Rest day</div>
                  ) : (
                    <div className="divide-y divide-gray-100">
                      {workout.exercises.map((exercise, idx) => (
                        <button
                          key={idx}
                          onClick={() => navigate(`/athlete/workout/${workout.id}`)}
                          className="w-full p-4 hover:bg-gray-50 transition-colors text-left flex items-center gap-3"
                        >
                          <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-sm font-medium text-gray-700">
                            {String.fromCharCode(65 + idx)}
                          </div>
                          <div className="text-gray-700">{exercise.name}</div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Past Workouts */}
          <div className="px-6 mt-6 space-y-4">
            {displayWorkouts.map((workout) => (
              <div key={workout.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                {/* Date Header with Completion Icon */}
                <button
                  onClick={() => navigate(`/athlete/workout/${workout.id}`)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-gray-100 border-b border-gray-200 hover:bg-gray-200 transition-colors"
                >
                  <div className="text-sm text-gray-700">
                    {workout.date} <span className="text-xs">·</span> {workout.day}
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
                {workout.title === 'Rest day' ? (
                  <div className="p-4 text-gray-600">Rest day</div>
                ) : (
                  <div className="divide-y divide-gray-100">
                    {workout.exercises.map((exercise, idx) => (
                      <button
                        key={idx}
                        onClick={() => navigate(`/athlete/workout/${workout.id}`)}
                        className="w-full p-4 hover:bg-gray-50 transition-colors text-left flex items-center gap-3"
                      >
                        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-sm font-medium text-gray-700">
                          {String.fromCharCode(65 + idx)}
                        </div>
                        <div className="text-gray-700">{exercise.name}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}