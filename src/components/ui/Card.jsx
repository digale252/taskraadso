import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', animate = true, delay = 0 }) => {
  const content = (
    <div className={`glass-card p-6 md:p-8 hover:-translate-y-2 transition-transform duration-300 ${className}`}>
      {children}
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
};

export default Card;
