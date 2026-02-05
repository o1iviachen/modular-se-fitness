import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../context/AuthContext';
import { ArrowLeft } from 'lucide-react';
import logo from 'figma:asset/6715fa8a90369e65d79802402e0679daa2d685be.png';

export function PersonalInfo() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [info, setInfo] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phone: '(555) 123-4567',
    dateOfBirth: '1995-06-15',
    height: '5\'10"',
    weight: '175 lbs',
    emergencyContact: 'Jane Doe',
    emergencyPhone: '(555) 987-6543'
  });

  const handleSave = () => {
    // Save logic here
    navigate(-1);
  };

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
        <img src={logo} alt="SE Fitness" className="h-10 w-auto mb-3" />
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
              onChange={(e) => setInfo({ ...info, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Phone</label>
            <input
              type="tel"
              value={info.phone}
              onChange={(e) => setInfo({ ...info, phone: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
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
              <label className="text-sm font-medium text-gray-700 mb-2 block">Height</label>
              <input
                type="text"
                value={info.height}
                onChange={(e) => setInfo({ ...info, height: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Weight</label>
              <input
                type="text"
                value={info.weight}
                onChange={(e) => setInfo({ ...info, weight: e.target.value })}
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
