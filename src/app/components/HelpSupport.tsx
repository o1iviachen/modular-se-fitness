import { useNavigate } from 'react-router';
import { ArrowLeft, Mail, ChevronRight, ExternalLink, ShieldCheck } from 'lucide-react';


const athleteFaq = [
  { question: 'How do I complete a workout?', answer: 'Tap on a workout, check off exercises as you complete them.' },
  { question: 'How do I message my coach?', answer: 'Go to Messages and select your coach to start a conversation.' },
  { question: 'How do I track my progress?', answer: 'View your profile to see stats, goals, and workout history.' },
  { question: 'What if I need to modify an exercise?', answer: 'Contact your coach through messages to request modifications.' }
];

const coachFaq = [
  { question: 'How do I invite new athletes?', answer: 'Share your unique coach code from your profile.' },
  { question: 'How do I create workout programs?', answer: 'Navigate to an athlete\'s calendar and assign workouts.' },
  { question: 'Can I customize exercises?', answer: 'Yes, use the Exercise Library to create custom exercises.' },
  { question: 'How do I track athlete progress?', answer: 'View athlete details to see stats and workout history' }
];

export function HelpSupport({ role }: { role: 'athlete' | 'coach' }) {
  const navigate = useNavigate();
  const faqItems = role === 'athlete' ? athleteFaq : coachFaq;
  const emailRoute = `/${role}/email-support`;

  return (
    <div className="min-h-full bg-gray-50">
      <div className="bg-black text-white px-6 py-8">
        <button onClick={() => navigate(-1)} className="text-white mb-4 hover:text-[#FFD000] transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <img src="/se-logo.png" alt="SE Fitness" className="h-10 w-auto mb-3" />
        <h1 className="text-xl font-semibold">Help and Support</h1>
      </div>

      <div className="px-6 py-6">
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-5 border-b border-gray-100">
              <h3 className="font-semibold">Contact Support</h3>
            </div>
            <button
              onClick={() => navigate(emailRoute)}
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

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="px-5 py-4 text-center border-b border-gray-100">
              <div className="text-sm text-gray-600 mb-1">App Version</div>
              <div className="font-medium">1.0.0</div>
            </div>
            <a
              href="https://o1iviachen.github.io/se-fitness-privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-4 flex items-center gap-3 hover:bg-gray-50 transition-colors"
            >
              <ShieldCheck className="w-5 h-5 text-gray-700" />
              <span className="flex-1 font-medium">Privacy Policy</span>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
