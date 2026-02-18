interface GoalFormProps {
  formData: { title: string; target: string; deadline: string };
  setFormData: (data: { title: string; target: string; deadline: string }) => void;
  onSave: () => void;
  onCancel: () => void;
  title: string;
  saveLabel: string;
}

export function GoalForm({ formData, setFormData, onSave, onCancel, title, saveLabel }: GoalFormProps) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-[#FFD000] mb-6">
      <h3 className="font-medium mb-4">{title}</h3>
      <div className="space-y-3">
        <div>
          <label className="text-sm text-gray-600 mb-1.5 block">Goal Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
            placeholder="e.g., Increase bench press max"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm text-gray-600 mb-1.5 block">Target</label>
            <input
              type="text"
              value={formData.target}
              onChange={(e) => setFormData({ ...formData, target: e.target.value })}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
              placeholder="e.g., 100 kg"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 mb-1.5 block">Deadline</label>
            <input
              type="text"
              value={formData.deadline}
              onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
              placeholder="e.g., 3 months"
            />
          </div>
        </div>
        <div className="flex gap-2 pt-2">
          <button
            onClick={onSave}
            className="flex-1 bg-[#FFD000] text-black py-2.5 rounded-lg hover:bg-[#FFD000]/90 transition-colors font-medium"
          >
            {saveLabel}
          </button>
          <button
            onClick={onCancel}
            className="flex-1 bg-gray-100 text-gray-700 py-2.5 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
