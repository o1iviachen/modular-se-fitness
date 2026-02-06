import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Copy, Check, LogOut } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router';
import { ProfileHeader } from '../../components/ui/profile-header';
import { PageCard } from '../../components/ui/page-card';
import { SectionHeader } from '../../components/ui/section-header';
import { ListItemButton } from '../../components/ui/list-item-button';

export function CoachProfile() {
  const { user, logout } = useAuth();
  const [codeCopied, setCodeCopied] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const shouldHighlight = searchParams.get('highlight') === 'code';

  const handleCopyCode = () => {
    if (!user?.coachCode) return;
    
    const textArea = document.createElement('textarea');
    textArea.value = user.coachCode;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
      document.execCommand('copy');
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 2000);
    } catch (err) {
      console.log('Copy failed:', err);
    }
    
    document.body.removeChild(textArea);
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      logout();
      navigate('/login');
    }
  };

  const handleEditPhoto = () => {
    alert('Profile photo editing would be implemented here');
  };

  const stats = [
    { label: 'Active Athletes', value: '12' },
    { label: 'Total Workouts', value: '156' },
    { label: 'This Month', value: '38' }
  ];

  return (
    <div className="min-h-full bg-gray-50 pb-6">
      <ProfileHeader 
        firstName={user?.firstName}
        lastName={user?.lastName}
        email={user?.email}
        onEditPhoto={handleEditPhoto}
      />

      {/* Stats */}
      <div className="px-6 -mt-4 mb-6">
        <PageCard>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </PageCard>
      </div>

      {/* Coach Code */}
      <div className="px-6 mb-6">
        <div className={`bg-gradient-to-br from-[#FFD000] to-[#FFE54D] rounded-xl p-4 shadow-lg transition-all duration-500 ${shouldHighlight ? 'ring-4 ring-[#FFD000] ring-offset-4 ring-offset-gray-50 scale-105' : ''}`}>
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-black mb-1">Your Coach Code</h3>
              <p className="text-black/60 text-xs">Share this with athletes to connect</p>
            </div>
          </div>
          
          <div className={`bg-black/10 rounded-lg p-2.5 mb-3 text-center transition-all duration-500 ${shouldHighlight ? 'bg-black/20' : ''}`}>
            <div className="text-xl text-black tracking-wider font-medium">
              {user?.coachCode}
            </div>
          </div>

          <button
            onClick={handleCopyCode}
            className="w-full bg-black text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-black/90 transition-colors"
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
        </div>
      </div>

      {/* Personal Info */}
      <div className="px-6 mb-6">
        <SectionHeader>Personal Information</SectionHeader>
        <PageCard className="space-y-3">
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
        </PageCard>
      </div>

      {/* Settings & Actions */}
      <div className="px-6 mb-6">
        <SectionHeader>Settings</SectionHeader>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <ListItemButton onClick={() => navigate('/coach/edit-profile')}>
            Edit Profile
          </ListItemButton>
          <ListItemButton onClick={() => navigate('/coach/notification-settings')}>
            Notification Settings
          </ListItemButton>
          <ListItemButton onClick={() => navigate('/coach/help-support')} noBorder>
            Help & Support
          </ListItemButton>
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