import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, FileText, Upload } from 'lucide-react';
import logo from 'figma:asset/6715fa8a90369e65d79802402e0679daa2d685be.png';
import { getAthlete, getAthleteDocuments } from '../../data/mockData';

export function AthleteDocuments() {
  const { athleteId } = useParams();
  const navigate = useNavigate();
  const athlete = athleteId ? getAthlete(athleteId) : null;
  const documents = athleteId ? getAthleteDocuments(athleteId) : [];

  if (!athlete) {
    return (
      <div className="min-h-full bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Athlete not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-gray-50 pb-6">
      {/* Header */}
      <div className="bg-black text-white px-6 py-8">
        <button
          onClick={() => navigate(`/coach/athlete/${athleteId}`)}
          className="text-white mb-4 hover:text-[#FFD000] transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <img src={logo} alt="SE Fitness" className="h-10 w-auto mb-3" />
        <h1 className="text-xl mb-1 font-semibold">{athlete.name}'s Documents</h1>
        <p className="text-gray-400 text-sm">View and manage documents</p>
      </div>

      {/* Documents List */}
      <div className="px-6 mt-6 space-y-3">
        {documents.length > 0 ? (
          documents.map((doc) => (
            <button
              key={doc.id}
              onClick={() => alert(`Opening ${doc.name}`)}
              className="w-full bg-white rounded-xl shadow-sm p-4 hover:bg-gray-50 transition-colors text-left"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-gray-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-gray-900 truncate">{doc.name}</div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                    <span>{doc.type}</span>
                    <span>·</span>
                    <span>{doc.size}</span>
                    <span>·</span>
                    <span>{doc.uploadedDate}</span>
                  </div>
                </div>
              </div>
            </button>
          ))
        ) : (
          <div className="bg-white rounded-xl p-8 text-center">
            <p className="text-gray-500">No documents uploaded</p>
          </div>
        )}
      </div>

      {/* Upload Button */}
      <div className="px-6 mt-6">
        <button 
          onClick={() => alert('Upload document functionality would be implemented here')}
          className="w-full bg-[#FFD000] text-black rounded-xl p-4 flex items-center justify-center gap-3 hover:bg-[#FFD000]/90 transition-colors shadow-sm"
        >
          <Upload className="w-5 h-5" />
          <span>Upload Document</span>
        </button>
      </div>
    </div>
  );
}
