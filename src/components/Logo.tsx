import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <span className={`font-sans font-bold tracking-tight ${className}`}>
      NS<span className="text-primary">.</span>
    </span>
  );
};

export default Logo;
