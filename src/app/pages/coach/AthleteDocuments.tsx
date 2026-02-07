import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router';
import { ArrowLeft, FileText, Upload } from 'lucide-react';
import logo from 'figma:asset/6715fa8a90369e65d79802402e0679daa2d685be.png';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';

interface Document {
  id: number;
  name: string;
  type: string;
  uploadedDate: string;
  size: string;
}

export function AthleteDocuments() {
  const { athleteId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const routeState = location.state as { athleteName?: string } | null;

  const [athleteName, setAthleteName] = useState(routeState?.athleteName ?? '');
  const [loading, setLoading] = useState(!routeState?.athleteName);
  const [documents] = useState<Document[]>([]);

  // Fetch athlete name from Firestore (only if not passed via route state)
  useEffect(() => {
    if (!athleteId || routeState?.athleteName) { setLoading(false); return; }
    getDoc(doc(db, 'users', athleteId)).then((snap) => {
      if (snap.exists()) {
        const data = snap.data();
        setAthleteName(`${data.firstName} ${data.lastName}`);
      }
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [athleteId]);

  if (loading) return null;

  if (!athleteName) {
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
          onClick={() => navigate(-1)}
          className="text-white mb-4 hover:text-[#FFD000] transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <img src={logo} alt="SE Fitness" className="h-10 w-auto mb-3" />
        <h1 className="text-xl mb-1 font-semibold">{athleteName}'s Documents</h1>
        <p className="text-gray-400 text-sm">View and manage documents</p>
      </div>

      {/* Documents List */}
      <div className="px-6 mt-6 space-y-3">
        {documents.length > 0 ? (
          documents.map((d) => (
            <button
              key={d.id}
              onClick={() => alert(`Opening ${d.name}`)}
              className="w-full bg-white rounded-xl shadow-sm p-4 hover:bg-gray-50 transition-colors text-left"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-gray-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-gray-900 truncate">{d.name}</div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                    <span>{d.type}</span>
                    <span>·</span>
                    <span>{d.size}</span>
                    <span>·</span>
                    <span>{d.uploadedDate}</span>
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
