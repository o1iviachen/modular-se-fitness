import { Outlet, useNavigate, useLocation } from 'react-router';
import { Home, MessageCircle, User } from 'lucide-react';

export function AthleteLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="h-screen bg-white flex flex-col">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 px-6 py-3 flex justify-around items-center">
        <button
          onClick={() => navigate('/athlete/home')}
          className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
            isActive('/athlete/home')
              ? 'text-[#FFD000]'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs">Home</span>
        </button>

        <button
          onClick={() => navigate('/athlete/messages')}
          className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
            isActive('/athlete/messages')
              ? 'text-[#FFD000]'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <MessageCircle className="w-6 h-6" />
          <span className="text-xs">Messages</span>
        </button>

        <button
          onClick={() => navigate('/athlete/profile')}
          className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
            isActive('/athlete/profile')
              ? 'text-[#FFD000]'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <User className="w-6 h-6" />
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </div>
  );
}
