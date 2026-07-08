import React from 'react';
import { motion } from 'framer-motion';
import Badge from '../ui/Badge';

const PortfolioCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-3xl overflow-hidden h-80 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_50px_rgba(0,0,0,0.15)] transition-all duration-500"
    >
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-7 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
        <Badge className="mb-3 inline-block bg-primary/90 text-black text-[0.65rem] font-bold tracking-wider px-3 py-1 rounded-full backdrop-blur-sm">
          {item.category}
        </Badge>
        <h3 className="text-2xl font-bold mb-2 text-white leading-tight">
          {item.title}
        </h3>
        <p className="text-gray-300/90 line-clamp-2 text-sm opacity-0 group-hover:opacity-100 transition-all duration-400 delay-100 transform translate-y-2 group-hover:translate-y-0">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
