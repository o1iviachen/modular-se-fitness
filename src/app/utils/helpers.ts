// Helper utility functions

// ===== Date Conversion Utilities =====

// Convert a Date object to ISO date string "2026-02-05"
export const toISODateString = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// Parse ISO date string to Date object (avoids timezone issues with new Date(isoString))
export const parseISODate = (iso: string): Date => {
  const [year, month, day] = iso.split('-').map(Number);
  return new Date(year, month - 1, day);
};

// Convert ISO date string "2026-02-05" to display format "February 5, 2026"
export const isoToDisplayDate = (iso: string): string => {
  const d = parseISODate(iso);
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};

// Get day name from ISO date string "2026-02-05" → "Wednesday"
export const isoToDayName = (iso: string): string => {
  const d = parseISODate(iso);
  return d.toLocaleDateString('en-US', { weekday: 'long' });
};

// Get "today" as ISO string
export const getTodayISO = (): string => toISODateString(new Date());

// ===== Existing Helpers =====

// Format month and year (e.g., "February 2026")
export const formatMonthYear = (date: Date): string => {
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
};

// Check if two dates are in the same month
export const isSameMonth = (date1: Date, date2: Date): boolean => {
  return date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
};

// Navigate to previous month
export const getPreviousMonth = (date: Date): Date => {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() - 1);
  return newDate;
};

// Navigate to next month
export const getNextMonth = (date: Date): Date => {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + 1);
  return newDate;
};

// Filter workouts by month (works with ISO date strings)
export const filterWorkoutsByMonth = (workouts: any[], targetMonth: Date): any[] => {
  const targetYear = targetMonth.getFullYear();
  const targetMo = targetMonth.getMonth();
  return workouts.filter(w => {
    const d = parseISODate(w.date);
    return d.getMonth() === targetMo && d.getFullYear() === targetYear;
  });
};

// Get letter for exercise index (A, B, C, etc.)
export const getExerciseLetter = (index: number): string => {
  return String.fromCharCode(65 + index);
};

// Generate current week dates (7 days starting from Monday of current week)
// Returns ISO date strings as the canonical format
export const getCurrentWeekDates = (): Array<{ date: string; day: string; dateObj: Date }> => {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, etc.

  // Calculate Monday of this week (if today is Sunday, go back 6 days, otherwise go back to Monday)
  const daysToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  const monday = new Date(today);
  monday.setDate(today.getDate() - daysToMonday);

  const week = [];
  const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  for (let i = 0; i < 7; i++) {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);

    week.push({
      date: toISODateString(date),
      day: dayNames[i],
      dateObj: date
    });
  }

  return week;
};