import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { Send, ArrowLeft } from 'lucide-react';

// Mock conversations and messages data
const mockConversationsData = {
  '1': {
    name: 'John Doe',
    avatar: 'JD',
    role: 'Athlete',
    messages: [
      { id: 1, text: 'Hey coach, I have a question about my workout plan', sender: 'other', timestamp: '10:30 AM' },
      { id: 2, text: 'Of course! What would you like to know?', sender: 'me', timestamp: '10:32 AM' },
      { id: 3, text: 'Should I increase the weight next session?', sender: 'other', timestamp: '10:40 AM' },
    ]
  },
  '2': {
    name: 'Jane Smith',
    avatar: 'JS',
    role: 'Athlete',
    messages: [
      { id: 1, text: 'Thanks for the nutrition guide!', sender: 'other', timestamp: '2:15 PM' },
      { id: 2, text: 'You\'re welcome! Let me know if you have any questions', sender: 'me', timestamp: '2:20 PM' },
    ]
  },
  '3': {
    name: 'Mike Johnson',
    avatar: 'MJ',
    role: 'Athlete',
    messages: [
      { id: 1, text: 'I\'m feeling really sore today, should I rest?', sender: 'other', timestamp: '9:00 AM' },
      { id: 2, text: 'Yes, take today off. Light stretching would be good', sender: 'me', timestamp: '9:05 AM' },
    ]
  },
  '4': {
    name: 'Sarah Williams',
    avatar: 'SW',
    role: 'Athlete',
    messages: [
      { id: 1, text: 'Great workout today! Felt strong on deadlifts.', sender: 'other', timestamp: 'Yesterday' },
      { id: 2, text: 'Awesome! Your form is looking great', sender: 'me', timestamp: 'Yesterday' },
    ]
  },
  'coach': {
    name: 'Coach Sarah',
    avatar: 'SE',
    role: 'SE Fitness',
    messages: [
      { id: 1, text: 'Great work on today\'s workout!', sender: 'other', timestamp: '10:30 AM' },
      { id: 2, text: 'Thank you! Felt really strong today', sender: 'me', timestamp: '10:35 AM' },
      { id: 3, text: 'I can tell! Your form on squats is improving a lot', sender: 'other', timestamp: '10:37 AM' },
      { id: 4, text: 'Should I increase the weight next session?', sender: 'me', timestamp: '10:40 AM' },
      { id: 5, text: 'Yes, let\'s try adding 10 lbs. You\'re ready for it!', sender: 'other', timestamp: '10:42 AM' }
    ]
  }
};

export function Messages() {
  const { chatId } = useParams<{ chatId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const conversation = chatId ? mockConversationsData[chatId as keyof typeof mockConversationsData] : null;
  const [messages, setMessages] = useState(conversation?.messages || []);

  const handleSend = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: message,
      sender: 'me' as const,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setMessage('');
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

  return (
    <>
      {!conversation ? (
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
          <div className="bg-black text-white px-6 py-5 flex items-center gap-4">
            <button
              onClick={handleBack}
              className="hover:bg-white/10 p-2 rounded-lg transition-colors -ml-2"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="w-10 h-10 bg-[#FFD000] rounded-full flex items-center justify-center text-black flex-shrink-0">
              {conversation.avatar}
            </div>
            <div>
              <h2 className="text-lg">{conversation.name}</h2>
              <p className="text-gray-400 text-sm">{conversation.role}</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-gray-50">
            {messages.map((msg) => (
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
            ))}
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
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
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