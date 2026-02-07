import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router';
import { ArrowLeft, Plus, Trash2, Check, Edit2 } from 'lucide-react';
import logo from 'figma:asset/6715fa8a90369e65d79802402e0679daa2d685be.png';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';

interface Goal {
  id: number;
  title: string;
  target: string;
  deadline: string;
  completed: boolean;
}

export function AthleteGoals() {
  const { athleteId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const routeState = location.state as { athleteName?: string } | null;

  const [athleteName, setAthleteName] = useState(routeState?.athleteName ?? '');
  const [loading, setLoading] = useState(!routeState?.athleteName);

  const [goals, setGoals] = useState<Goal[]>([
    { id: 1, title: 'Build muscle and increase strength', target: '175 lbs', deadline: '6 months', completed: false },
    { id: 2, title: 'Run a 5K under 25 minutes', target: '24:30', deadline: '3 months', completed: false },
    { id: 3, title: 'Master proper squat form', target: 'Form check', deadline: '1 month', completed: true }
  ]);
  const [isAddingGoal, setIsAddingGoal] = useState(false);
  const [newGoal, setNewGoal] = useState({ title: '', target: '', deadline: '' });

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

  const handleAddGoal = () => {
    if (newGoal.title.trim() && newGoal.target.trim() && newGoal.deadline.trim()) {
      setGoals([...goals, {
        id: Date.now(),
        ...newGoal,
        completed: false
      }]);
      setNewGoal({ title: '', target: '', deadline: '' });
      setIsAddingGoal(false);
    }
  };

  const handleDeleteGoal = (id: number) => {
    setGoals(goals.filter(g => g.id !== id));
  };

  const handleToggleComplete = (id: number) => {
    setGoals(goals.map(g =>
      g.id === id ? { ...g, completed: !g.completed } : g
    ));
  };

  const handleEditGoal = (goal: Goal) => {
    navigate(`/coach/athlete/${athleteId}/goal/${goal.id}/edit`, {
      state: { goal }
    });
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
        <h1 className="text-xl font-semibold">{athleteName}'s Goals</h1>
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
                  onClick={() => handleToggleComplete(goal.id)}
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
