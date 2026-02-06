import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import logo from 'figma:asset/6715fa8a90369e65d79802402e0679daa2d685be.png';
import { getAthlete, getAthleteWorkouts, isAthleteArchived } from '../../data/mockData';
import { formatMonthYear, isSameMonth, getPreviousMonth, getNextMonth, filterWorkoutsByMonth } from '../../utils/helpers';
import { WorkoutCard } from '../../components/WorkoutCard';

export function AthleteWorkouts() {
  const { athleteId } = useParams();
  const navigate = useNavigate();
  const athlete = athleteId ? getAthlete(athleteId) : null;
  const initialWorkouts = athleteId ? getAthleteWorkouts(athleteId) : [];
  const [allWorkouts, setAllWorkouts] = useState(initialWorkouts);
  const isArchived = athleteId ? isAthleteArchived(athleteId) : false;
  
  const [selectedMonth, setSelectedMonth] = useState(new Date('2026-02-04'));
  const currentMonth = new Date('2026-02-04');

  const workoutsInMonth = filterWorkoutsByMonth(allWorkouts, selectedMonth);
  const isCurrentMonth = isSameMonth(selectedMonth, currentMonth);

  const goToPreviousMonth = () => setSelectedMonth(getPreviousMonth(selectedMonth));
  const goToNextMonth = () => {
    if (!isCurrentMonth) {
      setSelectedMonth(getNextMonth(selectedMonth));
    }
  };

  const handleWorkoutClick = (workout: any) => {
    // Don't navigate if it's a rest day or athlete is archived
    if (workout.workout === 'Rest day' || isArchived) {
      return;
    }
    
    navigate(`/coach/workout/${workout.date}`, {
      state: {
        workoutName: workout.workout || 'New Workout',
        workoutDate: workout.date,
        workoutDay: workout.day,
        athleteId: athleteId
      }
    });
  };

  const handleAddWorkout = (workout: any, e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/coach/workout/${workout.date}`, {
      state: {
        workoutName: 'New Workout',
        workoutDate: workout.date,
        workoutDay: workout.day,
        athleteId: athleteId
      }
    });
  };

  const handleSetRestDay = (workout: any, e: React.MouseEvent) => {
    e.stopPropagation();
    setAllWorkouts(prevWorkouts => 
      prevWorkouts.map(w => {
        if (w.date !== workout.date) return w;
        
        // If it's currently a rest day override, restore the original workout
        if (w.isRestDayOverride) {
          return {
            ...w,
            workout: w.originalWorkout || null,
            exercises: w.originalExercises || [],
            isRestDayOverride: false,
          };
        }
        
        // Otherwise, set it as a rest day and store the original
        return {
          ...w,
          originalWorkout: w.workout,
          originalExercises: w.exercises,
          workout: 'Rest day',
          exercises: [],
          isRestDayOverride: true,
        };
      })
    );
  };

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
          onClick={() => navigate(`/coach/athlete/${athleteId}`)}
          className="text-white mb-4 hover:text-[#FFD000] transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <img src={logo} alt="SE Fitness" className="h-10 w-auto mb-3" />
        <h1 className="text-xl mb-1 font-semibold">{athlete.name}'s Workouts</h1>
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
          workoutsInMonth.map((workout, idx) => (
            <WorkoutCard
              key={idx}
              date={workout.date}
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