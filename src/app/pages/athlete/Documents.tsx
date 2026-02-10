import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, FileText, Download } from 'lucide-react';
import logo from 'figma:asset/6715fa8a90369e65d79802402e0679daa2d685be.png';
import { useAuth } from '../../context/AuthContext';
import { subscribeToDocuments, formatFileSize, DocumentItem } from '../../lib/documentService';

export function Documents() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [documents, setDocuments] = useState<DocumentItem[]>([]);

  useEffect(() => {
    if (!user?.id) return;
    return subscribeToDocuments(user.id, setDocuments);
  }, [user?.id]);

  return (
    <div className="min-h-full bg-gray-50">
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
        {documents.length > 0 ? (
          <div className="space-y-3">
            {documents.map((d) => (
              <div
                key={d.id}
                className="bg-white rounded-xl p-5 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-12 h-12 bg-[#FFD000]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-[#FFD000]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-black mb-1">{d.name}</h3>
                      <p className="text-sm text-gray-500">
                        {d.createdAt ? d.createdAt.toDate().toLocaleDateString() : ''}
                        {' '}&bull; {formatFileSize(d.size)}
                      </p>
                    </div>
                  </div>
                  <a
                    href={d.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#FFD000] transition-colors p-1"
                  >
                    <Download className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl p-8 text-center">
            <p className="text-gray-500">No documents yet</p>
          </div>
        )}
      </div>
    </div>
  );
}
