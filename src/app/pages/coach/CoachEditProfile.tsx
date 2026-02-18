import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';

export function CoachEditProfile() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
  });
  const [loaded, setLoaded] = useState(false);
  const loadedDataRef = useRef({ firstName: '', lastName: '', email: '' });

  useEffect(() => {
    if (!user?.id) return;
    getDoc(doc(db, 'users', user.id)).then((snap) => {
      if (snap.exists()) {
        const data = snap.data();
        const initial = {
          firstName: data.firstName || '',
          lastName: data.lastName || '',
          email: data.email || '',
        };
        setFormData(initial);
        loadedDataRef.current = initial;
      }
      setLoaded(true);
    });
  }, [user?.id]);

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const hasChanges = () => {
    const loaded = loadedDataRef.current;
    return formData.firstName !== loaded.firstName || formData.lastName !== loaded.lastName;
  };

  const handleBack = () => {
    if (hasChanges()) {
      if (!window.confirm('You have unsaved changes. Are you sure you want to go back?')) return;
    }
    navigate(-1);
  };

  const handleSave = async () => {
    if (!user?.id) return;
    await updateDoc(doc(db, 'users', user.id), {
      firstName: formData.firstName,
      lastName: formData.lastName,
    });
    navigate(-1);
  };

  if (!loaded) return null;

  return (
    <div className="min-h-full bg-gray-50">
      <div className="bg-black text-white px-6 py-8">
        <button onClick={handleBack} className="text-white mb-4 hover:text-[#FFD000] transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <img src="/se-logo.png" alt="SE Fitness" className="h-10 w-auto mb-3" />
        <h1 className="text-xl font-semibold">Edit Profile</h1>
      </div>

      <div className="px-6 py-6">
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold mb-4">Basic Information</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-600 block mb-2">First Name</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleChange('firstName', e.target.value)}
                  className="w-full bg-gray-50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600 block mb-2">Last Name</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleChange('lastName', e.target.value)}
                  className="w-full bg-gray-50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600 block mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  disabled
                  className="w-full bg-gray-100 rounded-lg px-4 py-3 text-gray-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 px-4 mt-6">
          <button
            onClick={handleSave}
            className="flex-1 bg-[#FFD000] text-black rounded-xl py-3 hover:bg-[#FFD000]/90 transition-colors font-medium"
          >
            Save Changes
          </button>
          <button
            onClick={() => navigate(-1)}
            className="flex-1 bg-white border border-gray-300 text-black rounded-xl py-3 hover:bg-gray-50 transition-colors font-medium"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}