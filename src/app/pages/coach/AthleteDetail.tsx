import { useParams, useNavigate } from 'react-router';
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import logo from 'figma:asset/6715fa8a90369e65d79802402e0679daa2d685be.png';
import { getAthlete, getAthleteSchedule, isAthleteArchived } from '../../data/mockData';
import { WorkoutCard } from '../../components/WorkoutCard';

export function AthleteDetail() {
  const { athleteId } = useParams();
  const navigate = useNavigate();
  const athlete = athleteId ? getAthlete(athleteId) : null;
  const initialSchedule = athleteId ? getAthleteSchedule(athleteId, 7) : [];
  const [schedule, setSchedule] = useState(initialSchedule);
  const isArchived = athleteId ? isAthleteArchived(athleteId) : false;

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
    setSchedule(prevSchedule => 
      prevSchedule.map(w => {
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
            <span className="text-gray-900">{athlete.age}</span>
          </div>
          <div className="p-4 flex justify-between">
            <span className="text-gray-600">Gender</span>
            <span className="text-gray-900">{athlete.gender}</span>
          </div>
          <div className="p-4 flex justify-between">
            <span className="text-gray-600">Weight</span>
            <span className="text-gray-900">{athlete.weight}</span>
          </div>
          <div className="p-4 flex justify-between">
            <span className="text-gray-600">Height</span>
            <span className="text-gray-900">{athlete.height}</span>
          </div>
        </div>
      </div>

      {/* Weekly Schedule */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold">This Week's Schedule</h3>
          <button 
            onClick={() => navigate(`/coach/athlete/${athleteId}/workouts`)}
            className="text-[#FFD000] hover:underline"
          >
            View All
          </button>
        </div>
        <div className="space-y-3">
          {schedule.length > 0 ? (
            schedule.map((workout, idx) => (
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
            <div className="bg-white rounded-xl p-8 text-center">
              <p className="text-gray-500">No recent workouts</p>
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 grid grid-cols-2 gap-3">
        <button
          onClick={() => navigate(`/coach/athlete/${athleteId}/goals`)}
          className="bg-white rounded-xl p-4 shadow-sm hover:bg-gray-50 transition-colors"
        >
          <div className="text-left">
            <div className="text-lg font-semibold mb-1">Goals</div>
            <div className="text-xs text-gray-500">View & manage goals</div>
          </div>
        </button>
        <button
          onClick={() => navigate(`/coach/athlete/${athleteId}/documents`)}
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