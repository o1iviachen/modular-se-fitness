import { useEffect } from 'react';
import { X } from 'lucide-react';

interface EquipmentFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedEquipment: string;
  onSelect: (equipment: string) => void;
  equipmentList: string[];
}

export function EquipmentFilterModal({
  isOpen,
  onClose,
  selectedEquipment,
  onSelect,
  equipmentList,
}: EquipmentFilterModalProps) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSelect = (equipment: string) => {
    onSelect(equipment);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Bottom Sheet */}
      <div className="relative w-full max-w-lg bg-white rounded-t-2xl max-h-[70vh] flex flex-col animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h3 className="text-lg font-semibold">Select Equipment</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Equipment Grid */}
        <div className="overflow-y-auto px-6 py-4">
          <div className="grid grid-cols-3 gap-2">
            {/* All Equipment option */}
            <button
              onClick={() => handleSelect('all')}
              className={`px-3 py-2.5 rounded-lg text-sm text-center transition-colors ${
                selectedEquipment === 'all'
                  ? 'bg-[#FFD000] text-black font-medium'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>

            {equipmentList.map((eq) => (
              <button
                key={eq}
                onClick={() => handleSelect(eq)}
                className={`px-3 py-2.5 rounded-lg text-sm text-center transition-colors ${
                  selectedEquipment === eq
                    ? 'bg-[#FFD000] text-black font-medium'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {eq}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
