import { ReactNode } from 'react';

interface PageCardProps {
  children: ReactNode;
  className?: string;
}

export function PageCard({ children, className = '' }: PageCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-sm p-5 ${className}`}>
      {children}
    </div>
  );
}
