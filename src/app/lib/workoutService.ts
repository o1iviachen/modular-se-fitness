import {
  doc, setDoc, getDoc, updateDoc, deleteDoc,
  collection, query, where, orderBy, onSnapshot,
  serverTimestamp, Timestamp
} from 'firebase/firestore';
import { ref as storageRef, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from './firebase';

// ---- Type Definitions ----

export interface ResultMedia {
  url: string;
  type: 'image' | 'video';
  storagePath: string;
}

export interface WorkoutExercise {
  name: string;
  sets?: string;
  reps?: string;
  weight?: string;
  notes?: string;
  videoUrl?: string;
  completed?: boolean;
  supersetWithPrev?: boolean;
  result?: string;
  resultMedia?: ResultMedia[];
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

/** Delete a workout */
export async function deleteWorkout(
  athleteId: string,
  dateString: string
): Promise<void> {
  await deleteDoc(workoutDocRef(athleteId, dateString));
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

/** Update a single field on one exercise within a workout */
async function updateExerciseField(
  athleteId: string,
  dateString: string,
  exerciseIndex: number,
  updates: Partial<WorkoutExercise>
): Promise<void> {
  const ref = workoutDocRef(athleteId, dateString);
  const snap = await getDoc(ref);
  if (!snap.exists()) return;

  const exercises = [...snap.data().exercises];
  exercises[exerciseIndex] = { ...exercises[exerciseIndex], ...updates };

  await updateDoc(ref, { exercises, updatedAt: serverTimestamp() });
}

/** Toggle individual exercise completion (athlete side) */
export async function toggleExerciseCompletion(
  athleteId: string, dateString: string, exerciseIndex: number, completed: boolean
): Promise<void> {
  await updateExerciseField(athleteId, dateString, exerciseIndex, { completed });
}

/** Save athlete's result text for a specific exercise */
export async function saveExerciseResult(
  athleteId: string, dateString: string, exerciseIndex: number, result: string, resultMedia?: ResultMedia[]
): Promise<void> {
  const updates: Partial<WorkoutExercise> = { result };
  if (resultMedia !== undefined) {
    updates.resultMedia = resultMedia;
  }
  await updateExerciseField(athleteId, dateString, exerciseIndex, updates);
}

/** Upload a result media file (photo or video) for an exercise */
export async function uploadResultMedia(
  athleteId: string, dateString: string, exerciseIndex: number, file: File
): Promise<ResultMedia> {
  const isVideo = file.type.startsWith('video/');
  const ext = file.name.split('.').pop() || (isVideo ? 'mp4' : 'jpg');
  const fileName = `${Date.now()}.${ext}`;
  const path = `results/${athleteId}/${dateString}/${exerciseIndex}/${fileName}`;
  const fileRef = storageRef(storage, path);
  await uploadBytes(fileRef, file);
  const url = await getDownloadURL(fileRef);
  return { url, type: isVideo ? 'video' : 'image', storagePath: path };
}

/** Delete a result media file from storage */
export async function deleteResultMedia(storagePath: string): Promise<void> {
  await deleteObject(storageRef(storage, storagePath));
}

/** Mark entire workout as completed (athlete side) */
export async function completeWorkout(
  athleteId: string,
  dateString: string
): Promise<void> {
  const ref = workoutDocRef(athleteId, dateString);

  await updateDoc(ref, {
    completed: true,
    updatedAt: serverTimestamp(),
  });
}

/** Copy a workout from one date to multiple target dates */
export async function copyWorkout(
  athleteId: string,
  targetDates: string[],
  exercises: WorkoutExercise[],
  workoutNotes: string
): Promise<void> {
  const cleanExercises: WorkoutExercise[] = exercises.map(ex => ({
    name: ex.name || '',
    sets: ex.sets || '',
    reps: ex.reps || '',
    weight: ex.weight || '',
    notes: ex.notes || '',
    videoUrl: ex.videoUrl || '',
    completed: false,
    supersetWithPrev: ex.supersetWithPrev || false,
  }));

  await Promise.all(
    targetDates.map(date =>
      setDoc(workoutDocRef(athleteId, date), {
        date,
        exercises: cleanExercises,
        workoutNotes: workoutNotes || '',
        isRestDay: false,
        completed: false,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      })
    )
  );
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
