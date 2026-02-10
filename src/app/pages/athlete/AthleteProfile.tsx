import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import { LogOut } from 'lucide-react';
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
  const { user, logout, updateUserPhoto } = useAuth();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [stats, setStats] = useState({ completed: 0, streak: 0, thisMonth: 0 });
  const [profile, setProfile] = useState<{ age?: number; gender?: string; weight?: string; height?: string }>({});

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
    if (window.confirm('Are you sure you want to log out?')) {
      logout();
      navigate('/login');
    }
  };

  const handleEditPhoto = () => {
    fileInputRef.current?.click();
  };

  const handlePhotoSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user?.id) return;
    const storageRef = ref(storage, `profilePhotos/${user.id}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    await updateDoc(doc(db, 'users', user.id), { photoURL: downloadURL });
    updateUserPhoto(downloadURL);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const hasPhysicalInfo = profile.age || profile.gender || profile.weight || profile.height;

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
        photoURL={user?.photoURL}
        onEditPhoto={handleEditPhoto}
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
          {hasPhysicalInfo && (
            <>
              {profile.age && (
                <div>
                  <div className="text-sm text-gray-600 mb-1">Age</div>
                  <div className="text-black">{profile.age}</div>
                </div>
              )}
              {profile.gender && (
                <div>
                  <div className="text-sm text-gray-600 mb-1">Gender</div>
                  <div className="text-black">{profile.gender}</div>
                </div>
              )}
              {profile.height && (
                <div>
                  <div className="text-sm text-gray-600 mb-1">Height</div>
                  <div className="text-black">{profile.height} cm</div>
                </div>
              )}
              {profile.weight && (
                <div>
                  <div className="text-sm text-gray-600 mb-1">Weight</div>
                  <div className="text-black">{profile.weight} kg</div>
                </div>
              )}
            </>
          )}
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
