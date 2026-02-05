import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import logo from 'figma:asset/6715fa8a90369e65d79802402e0679daa2d685be.png';
import gymBackground from 'figma:asset/22995820038f42fe600c7769e604277fa0c09953.png';

export function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState<'athlete' | 'coach' | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signup, loginWithGoogle } = useAuth();

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!role) {
      setError('Please select a role');
      return;
    }

    setError('');
    setLoading(true);

    try {
      await signup(email, password, firstName, lastName, role);
      if (role === 'athlete') {
        navigate('/coach-code');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      setError('Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    if (!role) {
      setError('Please select a role first');
      return;
    }
    
    try {
      await loginWithGoogle();
      if (role === 'athlete') {
        navigate('/coach-code');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      setError('Google signup failed');
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center p-6">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={gymBackground} 
          alt="" 
          className="w-full h-full object-cover"
        />
        {/* Black gradient overlay - strong at top, transparent at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-sm flex flex-col items-center -mt-12">
        {/* Logo */}
        <div className="mb-12">
          <img src={logo} alt="SE Fitness" className="h-32 w-auto" />
        </div>

        <div className="w-full">
          {role === null ? (
            <>
              <h1 className="text-white text-xl mb-6 text-center font-semibold">Create Account</h1>

              <div className="space-y-3">
                <button
                  onClick={() => setRole('athlete')}
                  className="w-full p-5 bg-[#FFD000] text-black rounded-lg hover:bg-[#FFD000]/90 transition-colors flex items-center justify-between group"
                >
                  <div className="text-left">
                    <div className="text-lg">Athlete</div>
                    <div className="text-sm opacity-70">Train with a coach</div>
                  </div>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <button
                  onClick={() => setRole('coach')}
                  className="w-full p-5 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-between group"
                >
                  <div className="text-left">
                    <div className="text-lg">Coach</div>
                    <div className="text-sm opacity-70">Train athletes</div>
                  </div>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div className="mt-6 text-center">
                <span className="text-gray-400">Already have an account? </span>
                <button
                  onClick={() => navigate('/login')}
                  className="text-[#FFD000] hover:underline"
                >
                  Log In
                </button>
              </div>
            </>
          ) : (
            <>
              <button
                onClick={() => setRole(null)}
                className="text-[#FFD000] mb-4 flex items-center gap-1 text-sm hover:gap-2 transition-all"
              >
                ← Back
              </button>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h2 className="text-white text-xl mb-1">
                  {role === 'athlete' ? 'Athlete' : 'Coach'} Sign Up
                </h2>
                <p className="text-gray-300 text-sm mb-5">
                  Fill in your details to get started
                </p>

                {error && (
                  <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded-lg text-red-500 text-sm">
                    {error}
                  </div>
                )}

                <form onSubmit={handleEmailSignup} className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="p-3 bg-white rounded-lg text-black placeholder-gray-500"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="p-3 bg-white rounded-lg text-black placeholder-gray-500"
                      required
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 bg-white rounded-lg text-black placeholder-gray-500"
                    required
                  />

                  <input
                    type="password"
                    placeholder="Password (min 6 characters)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 bg-white rounded-lg text-black placeholder-gray-500"
                    required
                    minLength={6}
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full p-4 bg-[#FFD000] text-black rounded-lg hover:bg-[#FFD000]/90 transition-colors disabled:opacity-50"
                  >
                    {loading ? 'Creating Account...' : 'Create Account'}
                  </button>
                </form>

                <div className="my-4 flex items-center">
                  <div className="flex-1 border-t border-gray-600"></div>
                  <span className="px-4 text-gray-400 text-sm">OR</span>
                  <div className="flex-1 border-t border-gray-600"></div>
                </div>

                <button
                  onClick={handleGoogleSignup}
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
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}