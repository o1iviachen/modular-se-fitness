import { ReactNode } from 'react';

import gymBackground from 'figma:asset/22995820038f42fe600c7769e604277fa0c09953.png';

interface AuthContainerProps {
  children: ReactNode;
}

export function AuthContainer({ children }: AuthContainerProps) {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center p-6">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={gymBackground} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-sm flex flex-col items-center -mt-12">
        <div className="mb-12">
          <img src="/se-logo.png" alt="SE Fitness" className="h-32 w-auto" />
        </div>
        <div className="w-full">
          {children}
        </div>
      </div>
    </div>
  );
}
