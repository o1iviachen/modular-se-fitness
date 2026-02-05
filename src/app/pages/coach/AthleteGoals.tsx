import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, Plus } from 'lucide-react';
import logo from 'figma:asset/6715fa8a90369e65d79802402e0679daa2d685be.png';
import { getAthlete, getAthleteGoals } from '../../data/mockData';

export function AthleteGoals() {
  const { athleteId } = useParams();
  const navigate = useNavigate();
  const athlete = athleteId ? getAthlete(athleteId) : null;
  const goals = athleteId ? getAthleteGoals(athleteId) : [];

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
        <h1 className="text-xl mb-1 font-semibold">{athlete.name}'s Goals</h1>
        <p className="text-gray-400 text-sm">Track progress and manage goals</p>
      </div>

      {/* Goals List */}
      <div className="px-6 mt-6 space-y-4">
        {goals.length > 0 ? (
          goals.map((goal) => (
            <div key={goal.id} className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900">{goal.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{goal.description}</p>
                </div>
              </div>
              
              <div className="mb-3">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>{goal.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-[#FFD000] h-2 rounded-full transition-all"
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex justify-between text-xs text-gray-500">
                <span>Target: {goal.target}</span>
                <span>Due: {goal.dueDate}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-xl p-8 text-center">
            <p className="text-gray-500">No goals set</p>
          </div>
        )}
      </div>

      {/* Add Goal Button */}
      <div className="px-6 mt-6">
        <button 
          onClick={() => alert('Add goal functionality would be implemented here')}
          className="w-full bg-[#FFD000] text-black rounded-xl p-4 flex items-center justify-center gap-3 hover:bg-[#FFD000]/90 transition-colors shadow-sm"
        >
          <Plus className="w-5 h-5" />
          <span>Add New Goal</span>
        </button>
      </div>
    </div>
  );
}
