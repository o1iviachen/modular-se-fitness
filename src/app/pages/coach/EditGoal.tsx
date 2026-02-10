import { useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import logo from 'figma:asset/6715fa8a90369e65d79802402e0679daa2d685be.png';
import { updateGoal } from '../../lib/goalService';

export function EditGoal() {
  const navigate = useNavigate();
  const location = useLocation();
  const { athleteId } = useParams();
  const { goal } = location.state || {};

  const [editedGoal, setEditedGoal] = useState({
    title: goal?.title || '',
    target: goal?.target || '',
    deadline: goal?.deadline || ''
  });

  const handleSave = async () => {
    if (!athleteId || !goal?.id) return;
    await updateGoal(athleteId, goal.id, editedGoal);
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-black text-white px-6 py-8">
        <button
          onClick={() => navigate(-1)}
          className="text-white mb-4 hover:text-[#FFD000] transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <img src={logo} alt="SE Fitness" className="h-10 w-auto mb-3" />
        <h1 className="text-xl font-semibold">Edit Goal</h1>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600 mb-1.5 block">Goal Title</label>
              <input
                type="text"
                value={editedGoal.title}
                onChange={(e) => setEditedGoal({ ...editedGoal, title: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
                placeholder="e.g., Increase bench press max"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm text-gray-600 mb-1.5 block">Target</label>
                <input
                  type="text"
                  value={editedGoal.target}
                  onChange={(e) => setEditedGoal({ ...editedGoal, target: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
                  placeholder="e.g., 225 lbs"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600 mb-1.5 block">Deadline</label>
                <input
                  type="text"
                  value={editedGoal.deadline}
                  onChange={(e) => setEditedGoal({ ...editedGoal, deadline: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
                  placeholder="e.g., 3 months"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={handleSave}
            className="flex-1 bg-[#FFD000] text-black py-3 rounded-xl hover:bg-[#FFD000]/90 transition-colors font-medium"
          >
            Save Changes
          </button>
          <button
            onClick={() => navigate(-1)}
            className="flex-1 bg-white border border-gray-300 text-black py-3 rounded-xl hover:bg-gray-50 transition-colors font-medium"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
