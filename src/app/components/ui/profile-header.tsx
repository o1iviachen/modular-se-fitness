import { ReactNode } from 'react';
import { Camera, Loader2 } from 'lucide-react';

interface ProfileHeaderProps {
  firstName?: string;
  lastName?: string;
  email?: string;
  photoURL?: string;
  subtitle?: ReactNode;
  onEditPhoto?: () => void;
  uploading?: boolean;
}

export function ProfileHeader({ firstName, lastName, email, photoURL, subtitle, onEditPhoto, uploading }: ProfileHeaderProps) {
  return (
    <div className="bg-black text-white px-6 pt-12 pb-8">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          {photoURL ? (
            <img
              src={photoURL}
              alt={`${firstName} ${lastName}`}
              className={`w-20 h-20 rounded-full object-cover ${uploading ? 'opacity-50' : ''}`}
            />
          ) : (
            <div className={`w-20 h-20 bg-[#FFD000] rounded-full flex items-center justify-center text-black text-2xl ${uploading ? 'opacity-50' : ''}`}>
              {firstName?.[0]}{lastName?.[0]}
            </div>
          )}
          {uploading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="w-8 h-8 text-white animate-spin" />
            </div>
          )}
          {onEditPhoto && !uploading && (
            <button
              onClick={onEditPhoto}
              className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
            >
              <Camera className="w-4 h-4 text-black" />
            </button>
          )}
        </div>
        <div>
          <h1 className="text-xl font-semibold">{firstName} {lastName}</h1>
          <p className="text-gray-400 text-sm">{email}</p>
        </div>
      </div>
      {subtitle && <div>{subtitle}</div>}
    </div>
  );
}
