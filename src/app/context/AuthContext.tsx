import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'athlete' | 'coach';
  coachCode?: string;
  coachId?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  signup: (email: string, password: string, firstName: string, lastName: string, role: 'athlete' | 'coach') => Promise<void>;
  signupWithGoogle: (role: 'athlete' | 'coach', firstName: string, lastName: string) => Promise<void>;
  logout: () => void;
  connectCoach: (coachCode: string) => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const mockUsers = {
  coaches: [{ id: 'coach-1', email: 'coach@sefitness.com', password: 'coach123', firstName: 'Sarah', lastName: 'Edwards', role: 'coach' as const, coachCode: 'SE2024' }],
  athletes: [{ id: 'athlete-1', email: 'athlete@example.com', password: 'athlete123', firstName: 'John', lastName: 'Doe', role: 'athlete' as const, coachId: 'coach-1' }]
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('se_fitness_user');
    return saved ? JSON.parse(saved) : null;
  });

  const saveUser = (userData: any) => {
    const { password, ...userWithoutPassword } = userData;
    setUser(userWithoutPassword);
    localStorage.setItem('se_fitness_user', JSON.stringify(userWithoutPassword));
  };

  const login = async (email: string, password: string) => {
    const found = [...mockUsers.coaches, ...mockUsers.athletes].find(u => u.email === email && u.password === password);
    if (!found) throw new Error('Invalid credentials');
    saveUser(found);
  };

  const loginWithGoogle = async () => {
    saveUser({
      id: 'google-' + Date.now(),
      email: 'google@example.com',
      firstName: 'Google',
      lastName: 'User',
      role: 'athlete',
      coachId: 'coach-1'
    });
  };

  const signup = async (email: string, password: string, firstName: string, lastName: string, role: 'athlete' | 'coach') => {
    saveUser({
      id: `${role}-${Date.now()}`,
      email,
      firstName,
      lastName,
      role,
      ...(role === 'coach' && { coachCode: `${firstName.toUpperCase()}${Date.now()}` })
    });
  };

  const signupWithGoogle = async (role: 'athlete' | 'coach', firstName: string, lastName: string) => {
    saveUser({
      id: `${role}-google-${Date.now()}`,
      email: 'google@example.com',
      firstName,
      lastName,
      role,
      ...(role === 'coach' && { coachCode: `${firstName.toUpperCase()}${Date.now()}` })
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('se_fitness_user');
  };

  const connectCoach = async (coachCode: string) => {
    const coach = mockUsers.coaches.find(c => c.coachCode === coachCode);
    if (!coach) throw new Error('Invalid coach code');
    if (user) {
      const updatedUser = { ...user, coachId: coach.id };
      setUser(updatedUser);
      localStorage.setItem('se_fitness_user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, loginWithGoogle, signup, signupWithGoogle, logout, connectCoach, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
