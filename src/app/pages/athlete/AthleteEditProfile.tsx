import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';

export function AthleteEditProfile() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    age: '',
    gender: '',
    height: '',
    weight: ''
  });
  const [loaded, setLoaded] = useState(false);

  // Load existing profile data from Firestore
  useEffect(() => {
    if (!user?.id) return;
    getDoc(doc(db, 'users', user.id)).then((snap) => {
      if (snap.exists()) {
        const data = snap.data();
        setFormData({
          firstName: data.firstName || '',
          lastName: data.lastName || '',
          email: data.email || '',
          age: data.age != null ? String(data.age) : '',
          gender: data.gender || '',
          height: data.height != null ? String(data.height) : '',
          weight: data.weight != null ? String(data.weight) : '',
        });
      }
      setLoaded(true);
    });
  }, [user?.id]);

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSave = async () => {
    if (!user?.id) return;
    await updateDoc(doc(db, 'users', user.id), {
      firstName: formData.firstName,
      lastName: formData.lastName,
      age: formData.age ? Number(formData.age) : null,
      gender: formData.gender || null,
      height: formData.height || null,
      weight: formData.weight || null,
    });
    navigate(-1);
  };

  if (!loaded) return null;

  return (
    <div className="min-h-full bg-gray-50">
      <div className="bg-black text-white px-6 py-8">
        <button onClick={() => navigate(-1)} className="text-white mb-4 hover:text-[#FFD000] transition-colors">
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

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold mb-4">Physical Information</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600 block mb-2">Age</label>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => handleChange('age', e.target.value)}
                    className="w-full bg-gray-50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600 block mb-2">Gender</label>
                  <select
                    value={formData.gender}
                    onChange={(e) => handleChange('gender', e.target.value)}
                    className="w-full bg-gray-50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600 block mb-2">Height (cm)</label>
                  <input
                    type="number"
                    value={formData.height}
                    onChange={(e) => handleChange('height', e.target.value)}
                    placeholder="e.g. 175"
                    className="w-full bg-gray-50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600 block mb-2">Weight (kg)</label>
                  <input
                    type="number"
                    value={formData.weight}
                    onChange={(e) => handleChange('weight', e.target.value)}
                    placeholder="e.g. 75"
                    className="w-full bg-gray-50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
                  />
                </div>
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
