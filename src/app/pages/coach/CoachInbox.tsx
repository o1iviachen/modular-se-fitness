import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../context/AuthContext';
import { Search, ChevronRight } from 'lucide-react';
import { collection, query, where, onSnapshot, doc, getDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';


interface Conversation {
  id: string;
  athleteId: string;
  athleteName: string;
  lastMessage: string;
  lastMessageAt: any;
  avatar: string;
  hasUnread: boolean;
}

export function CoachInbox() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [conversations, setConversations] = useState<Conversation[]>([]);

  useEffect(() => {
    if (!user) return;
    const q = query(collection(db, 'conversations'), where('coachId', '==', user.id));
    const unsubscribe = onSnapshot(q, async (snap) => {
      const convos = snap.docs.map((d) => {
        const data = d.data();
        const initials = data.athleteName
          ? data.athleteName.split(' ').map((n: string) => n[0]).join('').toUpperCase()
          : 'A';
        const lastReadAt = user ? (data.lastReadBy?.[user.id]?.toMillis?.() || 0) : 0;
        const lastMsgAt = data.lastMessageAt?.toMillis?.() || 0;
        return {
          id: d.id,
          athleteId: data.athleteId || '',
          athleteName: data.athleteName || 'Athlete',
          lastMessage: data.lastMessage || 'No messages yet',
          lastMessageAt: data.lastMessageAt,
          avatar: initials,
          hasUnread: lastMsgAt > lastReadAt && !!data.lastMessage,
        };
      });

      // Filter out deleted users
      const uniqueIds = [...new Set(convos.map(c => c.athleteId).filter(Boolean))];
      const existingUserIds = new Set<string>();
      await Promise.all(uniqueIds.map(async (id) => {
        try {
          const userSnap = await getDoc(doc(db, 'users', id));
          if (userSnap.exists()) existingUserIds.add(id);
        } catch {}
      }));
      const activeConvos = convos.filter(c => existingUserIds.has(c.athleteId));

      activeConvos.sort((a, b) => {
        const aTime = a.lastMessageAt?.toMillis?.() || 0;
        const bTime = b.lastMessageAt?.toMillis?.() || 0;
        return bTime - aTime;
      });
      setConversations(activeConvos);
    });
    return unsubscribe;
  }, [user]);

  const filteredConversations = conversations.filter(conv =>
    conv.athleteName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatTimestamp = (ts: any) => {
    if (!ts?.toDate) return '';
    return ts.toDate().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  };

  return (
    <div className="min-h-full bg-gray-50 pb-6">
      {/* Header */}
      <div className="bg-black text-white px-6 py-8">
        <img src="/se-logo.png" alt="SE Fitness" className="h-10 w-auto mb-3" />
        <h1 className="text-xl mb-1 font-semibold">Inbox</h1>
        <p className="text-gray-400 text-sm">
          {conversations.length} athlete{conversations.length !== 1 ? 's' : ''}
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
                }`}
              >
                <div className="relative w-12 h-12 rounded-full flex items-center justify-center text-black flex-shrink-0 bg-[#FFD000]">
                  {conversation.avatar}
                  {conversation.hasUnread && (
                    <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-blue-500 rounded-full border-2 border-white" />
                  )}
                </div>
                <div className="flex-1 text-left overflow-hidden">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className={conversation.hasUnread ? 'text-black font-semibold' : 'text-black'}>{conversation.athleteName}</h4>
                    <span className="text-sm text-gray-500">{formatTimestamp(conversation.lastMessageAt)}</span>
                  </div>
                  <p className={`text-sm truncate ${conversation.hasUnread ? 'text-black font-medium' : 'text-gray-500'}`}>
                    {conversation.lastMessage}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
