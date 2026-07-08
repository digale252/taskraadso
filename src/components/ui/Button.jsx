import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center";
  
  const variants = {
    primary: "bg-primary text-black hover:bg-black hover:text-primary shadow-soft",
    secondary: "bg-black text-white hover:bg-gray-800 shadow-soft",
    outline: "border-2 border-primary text-black hover:bg-primary hover:text-black",
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
