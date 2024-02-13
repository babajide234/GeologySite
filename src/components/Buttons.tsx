import React from 'react'

interface ButtonsProps {
    children: React.ReactNode;
    outline?: boolean;
    color?: string;
    variant?: 'primary' | 'secondary' | 'success' | 'danger';
}

const Buttons: React.FC<ButtonsProps> = ({children, outline, variant}) => {
    const baseClasses = ' w-full md:w-fit px-5 py-2 focus:outline-none rounded-full';

    const getVariantClasses = () => {
        switch (variant) {
          case 'primary':
            return 'bg-blue-500 text-white';
          case 'secondary':
            return 'bg-white text-black';
          case 'success':
            return 'bg-green-500 text-white';
          case 'danger':
            return 'bg-red-500 text-white';
          default:
            return 'bg-black text-white';
        }
      };
    
      const getOutlineClasses = () => {
        return outline ? ` border-2 border-black ` : '';
      };

      const combinedClasses = `${baseClasses} ${getVariantClasses()} ${getOutlineClasses()}`;

  return (
    <button type='button' className={combinedClasses}>
        {children}
    </button>
  )
}

export default Buttons