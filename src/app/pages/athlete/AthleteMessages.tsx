import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../context/AuthContext';
import { ChevronRight } from 'lucide-react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import logo from 'figma:asset/6715fa8a90369e65d79802402e0679daa2d685be.png';

interface Conversation {
  id: string;
  coachName: string;
  lastMessage: string;
  lastMessageAt: any;
  avatar: string;
}

export function AthleteMessages() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [conversations, setConversations] = useState<Conversation[]>([]);

  useEffect(() => {
    if (!user) return;
    const q = query(collection(db, 'conversations'), where('athleteId', '==', user.id));
    const unsubscribe = onSnapshot(q, (snap) => {
      const convos = snap.docs.map((d) => {
        const data = d.data();
        const initials = data.coachName
          ? data.coachName.split(' ').map((n: string) => n[0]).join('').toUpperCase()
          : 'C';
        return {
          id: d.id,
          coachName: data.coachName || 'Coach',
          lastMessage: data.lastMessage || 'No messages yet',
          lastMessageAt: data.lastMessageAt,
          avatar: initials,
        };
      });
      setConversations(convos);
    });
    return unsubscribe;
  }, [user]);

  const formatTimestamp = (ts: any) => {
    if (!ts?.toDate) return '';
    return ts.toDate().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  };

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
        {conversations.length === 0 ? (
          <div className="text-center text-gray-400 py-12">No conversations yet</div>
        ) : (
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            {conversations.map((convo) => (
              <button
                key={convo.id}
                onClick={() => navigate(`/athlete/messages/${convo.id}`)}
                className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors"
              >
                <div className="w-12 h-12 bg-[#FFD000] rounded-full flex items-center justify-center text-black flex-shrink-0">
                  {convo.avatar}
                </div>
                <div className="flex-1 text-left overflow-hidden">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-black">{convo.coachName}</h4>
                    <span className="text-sm text-gray-500">{formatTimestamp(convo.lastMessageAt)}</span>
                  </div>
                  <p className="text-gray-500 truncate">{convo.lastMessage}</p>
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
