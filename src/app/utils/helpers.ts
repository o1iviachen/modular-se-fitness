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

// Generate current week dates (7 days starting from Monday of current week)
export const getCurrentWeekDates = (): Array<{ date: string; day: string; dateObj: Date }> => {
  const today = new Date('2026-02-04'); // Wednesday
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
    
    // Format as "February 3, 2026" to match existing workout data format
    const dateStr = date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
    
    week.push({
      date: dateStr,
      day: dayNames[i],
      dateObj: date
    });
  }
  
  return week;
};