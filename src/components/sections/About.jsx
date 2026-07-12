import React from 'react';
import { motion } from 'framer-motion';
import { LuTarget, LuEye } from 'react-icons/lu';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative flex justify-center items-center"
          >
            <img 
              src="/img/hr5.png" 
              alt="About RaadsoTech" 
              className="w-full h-auto object-contain max-h-[500px] drop-shadow-2xl relative z-10"
            />
            
            {/* Decorative Element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/20 rounded-full blur-[80px] -z-0 pointer-events-none"></div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">
              About Company
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B132B] dark:text-white mb-6 leading-tight">
              Driving Innovation Through Technology
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
              RaadsoTech is a leading technology solutions provider in Somalia. We specialize in transforming businesses through tailored software development, advanced ERP systems, and comprehensive IT services designed for growth and efficiency.
            </p>

            <div className="space-y-6">
              {/* Mission */}
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <LuTarget size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2">Our Mission</h3>
                  <p className="text-gray-500 dark:text-gray-300 leading-relaxed">
                    To deliver customized, high-quality digital solutions that streamline operations, solve complex challenges, and foster innovation for businesses across the region.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <LuEye size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2">Our Vision</h3>
                  <p className="text-gray-500 dark:text-gray-300 leading-relaxed">
                    To be the premier technology partner in Somalia and East Africa, empowering organizations to thrive in the modern digital economy.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
