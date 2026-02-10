import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';


const defaultSettings = {
  emailNotifications: true,
  pushNotifications: true,
  newWorkoutAssigned: true,
  workoutReminder: true,
  messageReceived: true,
};

export function AthleteNotificationSettings() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [settings, setSettings] = useState(defaultSettings);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!user?.id) return;
    getDoc(doc(db, 'users', user.id)).then((snap) => {
      if (snap.exists()) {
        const data = snap.data();
        if (data.notificationSettings) {
          setSettings({ ...defaultSettings, ...data.notificationSettings });
        }
      }
      setLoaded(true);
    });
  }, [user?.id]);

  const handleToggle = (field: keyof typeof settings) => {
    setSettings({ ...settings, [field]: !settings[field] });
  };

  const handleSave = async () => {
    if (!user?.id) return;
    await updateDoc(doc(db, 'users', user.id), { notificationSettings: settings });
    navigate(-1);
  };

  const ToggleSwitch = ({ enabled, onChange }: { enabled: boolean; onChange: () => void }) => (
    <button
      onClick={onChange}
      className={`relative w-12 h-6 rounded-full transition-colors ${
        enabled ? 'bg-[#FFD000]' : 'bg-gray-300'
      }`}
    >
      <div
        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
          enabled ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
    </button>
  );

  if (!loaded) return null;

  return (
    <div className="min-h-full bg-gray-50">
      <div className="bg-black text-white px-6 py-8">
        <button onClick={() => navigate(-1)} className="text-white mb-4 hover:text-[#FFD000] transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <img src="/se-logo.png" alt="SE Fitness" className="h-10 w-auto mb-3" />
        <h1 className="text-xl font-semibold">Notification Settings</h1>
      </div>

      <div className="px-6 py-6">
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-5 border-b border-gray-100">
              <h3 className="font-semibold">General Notifications</h3>
            </div>
            <div className="divide-y divide-gray-100">
              <div className="px-5 py-4 flex items-center justify-between">
                <div>
                  <div className="font-medium">Email Notifications</div>
                  <div className="text-sm text-gray-600">Receive notifications via email</div>
                </div>
                <ToggleSwitch enabled={settings.emailNotifications} onChange={() => handleToggle('emailNotifications')} />
              </div>
              <div className="px-5 py-4 flex items-center justify-between">
                <div>
                  <div className="font-medium">Push Notifications</div>
                  <div className="text-sm text-gray-600">Receive push notifications on mobile</div>
                </div>
                <ToggleSwitch enabled={settings.pushNotifications} onChange={() => handleToggle('pushNotifications')} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-5 border-b border-gray-100">
              <h3 className="font-semibold">Workout Notifications</h3>
            </div>
            <div className="divide-y divide-gray-100">
              <div className="px-5 py-4 flex items-center justify-between">
                <div>
                  <div className="font-medium">New Workout Assigned</div>
                  <div className="text-sm text-gray-600">Notify when coach assigns new workouts</div>
                </div>
                <ToggleSwitch enabled={settings.newWorkoutAssigned} onChange={() => handleToggle('newWorkoutAssigned')} />
              </div>
              <div className="px-5 py-4 flex items-center justify-between">
                <div>
                  <div className="font-medium">Workout Reminders</div>
                  <div className="text-sm text-gray-600">Get reminded about scheduled workouts</div>
                </div>
                <ToggleSwitch enabled={settings.workoutReminder} onChange={() => handleToggle('workoutReminder')} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-5 border-b border-gray-100">
              <h3 className="font-semibold">Communication</h3>
            </div>
            <div className="divide-y divide-gray-100">
              <div className="px-5 py-4 flex items-center justify-between">
                <div>
                  <div className="font-medium">Message Received</div>
                  <div className="text-sm text-gray-600">Notify when coach sends a message</div>
                </div>
                <ToggleSwitch enabled={settings.messageReceived} onChange={() => handleToggle('messageReceived')} />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6">
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
