import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { toISODateString, formatMonthYear, getPreviousMonth, getNextMonth } from '../utils/helpers';

interface CopyWorkoutModalProps {
  isOpen: boolean;
  sourceDate: string;
  onCopy: (targetDates: string[]) => void;
  onClose: () => void;
  copying: boolean;
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year: number, month: number): number {
  // 0 = Sunday, convert so Monday = 0
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
}

export function CopyWorkoutModal({ isOpen, sourceDate, onCopy, onClose, copying }: CopyWorkoutModalProps) {
  const [currentMonth, setCurrentMonth] = useState(() => {
    const [y, m] = sourceDate.split('-').map(Number);
    return new Date(y, m - 1, 1);
  });
  const [selectedDates, setSelectedDates] = useState<Set<string>>(new Set());

  if (!isOpen) return null;

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOffset = getFirstDayOfWeek(year, month);
  const todayISO = toISODateString(new Date());
  const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  const toggleDate = (dateISO: string) => {
    setSelectedDates(prev => {
      const next = new Set(prev);
      if (next.has(dateISO)) {
        next.delete(dateISO);
      } else {
        next.add(dateISO);
      }
      return next;
    });
  };

  const handleCopy = () => {
    if (selectedDates.size === 0) return;
    onCopy(Array.from(selectedDates));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-sm">
        <div className="p-5">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Copy Workout To</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={() => setCurrentMonth(getPreviousMonth(currentMonth))}
              className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm font-semibold">{formatMonthYear(currentMonth)}</span>
            <button
              onClick={() => setCurrentMonth(getNextMonth(currentMonth))}
              className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Weekday Headers */}
          <div className="grid grid-cols-7 gap-1 mb-1">
            {weekDays.map(d => (
              <div key={d} className="text-center text-xs font-medium text-gray-400 py-1">{d}</div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {/* Empty cells for offset */}
            {Array.from({ length: firstDayOffset }).map((_, i) => (
              <div key={`empty-${i}`} className="h-9" />
            ))}
            {/* Day cells */}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const dateISO = toISODateString(new Date(year, month, day));
              const isSource = dateISO === sourceDate;
              const isSelected = selectedDates.has(dateISO);
              const isToday = dateISO === todayISO;

              return (
                <button
                  key={day}
                  onClick={() => !isSource && toggleDate(dateISO)}
                  disabled={isSource}
                  className={`h-9 w-full rounded-lg text-sm font-medium transition-colors ${
                    isSource
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : isSelected
                        ? 'bg-[#FFD000] text-black'
                        : isToday
                          ? 'bg-black text-white hover:bg-gray-800'
                          : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {/* Selected count */}
          {selectedDates.size > 0 && (
            <p className="text-xs text-gray-500 mt-3 text-center">
              {selectedDates.size} date{selectedDates.size !== 1 ? 's' : ''} selected
            </p>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 mt-4">
            <button
              onClick={onClose}
              className="flex-1 bg-gray-100 text-black rounded-xl py-2.5 hover:bg-gray-200 transition-colors text-sm"
            >
              Cancel
            </button>
            <button
              onClick={handleCopy}
              disabled={selectedDates.size === 0 || copying}
              className="flex-1 bg-[#FFD000] text-black rounded-xl py-2.5 hover:bg-[#FFD000]/90 transition-colors font-medium text-sm disabled:opacity-50"
            >
              {copying ? 'Copying...' : `Copy to ${selectedDates.size || ''} Date${selectedDates.size !== 1 ? 's' : ''}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
