import { Check, Plus, Moon } from 'lucide-react';
import { getExerciseLetter } from '../utils/helpers';

interface WorkoutCardProps {
  date: string;
  day: string;
  workout: string | null;
  completed: boolean;
  exercises: Array<{ name: string; sets: string }>;
  onClick?: () => void;
  onAddWorkout?: (e: React.MouseEvent) => void;
  onSetRestDay?: (e: React.MouseEvent) => void;
  showActions?: boolean;
}

export function WorkoutCard({
  date,
  day,
  workout,
  completed,
  exercises,
  onClick,
  onAddWorkout,
  onSetRestDay,
  showActions = false,
}: WorkoutCardProps) {
  const hasWorkout = workout && workout !== 'Rest day';

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Date Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-100 border-b border-gray-200">
        <div className="text-sm text-gray-700">
          {date} <span className="text-xs">·</span> {day}
        </div>
        <div className="flex items-center gap-2">
          {completed ? (
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
          ) : workout ? (
            <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
          ) : showActions ? (
            <>
              {onSetRestDay && (
                <button
                  onClick={onSetRestDay}
                  className="text-gray-500 hover:text-[#FFD000] hover:bg-[#FFD000]/10 p-1.5 rounded-lg transition-colors"
                  title="Set rest day"
                >
                  <Moon className="w-5 h-5" />
                </button>
              )}
              {onAddWorkout && (
                <button
                  onClick={onAddWorkout}
                  className="text-[#FFD000] hover:bg-[#FFD000]/10 p-1.5 rounded-lg transition-colors"
                  title="Add workout"
                >
                  <Plus className="w-5 h-5" />
                </button>
              )}
            </>
          ) : null}
        </div>
      </div>

      {/* Workout Content */}
      {!workout ? (
        <div className="p-4 text-gray-400 italic">No workout assigned</div>
      ) : workout === 'Rest day' ? (
        <div className="p-4 text-gray-600">Rest day</div>
      ) : (
        <div className="divide-y divide-gray-100">
          {exercises.map((exercise, idx) => (
            <button
              key={idx}
              onClick={onClick}
              className="w-full p-4 hover:bg-gray-50 transition-colors text-left flex items-center gap-3"
            >
              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-sm font-medium text-gray-700">
                {getExerciseLetter(idx)}
              </div>
              <div className="text-gray-700">{exercise.name}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
