import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Send } from 'lucide-react';
import logo from 'figma:asset/6715fa8a90369e65d79802402e0679daa2d685be.png';

export function CoachEmailSupport() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    // In a real app, this would send the email
    setSubmitted(true);
    setTimeout(() => {
      navigate(-1);
    }, 2000);
  };

  return (
    <>
      {submitted ? (
        <div className="min-h-full bg-gray-50 flex items-center justify-center px-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#FFD000] rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-black" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Message Sent!</h2>
            <p className="text-gray-600">We'll get back to you as soon as possible.</p>
          </div>
        </div>
      ) : (
        <div className="min-h-full bg-gray-50 pb-6">
          <div className="bg-black text-white px-6 py-8">
            <button onClick={() => navigate(-1)} className="text-white mb-4 hover:text-[#FFD000] transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <img src={logo} alt="SE Fitness" className="h-10 w-auto mb-3" />
            <h1 className="text-xl font-semibold">Email Support</h1>
            <p className="text-gray-400 text-sm mt-2">Send us a message and we'll get back to you</p>
          </div>

          <div className="px-6 py-6">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <div>
                  <label className="text-sm text-gray-600 block mb-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    placeholder="What can we help you with?"
                    className="w-full bg-gray-50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD000]"
                  />
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm">
                <div>
                  <label className="text-sm text-gray-600 block mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Tell us more about your issue or question..."
                    className="w-full bg-gray-50 rounded-lg px-4 py-3 min-h-[200px] focus:outline-none focus:ring-2 focus:ring-[#FFD000] resize-none"
                  />
                </div>
              </div>

              <div className="bg-gray-100 rounded-xl p-4">
                <p className="text-sm text-gray-600">
                  We typically respond within 24-48 hours. For urgent issues, please check our FAQ section.
                </p>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => navigate(-1)}
                className="flex-1 bg-gray-100 text-black rounded-xl py-3 hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={!formData.subject || !formData.message}
                className="flex-1 bg-[#FFD000] text-black rounded-xl py-3 hover:bg-[#FFD000]/90 transition-colors font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}