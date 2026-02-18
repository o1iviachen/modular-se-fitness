import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Plus, Trash2, Check, Edit2 } from 'lucide-react';

import { GoalForm } from '../../components/GoalForm';
import { useAuth } from '../../context/AuthContext';
import { subscribeToGoals, addGoal, deleteGoal, updateGoal, Goal } from '../../lib/goalService';

export function Goals() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [goals, setGoals] = useState<Goal[]>([]);
  const [isAddingGoal, setIsAddingGoal] = useState(false);
  const [editingGoalId, setEditingGoalId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ title: '', target: '', deadline: '' });

  useEffect(() => {
    if (!user?.id) return;
    return subscribeToGoals(user.id, setGoals);
  }, [user?.id]);

  const handleAddGoal = async () => {
    if (!user?.id || !formData.title.trim() || !formData.target.trim() || !formData.deadline.trim()) return;
    try {
      await addGoal(user.id, formData);
      setFormData({ title: '', target: '', deadline: '' });
      setIsAddingGoal(false);
    } catch (err) {
      console.error('Failed to add goal:', err);
    }
  };

  const handleSaveEdit = async () => {
    if (!user?.id || !editingGoalId || !formData.title.trim() || !formData.target.trim() || !formData.deadline.trim()) return;
    try {
      await updateGoal(user.id, editingGoalId, formData);
      setEditingGoalId(null);
      setFormData({ title: '', target: '', deadline: '' });
    } catch (err) {
      console.error('Failed to update goal:', err);
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

  const handleStartEdit = (goal: Goal) => {
    setEditingGoalId(goal.id);
    setFormData({ title: goal.title, target: goal.target, deadline: goal.deadline });
    setIsAddingGoal(false);
  };

  const handleCancelEdit = () => {
    setEditingGoalId(null);
    setFormData({ title: '', target: '', deadline: '' });
  };

  const handleStartAdd = () => {
    setIsAddingGoal(true);
    setEditingGoalId(null);
    setFormData({ title: '', target: '', deadline: '' });
  };

  const handleCancelAdd = () => {
    setIsAddingGoal(false);
    setFormData({ title: '', target: '', deadline: '' });
  };

  return (
    <div className="min-h-full bg-gray-50">
      {/* Header */}
      <div className="bg-black text-white px-6 py-8">
        <button
          onClick={() => navigate(-1)}
          className="text-white hover:text-[#FFD000] transition-colors mb-4"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <img src="/se-logo.png" alt="SE Fitness" className="h-10 w-auto mb-3" />
        <h1 className="text-xl font-semibold">My Goals</h1>
        <p className="text-gray-400 text-sm mt-1">Track your fitness objectives</p>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        {/* Add New Goal Form */}
        {isAddingGoal && (
          <GoalForm
            formData={formData}
            setFormData={setFormData}
            onSave={handleAddGoal}
            onCancel={handleCancelAdd}
            title="Add Goal"
            saveLabel="Add Goal"
          />
        )}

        {/* Goals List */}
        <div className="space-y-3">
          {goals.map((goal) =>
            editingGoalId === goal.id ? (
              <GoalForm
                key={goal.id}
                formData={formData}
                setFormData={setFormData}
                onSave={handleSaveEdit}
                onCancel={handleCancelEdit}
                title="Edit Goal"
                saveLabel="Save Changes"
              />
            ) : (
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
                      onClick={() => handleStartEdit(goal)}
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
            )
          )}
        </div>

        {/* Add Goal Button */}
        <button
          onClick={handleStartAdd}
          className="w-full mt-6 bg-[#FFD000] text-black rounded-xl p-4 flex items-center justify-center gap-3 hover:bg-[#FFD000]/90 transition-colors shadow-sm font-medium"
        >
          <Plus className="w-5 h-5" />
          <span>Add Goal</span>
        </button>
      </div>
    </div>
  );
}
