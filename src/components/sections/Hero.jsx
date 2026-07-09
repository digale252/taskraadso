import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaMoon } from 'react-icons/fa';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[70vh] flex flex-col items-center justify-center pt-32 pb-10 overflow-hidden bg-white">

      {/* Abstract Background Gradient */}
      <div className="absolute top-[-20%] left-1/2 transform -translate-x-1/2 w-[120%] h-[80%] rounded-[100%] bg-gradient-to-b from-primary/15 to-transparent blur-[100px] pointer-events-none"></div>

      {/* Floating Dark Mode Toggle (Mock) */}
      <div className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20">
        <button className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-black shadow-sm hover:shadow-md transition-shadow">
          <FaMoon size={16} />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mt-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1"
          >
            {/* Badge */}
            <div className="mb-8 inline-block px-5 py-1.5 rounded-full border border-primary/30 bg-white text-primary text-xs font-bold tracking-widest uppercase">
              LEADING TECH SOLUTIONS IN SOMALIA
            </div>

            {/* Main Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-[1.1] mb-6 tracking-tight">
              Let's Make Your <br />
              <span className="text-primary inline-block mt-2">Business</span> Flourish
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl leading-relaxed">
              Streamline operations with our tailored ERP systems, innovative software development, and comprehensive cloud services. We believe that the prospect presented by technology has never been more spacious.
            </p>

            {/* Action / Search Input */}
            <div className="w-full max-w-md relative group">
              <input
                type="text"
                placeholder="Enter your business email"
                className="w-full pl-6 pr-32 py-4 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-white"
              />
              <Button variant="primary" className="absolute right-1.5 top-1.5 bottom-1.5 px-6 rounded-full text-sm font-bold shadow-none hover:shadow-md">
                Get Started
              </Button>
            </div>
          </motion.div>

          {/* Right Side - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 flex items-center justify-center"
          >
            <img
              src="/img/hr8.png"
              alt="Raadso Tech - Business Technology Solutions"
              className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>

        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50">
        <a
          href="https://wa.me/252610000000"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 relative group"
        >
          <FaWhatsapp size={32} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-[10px] font-bold flex items-center justify-center border border-white">
            1
          </span>
        </a>
      </div>

    </section>
  );
};

export default Hero;
