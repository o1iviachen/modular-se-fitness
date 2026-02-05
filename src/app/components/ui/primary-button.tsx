import { ReactNode, ButtonHTMLAttributes } from 'react';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  fullWidth?: boolean;
}

export function PrimaryButton({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  disabled,
  ...props 
}: PrimaryButtonProps) {
  const baseStyles = 'p-4 rounded-lg transition-colors disabled:opacity-50';
  const widthStyles = fullWidth ? 'w-full' : '';
  
  const variantStyles = {
    primary: 'bg-[#FFD000] text-black hover:bg-[#FFD000]/90',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    danger: 'bg-red-50 text-red-600 hover:bg-red-100'
  };

  return (
    <button
      className={`${baseStyles} ${widthStyles} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
