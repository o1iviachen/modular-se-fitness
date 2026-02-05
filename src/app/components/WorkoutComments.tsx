import { useState, useEffect, useRef } from 'react';
import { X, Send } from 'lucide-react';

interface Comment {
  id: string;
  text: string;
  sender: 'athlete' | 'coach';
  timestamp: string;
  senderName: string;
}

interface WorkoutCommentsProps {
  workoutId: string;
  workoutDate: string;
  onClose: () => void;
}

// Mock comments data
const mockComments: { [key: string]: Comment[] } = {
  '1': [
    {
      id: '1',
      text: 'Great work on the bench press today!',
      sender: 'coach',
      timestamp: '2:30 PM',
      senderName: 'Coach Sarah'
    },
    {
      id: '2',
      text: 'Thanks! I felt really strong today.',
      sender: 'athlete',
      timestamp: '2:32 PM',
      senderName: 'You'
    }
  ],
  '2': []
};

export function WorkoutComments({ workoutId, workoutDate, onClose }: WorkoutCommentsProps) {
  const [comments, setComments] = useState<Comment[]>(mockComments[workoutId] || []);
  const [newComment, setNewComment] = useState('');
  const [isClosing, setIsClosing] = useState(false);
  const [translateY, setTranslateY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const startYRef = useRef(0);
  const currentYRef = useRef(0);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [comments]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    // Only allow dragging from the header area
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
    
    // Only allow dragging down
    if (deltaY > 0) {
      setTranslateY(deltaY);
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    const deltaY = currentYRef.current - startYRef.current;
    
    // If dragged down more than 150px, close the modal
    if (deltaY > 150) {
      handleClose();
    } else {
      // Otherwise, snap back to position
      setTranslateY(0);
    }
  };

  const handleSend = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now().toString(),
        text: newComment,
        sender: 'athlete',
        timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
        senderName: 'You'
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
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
        <div className="drag-handle bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-center">
          <h1 className="text-lg font-semibold text-black">Workout Comments</h1>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto bg-gray-50 px-4 py-4">
          {comments.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="mb-6">
                  {/* Empty state illustration - simplified chat bubbles */}
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
                <p className="text-gray-400 text-lg">No comments on this workout</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4 pb-4">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className={`flex ${comment.sender === 'athlete' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                      comment.sender === 'athlete'
                        ? 'bg-[#FFD000] text-black'
                        : 'bg-white text-black'
                    }`}
                  >
                    {comment.sender === 'coach' && (
                      <div className="text-xs font-medium text-gray-600 mb-1">
                        {comment.senderName}
                      </div>
                    )}
                    <p className="text-sm whitespace-pre-wrap break-words">{comment.text}</p>
                    <div className="text-xs text-gray-500 mt-1">{comment.timestamp}</div>
                  </div>
                </div>
              ))}
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
              onKeyPress={handleKeyPress}
              placeholder="Add Comment"
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