import { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import {
  collection, query, orderBy, onSnapshot, addDoc, serverTimestamp,
} from 'firebase/firestore';
import { db } from '../lib/firebase';

interface Comment {
  id: string;
  text: string;
  senderId: string;
  senderName: string;
  senderRole: 'athlete' | 'coach';
  timestamp: string;
}

interface WorkoutCommentsProps {
  athleteId: string;
  workoutDate: string;       // ISO date string e.g. "2026-02-10"
  displayDate: string;       // formatted for header e.g. "Feb 10, 2026"
  onClose: () => void;
}

export function WorkoutComments({ athleteId, workoutDate, displayDate, onClose }: WorkoutCommentsProps) {
  const { user } = useAuth();
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [isClosing, setIsClosing] = useState(false);
  const [translateY, setTranslateY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const startYRef = useRef(0);
  const currentYRef = useRef(0);

  const commentsRef = collection(db, 'users', athleteId, 'workouts', workoutDate, 'comments');

  // Subscribe to comments in real-time
  useEffect(() => {
    const q = query(commentsRef, orderBy('timestamp', 'asc'));
    const unsubscribe = onSnapshot(q, (snap) => {
      const msgs = snap.docs.map((d) => {
        const data = d.data();
        const ts = data.timestamp?.toDate?.();
        return {
          id: d.id,
          text: data.text,
          senderId: data.senderId,
          senderName: data.senderName,
          senderRole: data.senderRole,
          timestamp: ts
            ? ts.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
            : '',
        } as Comment;
      });
      setComments(msgs);
    });
    return unsubscribe;
  }, [athleteId, workoutDate]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [comments]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => onClose(), 300);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('.drag-handle')) return;
    startYRef.current = e.touches[0].clientY;
    currentYRef.current = e.touches[0].clientY;
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    currentYRef.current = e.touches[0].clientY;
    const deltaY = currentYRef.current - startYRef.current;
    if (deltaY > 0) setTranslateY(deltaY);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const deltaY = currentYRef.current - startYRef.current;
    if (deltaY > 150) {
      handleClose();
    } else {
      setTranslateY(0);
    }
  };

  const handleSend = async () => {
    if (!newComment.trim() || !user) return;
    const text = newComment.trim();
    setNewComment('');

    await addDoc(commentsRef, {
      text,
      senderId: user.id,
      senderName: `${user.firstName} ${user.lastName}`,
      senderRole: user.role,
      timestamp: serverTimestamp(),
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={`fixed inset-x-0 bottom-0 bg-white z-50 flex flex-col rounded-t-3xl shadow-2xl transition-transform duration-300 ${
          isClosing ? 'translate-y-full' : 'translate-y-0'
        }`}
        style={{
          height: 'calc(100vh - 60px)',
          transform: isDragging ? `translateY(${translateY}px)` : undefined,
          transition: isDragging ? 'none' : 'transform 0.3s ease-out'
        }}
      >
        {/* Drag Handle */}
        <div className="drag-handle pt-3 pb-2 flex justify-center cursor-grab active:cursor-grabbing">
          <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
        </div>

        {/* Header */}
        <div className="drag-handle bg-white border-b border-gray-200 px-4 py-3 text-center">
          <h1 className="text-lg font-semibold text-black">Workout Chat</h1>
          <p className="text-xs text-gray-500">{displayDate}</p>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto bg-gray-50 px-4 py-4">
          {comments.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="mb-6">
                  <div className="space-y-4 mb-8">
                    <div className="bg-white rounded-2xl p-4 shadow-sm max-w-[280px] mx-auto">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-sm max-w-[280px] mx-auto ml-auto">
                      <div className="h-4 bg-gray-200 rounded w-2/3 mb-2 ml-auto"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4 ml-auto"></div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-sm max-w-[280px] mx-auto">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-lg">No messages yet</p>
                <p className="text-gray-300 text-sm mt-1">Start the conversation about this workout</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4 pb-4">
              {comments.map((comment) => {
                const isMe = comment.senderId === user?.id;
                return (
                  <div
                    key={comment.id}
                    className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                        isMe
                          ? 'bg-[#FFD000] text-black'
                          : 'bg-white text-black border border-gray-200'
                      }`}
                    >
                      {!isMe && (
                        <div className="text-xs font-medium text-gray-500 mb-1">
                          {comment.senderName}
                        </div>
                      )}
                      <p className="text-sm whitespace-pre-wrap break-words">{comment.text}</p>
                      <div className={`text-xs mt-1 ${isMe ? 'text-black/50' : 'text-gray-400'}`}>
                        {comment.timestamp}
                      </div>
                    </div>
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="bg-white border-t border-gray-200 px-4 py-3">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type a message..."
              className="flex-1 px-4 py-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFD000] text-black placeholder-gray-400"
            />
            <button
              onClick={handleSend}
              disabled={!newComment.trim()}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                newComment.trim()
                  ? 'bg-[#FFD000] text-black hover:bg-[#FFD000]/90'
                  : 'bg-gray-200 text-gray-400'
              }`}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
