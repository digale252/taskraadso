import React from 'react';
import { motion } from 'framer-motion';

const SocialIcon = ({ icon: Icon, href, label }) => {
  return (
    <motion.a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-black transition-colors duration-300"
    >
      <Icon size={18} />
    </motion.a>
  );
};

export default SocialIcon;
