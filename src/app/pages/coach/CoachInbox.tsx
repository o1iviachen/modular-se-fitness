import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../context/AuthContext';
import { Search, ChevronRight } from 'lucide-react';
import logo from 'figma:asset/6715fa8a90369e65d79802402e0679daa2d685be.png';

// Mock conversations data
const mockConversations = [
  {
    id: 1,
    athleteName: 'John Doe',
    lastMessage: 'Should I increase the weight next session?',
    timestamp: '10:40 AM',
    unread: true,
    avatar: 'JD'
  },
  {
    id: 2,
    athleteName: 'Jane Smith',
    lastMessage: 'Thanks for the nutrition guide!',
    timestamp: 'Yesterday',
    unread: false,
    avatar: 'JS'
  },
  {
    id: 3,
    athleteName: 'Mike Johnson',
    lastMessage: 'I\'m feeling really sore today, should I rest?',
    timestamp: 'Yesterday',
    unread: true,
    avatar: 'MJ'
  },
  {
    id: 4,
    athleteName: 'Sarah Williams',
    lastMessage: 'Great workout today! Felt strong on deadlifts.',
    timestamp: 'Feb 2',
    unread: false,
    avatar: 'SW'
  }
];

export function CoachInbox() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredConversations = mockConversations.filter(conv =>
    conv.athleteName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-full bg-gray-50 pb-6">
      {/* Header */}
      <div className="bg-black text-white px-6 py-8">
        <img src={logo} alt="SE Fitness" className="h-10 w-auto mb-3" />
        <h1 className="text-xl mb-1 font-semibold">Inbox</h1>
        <p className="text-gray-400 text-sm">
          {mockConversations.filter(c => c.unread).length} unread messages
        </p>
      </div>

      {/* Search */}
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

      {/* Conversations List */}
      <div className="px-6">
        {filteredConversations.length === 0 ? (
          <div className="bg-white rounded-xl p-8 text-center">
            <p className="text-gray-500">No conversations found</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            {filteredConversations.map((conversation, idx) => (
              <button
                key={conversation.id}
                onClick={() => navigate(`/coach/inbox/${conversation.id}`)}
                className={`w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors ${
                  idx !== filteredConversations.length - 1 ? 'border-b border-gray-100' : ''
                } ${conversation.unread ? 'bg-blue-50/30' : ''}`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-black flex-shrink-0 ${
                  conversation.unread ? 'bg-[#FFD000]' : 'bg-gray-200'
                }`}>
                  {conversation.avatar}
                </div>
                <div className="flex-1 text-left overflow-hidden">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className={`text-black ${conversation.unread ? '' : ''}`}>
                      {conversation.athleteName}
                    </h4>
                    <span className="text-sm text-gray-500">{conversation.timestamp}</span>
                  </div>
                  <p className={`text-sm truncate ${
                    conversation.unread ? 'text-black' : 'text-gray-500'
                  }`}>
                    {conversation.lastMessage}
                  </p>
                </div>
                {conversation.unread && (
                  <div className="w-2 h-2 bg-[#FFD000] rounded-full flex-shrink-0"></div>
                )}
                <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}