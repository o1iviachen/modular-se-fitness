import { getCurrentWeekDates } from '../utils/helpers';

// Type definitions
export interface Athlete {
  id: number;
  name: string;
  email: string;
  age: number;
  gender: 'Male' | 'Female';
  weight: string;
  height: string;
  lastWorkout: string;
  lastWorkoutDate: Date;
  streak: number;
  tenureMonths: number;
  workoutsCompleted: number;
  workoutCompletionRate: number;
}

export interface WorkoutExercise {
  name: string;
  sets: string;
}

export interface ScheduledWorkout {
  date: string;
  day: string;
  dateObj: Date;
  workout: string | null;
  completed: boolean;
  exercises: WorkoutExercise[];
  originalWorkout?: string | null;  // Store the original workout when toggled to rest day
  originalExercises?: WorkoutExercise[];  // Store the original exercises
  isRestDayOverride?: boolean;  // Track if this is a manual rest day override
}

export interface Goal {
  id: number;
  title: string;
  description: string;
  target: string;
  progress: number;
  dueDate: string;
}

export interface Document {
  id: number;
  name: string;
  type: string;
  uploadedDate: string;
  size: string;
}

export interface Message {
  id: number;
  sender: 'Athlete' | 'Coach';
  content: string;
  timestamp: Date;
}

// Athletes data
export const athletes: Record<string, Athlete> = {
  '1': {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 28,
    gender: 'Male',
    weight: '185 lbs',
    height: '6\'0"',
    lastWorkout: 'February 4, 2026',
    lastWorkoutDate: new Date('2026-02-04'),
    streak: 12,
    tenureMonths: 14,
    workoutsCompleted: 47,
    workoutCompletionRate: 85,
  },
  '2': {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    age: 32,
    gender: 'Female',
    weight: '145 lbs',
    height: '5\'6"',
    lastWorkout: 'February 3, 2026',
    lastWorkoutDate: new Date('2026-02-03'),
    streak: 8,
    tenureMonths: 8,
    workoutsCompleted: 34,
    workoutCompletionRate: 78,
  },
  '3': {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike.johnson@example.com',
    age: 35,
    gender: 'Male',
    weight: '205 lbs',
    height: '6\'2"',
    lastWorkout: 'February 4, 2026',
    lastWorkoutDate: new Date('2026-02-04'),
    streak: 15,
    tenureMonths: 18,
    workoutsCompleted: 68,
    workoutCompletionRate: 92,
  },
  '4': {
    id: 4,
    name: 'Sarah Williams',
    email: 'sarah.williams@example.com',
    age: 26,
    gender: 'Female',
    weight: '130 lbs',
    height: '5\'4"',
    lastWorkout: 'February 2, 2026',
    lastWorkoutDate: new Date('2026-02-02'),
    streak: 5,
    tenureMonths: 6,
    workoutsCompleted: 22,
    workoutCompletionRate: 68,
  },
};

// Archived athletes
export const archivedAthletes: Record<string, Athlete> = {
  '5': {
    id: 5,
    name: 'Tom Brown',
    email: 'tom.brown@example.com',
    age: 30,
    gender: 'Male',
    weight: '190 lbs',
    height: '5\'11"',
    lastWorkout: 'January 15, 2026',
    lastWorkoutDate: new Date('2026-01-15'),
    streak: 0,
    tenureMonths: 10,
    workoutsCompleted: 42,
    workoutCompletionRate: 0,
  },
  '6': {
    id: 6,
    name: 'Emma Davis',
    email: 'emma.davis@example.com',
    age: 24,
    gender: 'Female',
    weight: '125 lbs',
    height: '5\'5"',
    lastWorkout: 'December 28, 2025',
    lastWorkoutDate: new Date('2025-12-28'),
    streak: 0,
    tenureMonths: 5,
    workoutsCompleted: 18,
    workoutCompletionRate: 0,
  },
};

// Generate workouts for a date
const createWorkout = (date: string, day: string, workout: string | null, completed: boolean, exercises: WorkoutExercise[]): ScheduledWorkout => ({
  date,
  day,
  dateObj: new Date(date),
  workout,
  completed,
  exercises,
});

// Athlete workouts schedules
export const athleteWorkouts: Record<string, ScheduledWorkout[]> = {
  '1': [
    createWorkout('January 27, 2026', 'Monday', 'Upper Body Power', true, [
      { name: 'Bench Press', sets: '5x5' },
      { name: 'Overhead Press', sets: '4x8' }
    ]),
    createWorkout('January 28, 2026', 'Tuesday', 'Lower Body Strength', true, [
      { name: 'Squats', sets: '4x8' },
      { name: 'Leg Press', sets: '3x12' }
    ]),
    createWorkout('January 29, 2026', 'Wednesday', null, false, []),
    createWorkout('January 30, 2026', 'Thursday', 'Core Training', false, [
      { name: 'Planks', sets: '3x60s' }
    ]),
    createWorkout('January 31, 2026', 'Friday', 'Cardio HIIT', true, [
      { name: 'Burpees', sets: '3x15' }
    ]),
    createWorkout('February 1, 2026', 'Monday', 'Upper Body Strength', true, [
      { name: 'Bench Press', sets: '4x8' },
      { name: 'Barbell Rows', sets: '4x8' },
      { name: 'Overhead Press', sets: '3x10' }
    ]),
    createWorkout('February 2, 2026', 'Tuesday', 'Lower Body Power', true, [
      { name: 'Back Squats', sets: '5x5' },
      { name: 'Romanian Deadlifts', sets: '3x10' }
    ]),
    createWorkout('February 3, 2026', 'Wednesday', 'Core & Conditioning', true, [
      { name: 'Planks', sets: '3x60s' },
      { name: 'Russian Twists', sets: '3x20' }
    ]),
    createWorkout('February 4, 2026', 'Thursday', 'Active Recovery', true, [
      { name: 'Light Yoga', sets: '30 min' }
    ]),
    createWorkout('February 5, 2026', 'Friday', 'Upper Body Hypertrophy', false, [
      { name: 'Incline Bench Press', sets: '4x10' },
      { name: 'Cable Flies', sets: '3x12' },
      { name: 'Dumbbell Rows', sets: '4x10' }
    ]),
    createWorkout('February 6, 2026', 'Saturday', 'Full Body HIIT', false, [
      { name: 'Burpees', sets: '3x15' },
      { name: 'Jump Squats', sets: '3x12' }
    ]),
    createWorkout('February 7, 2026', 'Sunday', null, false, []),
    createWorkout('February 8, 2026', 'Monday', 'Upper Body Hypertrophy', false, [
      { name: 'Incline Bench', sets: '4x10' }
    ]),
    createWorkout('February 9, 2026', 'Tuesday', 'Lower Body Strength', false, [
      { name: 'Squats', sets: '4x8' }
    ]),
    createWorkout('February 10, 2026', 'Wednesday', 'Rest day', false, []),
  ],
  '2': [
    createWorkout('January 27, 2026', 'Monday', 'Olympic Lifting', true, [
      { name: 'Clean & Jerk', sets: '5x3' }
    ]),
    createWorkout('January 28, 2026', 'Tuesday', null, false, []),
    createWorkout('January 29, 2026', 'Wednesday', 'Upper Body Strength', true, [
      { name: 'Bench Press', sets: '4x8' }
    ]),
    createWorkout('January 30, 2026', 'Thursday', 'Lower Body Power', false, [
      { name: 'Power Clean', sets: '5x3' }
    ]),
    createWorkout('January 31, 2026', 'Friday', 'Core Training', true, [
      { name: 'Planks', sets: '3x60s' }
    ]),
    createWorkout('February 1, 2026', 'Monday', 'Olympic Lifting', true, [
      { name: 'Clean & Jerk', sets: '5x3' }
    ]),
    createWorkout('February 2, 2026', 'Tuesday', null, false, []),
    createWorkout('February 3, 2026', 'Wednesday', 'Upper Body Strength', true, [
      { name: 'Bench Press', sets: '4x8' }
    ]),
    createWorkout('February 4, 2026', 'Thursday', null, false, []),
    createWorkout('February 5, 2026', 'Friday', 'Lower Body Strength', false, [
      { name: 'Squats', sets: '4x8' }
    ]),
    createWorkout('February 6, 2026', 'Saturday', 'Core & Cardio', false, [
      { name: 'Planks', sets: '3x60s' }
    ]),
    createWorkout('February 7, 2026', 'Sunday', null, false, []),
  ],
  '3': [
    createWorkout('February 1, 2026', 'Monday', 'Heavy Squats', true, [
      { name: 'Back Squats', sets: '5x5' }
    ]),
    createWorkout('February 2, 2026', 'Tuesday', 'Bench Press Day', true, [
      { name: 'Bench Press', sets: '5x5' }
    ]),
    createWorkout('February 3, 2026', 'Wednesday', 'Deadlift Training', true, [
      { name: 'Deadlifts', sets: '5x3' }
    ]),
    createWorkout('February 4, 2026', 'Thursday', 'Accessory Work', true, [
      { name: 'Face Pulls', sets: '3x15' }
    ]),
    createWorkout('February 5, 2026', 'Friday', 'Olympic Lifts', false, [
      { name: 'Power Clean', sets: '5x3' }
    ]),
    createWorkout('February 6, 2026', 'Saturday', 'Conditioning', false, [
      { name: 'Sprints', sets: '10x100m' }
    ]),
    createWorkout('February 7, 2026', 'Sunday', 'Rest day', false, []),
  ],
  '4': [
    createWorkout('February 1, 2026', 'Monday', 'Full Body Strength', true, [
      { name: 'Squats', sets: '4x8' }
    ]),
    createWorkout('February 2, 2026', 'Tuesday', 'HIIT Session', true, [
      { name: 'Burpees', sets: '3x15' }
    ]),
    createWorkout('February 3, 2026', 'Wednesday', null, false, []),
    createWorkout('February 4, 2026', 'Thursday', 'Lower Body Focus', false, [
      { name: 'Leg Press', sets: '4x12' }
    ]),
    createWorkout('February 5, 2026', 'Friday', null, false, []),
    createWorkout('February 6, 2026', 'Saturday', 'Upper Body & Core', false, [
      { name: 'Push-ups', sets: '3x15' }
    ]),
    createWorkout('February 7, 2026', 'Sunday', null, false, []),
  ],
  '5': [
    createWorkout('January 10, 2026', 'Monday', 'Upper Body', true, [
      { name: 'Bench Press', sets: '4x8' }
    ]),
    createWorkout('January 13, 2026', 'Thursday', 'Lower Body', true, [
      { name: 'Squats', sets: '4x8' }
    ]),
    createWorkout('January 15, 2026', 'Saturday', 'Full Body', true, [
      { name: 'Deadlifts', sets: '3x10' }
    ]),
  ],
  '6': [
    createWorkout('December 26, 2025', 'Monday', 'Cardio', true, [
      { name: 'Running', sets: '30 min' }
    ]),
    createWorkout('December 28, 2025', 'Wednesday', 'Strength Training', true, [
      { name: 'Squats', sets: '3x12' }
    ]),
  ],
};

// Goals by athlete
export const athleteGoals: Record<string, Goal[]> = {
  '1': [
    { id: 1, title: 'Increase Bench Press', description: 'Reach 225 lbs bench press', target: '225 lbs', progress: 75, dueDate: 'March 31, 2026' },
    { id: 2, title: 'Body Fat Percentage', description: 'Reduce body fat to 12%', target: '12%', progress: 60, dueDate: 'April 30, 2026' },
    { id: 3, title: 'Consistency', description: 'Complete 4 workouts per week', target: '4/week', progress: 90, dueDate: 'February 28, 2026' },
  ],
  '2': [
    { id: 1, title: 'Clean & Jerk PR', description: 'Hit 185 lbs clean & jerk', target: '185 lbs', progress: 80, dueDate: 'March 15, 2026' },
    { id: 2, title: 'Flexibility', description: 'Improve overhead squat mobility', target: 'Full ROM', progress: 50, dueDate: 'May 31, 2026' },
  ],
  '3': [
    { id: 1, title: 'Deadlift 500', description: 'Pull 500 lbs deadlift', target: '500 lbs', progress: 85, dueDate: 'February 28, 2026' },
    { id: 2, title: 'Squat 400', description: 'Back squat 400 lbs', target: '400 lbs', progress: 70, dueDate: 'March 31, 2026' },
  ],
  '4': [
    { id: 1, title: 'Weight Loss', description: 'Lose 10 lbs', target: '120 lbs', progress: 40, dueDate: 'April 30, 2026' },
  ],
};

// Documents by athlete
export const athleteDocuments: Record<string, Document[]> = {
  '1': [
    { id: 1, name: 'Workout Plan - Q1 2026', type: 'PDF', uploadedDate: 'January 5, 2026', size: '2.4 MB' },
    { id: 2, name: 'Progress Photos', type: 'Images', uploadedDate: 'February 1, 2026', size: '8.1 MB' },
    { id: 3, name: 'Nutrition Guide', type: 'PDF', uploadedDate: 'January 10, 2026', size: '1.8 MB' },
  ],
  '2': [
    { id: 1, name: 'Olympic Lifting Program', type: 'PDF', uploadedDate: 'January 15, 2026', size: '3.2 MB' },
    { id: 2, name: 'Form Check Videos', type: 'Videos', uploadedDate: 'January 28, 2026', size: '45.6 MB' },
  ],
  '3': [
    { id: 1, name: 'Powerlifting Cycle', type: 'PDF', uploadedDate: 'February 1, 2026', size: '2.1 MB' },
  ],
  '4': [
    { id: 1, name: 'Beginner Program', type: 'PDF', uploadedDate: 'January 20, 2026', size: '1.5 MB' },
  ],
};

// Messages by athlete
export const athleteMessages: Record<string, Message[]> = {
  '1': [
    { id: 1, sender: 'Athlete', content: 'How was my last workout?', timestamp: new Date('2026-02-04') },
    { id: 2, sender: 'Coach', content: 'Great job! Keep it up.', timestamp: new Date('2026-02-04') },
  ],
  '2': [
    { id: 1, sender: 'Athlete', content: 'Need help with my form on the clean & jerk.', timestamp: new Date('2026-02-03') },
    { id: 2, sender: 'Coach', content: 'Sure, I can review the video.', timestamp: new Date('2026-02-03') },
  ],
  '3': [
    { id: 1, sender: 'Athlete', content: 'Feeling a bit sore today.', timestamp: new Date('2026-02-04') },
    { id: 2, sender: 'Coach', content: 'Take it easy and rest.', timestamp: new Date('2026-02-04') },
  ],
  '4': [
    { id: 1, sender: 'Athlete', content: 'Any tips for weight loss?', timestamp: new Date('2026-02-02') },
    { id: 2, sender: 'Coach', content: 'Focus on diet and consistency.', timestamp: new Date('2026-02-02') },
  ],
};

// Helper functions
export const getAthlete = (id: string): Athlete | undefined => {
  return athletes[id] || archivedAthletes[id];
};

export const getAthleteWorkouts = (id: string): ScheduledWorkout[] => {
  return athleteWorkouts[id] || [];
};

export const getAthleteSchedule = (id: string, limit?: number): ScheduledWorkout[] => {
  const workouts = athleteWorkouts[id] || [];
  const weekDates = getCurrentWeekDates();
  
  // Create a map of existing workouts by date
  const workoutMap = new Map<string, ScheduledWorkout>();
  workouts.forEach(workout => {
    workoutMap.set(workout.date, workout);
  });
  
  // Generate 7 days for the current week, merging with existing workouts
  return weekDates.map(({ date, day, dateObj }) => {
    const existingWorkout = workoutMap.get(date);
    
    if (existingWorkout) {
      return existingWorkout;
    }
    
    // Return empty workout slot
    return {
      date,
      day,
      dateObj,
      workout: null,
      completed: false,
      exercises: []
    };
  });
};

export const getAthleteGoals = (id: string): Goal[] => {
  return athleteGoals[id] || [];
};

export const getAthleteDocuments = (id: string): Document[] => {
  return athleteDocuments[id] || [];
};

export const getAthleteMessages = (id: string): Message[] => {
  return athleteMessages[id] || [];
};

export const getActiveAthletes = (): Athlete[] => {
  return Object.values(athletes);
};

export const getArchivedAthletes = (): Athlete[] => {
  return Object.values(archivedAthletes);
};

export const isAthleteArchived = (id: string): boolean => {
  return !!archivedAthletes[id];
};