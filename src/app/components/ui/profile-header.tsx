import { ReactNode } from 'react';
import { Camera } from 'lucide-react';

interface ProfileHeaderProps {
  firstName?: string;
  lastName?: string;
  email?: string;
  photoURL?: string;
  subtitle?: ReactNode;
  onEditPhoto?: () => void;
}

export function ProfileHeader({ firstName, lastName, email, photoURL, subtitle, onEditPhoto }: ProfileHeaderProps) {
  return (
    <div className="bg-black text-white px-6 pt-12 pb-8">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          {photoURL ? (
            <img
              src={photoURL}
              alt={`${firstName} ${lastName}`}
              className="w-20 h-20 rounded-full object-cover"
            />
          ) : (
            <div className="w-20 h-20 bg-[#FFD000] rounded-full flex items-center justify-center text-black text-2xl">
              {firstName?.[0]}{lastName?.[0]}
            </div>
          )}
          {onEditPhoto && (
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
