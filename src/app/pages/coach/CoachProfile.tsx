import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Copy, Check, LogOut, Trash2, X } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router';
import { ProfileHeader } from '../../components/ui/profile-header';
import { PageCard } from '../../components/ui/page-card';
import { SectionHeader } from '../../components/ui/section-header';
import { ListItemButton } from '../../components/ui/list-item-button';
import { doc, updateDoc, getDoc, getDocs, collection, query, where } from 'firebase/firestore';
import { db, storage } from '../../lib/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export function CoachProfile() {
  const { user, logout, deleteAccount, updateUserPhoto } = useAuth();
  const [codeCopied, setCodeCopied] = useState(false);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
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

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletePassword, setDeletePassword] = useState('');
  const [deleteError, setDeleteError] = useState('');
  const [deleting, setDeleting] = useState(false);

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      logout();
      navigate('/login');
    }
  };

  const handleDeleteAccount = async () => {
    if (!deletePassword) return;
    setDeleting(true);
    setDeleteError('');
    try {
      await deleteAccount(deletePassword);
      navigate('/login');
    } catch {
      setDeleteError('Incorrect password or failed to delete account.');
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

  const [stats, setStats] = useState([
    { label: 'Active Athletes', value: '—' },
    { label: 'Total Workouts', value: '—' },
    { label: 'This Month', value: '—' }
  ]);
  const [memberSince, setMemberSince] = useState('');

  useEffect(() => {
    if (!user?.id) return;

    (async () => {
      // Get coach's createdAt
      const coachSnap = await getDoc(doc(db, 'users', user.id));
      if (coachSnap.exists()) {
        const data = coachSnap.data();
        if (data.createdAt?.toDate) {
          const date = data.createdAt.toDate();
          setMemberSince(date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }));
        }
      }

      // Get athletes
      const athleteQuery = query(
        collection(db, 'users'),
        where('coachId', '==', user.id),
        where('role', '==', 'athlete')
      );
      const athleteSnap = await getDocs(athleteQuery);
      const athletes = athleteSnap.docs;
      const activeCount = athletes.filter(d => !d.data().isArchived).length;

      // Count workouts across all athletes
      let totalWorkouts = 0;
      let thisMonthWorkouts = 0;
      const currentMonth = new Date().toISOString().slice(0, 7);

      for (const athleteDoc of athletes) {
        const workoutsSnap = await getDocs(collection(db, 'users', athleteDoc.id, 'workouts'));
        for (const wDoc of workoutsSnap.docs) {
          const data = wDoc.data();
          if (!data.isRestDay) {
            totalWorkouts++;
            if (data.date?.startsWith(currentMonth)) {
              thisMonthWorkouts++;
            }
          }
        }
      }

      setStats([
        { label: 'Active Athletes', value: String(activeCount) },
        { label: 'Total Workouts', value: String(totalWorkouts) },
        { label: 'This Month', value: String(thisMonthWorkouts) }
      ]);
    })();
  }, [user?.id]);

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
            <div className="text-black">{memberSince || '—'}</div>
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
              <p className="text-gray-600 mb-4">This will permanently delete your account and all data. Enter your password to confirm.</p>
              <input
                type="password"
                placeholder="Enter your password"
                value={deletePassword}
                onChange={(e) => setDeletePassword(e.target.value)}
                className="w-full bg-gray-50 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-red-300"
                onKeyDown={(e) => e.key === 'Enter' && handleDeleteAccount()}
              />
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
                  disabled={deleting || !deletePassword}
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