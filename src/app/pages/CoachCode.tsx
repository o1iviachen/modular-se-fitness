import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import logo from 'figma:asset/6715fa8a90369e65d79802402e0679daa2d685be.png';
import gymBackground from 'figma:asset/22995820038f42fe600c7769e604277fa0c09953.png';

export function CoachCode() {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { connectCoach } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await connectCoach(code);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid coach code');
    } finally {
      setLoading(false);
    }
  };

  const handleSkip = () => {
    navigate('/dashboard');
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
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              className="w-full p-4 bg-white rounded-lg text-black placeholder-gray-500 text-center text-xl tracking-wider"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full p-4 bg-[#FFD000] text-black rounded-lg hover:bg-[#FFD000]/90 transition-colors disabled:opacity-50"
            >
              {loading ? 'Connecting...' : 'Connect to Coach'}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            Demo code: SE2024
          </div>

          <button
            type="button"
            onClick={handleSkip}
            className="mt-4 w-full p-4 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Skip for Now
          </button>
        </div>
      </div>
    </div>
  );
}