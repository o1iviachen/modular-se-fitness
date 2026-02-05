import { useAuth } from '../../context/AuthContext';
import { ChevronRight, Target, FileText, User, Mail, LogOut, Settings, Bell, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router';

export function AthleteProfile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      logout();
      navigate('/login');
    }
  };

  return (
    <div className="min-h-full bg-gray-50 pb-6">
      {/* Header */}
      <div className="bg-black text-white px-6 py-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-20 bg-[#FFD000] rounded-full flex items-center justify-center text-black text-2xl">
            {user?.firstName?.[0]}{user?.lastName?.[0]}
          </div>
          <div>
            <h1 className="text-xl font-semibold">{user?.firstName} {user?.lastName}</h1>
            <p className="text-gray-400 text-sm">{user?.email}</p>
          </div>
        </div>
      </div>

      {/* Settings Options */}
      <div className="px-6 mt-6">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <button
            onClick={() => navigate('/athlete/edit-profile')}
            className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors border-b border-gray-100"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FFD000]/10 rounded-lg flex items-center justify-center">
                <User className="w-5 h-5 text-[#FFD000]" />
              </div>
              <span className="text-black">Personal Information</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button
            onClick={() => navigate('/athlete/goals')}
            className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors border-b border-gray-100"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FFD000]/10 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-[#FFD000]" />
              </div>
              <span className="text-black">My Goals</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button
            onClick={() => navigate('/athlete/documents')}
            className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors border-b border-gray-100"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FFD000]/10 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#FFD000]" />
              </div>
              <span className="text-black">Documents</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button
            onClick={() => navigate('/athlete/notification-settings')}
            className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors border-b border-gray-100"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FFD000]/10 rounded-lg flex items-center justify-center">
                <Bell className="w-5 h-5 text-[#FFD000]" />
              </div>
              <span className="text-black">Notification Settings</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button
            onClick={() => navigate('/athlete/help-support')}
            className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FFD000]/10 rounded-lg flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-[#FFD000]" />
              </div>
              <span className="text-black">Help & Support</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Logout */}
      <div className="px-6 mt-6">
        <button
          onClick={handleLogout}
          className="w-full bg-red-50 text-red-600 rounded-xl p-5 shadow-sm flex items-center justify-center gap-3 hover:bg-red-100 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Log Out</span>
        </button>
      </div>
    </div>
  );
}