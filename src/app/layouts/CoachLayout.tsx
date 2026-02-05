import { Outlet, useNavigate, useLocation } from 'react-router';
import { Home, Library, MessageCircle, User } from 'lucide-react';

export function CoachLayout() {
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
      <div className="bg-white border-t border-gray-200 px-4 py-3 flex justify-around items-center">
        <button
          onClick={() => navigate('/coach/home')}
          className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
            isActive('/coach/home')
              ? 'text-[#FFD000]'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs">Athletes</span>
        </button>

        <button
          onClick={() => navigate('/coach/library')}
          className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
            isActive('/coach/library')
              ? 'text-[#FFD000]'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <Library className="w-6 h-6" />
          <span className="text-xs">Library</span>
        </button>

        <button
          onClick={() => navigate('/coach/inbox')}
          className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
            isActive('/coach/inbox')
              ? 'text-[#FFD000]'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <MessageCircle className="w-6 h-6" />
          <span className="text-xs">Inbox</span>
        </button>

        <button
          onClick={() => navigate('/coach/profile')}
          className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
            isActive('/coach/profile')
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
