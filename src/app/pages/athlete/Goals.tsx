import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Plus, Trash2, Check, Edit2 } from 'lucide-react';
import logo from 'figma:asset/6715fa8a90369e65d79802402e0679daa2d685be.png';
import { useAuth } from '../../context/AuthContext';
import { subscribeToGoals, addGoal, deleteGoal, updateGoal, Goal } from '../../lib/goalService';

export function Goals() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [goals, setGoals] = useState<Goal[]>([]);
  const [isAddingGoal, setIsAddingGoal] = useState(false);
  const [newGoal, setNewGoal] = useState({ title: '', target: '', deadline: '' });

  useEffect(() => {
    if (!user?.id) return;
    return subscribeToGoals(user.id, setGoals);
  }, [user?.id]);

  const handleAddGoal = async () => {
    if (!user?.id || !newGoal.title.trim() || !newGoal.target.trim() || !newGoal.deadline.trim()) return;
    try {
      await addGoal(user.id, newGoal);
      setNewGoal({ title: '', target: '', deadline: '' });
      setIsAddingGoal(false);
    } catch (err) {
      console.error('Failed to add goal:', err);
    }
  };

  const handleDeleteGoal = (id: string) => {
    if (!user?.id) return;
    deleteGoal(user.id, id);
  };

  const handleToggleComplete = (goal: Goal) => {
    if (!user?.id) return;
    updateGoal(user.id, goal.id, { completed: !goal.completed });
  };

  const handleEditGoal = (goal: Goal) => {
    navigate(`/athlete/goal/${goal.id}/edit`, {
      state: { goal }
    });
  };

  return (
    <div className="min-h-full bg-gray-50">
      {/* Header */}
      <div className="bg-black text-white px-6 py-8">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate(-1)}
            className="text-white hover:text-[#FFD000] transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => setIsAddingGoal(true)}
            className="w-10 h-10 bg-[#FFD000] text-black rounded-full flex items-center justify-center hover:bg-[#FFD000]/90 transition-colors"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
        <img src={logo} alt="SE Fitness" className="h-10 w-auto mb-3" />
        <h1 className="text-xl font-semibold">My Goals</h1>
        <p className="text-gray-400 text-sm mt-1">Track your fitness objectives</p>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        {/* Add New Goal Form */}
        {isAddingGoal && (
          <div className="bg-white rounded-xl p-5 shadow-sm border border-[#FFD000] mb-6">
            <h3 className="font-medium mb-4">Add New Goal</h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-600 mb-1.5 block">Goal Title</label>
                <input
                  type="text"
                  value={newGoal.title}
                  onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
                  placeholder="e.g., Increase bench press max"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm text-gray-600 mb-1.5 block">Target</label>
                  <input
                    type="text"
                    value={newGoal.target}
                    onChange={(e) => setNewGoal({ ...newGoal, target: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
                    placeholder="e.g., 225 lbs"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600 mb-1.5 block">Deadline</label>
                  <input
                    type="text"
                    value={newGoal.deadline}
                    onChange={(e) => setNewGoal({ ...newGoal, deadline: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
                    placeholder="e.g., 3 months"
                  />
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                <button
                  onClick={handleAddGoal}
                  className="flex-1 bg-[#FFD000] text-black py-2.5 rounded-lg hover:bg-[#FFD000]/90 transition-colors font-medium"
                >
                  Add Goal
                </button>
                <button
                  onClick={() => {
                    setIsAddingGoal(false);
                    setNewGoal({ title: '', target: '', deadline: '' });
                  }}
                  className="flex-1 bg-gray-100 text-gray-700 py-2.5 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Goals List */}
        <div className="space-y-3">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className={`bg-white rounded-xl p-5 shadow-sm border ${
                goal.completed ? 'border-green-200 bg-green-50/50' : 'border-gray-200'
              }`}
            >
              <div className="flex items-start gap-3">
                <button
                  onClick={() => handleToggleComplete(goal)}
                  className={`mt-0.5 w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                    goal.completed
                      ? 'bg-green-500 border-green-500'
                      : 'border-gray-300 hover:border-[#FFD000]'
                  }`}
                >
                  {goal.completed && <Check className="w-4 h-4 text-white" />}
                </button>
                <div className="flex-1">
                  <h3 className={`font-medium mb-2 text-sm ${goal.completed ? 'line-through text-gray-500' : 'text-black'}`}>
                    {goal.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <div className="text-gray-500 text-xs mb-0.5">Target</div>
                      <div className={goal.completed ? 'text-gray-400' : 'text-gray-700'}>{goal.target}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs mb-0.5">Deadline</div>
                      <div className={goal.completed ? 'text-gray-400' : 'text-gray-700'}>{goal.deadline}</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleEditGoal(goal)}
                    className="text-gray-400 hover:text-[#FFD000] transition-colors p-1"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteGoal(goal.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors p-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
