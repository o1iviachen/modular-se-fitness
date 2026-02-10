import {
  doc, addDoc, updateDoc, deleteDoc,
  collection, query, orderBy, onSnapshot,
  serverTimestamp, Timestamp
} from 'firebase/firestore';
import { db } from './firebase';

// ---- Type Definitions ----

export interface GoalDoc {
  title: string;
  target: string;
  deadline: string;
  completed: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface Goal extends GoalDoc {
  id: string; // Firestore doc ID
}

// ---- Firestore Path Helpers ----

const goalsCollectionRef = (athleteId: string) =>
  collection(db, 'users', athleteId, 'goals');

const goalDocRef = (athleteId: string, goalId: string) =>
  doc(db, 'users', athleteId, 'goals', goalId);

// ---- Write Operations ----

export async function addGoal(
  athleteId: string,
  goal: { title: string; target: string; deadline: string }
): Promise<void> {
  await addDoc(goalsCollectionRef(athleteId), {
    ...goal,
    completed: false,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}

export async function updateGoal(
  athleteId: string,
  goalId: string,
  updates: Partial<Pick<GoalDoc, 'title' | 'target' | 'deadline' | 'completed'>>
): Promise<void> {
  await updateDoc(goalDocRef(athleteId, goalId), {
    ...updates,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteGoal(
  athleteId: string,
  goalId: string
): Promise<void> {
  await deleteDoc(goalDocRef(athleteId, goalId));
}

// ---- Read Operations ----

export function subscribeToGoals(
  athleteId: string,
  callback: (goals: Goal[]) => void
): () => void {
  const q = query(goalsCollectionRef(athleteId), orderBy('createdAt'));

  return onSnapshot(q, (snap) => {
    const goals = snap.docs.map((d) => ({
      id: d.id,
      ...(d.data() as GoalDoc),
    }));
    callback(goals);
  });
}
