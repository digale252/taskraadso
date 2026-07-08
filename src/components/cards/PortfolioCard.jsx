import React from 'react';
import { motion } from 'framer-motion';
import Badge from '../ui/Badge';

const PortfolioCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-[0_10px_40px_rgba(243,199,21,0.2)] transition-all duration-500 h-80 cursor-pointer"
    >
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      
      {/* Sleek Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Text Overlay Content */}
      <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <Badge className="mb-3 inline-block bg-primary text-black">{item.category}</Badge>
        <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
        <p className="text-gray-300 line-clamp-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
