import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { AuthContainer } from '../components/ui/auth-container';
import { PrimaryButton } from '../components/ui/primary-button';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../lib/firebase';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resetMode, setResetMode] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);
  const navigate = useNavigate();
  const { login, loginWithGoogle } = useAuth();

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate('/dashboard');
    } catch (err) {
      setError('Google login failed');
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setResetLoading(true);
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      setResetSent(true);
    } catch {
      setError('Could not send reset email. Please check the address.');
    } finally {
      setResetLoading(false);
    }
  };

  if (resetMode) {
    return (
      <AuthContainer>
        {resetSent ? (
          <div className="text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-[#FFD000] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-white text-xl font-semibold mb-2">Check Your Email</h2>
              <p className="text-gray-400 text-sm">
                We sent a password reset link to <span className="text-white">{resetEmail}</span>
              </p>
            </div>
            <button
              onClick={() => { setResetMode(false); setResetSent(false); setResetEmail(''); }}
              className="text-[#FFD000] hover:underline"
            >
              Back to Login
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-white text-xl font-semibold mb-2 text-center">Reset Password</h2>
            <p className="text-gray-400 text-sm mb-6 text-center">
              Enter your email and we'll send you a reset link
            </p>

            {error && (
              <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded-lg text-red-500 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleResetPassword} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                className="w-full p-4 bg-white rounded-lg text-black placeholder-gray-500"
                required
              />
              <PrimaryButton
                type="submit"
                disabled={resetLoading}
                className="w-full p-4 bg-[#FFD000] text-black rounded-lg hover:bg-[#FFD000]/90 transition-colors disabled:opacity-50"
              >
                {resetLoading ? 'Sending...' : 'Send Reset Link'}
              </PrimaryButton>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => { setResetMode(false); setError(''); }}
                className="text-[#FFD000] hover:underline"
              >
                Back to Login
              </button>
            </div>
          </>
        )}
      </AuthContainer>
    );
  }

  return (
    <AuthContainer>
      {error && (
        <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded-lg text-red-500 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleEmailLogin} className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 bg-white rounded-lg text-black placeholder-gray-500"
            required
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 bg-white rounded-lg text-black placeholder-gray-500"
            required
          />
        </div>

        <div className="text-right">
          <button
            type="button"
            onClick={() => { setResetMode(true); setResetEmail(email); setError(''); }}
            className="text-gray-400 text-sm hover:text-[#FFD000] transition-colors"
          >
            Forgot Password?
          </button>
        </div>

        <PrimaryButton
          type="submit"
          disabled={loading}
          className="w-full p-4 bg-[#FFD000] text-black rounded-lg hover:bg-[#FFD000]/90 transition-colors disabled:opacity-50"
        >
          {loading ? 'Logging in...' : 'Log In'}
        </PrimaryButton>
      </form>

      <div className="my-6 flex items-center">
        <div className="flex-1 border-t border-gray-600"></div>
        <span className="px-4 text-gray-400 text-sm">OR</span>
        <div className="flex-1 border-t border-gray-600"></div>
      </div>

      <button
        onClick={handleGoogleLogin}
        className="w-full p-4 bg-white text-black rounded-lg flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="currentColor"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="currentColor"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="currentColor"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
        Continue with Google
      </button>

      <div className="mt-8 text-center">
        <span className="text-gray-400">Don't have an account? </span>
        <button
          onClick={() => navigate('/signup')}
          className="text-[#FFD000] hover:underline"
        >
          Sign Up
        </button>
      </div>

    </AuthContainer>
  );
}
