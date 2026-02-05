import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Copy, Check, Mail, LogOut, Share2, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router';

export function CoachProfile() {
  const { user, logout } = useAuth();
  const [codeCopied, setCodeCopied] = useState(false);
  const navigate = useNavigate();

  const handleCopyCode = () => {
    if (user?.coachCode) {
      navigator.clipboard.writeText(user.coachCode);
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 2000);
    }
  };

  const handleShareCode = () => {
    if (navigator.share && user?.coachCode) {
      navigator.share({
        title: 'Join SE Fitness',
        text: `Join me on SE Fitness! Use my coach code: ${user.coachCode}`,
      });
    }
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      logout();
      navigate('/login');
    }
  };

  const handleEditProfile = () => {
    navigate('/coach/edit-profile');
  };

  const handleNotificationSettings = () => {
    navigate('/coach/notification-settings');
  };

  const handleHelpSupport = () => {
    navigate('/coach/help-support');
  };

  const stats = [
    { label: 'Active Athletes', value: '12' },
    { label: 'Total Workouts', value: '156' },
    { label: 'This Month', value: '38' }
  ];

  return (
    <div className="min-h-full bg-gray-50 pb-6">
      {/* Header */}
      <div className="bg-black text-white px-6 py-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-20 bg-[#FFD000] rounded-full flex items-center justify-center text-black text-2xl">
            {user?.firstName?.[0]}{user?.lastName?.[0]}
          </div>
          <div>
            <h1 className="text-xl font-semibold">Coach {user?.firstName} {user?.lastName}</h1>
            <p className="text-gray-400 text-sm">{user?.email}</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 -mt-4 mb-6">
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coach Code */}
      <div className="px-6 mb-6">
        <div className="bg-gradient-to-br from-[#FFD000] to-[#FFE54D] rounded-xl p-4 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-black mb-1">Your Coach Code</h3>
              <p className="text-black/60 text-xs">Share this with athletes to connect</p>
            </div>
          </div>
          
          <div className="bg-black/10 rounded-lg p-2.5 mb-3 text-center">
            <div className="text-xl text-black tracking-wider font-medium">
              {user?.coachCode}
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleCopyCode}
              className="flex-1 bg-black text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-black/90 transition-colors"
            >
              {codeCopied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span className="text-xs">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span className="text-xs">Copy Code</span>
                </>
              )}
            </button>
            <button
              onClick={handleShareCode}
              className="flex-1 bg-white text-black py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span className="text-xs">Share</span>
            </button>
          </div>
        </div>
      </div>

      {/* Personal Info */}
      <div className="px-6 mb-6">
        <h3 className="text-lg mb-3">Personal Information</h3>
        <div className="bg-white rounded-xl p-5 shadow-sm space-y-3">
          <div>
            <div className="text-sm text-gray-600 mb-1">Email</div>
            <div className="text-black">{user?.email}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-1">Name</div>
            <div className="text-black">{user?.firstName} {user?.lastName}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-1">Role</div>
            <div className="text-black">Coach</div>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-1">Member Since</div>
            <div className="text-black">January 2026</div>
          </div>
        </div>
      </div>

      {/* Settings & Actions */}
      <div className="px-6 mb-6">
        <h3 className="text-lg mb-3">Settings</h3>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <button
            onClick={handleEditProfile}
            className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors border-b border-gray-100"
          >
            <span className="text-black">Edit Profile</span>
            <span className="text-gray-400">›</span>
          </button>
          <button
            onClick={handleNotificationSettings}
            className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors border-b border-gray-100"
          >
            <span className="text-black">Notification Settings</span>
            <span className="text-gray-400">›</span>
          </button>
          <button
            onClick={handleHelpSupport}
            className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <span className="text-black">Help & Support</span>
            <span className="text-gray-400">›</span>
          </button>
        </div>
      </div>

      {/* Logout */}
      <div className="px-6">
        <button
          onClick={handleLogout}
          className="w-full bg-red-50 text-red-600 rounded-xl p-5 shadow-sm flex items-center justify-center gap-3 hover:bg-red-100 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
}