import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { toISODateString, formatMonthYear, getPreviousMonth, getNextMonth } from '../utils/helpers';
import { copyWorkoutToAthletes, getCoachAthletes, type WorkoutExercise } from '../lib/workoutService';

interface Athlete {
  id: string;
  name: string;
  photoUrl?: string;
}

interface CopyWorkoutModalProps {
  isOpen: boolean;
  sourceDate: string;
  athleteId: string;
  coachId: string;
  exercises: WorkoutExercise[];
  workoutNotes: string;
  onClose: () => void;
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year: number, month: number): number {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
}

function getInitials(name: string): string {
  if (!name?.trim()) return '?';
  return name.trim().split(/\s+/).map(n => n[0]).join('').toUpperCase();
}

export function CopyWorkoutModal({ isOpen, sourceDate, athleteId, coachId, exercises, workoutNotes, onClose }: CopyWorkoutModalProps) {
  const [currentMonth, setCurrentMonth] = useState(() => {
    const [y, m] = sourceDate.split('-').map(Number);
    return new Date(y, m - 1, 1);
  });
  const [selectedDates, setSelectedDates] = useState<Set<string>>(new Set());
  const [copying, setCopying] = useState(false);
  const [athletes, setAthletes] = useState<Athlete[]>([]);
  const [selectedAthleteIds, setSelectedAthleteIds] = useState<Set<string>>(new Set([athleteId]));
  const [athleteSectionExpanded, setAthleteSectionExpanded] = useState(false);

  const selectedDateCount = selectedDates.size;
  const selectedAthleteCount = selectedAthleteIds.size;
  const otherAthletesSelected = selectedAthleteIds.size > 1 || !selectedAthleteIds.has(athleteId);

  // Fetch athletes when modal opens
  useEffect(() => {
    if (!isOpen || !coachId) return;
    getCoachAthletes(coachId).then(list => {
      list.sort((a, b) => a.name.localeCompare(b.name));
      setAthletes(list);
    }).catch(() => {});
  }, [isOpen, coachId]);

  // Reset selections when modal opens
  useEffect(() => {
    if (isOpen) {
      setSelectedAthleteIds(new Set([athleteId]));
      setAthleteSectionExpanded(false);
    }
  }, [isOpen, athleteId]);

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
      if (next.has(dateISO)) next.delete(dateISO);
      else next.add(dateISO);
      return next;
    });
  };

  const toggleAthlete = (id: string) => {
    setSelectedAthleteIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const getSelectedAthleteSummary = () => {
    const selected = athletes.filter(a => selectedAthleteIds.has(a.id));
    if (selected.length === 0) return 'No athletes selected';
    const firstName = (name: string) => name.split(' ')[0];
    if (selected.length === 1) return firstName(selected[0].name);
    if (selected.length === 2) return `${firstName(selected[0].name)} and ${firstName(selected[1].name)}`;
    if (selected.length === 3) return `${firstName(selected[0].name)}, ${firstName(selected[1].name)} and ${firstName(selected[2].name)}`;
    return `${firstName(selected[0].name)}, ${firstName(selected[1].name)}, ${firstName(selected[2].name)} and ${selected.length - 3} more`;
  };

  const getButtonText = () => {
    if (copying) return 'Copying...';
    if (selectedDateCount === 0) return 'Select dates';
    const dateText = `${selectedDateCount} date${selectedDateCount !== 1 ? 's' : ''}`;
    const athleteText = otherAthletesSelected ? ` · ${selectedAthleteCount} athlete${selectedAthleteCount !== 1 ? 's' : ''}` : '';
    return `Copy to ${dateText}${athleteText}`;
  };

  const handleCopy = async () => {
    if (selectedDateCount === 0 || selectedAthleteCount === 0) return;
    setCopying(true);
    try {
      await copyWorkoutToAthletes(
        Array.from(selectedAthleteIds),
        Array.from(selectedDates),
        exercises,
        workoutNotes
      );
      setSelectedDates(new Set());
      onClose();
    } catch {
      // Error handling
    } finally {
      setCopying(false);
    }
  };

  const handleClose = () => {
    setSelectedDates(new Set());
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={handleClose}>
      <div className="bg-white rounded-2xl w-full max-w-sm" onClick={e => e.stopPropagation()}>
        <div className="p-5">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Copy Workout To</h2>
            <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Athlete Picker */}
          {athletes.length > 1 && (
            <div className="border border-gray-200 rounded-xl mb-4 overflow-hidden">
              <button
                onClick={() => setAthleteSectionExpanded(!athleteSectionExpanded)}
                className="w-full flex items-center justify-between px-3 py-2.5 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className="text-sm font-semibold text-gray-900 truncate mr-2">
                  Copy to {getSelectedAthleteSummary()}
                </span>
                {athleteSectionExpanded ? (
                  <ChevronUp className="w-4 h-4 text-gray-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {athleteSectionExpanded && (
                <div className="max-h-[132px] overflow-y-auto">
                  {athletes.map(a => {
                    const isSelected = selectedAthleteIds.has(a.id);
                    const isCurrent = a.id === athleteId;
                    return (
                      <button
                        key={a.id}
                        onClick={() => toggleAthlete(a.id)}
                        className={`w-full flex items-center gap-2 px-3 py-2.5 border-t border-gray-200 transition-colors ${
                          isSelected ? 'bg-amber-50' : 'hover:bg-gray-50'
                        }`}
                      >
                        {a.photoUrl ? (
                          <img src={a.photoUrl} alt={a.name} className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-[#FFD000] flex items-center justify-center flex-shrink-0">
                            <span className="text-xs font-bold text-black">{getInitials(a.name)}</span>
                          </div>
                        )}
                        <span className="text-sm text-gray-900 truncate flex-1 text-left">
                          {a.name}{isCurrent ? ' (current)' : ''}
                        </span>
                        <div className={`w-5 h-5 rounded flex-shrink-0 flex items-center justify-center ${
                          isSelected ? 'bg-[#FFD000]' : 'border-2 border-gray-300'
                        }`}>
                          {isSelected && <Check className="w-3.5 h-3.5 text-black" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}

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
            {Array.from({ length: firstDayOffset }).map((_, i) => (
              <div key={`empty-${i}`} className="h-9" />
            ))}
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
          {selectedDateCount > 0 && (
            <p className="text-xs text-gray-500 mt-3 text-center">
              {selectedDateCount} date{selectedDateCount !== 1 ? 's' : ''} selected
            </p>
          )}

          {/* Copy Button */}
          <div className="mt-4">
            <button
              onClick={handleCopy}
              disabled={selectedDateCount === 0 || selectedAthleteCount === 0 || copying}
              className="w-full bg-[#FFD000] text-black rounded-xl py-2.5 hover:bg-[#FFD000]/90 transition-colors font-medium text-sm disabled:opacity-50"
            >
              {getButtonText()}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
