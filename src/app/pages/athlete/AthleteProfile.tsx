import { useAuth } from '../../context/AuthContext';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router';
import { ProfileHeader } from '../../components/ui/profile-header';
import { PageCard } from '../../components/ui/page-card';
import { SectionHeader } from '../../components/ui/section-header';
import { ListItemButton } from '../../components/ui/list-item-button';

export function AthleteProfile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

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
    { label: 'Completed', value: '24' },
    { label: 'Day Streak', value: '5' },
    { label: 'This Month', value: '8' }
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
            <div className="text-black">Athlete</div>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-1">Member Since</div>
            <div className="text-black">January 2026</div>
          </div>
        </PageCard>
      </div>

      {/* My Goals */}
      <div className="px-6 mb-6">
        <SectionHeader>My Goals</SectionHeader>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <ListItemButton onClick={() => navigate('/athlete/goals')} noBorder>
            View Goals
          </ListItemButton>
        </div>
      </div>

      {/* Documents */}
      <div className="px-6 mb-6">
        <SectionHeader>Documents</SectionHeader>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <ListItemButton onClick={() => navigate('/athlete/documents')} noBorder>
            View Documents
          </ListItemButton>
        </div>
      </div>

      {/* Settings & Actions */}
      <div className="px-6 mb-6">
        <SectionHeader>Settings</SectionHeader>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <ListItemButton onClick={() => navigate('/athlete/edit-profile')}>
            Edit Profile
          </ListItemButton>
          <ListItemButton onClick={() => navigate('/athlete/notification-settings')}>
            Notification Settings
          </ListItemButton>
          <ListItemButton onClick={() => navigate('/athlete/help-support')} noBorder>
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