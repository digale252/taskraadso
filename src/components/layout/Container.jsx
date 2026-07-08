import React from 'react';

const Container = ({ children, className = '', id }) => {
  return (
    <section id={id} className={`py-20 md:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full ${className}`}>
      {children}
    </section>
  );
};

export default Container;
