import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Send } from 'lucide-react';
import logo from 'figma:asset/6715fa8a90369e65d79802402e0679daa2d685be.png';

export function DevContact() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit logic here
    setSubmitted(true);
    setTimeout(() => {
      navigate(-1);
    }, 2000);
  };

  return (
    <>
      {submitted ? (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-[#FFD000] rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-10 h-10 text-black" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Message Sent!</h2>
            <p className="text-gray-600">We'll get back to you within 24-48 hours.</p>
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-gray-50">
          {/* Header */}
          <div className="bg-black text-white px-6 py-8">
            <button
              onClick={() => navigate(-1)}
              className="text-white mb-4 hover:text-[#FFD000] transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <img src={logo} alt="SE Fitness" className="h-10 w-auto mb-3" />
            <h1 className="text-xl font-semibold">Contact Dev Team</h1>
            <p className="text-gray-400 text-sm mt-1">We're here to help!</p>
          </div>

          {/* Content */}
          <div className="px-6 py-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Subject</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
                  placeholder="What can we help you with?"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD000] min-h-[200px] resize-none"
                  placeholder="Describe your issue or question in detail..."
                  required
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <h4 className="font-medium text-blue-900 mb-1">Response Time</h4>
                <p className="text-sm text-blue-700">We typically respond within 24-48 hours during business days.</p>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FFD000] text-black py-4 rounded-xl hover:bg-[#FFD000]/90 transition-colors font-medium flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}