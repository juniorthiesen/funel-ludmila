import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to?: string;
  href?: string;
  children: React.ReactNode;
  className?: string;
  pulse?: boolean;
  variant?: 'primary' | 'outline';
  hoverText?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  to, 
  href, 
  children, 
  className = '', 
  pulse = false,
  hoverText
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses = `
    relative inline-flex items-center justify-center 
    px-10 py-5 text-sm font-heading font-bold uppercase tracking-[2px]
    border border-white/20 text-premium-text overflow-hidden
    transition-all duration-300 ease-out hover-trigger
    group
    ${pulse ? 'animate-pulse-gold' : ''}
    ${className}
  `;

  const content = (
    <>
      <span className={`absolute inset-0 w-full h-full bg-premium-gold transform transition-transform duration-500 ease-in-out ${isHovered ? 'translate-x-0' : '-translate-x-full'} z-0`}></span>
      <span className={`relative z-10 transition-colors duration-300 ${isHovered ? 'text-black' : 'text-premium-text'}`}>
        {hoverText && isHovered ? hoverText : children}
      </span>
    </>
  );

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  if (to) {
    return (
      <Link 
        to={to} 
        className={baseClasses}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a 
        href={href} 
        className={baseClasses}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      className={baseClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </button>
  );
};