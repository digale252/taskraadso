import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-primary font-bold tracking-wider uppercase text-sm mb-2"
      >
        {subtitle}
      </motion.p>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-5xl font-extrabold text-black"
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default SectionTitle;
