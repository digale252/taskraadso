import React from 'react';
import { motion } from 'framer-motion';

const Partners = () => {
  const partners = [
    { id: 1, logo: '/img/partner1.png', name: 'Partner 1' },
    { id: 2, logo: '/img/partner2.png', name: 'Partner 2' },
    { id: 3, logo: '/img/partner3.png', name: 'Partner 3' },
    { id: 4, logo: '/img/partner4.png', name: 'Partner 4' },
    { id: 5, logo: '/img/partner5.png', name: 'Partner 5' },
    { id: 6, logo: '/img/partner6.png', name: 'Partner 6' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">
            Our Partners
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B132B] mb-4">
            We work with the best partners
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            We collaborate with leading companies to build digital solutions that drive growth and innovation.
          </p>
        </motion.div>

        {/* Infinite Scrolling Marquee */}
        <div className="overflow-hidden w-full relative mt-8 py-6">
          <motion.div
            className="flex flex-nowrap w-max items-center gap-16 md:gap-24 pr-16 md:pr-24"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          >
            {[...partners, ...partners].map((partner, idx) => (
              <div 
                key={`${partner.id}-${idx}`} 
                className="w-32 md:w-40 flex items-center justify-center flex-shrink-0 transition-transform duration-300 transform hover:scale-110"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-auto object-contain max-h-20"
                />
              </div>
            ))}
          </motion.div>

          {/* Fade Edges for smooth look */}
          <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
