import { useNavigate } from 'react-router';
import { ArrowLeft, Mail, ChevronRight } from 'lucide-react';
import logo from 'figma:asset/6715fa8a90369e65d79802402e0679daa2d685be.png';

export function AthleteHelpSupport() {
  const navigate = useNavigate();

  const faqItems = [
    { question: 'How do I complete a workout?', answer: 'Tap on a workout, check off exercises as you complete them.' },
    { question: 'How do I message my coach?', answer: 'Go to Messages and select your coach to start a conversation.' },
    { question: 'How do I track my progress?', answer: 'View your profile to see stats, goals, and workout history.' },
    { question: 'What if I need to modify an exercise?', answer: 'Contact your coach through messages to request modifications.' }
  ];

  return (
    <div className="min-h-full bg-gray-50">
      <div className="bg-black text-white px-6 py-8">
        <button onClick={() => navigate(-1)} className="text-white mb-4 hover:text-[#FFD000] transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <img src={logo} alt="SE Fitness" className="h-10 w-auto mb-3" />
        <h1 className="text-xl font-semibold">Help & Support</h1>
      </div>

      <div className="px-6 py-6">
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-5 border-b border-gray-100">
              <h3 className="font-semibold">Contact Support</h3>
            </div>
            <button 
              onClick={() => navigate('/athlete/email-support')}
              className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FFD000] rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-black" />
                </div>
                <div className="text-left">
                  <div className="font-medium">Email Support</div>
                  <div className="text-sm text-gray-600">Send us a message</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-5 border-b border-gray-100">
              <h3 className="font-semibold">Frequently Asked Questions</h3>
            </div>
            <div className="divide-y divide-gray-100">
              {faqItems.map((item, index) => (
                <div key={index} className="px-5 py-4">
                  <div className="font-medium mb-2">{item.question}</div>
                  <div className="text-sm text-gray-600">{item.answer}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-5">
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-1">App Version</div>
              <div className="font-medium">1.0.0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}