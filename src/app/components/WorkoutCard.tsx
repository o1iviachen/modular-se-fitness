import { Check, Moon } from 'lucide-react';
import { getExerciseLabels } from '../utils/helpers';

interface WorkoutCardProps {
  date: string;
  day: string;
  workout: string | null;
  completed: boolean;
  exercises: Array<{ name: string; sets: string; supersetWithPrev?: boolean }>;
  isToday?: boolean;
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
  isToday,
  onClick,
  onAddWorkout,
  onSetRestDay,
  showActions = false,
}: WorkoutCardProps) {
  const hasWorkout = workout && workout !== 'Rest day';
  const isRestDay = workout === 'Rest day';
  const isClickable = !isRestDay && onClick;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Date Header */}
      <div
        className={`flex items-center justify-between px-4 py-3 bg-gray-100 border-b border-gray-200 ${
          isClickable ? 'cursor-pointer hover:bg-gray-200 transition-colors' : ''
        }`}
        onClick={isClickable ? onClick : undefined}
      >
        <div className="text-sm text-gray-700">
          {date} <span className="text-xs">·</span> {day}{isToday ? ' (Today)' : ''}
        </div>
        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
          {showActions ? (
            <>
              {onSetRestDay && (
                <button
                  onClick={onSetRestDay}
                  className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-[#FFD000] hover:bg-[#FFD000]/10 rounded-lg transition-colors"
                  title={workout === 'Rest day' ? 'Remove rest day' : 'Set rest day'}
                >
                  <Moon
                    className="w-4 h-4"
                    fill={workout === 'Rest day' ? 'currentColor' : 'none'}
                  />
                </button>
              )}
              {completed ? (
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              ) : !isRestDay && (
                <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              )}
            </>
          ) : (
            <>
              {completed ? (
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              ) : !isRestDay ? (
                <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              ) : null}
            </>
          )}
        </div>
      </div>

      {/* Workout Content */}
      {!workout ? (
        <div
          className={`p-4 text-gray-400 italic ${
            isClickable ? 'cursor-pointer hover:bg-gray-50 transition-colors' : ''
          }`}
          onClick={isClickable ? onClick : undefined}
        >
          No workout assigned
        </div>
      ) : workout === 'Rest day' ? (
        <div className="p-4 text-gray-600">Rest day</div>
      ) : (
        <div>
          {(() => {
            const labels = getExerciseLabels(exercises);
            return exercises.map((exercise, idx) => {
              const connectedAbove = exercise.supersetWithPrev;
              const connectedBelow = exercises[idx + 1]?.supersetWithPrev;
              return (
                <button
                  key={idx}
                  onClick={onClick}
                  className={`w-full px-4 py-2 text-left flex items-center gap-3 ${
                    isClickable ? 'hover:bg-gray-50 transition-colors' : ''
                  } ${!connectedAbove ? 'border-t border-gray-100' : ''}`}
                  disabled={!isClickable}
                >
                  <div className="relative flex flex-col items-center self-stretch justify-center" style={{ minWidth: '2rem' }}>
                    {connectedAbove && <div className="w-1 bg-gray-100 rounded-full absolute -top-2 bottom-1/2" />}
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-sm font-medium text-gray-700 relative z-10">
                      {labels[idx]}
                    </div>
                    {connectedBelow && <div className="w-1 bg-gray-100 rounded-full absolute top-1/2 -bottom-2" />}
                  </div>
                  <div className="text-gray-700">{exercise.name}</div>
                </button>
              );
            });
          })()}
        </div>
      )}
    </div>
  );
}