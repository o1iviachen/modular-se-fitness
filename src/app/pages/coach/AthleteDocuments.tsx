import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router';
import { ArrowLeft, FileText, Upload, Trash2, Loader2 } from 'lucide-react';
import logo from 'figma:asset/6715fa8a90369e65d79802402e0679daa2d685be.png';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { subscribeToDocuments, uploadDocument, deleteDocument, formatFileSize, DocumentItem } from '../../lib/documentService';

export function AthleteDocuments() {
  const { athleteId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const routeState = location.state as { athleteName?: string; isArchived?: boolean } | null;
  const isArchived = routeState?.isArchived ?? false;
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [athleteName, setAthleteName] = useState(routeState?.athleteName ?? '');
  const [loading, setLoading] = useState(!routeState?.athleteName);
  const [documents, setDocuments] = useState<DocumentItem[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');

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

  // Subscribe to documents
  useEffect(() => {
    if (!athleteId) return;
    return subscribeToDocuments(athleteId, setDocuments);
  }, [athleteId]);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !athleteId) return;
    setUploading(true);
    setUploadError('');
    try {
      await uploadDocument(athleteId, file);
    } catch (err: any) {
      console.error('Upload failed:', err);
      setUploadError(err?.message?.includes('storage')
        ? 'Upload failed. Please check Firebase Storage rules.'
        : 'Upload failed. Please try again.');
    } finally {
      setUploading(false);
      // Reset input so the same file can be selected again
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleDelete = async (d: DocumentItem) => {
    if (!athleteId) return;
    await deleteDocument(athleteId, d.id, d.storagePath);
  };

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
            <div
              key={d.id}
              className="bg-white rounded-xl shadow-sm p-4"
            >
              <div className="flex items-start gap-3">
                <a
                  href={d.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center flex-shrink-0 hover:bg-gray-200 transition-colors"
                >
                  <FileText className="w-5 h-5 text-gray-600" />
                </a>
                <div className="flex-1 min-w-0">
                  <a
                    href={d.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-gray-900 truncate block hover:text-[#FFD000] transition-colors"
                  >
                    {d.name}
                  </a>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                    <span>{formatFileSize(d.size)}</span>
                    {d.createdAt && (
                      <>
                        <span>·</span>
                        <span>{d.createdAt.toDate().toLocaleDateString()}</span>
                      </>
                    )}
                  </div>
                </div>
                {!isArchived && (
                  <button
                    onClick={() => handleDelete(d)}
                    className="text-gray-400 hover:text-red-500 transition-colors p-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-xl p-8 text-center">
            <p className="text-gray-500">No documents uploaded</p>
          </div>
        )}
      </div>

      {/* Upload Error */}
      {uploadError && (
        <div className="px-6 mt-4">
          <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
            {uploadError}
          </div>
        </div>
      )}

      {/* Upload Button */}
      {!isArchived && (
        <div className="px-6 mt-6">
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileSelect}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="w-full bg-[#FFD000] text-black rounded-xl p-4 flex items-center justify-center gap-3 hover:bg-[#FFD000]/90 transition-colors shadow-sm disabled:opacity-60"
          >
            {uploading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Uploading...</span>
              </>
            ) : (
              <>
                <Upload className="w-5 h-5" />
                <span>Upload Document</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
