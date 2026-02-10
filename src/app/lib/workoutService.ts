import {
  doc, setDoc, getDoc, updateDoc,
  collection, query, where, orderBy, onSnapshot,
  serverTimestamp, Timestamp
} from 'firebase/firestore';
import { db } from './firebase';

// ---- Type Definitions ----

export interface WorkoutExercise {
  name: string;
  sets: string;
  reps: string;
  weight: string;
  notes: string;
  videoUrl?: string;
  completed: boolean;
}

export interface WorkoutDoc {
  date: string;                // ISO "2026-02-05"
  exercises: WorkoutExercise[];
  workoutNotes: string;
  isRestDay: boolean;
  completed: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// ---- Firestore Path Helpers ----

const workoutDocRef = (athleteId: string, dateString: string) =>
  doc(db, 'users', athleteId, 'workouts', dateString);

const workoutsCollectionRef = (athleteId: string) =>
  collection(db, 'users', athleteId, 'workouts');

// ---- Write Operations ----

/** Save or update a workout (used by coach when saving from WorkoutDetail) */
export async function saveWorkout(
  athleteId: string,
  dateString: string,
  exercises: WorkoutExercise[],
  workoutNotes: string
): Promise<void> {
  const ref = workoutDocRef(athleteId, dateString);
  const existing = await getDoc(ref);

  if (existing.exists()) {
    await updateDoc(ref, {
      exercises,
      workoutNotes,
      isRestDay: false,
      updatedAt: serverTimestamp(),
    });
  } else {
    await setDoc(ref, {
      date: dateString,
      exercises,
      workoutNotes,
      isRestDay: false,
      completed: false,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  }
}

/** Set or unset a rest day */
export async function setRestDay(
  athleteId: string,
  dateString: string,
  isRestDay: boolean
): Promise<void> {
  const ref = workoutDocRef(athleteId, dateString);
  const existing = await getDoc(ref);

  if (existing.exists()) {
    await updateDoc(ref, {
      isRestDay,
      updatedAt: serverTimestamp(),
    });
  } else {
    await setDoc(ref, {
      date: dateString,
      exercises: [],
      workoutNotes: '',
      isRestDay,
      completed: false,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  }
}

/** Toggle individual exercise completion (athlete side) */
export async function toggleExerciseCompletion(
  athleteId: string,
  dateString: string,
  exerciseIndex: number,
  completed: boolean
): Promise<void> {
  const ref = workoutDocRef(athleteId, dateString);
  const snap = await getDoc(ref);
  if (!snap.exists()) return;

  const data = snap.data();
  const exercises = [...data.exercises];
  exercises[exerciseIndex] = { ...exercises[exerciseIndex], completed };

  await updateDoc(ref, {
    exercises,
    updatedAt: serverTimestamp(),
  });
}

/** Mark entire workout as completed (athlete side) */
export async function completeWorkout(
  athleteId: string,
  dateString: string
): Promise<void> {
  const ref = workoutDocRef(athleteId, dateString);
  const snap = await getDoc(ref);
  if (!snap.exists()) return;

  const data = snap.data();
  const exercises = data.exercises.map((ex: WorkoutExercise) => ({
    ...ex,
    completed: true,
  }));

  await updateDoc(ref, {
    exercises,
    completed: true,
    updatedAt: serverTimestamp(),
  });
}

// ---- Read Operations ----

/** Get a single workout by date */
export async function getWorkout(
  athleteId: string,
  dateString: string
): Promise<WorkoutDoc | null> {
  const snap = await getDoc(workoutDocRef(athleteId, dateString));
  return snap.exists() ? (snap.data() as WorkoutDoc) : null;
}

/** Subscribe to workouts for a date range (real-time) */
export function subscribeToWorkoutsInRange(
  athleteId: string,
  startDate: string,
  endDate: string,
  callback: (workouts: Map<string, WorkoutDoc>) => void
): () => void {
  const q = query(
    workoutsCollectionRef(athleteId),
    where('date', '>=', startDate),
    where('date', '<=', endDate),
    orderBy('date')
  );

  return onSnapshot(q, (snap) => {
    const map = new Map<string, WorkoutDoc>();
    snap.docs.forEach((d) => {
      map.set(d.id, d.data() as WorkoutDoc);
    });
    callback(map);
  });
}

/** Subscribe to ALL workouts for an athlete (real-time, for month views) */
export function subscribeToAllWorkouts(
  athleteId: string,
  callback: (workouts: WorkoutDoc[]) => void
): () => void {
  const q = query(
    workoutsCollectionRef(athleteId),
    orderBy('date', 'desc')
  );

  return onSnapshot(q, (snap) => {
    const list = snap.docs.map((d) => d.data() as WorkoutDoc);
    callback(list);
  });
}
