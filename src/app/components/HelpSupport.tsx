import { useNavigate } from 'react-router';
import { ArrowLeft, Mail, ChevronRight, ExternalLink, ShieldCheck } from 'lucide-react';


const athleteFaq = [
  { question: 'How do I change my workout schedule?', answer: 'Your coach manages your workout schedule. Send them a message to request changes.' },
  { question: 'How do I track my progress?', answer: 'Complete your workouts and log your results. Your stats will automatically update on your profile.' },
  { question: 'What if I miss a workout?', answer: "Don't worry! Your coach can adjust your schedule. Just get back on track with your next workout." },
];

const coachFaq = [
  { question: 'How do I add a new athlete?', answer: 'Share your coach code with athletes from your profile page. Once they enter it during signup, they\'ll appear on your dashboard.' },
  { question: 'How do I assign workouts?', answer: 'Go to an athlete\'s profile, tap Workouts, and create a new workout. You can also duplicate existing workouts from your library.' },
  { question: 'How do I create custom exercises?', answer: 'Go to your Library tab, tap the + button, and fill in the exercise details. Custom exercises will appear alongside the default library.' },
  { question: 'How do I archive an athlete?', answer: 'On your home screen, long press an athlete card or use the archive option in their profile. Archived athletes can be reactivated anytime.' },
  { question: 'How do I message my athletes?', answer: 'Go to the Inbox tab to see all conversations. Tap on an athlete to open the chat and send messages.' },
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
