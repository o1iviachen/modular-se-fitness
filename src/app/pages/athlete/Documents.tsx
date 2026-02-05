import { useNavigate } from 'react-router';
import { ArrowLeft, FileText, Download } from 'lucide-react';
import logo from 'figma:asset/6715fa8a90369e65d79802402e0679daa2d685be.png';

const documents = [
  { id: 1, name: 'Nutrition Guide', date: 'Jan 28, 2026', size: '2.4 MB' },
  { id: 2, name: 'Training Plan - Q1 2026', date: 'Jan 15, 2026', size: '1.8 MB' },
  { id: 3, name: 'Progress Photos Guide', date: 'Jan 10, 2026', size: '890 KB' },
  { id: 4, name: 'Meal Prep Guidelines', date: 'Jan 5, 2026', size: '1.2 MB' },
  { id: 5, name: 'Recovery Protocols', date: 'Dec 28, 2025', size: '3.1 MB' }
];

export function Documents() {
  const navigate = useNavigate();

  return (
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
        <h1 className="text-xl font-semibold">Documents</h1>
        <p className="text-gray-400 text-sm mt-1">Shared by your coach</p>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        <div className="space-y-3">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-12 h-12 bg-[#FFD000]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-[#FFD000]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-black mb-1">{doc.name}</h3>
                    <p className="text-sm text-gray-500">{doc.date} • {doc.size}</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-[#FFD000] transition-colors">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
