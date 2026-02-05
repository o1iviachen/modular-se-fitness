import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../context/AuthContext';
import { Search, ChevronRight } from 'lucide-react';
import logo from 'figma:asset/6715fa8a90369e65d79802402e0679daa2d685be.png';

// Mock conversations for athlete
const athleteConversation = {
  id: 'coach',
  coachName: 'Coach Sarah',
  lastMessage: 'Yes, let\'s try adding 10 lbs. You\'re ready for it!',
  timestamp: '10:42 AM',
  unread: false,
  avatar: 'SE'
};

export function AthleteMessages() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-full bg-gray-50 pb-6">
      {/* Header */}
      <div className="bg-black text-white px-6 py-8">
        <img src={logo} alt="SE Fitness" className="h-10 w-auto mb-3" />
        <h1 className="text-xl mb-1 font-semibold">Messages</h1>
        <p className="text-gray-400 text-sm">
          Chat with your coach
        </p>
      </div>

      {/* Conversations List */}
      <div className="px-6 mt-6">
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <button
            onClick={() => navigate(`/athlete/messages/${athleteConversation.id}`)}
            className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors"
          >
            <div className="w-12 h-12 bg-[#FFD000] rounded-full flex items-center justify-center text-black flex-shrink-0">
              {athleteConversation.avatar}
            </div>
            <div className="flex-1 text-left overflow-hidden">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-black">
                  {athleteConversation.coachName}
                </h4>
                <span className="text-sm text-gray-500">{athleteConversation.timestamp}</span>
              </div>
              <p className="text-gray-500 truncate">
                {athleteConversation.lastMessage}
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
          </button>
        </div>
      </div>
    </div>
  );
}