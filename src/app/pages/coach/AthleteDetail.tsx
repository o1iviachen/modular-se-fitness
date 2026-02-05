import { useParams, useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import logo from 'figma:asset/6715fa8a90369e65d79802402e0679daa2d685be.png';
import { getAthlete, getAthleteSchedule } from '../../data/mockData';
import { WorkoutCard } from '../../components/WorkoutCard';

export function AthleteDetail() {
  const { athleteId } = useParams();
  const navigate = useNavigate();
  const athlete = athleteId ? getAthlete(athleteId) : null;
  const schedule = athleteId ? getAthleteSchedule(athleteId, 7) : [];

  if (!athlete) {
    return (
      <div className="min-h-full bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Athlete not found</p>
      </div>
    );
  }

  const handleWorkoutClick = (workout: any) => {
    if (workout.workout && workout.workout !== 'Rest day') {
      navigate(`/coach/workout/${workout.date}`, {
        state: {
          workoutName: workout.workout,
          workoutDate: workout.date,
          workoutDay: workout.day,
          athleteId: athleteId
        }
      });
    }
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
    alert(`Rest day set for ${workout.date}`);
  };

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
          {schedule.map((workout, idx) => (
            <WorkoutCard
              key={idx}
              date={workout.date}
              day={workout.day}
              workout={workout.workout}
              completed={workout.completed}
              exercises={workout.exercises}
              onClick={() => handleWorkoutClick(workout)}
              onAddWorkout={(e) => handleAddWorkout(workout, e)}
              onSetRestDay={(e) => handleSetRestDay(workout, e)}
              showActions={true}
            />
          ))}
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
