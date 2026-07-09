import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as Icons from 'react-icons/lu';
import { LuArrowRight } from 'react-icons/lu';

const ServiceCard = ({ service, index }) => {
  const IconComponent = Icons[service.icon] || Icons.LuMonitor;

  return (
    <Link to={`/services/${service.id}`} className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative h-full"
      >
        {/* Card */}
        <div className="relative h-full p-7 md:p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(243,199,21,0.15)] hover:border-primary/30 transition-all duration-500 overflow-hidden cursor-pointer">
          
          {/* Top gradient line accent - brand colors */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Hover background glow - brand yellow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary to-yellow-400 rounded-full opacity-0 group-hover:opacity-[0.08] blur-3xl transition-opacity duration-700"></div>

          {/* Icon - brand colors */}
          <div className="relative w-14 h-14 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black flex items-center justify-center mb-6 transition-all duration-400 group-hover:scale-110 group-hover:shadow-lg group-hover:rounded-xl">
            <IconComponent size={24} />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-black transition-colors duration-300">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-500 leading-relaxed text-[0.95rem] mb-6">
            {service.description}
          </p>

          {/* Learn More link */}
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-400 group-hover:text-black transition-all duration-300">
            <span>Learn More</span>
            <LuArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ServiceCard;
