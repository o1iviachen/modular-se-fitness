import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../context/AuthContext';
import { ArrowLeft } from 'lucide-react';

import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';

export function PersonalInfo() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [info, setInfo] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    dateOfBirth: '',
    height: '',
    weight: '',
    emergencyContact: '',
    emergencyPhone: ''
  });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!user?.id) return;
    getDoc(doc(db, 'users', user.id)).then((snap) => {
      if (snap.exists()) {
        const data = snap.data();
        setInfo({
          firstName: data.firstName || '',
          lastName: data.lastName || '',
          email: data.email || '',
          dateOfBirth: data.dateOfBirth || '',
          height: data.height != null ? String(data.height) : '',
          weight: data.weight != null ? String(data.weight) : '',
          emergencyContact: data.emergencyContact || '',
          emergencyPhone: data.emergencyPhone || '',
        });
      }
      setLoaded(true);
    });
  }, [user?.id]);

  const handleSave = async () => {
    if (!user?.id) return;
    await updateDoc(doc(db, 'users', user.id), {
      firstName: info.firstName,
      lastName: info.lastName,
      dateOfBirth: info.dateOfBirth || null,
      height: info.height || null,
      weight: info.weight || null,
      emergencyContact: info.emergencyContact || null,
      emergencyPhone: info.emergencyPhone || null,
    });
    navigate(-1);
  };

  if (!loaded) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-black text-white px-6 py-8">
        <button
          onClick={() => navigate(-1)}
          className="text-white mb-4 hover:text-[#FFD000] transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <img src="/se-logo.png" alt="SE Fitness" className="h-10 w-auto mb-3" />
        <h1 className="text-xl font-semibold">Personal Information</h1>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">First Name</label>
              <input
                type="text"
                value={info.firstName}
                onChange={(e) => setInfo({ ...info, firstName: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Last Name</label>
              <input
                type="text"
                value={info.lastName}
                onChange={(e) => setInfo({ ...info, lastName: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Email</label>
            <input
              type="email"
              value={info.email}
              disabled
              className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-100 text-gray-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Date of Birth</label>
            <input
              type="date"
              value={info.dateOfBirth}
              onChange={(e) => setInfo({ ...info, dateOfBirth: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Height (cm)</label>
              <input
                type="number"
                value={info.height}
                onChange={(e) => setInfo({ ...info, height: e.target.value })}
                placeholder="e.g. 175"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Weight (kg)</label>
              <input
                type="number"
                value={info.weight}
                onChange={(e) => setInfo({ ...info, weight: e.target.value })}
                placeholder="e.g. 75"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-4">Emergency Contact</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Contact Name</label>
                <input
                  type="text"
                  value={info.emergencyContact}
                  onChange={(e) => setInfo({ ...info, emergencyContact: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Contact Phone</label>
                <input
                  type="tel"
                  value={info.emergencyPhone}
                  onChange={(e) => setInfo({ ...info, emergencyPhone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
                />
              </div>
            </div>
          </div>

          <button
            onClick={handleSave}
            className="w-full bg-[#FFD000] text-black py-4 rounded-xl hover:bg-[#FFD000]/90 transition-colors font-medium mt-6"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
