import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { Send, ArrowLeft } from 'lucide-react';
import {
  doc, getDoc, collection, query, orderBy, onSnapshot, addDoc, updateDoc, serverTimestamp,
} from 'firebase/firestore';
import { db } from '../lib/firebase';

interface ChatMessage {
  id: string;
  text: string;
  sender: 'me' | 'other';
  timestamp: string;
}

export function Messages() {
  const { chatId } = useParams<{ chatId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [convoData, setConvoData] = useState<{ name: string; avatar: string; role: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Fetch conversation metadata
  useEffect(() => {
    if (!chatId || !user) return;
    const fetchConvo = async () => {
      const snap = await getDoc(doc(db, 'conversations', chatId));
      if (!snap.exists()) {
        setLoading(false);
        return;
      }
      const data = snap.data();
      const isCoach = user.role === 'coach';
      const name = isCoach ? data.athleteName : data.coachName;
      const initials = name
        ? name.split(' ').map((n: string) => n[0]).join('').toUpperCase()
        : '?';
      setConvoData({
        name,
        avatar: initials,
        role: isCoach ? 'Athlete' : 'Coach',
      });
      setLoading(false);
    };
    fetchConvo();
  }, [chatId, user]);

  // Listen to messages in real-time and mark as read
  useEffect(() => {
    if (!chatId || !user) return;
    const q = query(
      collection(db, 'conversations', chatId, 'messages'),
      orderBy('timestamp', 'asc'),
    );
    const unsubscribe = onSnapshot(q, (snap) => {
      const msgs = snap.docs.map((d) => {
        const data = d.data();
        const ts = data.timestamp?.toDate?.();
        return {
          id: d.id,
          text: data.text,
          sender: data.senderId === user.id ? 'me' : 'other',
          timestamp: ts
            ? ts.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
            : '',
        } as ChatMessage;
      });
      setMessages(msgs);

      // Mark conversation as read
      updateDoc(doc(db, 'conversations', chatId), {
        [`lastReadBy.${user.id}`]: serverTimestamp(),
      }).catch(() => {});
    });
    return unsubscribe;
  }, [chatId, user]);

  const handleSend = async () => {
    if (!message.trim() || !chatId || !user) return;
    const text = message.trim();
    setMessage('');

    await addDoc(collection(db, 'conversations', chatId, 'messages'), {
      text,
      senderId: user.id,
      senderRole: user.role,
      timestamp: serverTimestamp(),
    });

    await updateDoc(doc(db, 'conversations', chatId), {
      lastMessage: text,
      lastMessageAt: serverTimestamp(),
    });
  };

  const handleBack = () => {
    if (user?.role === 'coach') {
      navigate('/coach/inbox');
    } else {
      navigate('/athlete/messages');
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (loading) return null;

  return (
    <>
      {!convoData ? (
        <div className="h-full flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <p className="text-gray-500 text-lg mb-4">Conversation not found</p>
            <button
              onClick={handleBack}
              className="px-6 py-3 bg-[#FFD000] text-black rounded-lg hover:bg-[#FFD000]/90"
            >
              Go Back
            </button>
          </div>
        </div>
      ) : (
        <div className="h-full bg-white flex flex-col">
          {/* Header */}
          <div className="bg-black text-white px-6 pt-12 pb-5 flex items-center gap-4">
            <button
              onClick={handleBack}
              className="hover:bg-white/10 p-2 rounded-lg transition-colors -ml-2"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="w-10 h-10 bg-[#FFD000] rounded-full flex items-center justify-center text-black flex-shrink-0">
              {convoData.avatar}
            </div>
            <div>
              <h2 className="text-lg">{convoData.name}</h2>
              <p className="text-gray-400 text-sm">{convoData.role}</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-gray-50">
            {messages.length === 0 ? (
              <div className="text-center text-gray-400 py-12">
                No messages yet. Say hello!
              </div>
            ) : (
              messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                      msg.sender === 'me'
                        ? 'bg-[#FFD000] text-black'
                        : 'bg-white text-black border border-gray-200'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <p
                      className={`text-sm mt-1 ${
                        msg.sender === 'me' ? 'text-black/60' : 'text-gray-500'
                      }`}
                    >
                      {msg.timestamp}
                    </p>
                  </div>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 px-6 py-4 bg-white">
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 px-4 py-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
              />
              <button
                onClick={handleSend}
                className="w-12 h-12 bg-[#FFD000] rounded-full flex items-center justify-center hover:bg-[#FFD000]/90 transition-colors"
              >
                <Send className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
