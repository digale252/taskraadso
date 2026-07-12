import React from 'react';

const Logo = ({ className = '', theme = 'light' }) => {
  const logoSrc = theme === 'dark' ? '/img/logo-white.png' : '/img/logo-black.png';

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoSrc}
        alt="RAADSO TECH Logo"
        className="h-10 md:h-12 object-contain"
      />
    </div>
  );
};

export default Logo;
