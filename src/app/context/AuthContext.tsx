import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { auth, googleProvider, db } from '../lib/firebase';

const PENDING_SIGNUP_KEY = 'pending_athlete_signup';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'athlete' | 'coach';
  coachCode?: string;
  coachId?: string;
  photoURL?: string;
}

interface PendingAthleteSignup {
  authMethod: 'email' | 'google';
  email: string;
  password?: string;
  firstName: string;
  lastName: string;
  uid?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  signup: (email: string, password: string, firstName: string, lastName: string, role: 'athlete' | 'coach') => Promise<void>;
  signupWithGoogle: (role: 'athlete' | 'coach', firstName: string, lastName: string) => Promise<void>;
  logout: () => void;
  connectCoach: (coachCode: string) => Promise<void>;
  completeAthleteSignup: (coachCode: string) => Promise<void>;
  updateUserPhoto: (photoURL: string) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function generateCoachCode(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

async function fetchUserProfile(uid: string): Promise<User | null> {
  const snap = await getDoc(doc(db, 'users', uid));
  if (!snap.exists()) return null;
  const data = snap.data();
  return {
    id: uid,
    email: data.email,
    firstName: data.firstName,
    lastName: data.lastName,
    role: data.role,
    coachCode: data.coachCode,
    coachId: data.coachId,
    photoURL: data.photoURL,
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const profile = await fetchUserProfile(firebaseUser.uid);
        if (profile) {
          setUser(profile);
        } else {
          // Auth user exists but no Firestore profile
          const pending = sessionStorage.getItem(PENDING_SIGNUP_KEY);
          if (pending) {
            // Mid-signup flow (Google athlete) — leave auth user, don't set app user
            setUser(null);
          } else {
            // Orphaned auth user — clean up
            await firebaseUser.delete().catch(() => signOut(auth));
            setUser(null);
          }
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const login = async (email: string, password: string) => {
    const credential = await signInWithEmailAndPassword(auth, email, password);
    const profile = await fetchUserProfile(credential.user.uid);
    if (!profile) {
      await signOut(auth);
      throw new Error('No account profile found. Please sign up first.');
    }
    setUser(profile);
  };

  const loginWithGoogle = async () => {
    const credential = await signInWithPopup(auth, googleProvider);
    const profile = await fetchUserProfile(credential.user.uid);
    if (!profile) {
      await credential.user.delete().catch(() => signOut(auth));
      throw new Error('No account found. Please sign up first.');
    }
    setUser(profile);
  };

  const signup = async (email: string, password: string, firstName: string, lastName: string, role: 'athlete' | 'coach') => {
    if (role === 'athlete') {
      // Defer account creation — store form data for the coach-code step
      const pending: PendingAthleteSignup = { authMethod: 'email', email, password, firstName, lastName };
      sessionStorage.setItem(PENDING_SIGNUP_KEY, JSON.stringify(pending));
      return;
    }

    // Coach: create account immediately
    const credential = await createUserWithEmailAndPassword(auth, email, password);
    const uid = credential.user.uid;
    const coachCode = generateCoachCode();

    await setDoc(doc(db, 'users', uid), {
      email,
      firstName,
      lastName,
      role,
      coachCode,
      createdAt: serverTimestamp(),
    });
    await setDoc(doc(db, 'coachCodes', coachCode), { coachId: uid });

    setUser({ id: uid, email, firstName, lastName, role, coachCode });
  };

  const signupWithGoogle = async (role: 'athlete' | 'coach', firstName: string, lastName: string) => {
    const credential = await signInWithPopup(auth, googleProvider);
    const uid = credential.user.uid;
    const email = credential.user.email!;

    if (role === 'athlete') {
      // Defer Firestore profile — store pending data for the coach-code step
      const pending: PendingAthleteSignup = { authMethod: 'google', email, firstName, lastName, uid };
      sessionStorage.setItem(PENDING_SIGNUP_KEY, JSON.stringify(pending));
      return;
    }

    // Coach: write profile immediately
    const coachCode = generateCoachCode();
    await setDoc(doc(db, 'users', uid), {
      email,
      firstName,
      lastName,
      role,
      coachCode,
      createdAt: serverTimestamp(),
    });
    await setDoc(doc(db, 'coachCodes', coachCode), { coachId: uid });

    setUser({ id: uid, email, firstName, lastName, role, coachCode });
  };

  const completeAthleteSignup = async (coachCode: string) => {
    // Validate coach code first
    const codeSnap = await getDoc(doc(db, 'coachCodes', coachCode));
    if (!codeSnap.exists()) throw new Error('Invalid coach code');
    const coachId = codeSnap.data().coachId;

    const raw = sessionStorage.getItem(PENDING_SIGNUP_KEY);
    if (!raw) throw new Error('No pending signup found. Please start over from the signup page.');
    const pending: PendingAthleteSignup = JSON.parse(raw);

    let uid: string;
    let email: string;

    if (pending.authMethod === 'email') {
      // Now create the Firebase Auth user
      const credential = await createUserWithEmailAndPassword(auth, pending.email, pending.password!);
      uid = credential.user.uid;
      email = pending.email;
    } else {
      // Google auth user already exists
      uid = pending.uid || auth.currentUser?.uid!;
      email = pending.email;
    }

    // Write Firestore profile with coachId already included
    await setDoc(doc(db, 'users', uid), {
      email,
      firstName: pending.firstName,
      lastName: pending.lastName,
      role: 'athlete',
      coachId,
      age: null,
      gender: null,
      weight: null,
      height: null,
      streak: 0,
      workoutsCompleted: 0,
      workoutCompletionRate: 0,
      lastWorkoutDate: null,
      isArchived: false,
      createdAt: serverTimestamp(),
    });

    // Fetch coach profile for names
    const coachProfile = await fetchUserProfile(coachId);
    const coachName = coachProfile ? `${coachProfile.firstName} ${coachProfile.lastName}` : 'Coach';

    // Add athlete to coach's athletes map
    await updateDoc(doc(db, 'users', coachId), {
      [`athletes.${uid}`]: {
        firstName: pending.firstName,
        lastName: pending.lastName,
        email,
      },
    });

    // Create a conversation between athlete and coach
    await addDoc(collection(db, 'conversations'), {
      athleteId: uid,
      coachId,
      athleteName: `${pending.firstName} ${pending.lastName}`,
      coachName,
      lastMessage: '',
      lastMessageAt: serverTimestamp(),
      createdAt: serverTimestamp(),
    });

    sessionStorage.removeItem(PENDING_SIGNUP_KEY);
    setUser({ id: uid, email, firstName: pending.firstName, lastName: pending.lastName, role: 'athlete', coachId });
  };

  const logout = () => {
    signOut(auth);
    setUser(null);
    sessionStorage.removeItem(PENDING_SIGNUP_KEY);
    localStorage.removeItem('se_fitness_user');
  };

  const updateUserPhoto = (photoURL: string) => {
    setUser((prev) => prev ? { ...prev, photoURL } : null);
  };

  const connectCoach = async (coachCode: string) => {
    const codeSnap = await getDoc(doc(db, 'coachCodes', coachCode));
    if (!codeSnap.exists()) throw new Error('Invalid coach code');

    const coachId = codeSnap.data().coachId;
    const uid = auth.currentUser?.uid;
    if (!uid) throw new Error('Not authenticated');

    await updateDoc(doc(db, 'users', uid), { coachId });
    setUser((prev) => prev ? { ...prev, coachId } : null);
  };

  if (loading) return null;

  return (
    <AuthContext.Provider value={{ user, login, loginWithGoogle, signup, signupWithGoogle, logout, connectCoach, completeAthleteSignup, updateUserPhoto, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
