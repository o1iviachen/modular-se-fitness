import { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const currentYear = new Date().getFullYear();
const YEARS = Array.from({ length: 100 }, (_, i) => currentYear - i);

function calculateAge(year: number, month: number, day: number): number | null {
  if (!year || !month || !day) return null;
  const today = new Date();
  let age = today.getFullYear() - year;
  const monthDiff = today.getMonth() + 1 - month;
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < day)) {
    age--;
  }
  return age;
}

export function AthleteEditProfile() {
  const navigate = useNavigate();
  const { user, updateUserProfile } = useAuth();

  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    gender: '',
    height: '',
    weight: ''
  });
  const [dobMonth, setDobMonth] = useState<number>(0);
  const [dobDay, setDobDay] = useState<number>(0);
  const [dobYear, setDobYear] = useState<number>(0);
  const [loaded, setLoaded] = useState(false);
  const loadedDataRef = useRef({ firstName: '', lastName: '', gender: '', height: '', weight: '', dobMonth: 0, dobDay: 0, dobYear: 0 });

  const age = useMemo(() => calculateAge(dobYear, dobMonth, dobDay), [dobYear, dobMonth, dobDay]);

  const dayOptions = useMemo(() => {
    const daysInMonth = dobMonth && dobYear
      ? new Date(dobYear, dobMonth, 0).getDate()
      : 31;
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
  }, [dobMonth, dobYear]);

  // Load existing profile data from Firestore
  useEffect(() => {
    if (!user?.id) return;
    getDoc(doc(db, 'users', user.id)).then((snap) => {
      if (snap.exists()) {
        const data = snap.data();
        const initial = {
          firstName: data.firstName || '',
          lastName: data.lastName || '',
          email: data.email || '',
          gender: data.gender || '',
          height: data.height != null ? String(data.height) : '',
          weight: data.weight != null ? String(data.weight) : '',
        };
        setFormData(initial);

        // Parse dateOfBirth
        let initMonth = 0, initDay = 0, initYear = 0;
        if (data.dateOfBirth) {
          const parts = data.dateOfBirth.split('-');
          if (parts.length === 3) {
            initYear = parseInt(parts[0]);
            initMonth = parseInt(parts[1]);
            initDay = parseInt(parts[2]);
          }
        }
        setDobYear(initYear);
        setDobMonth(initMonth);
        setDobDay(initDay);

        loadedDataRef.current = { firstName: initial.firstName, lastName: initial.lastName, gender: initial.gender, height: initial.height, weight: initial.weight, dobMonth: initMonth, dobDay: initDay, dobYear: initYear };
      }
      setLoaded(true);
    });
  }, [user?.id]);

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const hasChanges = () => {
    const l = loadedDataRef.current;
    return formData.firstName !== l.firstName || formData.lastName !== l.lastName ||
      formData.gender !== l.gender || formData.height !== l.height || formData.weight !== l.weight ||
      dobMonth !== l.dobMonth || dobDay !== l.dobDay || dobYear !== l.dobYear;
  };

  const handleBack = () => {
    if (hasChanges()) {
      if (!window.confirm('You have unsaved changes. Are you sure you want to go back?')) return;
    }
    navigate(-1);
  };

  const handleSave = async () => {
    if (!user?.id) return;
    const dateOfBirth = dobYear && dobMonth && dobDay
      ? `${dobYear}-${String(dobMonth).padStart(2, '0')}-${String(dobDay).padStart(2, '0')}`
      : null;
    await updateDoc(doc(db, 'users', user.id), {
      firstName: formData.firstName,
      lastName: formData.lastName,
      age: age ?? null,
      dateOfBirth,
      gender: formData.gender || null,
      height: formData.height || null,
      weight: formData.weight || null,
    });
    updateUserProfile({ firstName: formData.firstName, lastName: formData.lastName });
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

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold mb-4">Physical Information</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-600 block mb-2">Date of Birth</label>
                <div className="grid grid-cols-3 gap-3">
                  <div className="relative">
                    <select
                      value={dobMonth}
                      onChange={(e) => setDobMonth(Number(e.target.value))}
                      className="w-full bg-gray-50 rounded-lg px-4 py-3 pr-8 focus:outline-none focus:ring-2 focus:ring-[#FFD000] appearance-none"
                    >
                      <option value={0}>Month</option>
                      {MONTHS.map((m, i) => (
                        <option key={m} value={i + 1}>{m}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                  <div className="relative">
                    <select
                      value={dobDay}
                      onChange={(e) => setDobDay(Number(e.target.value))}
                      className="w-full bg-gray-50 rounded-lg px-4 py-3 pr-8 focus:outline-none focus:ring-2 focus:ring-[#FFD000] appearance-none"
                    >
                      <option value={0}>Day</option>
                      {dayOptions.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                  <div className="relative">
                    <select
                      value={dobYear}
                      onChange={(e) => setDobYear(Number(e.target.value))}
                      className="w-full bg-gray-50 rounded-lg px-4 py-3 pr-8 focus:outline-none focus:ring-2 focus:ring-[#FFD000] appearance-none"
                    >
                      <option value={0}>Year</option>
                      {YEARS.map((y) => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600 block mb-2">Age</label>
                  <div className="w-full bg-gray-100 rounded-lg px-4 py-3 text-gray-500">
                    {age != null ? age : 'Auto-calculated'}
                  </div>
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
