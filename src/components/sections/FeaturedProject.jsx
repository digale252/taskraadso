import React from 'react';
import { motion } from 'framer-motion';

const FeaturedProject = () => {
  return (
    <section className="relative pt-4 pb-24 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase">
              Featured Project
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4">
              Raadso POS System
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              A powerful, intuitive, and modern Point of Sale system designed to streamline business operations, manage inventory, and drive growth.
            </p>
          </motion.div>
        </div>

        {/* Project Showcase Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Decorative glow behind the image */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-primary/20 to-blue-400/20 blur-3xl rounded-full transform scale-110"></div>
          
          {/* Main Showcase Image Wrapper */}
          <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden bg-white/50 backdrop-blur-sm border border-white/60 p-2 md:p-4 shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
            <img 
              src="/img/pos system.png" 
              alt="Raadso POS System UI" 
              className="w-full h-auto rounded-xl md:rounded-3xl border border-gray-100 shadow-sm"
            />
          </div>

          {/* Floating UI Badges (Optional for extra UI flair) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -left-4 md:-left-8 top-1/4 bg-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-50 z-20"
          >
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <div>
              <div className="text-xs text-gray-500 font-medium">Status</div>
              <div className="text-sm font-bold text-black">Live Project</div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedProject;
