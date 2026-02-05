// Helper utility functions

// Format month and year (e.g., "February 2026")
export const formatMonthYear = (date: Date): string => {
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
};

// Format full date (e.g., "February 5, 2026")
export const formatFullDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
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

// Filter workouts by month
export const filterWorkoutsByMonth = (workouts: any[], targetMonth: Date): any[] => {
  return workouts.filter(w => isSameMonth(w.dateObj, targetMonth));
};

// Get letter for exercise index (A, B, C, etc.)
export const getExerciseLetter = (index: number): string => {
  return String.fromCharCode(65 + index);
};
