import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router';
import { ArrowLeft, Plus, Trash2, Check, Edit2 } from 'lucide-react';

import { GoalForm } from '../../components/GoalForm';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { subscribeToGoals, addGoal, deleteGoal, updateGoal, Goal } from '../../lib/goalService';

export function AthleteGoals() {
  const { athleteId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const routeState = location.state as { athleteName?: string; isArchived?: boolean } | null;
  const isArchived = routeState?.isArchived ?? false;

  const [athleteName, setAthleteName] = useState(routeState?.athleteName ?? '');
  const [loading, setLoading] = useState(!routeState?.athleteName);

  const [goals, setGoals] = useState<Goal[]>([]);
  const [isAddingGoal, setIsAddingGoal] = useState(false);
  const [editingGoalId, setEditingGoalId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ title: '', target: '', deadline: '' });

  // Fetch athlete name from Firestore (only if not passed via route state)
  useEffect(() => {
    if (!athleteId || routeState?.athleteName) { setLoading(false); return; }
    getDoc(doc(db, 'users', athleteId)).then((snap) => {
      if (snap.exists()) {
        const data = snap.data();
        setAthleteName(`${data.firstName} ${data.lastName}`);
      }
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [athleteId]);

  // Subscribe to goals
  useEffect(() => {
    if (!athleteId) return;
    return subscribeToGoals(athleteId, setGoals);
  }, [athleteId]);

  const handleAddGoal = async () => {
    if (!athleteId || !formData.title.trim() || !formData.target.trim() || !formData.deadline.trim()) return;
    await addGoal(athleteId, formData);
    setFormData({ title: '', target: '', deadline: '' });
    setIsAddingGoal(false);
  };

  const handleSaveEdit = async () => {
    if (!athleteId || !editingGoalId || !formData.title.trim() || !formData.target.trim() || !formData.deadline.trim()) return;
    await updateGoal(athleteId, editingGoalId, formData);
    setEditingGoalId(null);
    setFormData({ title: '', target: '', deadline: '' });
  };

  const handleDeleteGoal = (id: string) => {
    if (!athleteId) return;
    deleteGoal(athleteId, id);
  };

  const handleToggleComplete = (goal: Goal) => {
    if (!athleteId) return;
    updateGoal(athleteId, goal.id, { completed: !goal.completed });
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

  if (loading) return null;

  if (!athleteName) {
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
          onClick={() => navigate(-1)}
          className="text-white mb-4 hover:text-[#FFD000] transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <img src="/se-logo.png" alt="SE Fitness" className="h-10 w-auto mb-3" />
        <h1 className="text-xl font-semibold">{athleteName}'s Goals</h1>
        <p className="text-gray-400 text-sm mt-1">Track your athlete's fitness objectives</p>
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
                  {!isArchived && (
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
                  )}
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
                  {!isArchived && (
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
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Add Goal Button */}
      {!isArchived && (
        <div className="px-6">
          <button
            onClick={handleStartAdd}
            className="w-full bg-[#FFD000] text-black rounded-xl p-4 flex items-center justify-center gap-3 hover:bg-[#FFD000]/90 transition-colors shadow-sm font-medium"
          >
            <Plus className="w-5 h-5" />
            <span>Add Goal</span>
          </button>
        </div>
      )}
    </div>
  );
}
