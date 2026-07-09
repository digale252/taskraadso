import React from 'react';

const Logo = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/img/partner2.png"
        alt="RAADSO TECH Logo"
        className="h-10 md:h-12 object-contain"
      />
    </div>
  );
};

export default Logo;
