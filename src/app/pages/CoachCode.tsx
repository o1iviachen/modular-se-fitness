import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { AuthContainer } from '../components/ui/auth-container';
import { PrimaryButton } from '../components/ui/primary-button';

export function CoachCode() {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { completeAthleteSignup } = useAuth();

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (value.length <= 6) {
      setCode(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (code.length !== 6) {
      setError('Coach code must be exactly 6 characters');
      return;
    }

    setLoading(true);

    try {
      await completeAthleteSignup(code);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err?.message || 'Invalid coach code');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContainer>
      <h1 className="text-white text-3xl mb-4 text-center">Enter Coach Code</h1>
      <p className="text-gray-400 text-center mb-8">
        Ask your coach for their unique code to connect
      </p>

      {error && (
        <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded-lg text-red-500 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Coach Code (e.g., SE2024)"
          value={code}
          onChange={handleCodeChange}
          className="w-full p-4 bg-white rounded-lg text-black placeholder-gray-500 text-center text-xl tracking-wider"
          required
        />

        <PrimaryButton
          type="submit"
          disabled={loading}
          fullWidth
        >
          {loading ? 'Connecting...' : 'Connect to Coach'}
        </PrimaryButton>
      </form>

    </AuthContainer>
  );
}