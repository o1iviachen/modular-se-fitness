import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../context/AuthContext';
import { Search, UserPlus } from 'lucide-react';
import logo from 'figma:asset/6715fa8a90369e65d79802402e0679daa2d685be.png';
import { ConfirmModal } from '../../components/ConfirmModal';
import { AthleteCard } from '../../components/ui/athlete-card';
import { usePageState } from '../../hooks/usePageState';
import { getActiveAthletes, getArchivedAthletes, Athlete } from '../../data/mockData';

type SortOption = 'name' | 'lastWorkout-latest' | 'lastWorkout-earliest' | 'tenure-longest' | 'tenure-shortest';

export function CoachHome() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = usePageState<'active' | 'archived'>('coach-home-tab', 'active');
  const [searchQuery, setSearchQuery] = usePageState('coach-home-search', '');
  const [athletes, setAthletes] = useState({
    active: getActiveAthletes(),
    archived: getArchivedAthletes(),
  });
  const [sortOption, setSortOption] = usePageState<SortOption>('coach-home-sort', 'name');
  const [genderFilter, setGenderFilter] = usePageState<'all' | 'Male' | 'Female'>('coach-home-gender', 'all');
  const [confirmModal, setConfirmModal] = useState<{
    isOpen: boolean;
    type: 'archive' | 'reactivate';
    athleteId: number;
    athleteName: string;
  }>({ isOpen: false, type: 'archive', athleteId: 0, athleteName: '' });

  const sortFns: Record<SortOption, (a: Athlete, b: Athlete) => number> = {
    'name': (a, b) => a.name.localeCompare(b.name),
    'lastWorkout-latest': (a, b) => b.lastWorkoutDate.getTime() - a.lastWorkoutDate.getTime(),
    'lastWorkout-earliest': (a, b) => a.lastWorkoutDate.getTime() - b.lastWorkoutDate.getTime(),
    'tenure-longest': (a, b) => b.tenureMonths - a.tenureMonths,
    'tenure-shortest': (a, b) => a.tenureMonths - b.tenureMonths
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
        <p className="text-gray-400 text-sm">{athletes.active.length} active athletes</p>
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
            Active ({athletes.active.length})
          </button>
          <button onClick={() => setActiveTab('archived')} className={`flex-1 py-2 rounded-lg transition-colors ${activeTab === 'archived' ? 'bg-white text-black shadow-sm' : 'text-gray-600'}`}>
            Archived ({athletes.archived.length})
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
              <AthleteCard
                key={athlete.id}
                name={athlete.name}
                lastWorkout={athlete.lastWorkout}
                streak={athlete.streak}
                isArchived={activeTab === 'archived'}
                onClick={() => navigate(`/coach/athlete/${athlete.id}`)}
                onArchiveClick={(e) => handleArchive(e, athlete.id)}
                onReactivateClick={(e) => handleReactivate(e, athlete.id)}
              />
            ))}
          </div>
        )}
      </div>

      {activeTab === 'active' && (
        <div className="px-6 mt-6">
          <button 
            onClick={() => navigate('/coach/profile?highlight=code')}
            className="w-full bg-[#FFD000] text-black rounded-xl p-4 flex items-center justify-center gap-3 hover:bg-[#FFD000]/90 transition-colors shadow-sm"
          >
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