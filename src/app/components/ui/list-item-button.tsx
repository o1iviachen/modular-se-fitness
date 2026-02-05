import { ReactNode } from 'react';

interface ListItemButtonProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
  noBorder?: boolean;
}

export function ListItemButton({ 
  onClick, 
  children, 
  className = '',
  noBorder = false 
}: ListItemButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors ${
        !noBorder ? 'border-b border-gray-100' : ''
      } ${className}`}
    >
      <span className="text-black">{children}</span>
      <span className="text-gray-400">›</span>
    </button>
  );
}
