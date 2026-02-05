import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../context/AuthContext';
import { Search, Archive, UserPlus, RotateCcw } from 'lucide-react';
import logo from 'figma:asset/6715fa8a90369e65d79802402e0679daa2d685be.png';
import { ConfirmModal } from '../../components/ConfirmModal';

const mockAthletes = {
  active: [
    { id: 1, name: 'John Doe', lastWorkout: 'Feb 4, 2026', lastWorkoutDate: new Date('2026-02-04'), streak: 12, gender: 'Male', tenureMonths: 14 },
    { id: 2, name: 'Jane Smith', lastWorkout: 'Feb 3, 2026', lastWorkoutDate: new Date('2026-02-03'), streak: 8, gender: 'Female', tenureMonths: 8 },
    { id: 3, name: 'Mike Johnson', lastWorkout: 'Feb 4, 2026', lastWorkoutDate: new Date('2026-02-04'), streak: 15, gender: 'Male', tenureMonths: 18 },
    { id: 4, name: 'Sarah Williams', lastWorkout: 'Feb 2, 2026', lastWorkoutDate: new Date('2026-02-02'), streak: 5, gender: 'Female', tenureMonths: 6 }
  ],
  archived: [
    { id: 5, name: 'Tom Brown', lastWorkout: 'Jan 15, 2026', lastWorkoutDate: new Date('2026-01-15'), streak: 0, gender: 'Male', tenureMonths: 10 },
    { id: 6, name: 'Emma Davis', lastWorkout: 'Dec 28, 2025', lastWorkoutDate: new Date('2025-12-28'), streak: 0, gender: 'Female', tenureMonths: 5 }
  ]
};

type SortOption = 'name' | 'lastWorkout-latest' | 'lastWorkout-earliest' | 'tenure-longest' | 'tenure-shortest';

export function CoachHome() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'active' | 'archived'>('active');
  const [searchQuery, setSearchQuery] = useState('');
  const [athletes, setAthletes] = useState(mockAthletes);
  const [sortOption, setSortOption] = useState<SortOption>('name');
  const [genderFilter, setGenderFilter] = useState<'all' | 'Male' | 'Female'>('all');
  const [confirmModal, setConfirmModal] = useState<{
    isOpen: boolean;
    type: 'archive' | 'reactivate';
    athleteId: number;
    athleteName: string;
  }>({ isOpen: false, type: 'archive', athleteId: 0, athleteName: '' });

  const sortFns = {
    'name': (a: any, b: any) => a.name.localeCompare(b.name),
    'lastWorkout-latest': (a: any, b: any) => b.lastWorkoutDate.getTime() - a.lastWorkoutDate.getTime(),
    'lastWorkout-earliest': (a: any, b: any) => a.lastWorkoutDate.getTime() - b.lastWorkoutDate.getTime(),
    'tenure-longest': (a: any, b: any) => b.tenureMonths - a.tenureMonths,
    'tenure-shortest': (a: any, b: any) => a.tenureMonths - b.tenureMonths
  };

  const filteredAthletes = (activeTab === 'active' ? athletes.active : athletes.archived)
    .filter(a => a.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter(a => genderFilter === 'all' || a.gender === genderFilter)
    .sort(sortFns[sortOption]);

  const handleReactivate = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    const athlete = athletes.archived.find(a => a.id === id);
    if (athlete) {
      setConfirmModal({
        isOpen: true,
        type: 'reactivate',
        athleteId: id,
        athleteName: athlete.name
      });
    }
  };

  const handleArchive = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    const athlete = athletes.active.find(a => a.id === id);
    if (athlete) {
      setConfirmModal({
        isOpen: true,
        type: 'archive',
        athleteId: id,
        athleteName: athlete.name
      });
    }
  };

  const confirmAction = () => {
    if (confirmModal.type === 'archive') {
      const athlete = athletes.active.find(a => a.id === confirmModal.athleteId);
      if (athlete) {
        setAthletes({
          active: athletes.active.filter(a => a.id !== confirmModal.athleteId),
          archived: [...athletes.archived, { ...athlete, streak: 0 }]
        });
      }
    } else {
      const athlete = athletes.archived.find(a => a.id === confirmModal.athleteId);
      if (athlete) {
        setAthletes({
          active: [...athletes.active, { ...athlete, streak: 0 }],
          archived: athletes.archived.filter(a => a.id !== confirmModal.athleteId)
        });
      }
    }
    setConfirmModal({ isOpen: false, type: 'archive', athleteId: 0, athleteName: '' });
  };

  const cancelAction = () => {
    setConfirmModal({ isOpen: false, type: 'archive', athleteId: 0, athleteName: '' });
  };

  return (
    <div className="min-h-full bg-gray-50 pb-6">
      <div className="bg-black text-white px-6 py-8">
        <img src={logo} alt="SE Fitness" className="h-10 w-auto mb-3" />
        <h1 className="text-xl mb-1 font-semibold">Welcome, Coach {user?.firstName}</h1>
        <p className="text-gray-400 text-sm">{mockAthletes.active.length} active athletes</p>
      </div>

      <div className="px-6 -mt-4 mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search athletes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
          />
        </div>
      </div>

      <div className="px-6 mb-6">
        <div className="bg-gray-200 rounded-xl p-1 flex">
          <button onClick={() => setActiveTab('active')} className={`flex-1 py-2 rounded-lg transition-colors ${activeTab === 'active' ? 'bg-white text-black shadow-sm' : 'text-gray-600'}`}>
            Active ({mockAthletes.active.length})
          </button>
          <button onClick={() => setActiveTab('archived')} className={`flex-1 py-2 rounded-lg transition-colors ${activeTab === 'archived' ? 'bg-white text-black shadow-sm' : 'text-gray-600'}`}>
            Archived ({mockAthletes.archived.length})
          </button>
        </div>
      </div>

      <div className="px-6 mb-6 flex flex-col sm:flex-row gap-3">
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value as SortOption)} className="flex-1 px-3 py-3 bg-white rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFD000] text-sm">
          <option value="name">Name (A-Z)</option>
          <option value="lastWorkout-latest">Recent First</option>
          <option value="lastWorkout-earliest">Oldest First</option>
          <option value="tenure-longest">Longest Tenure</option>
          <option value="tenure-shortest">Shortest Tenure</option>
        </select>
        <select value={genderFilter} onChange={(e) => setGenderFilter(e.target.value as any)} className="flex-1 px-3 py-3 bg-white rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFD000] text-sm">
          <option value="all">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      <div className="px-6">
        {filteredAthletes.length === 0 ? (
          <div className="bg-white rounded-xl p-8 text-center">
            <p className="text-gray-500">No athletes found</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredAthletes.map((athlete) => (
              <div key={athlete.id} className="w-full bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <button onClick={() => navigate(`/coach/athlete/${athlete.id}`)} className="flex items-center gap-4 flex-1 text-left">
                    <div className="w-12 h-12 bg-[#FFD000] rounded-full flex items-center justify-center text-black">
                      {athlete.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-black mb-1">{athlete.name}</h4>
                      <p className="text-sm text-gray-500">Last workout: {athlete.lastWorkout}</p>
                      <p className="text-sm mt-1">
                        <span className="text-gray-500">Streak: </span>
                        <span className="text-[#FFD000]">{athlete.streak} days</span>
                      </p>
                    </div>
                  </button>
                  {activeTab === 'archived' ? (
                    <button onClick={(e) => handleReactivate(e, athlete.id)} className="ml-3 p-2 bg-[#FFD000] text-black rounded-lg hover:bg-[#FFD000]/90 transition-colors" title="Reactivate athlete">
                      <RotateCcw className="w-5 h-5" />
                    </button>
                  ) : (
                    <button onClick={(e) => handleArchive(e, athlete.id)} className="ml-3 p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors" title="Archive athlete">
                      <Archive className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {activeTab === 'active' && (
        <div className="px-6 mt-6">
          <button className="w-full bg-[#FFD000] text-black rounded-xl p-4 flex items-center justify-center gap-3 hover:bg-[#FFD000]/90 transition-colors shadow-sm">
            <UserPlus className="w-5 h-5" />
            <span>Invite New Athlete</span>
          </button>
        </div>
      )}

      <ConfirmModal
        isOpen={confirmModal.isOpen}
        title={confirmModal.type === 'archive' ? 'Archive Athlete' : 'Reactivate Athlete'}
        message={`Are you sure you want to ${confirmModal.type === 'archive' ? 'archive' : 'reactivate'} ${confirmModal.athleteName}?`}
        onConfirm={confirmAction}
        onCancel={cancelAction}
      />
    </div>
  );
}