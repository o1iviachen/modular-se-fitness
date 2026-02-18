import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import { LogOut, Trash2, X } from 'lucide-react';
import { useNavigate } from 'react-router';
import { ProfileHeader } from '../../components/ui/profile-header';
import { PageCard } from '../../components/ui/page-card';
import { SectionHeader } from '../../components/ui/section-header';
import { ListItemButton } from '../../components/ui/list-item-button';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db, storage } from '../../lib/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { subscribeToAllWorkouts, WorkoutDoc } from '../../lib/workoutService';
import { getTodayISO } from '../../utils/helpers';

export function AthleteProfile() {
  const { user, logout, deleteAccount, isGoogleUser, updateUserPhoto } = useAuth();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [stats, setStats] = useState({ completed: 0, streak: 0, thisMonth: 0 });
  const [profile, setProfile] = useState<{ age?: number; gender?: string; weight?: string; height?: string }>({});
  const [uploading, setUploading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletePassword, setDeletePassword] = useState('');
  const [deleteError, setDeleteError] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // Load physical info from Firestore
  useEffect(() => {
    if (!user?.id) return;
    getDoc(doc(db, 'users', user.id)).then((snap) => {
      if (snap.exists()) {
        const data = snap.data();
        setProfile({
          age: data.age ?? undefined,
          gender: data.gender ?? undefined,
          weight: data.weight ?? undefined,
          height: data.height ?? undefined,
        });
      }
    });
  }, [user?.id]);

  // Compute stats from real workout data
  useEffect(() => {
    if (!user?.id) return;
    return subscribeToAllWorkouts(user.id, (workouts: WorkoutDoc[]) => {
      const todayISO = getTodayISO();
      const pastWorkouts = workouts.filter(w => w.date <= todayISO && !w.isRestDay);
      const completed = pastWorkouts.filter(w => w.completed).length;

      // Streak
      const sorted = [...pastWorkouts].sort((a, b) => b.date.localeCompare(a.date));
      let streak = 0;
      for (const w of sorted) {
        if (w.completed) streak++;
        else break;
      }

      // This month
      const currentMonth = todayISO.slice(0, 7); // "2026-02"
      const thisMonth = pastWorkouts.filter(w => w.date.startsWith(currentMonth) && w.completed).length;

      setStats({ completed, streak, thisMonth });
    });
  }, [user?.id]);

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    logout();
    navigate('/login');
  };

  const handleDeleteAccount = async () => {
    if (!isGoogleUser && !deletePassword) return;
    setDeleting(true);
    setDeleteError('');
    try {
      await deleteAccount(isGoogleUser ? undefined : deletePassword);
      navigate('/login');
    } catch {
      setDeleteError(isGoogleUser ? 'Failed to delete account.' : 'Incorrect password or failed to delete account.');
      setDeleting(false);
    }
  };

  const handleEditPhoto = () => {
    fileInputRef.current?.click();
  };

  const handlePhotoSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user?.id) return;
    setUploading(true);
    try {
      const storageRef = ref(storage, `profilePhotos/${user.id}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      await updateDoc(doc(db, 'users', user.id), { photoUrl: downloadURL });
      updateUserPhoto(downloadURL);
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-full bg-gray-50 pb-6">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handlePhotoSelected}
        className="hidden"
      />
      <ProfileHeader
        firstName={user?.firstName}
        lastName={user?.lastName}
        email={user?.email}
        photoUrl={user?.photoUrl}
        onEditPhoto={handleEditPhoto}
        uploading={uploading}
      />

      {/* Stats */}
      <div className="px-6 -mt-4 mb-6">
        <PageCard>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl mb-1">{stats.completed}</div>
              <div className="text-xs text-gray-500">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">{stats.streak}</div>
              <div className="text-xs text-gray-500">Day Streak</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">{stats.thisMonth}</div>
              <div className="text-xs text-gray-500">This Month</div>
            </div>
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
          {[
            { label: 'Age', value: profile.age },
            { label: 'Gender', value: profile.gender },
            { label: 'Height', value: profile.height ? `${profile.height} cm` : null },
            { label: 'Weight', value: profile.weight ? `${profile.weight} kg` : null },
          ].filter(f => f.value).map(field => (
            <div key={field.label}>
              <div className="text-sm text-gray-600 mb-1">{field.label}</div>
              <div className="text-black">{field.value}</div>
            </div>
          ))}
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
            Help and Support
          </ListItemButton>
        </div>
      </div>

      {/* Logout */}
      <div className="px-6 mb-3">
        <button
          onClick={handleLogout}
          className="w-full bg-red-50 text-red-600 rounded-xl p-5 shadow-sm flex items-center justify-center gap-3 hover:bg-red-100 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </button>
      </div>

      {/* Delete Account */}
      <div className="px-6">
        <button
          onClick={() => { setShowDeleteModal(true); setDeletePassword(''); setDeleteError(''); }}
          className="w-full text-red-400 text-sm py-3 hover:text-red-600 transition-colors flex items-center justify-center gap-2"
        >
          <Trash2 className="w-4 h-4" />
          <span>Delete Account</span>
        </button>
      </div>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-semibold">Log Out</h2>
                <button onClick={() => setShowLogoutModal(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="text-gray-600 mb-4">Are you sure you want to log out?</p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowLogoutModal(false)}
                  className="flex-1 bg-gray-100 text-black rounded-xl py-3 hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmLogout}
                  className="flex-1 bg-red-600 text-white rounded-xl py-3 font-medium hover:bg-red-700 transition-colors"
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Account Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-semibold">Delete Account</h2>
                <button onClick={() => setShowDeleteModal(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="text-gray-600 mb-4">
                {isGoogleUser
                  ? 'This will permanently delete your account and all data. You will be asked to sign in with Google to confirm.'
                  : 'This will permanently delete your account and all data. Enter your password to confirm.'}
              </p>
              {!isGoogleUser && (
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={deletePassword}
                  onChange={(e) => setDeletePassword(e.target.value)}
                  className="w-full bg-gray-50 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-red-300"
                  onKeyDown={(e) => e.key === 'Enter' && handleDeleteAccount()}
                />
              )}
              {deleteError && <p className="text-red-500 text-sm mb-4">{deleteError}</p>}
              <div className="flex gap-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="flex-1 bg-gray-100 text-black rounded-xl py-3 hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteAccount}
                  disabled={deleting || (!isGoogleUser && !deletePassword)}
                  className="flex-1 bg-red-600 text-white rounded-xl py-3 font-medium hover:bg-red-700 transition-colors disabled:opacity-50"
                >
                  {deleting ? 'Deleting...' : 'Delete'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
