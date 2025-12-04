import React from 'react';

interface BorderBeamButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const BorderBeamButton: React.FC<BorderBeamButtonProps> = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-3 font-medium text-white transition-transform active:scale-95 ${className}`}
      {...props}
    >
      {/* Background/Border Gradient */}
      <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-spin-slow" />
      
      {/* Moving Beam Border - Pseudo implementation via offset div */}
      <span className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-border-beam" style={{backgroundSize: "200% 200%"}}></span>

      {/* Inner Content Background */}
      <span className="absolute inset-[1px] rounded-full bg-zinc-950 transition-colors duration-300 group-hover:bg-zinc-900" />
      
      {/* Text */}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default BorderBeamButton;
