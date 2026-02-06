import { Archive, RotateCcw } from 'lucide-react';

interface AthleteCardProps {
  name: string;
  lastWorkout: string;
  streak: number;
  isArchived: boolean;
  onClick: () => void;
  onArchiveClick?: (e: React.MouseEvent) => void;
  onReactivateClick?: (e: React.MouseEvent) => void;
}

export function AthleteCard({ 
  name, 
  lastWorkout, 
  streak, 
  isArchived,
  onClick,
  onArchiveClick,
  onReactivateClick
}: AthleteCardProps) {
  return (
    <div
      className="w-full bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between cursor-pointer"
    >
      <div onClick={onClick} className="flex items-center gap-4 flex-1">
        <div className="w-12 h-12 bg-[#FFD000] rounded-full flex items-center justify-center text-black">
          {name.split(' ').map(n => n[0]).join('')}
        </div>
        <div className="text-left">
          <div className="font-medium text-black">{name}</div>
          <div className="text-sm text-gray-500">
            Last workout: {lastWorkout}
          </div>
          {!isArchived && (
            <div className="text-sm text-gray-500">
              Streak: {streak} days
            </div>
          )}
        </div>
      </div>
      
      {isArchived ? (
        <button
          onClick={onReactivateClick}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          title="Reactivate"
        >
          <RotateCcw className="w-5 h-5 text-gray-600" />
        </button>
      ) : (
        <button
          onClick={onArchiveClick}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          title="Archive"
        >
          <Archive className="w-5 h-5 text-gray-600" />
        </button>
      )}
    </div>
  );
}