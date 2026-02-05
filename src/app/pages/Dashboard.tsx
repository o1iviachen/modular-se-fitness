import { Navigate } from 'react-router';
import { useAuth } from '../context/AuthContext';

export function Dashboard() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.role === 'athlete') {
    return <Navigate to="/athlete/home" />;
  }

  return <Navigate to="/coach/home" />;
}
