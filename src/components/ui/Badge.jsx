import React from 'react';

const Badge = ({ children, className = '' }) => {
  return (
    <span className={`px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase rounded-full tracking-wide ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
