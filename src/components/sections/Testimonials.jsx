import React from 'react';
import { motion } from 'framer-motion';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Musab Digaale",
      role: "Entrepreneur",
      image: "/img/testimonial1.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam temporibus quidem magni qui doloribus quasi natus inventore nisi velit minima."
    },
    {
      id: 2,
      name: "Musab Digaale",
      role: "Entrepreneur",
      image: "/img/testimonial1.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam temporibus quidem magni qui doloribus quasi natus inventore nisi velit minima."
    },
    {
      id: 3,
      name: "Musab Digaale",
      role: "Entrepreneur",
      image: "/img/testimonial1.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam temporibus quidem magni qui doloribus quasi natus inventore nisi velit minima."
    }
  ];

  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Background Ghost Text */}
      <div className="absolute top-0 md:-top-10 left-1/2 -translate-x-1/2 w-full text-center z-0 pointer-events-none">
        <span className="text-[6rem] md:text-[15rem] font-bold text-gray-200/30 whitespace-nowrap tracking-tighter select-none">
          Testimonials
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-primary text-sm font-bold uppercase mb-2 tracking-widest">
              What our customers say about us
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B132B]">
              Testimonials
            </h2>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div className="flex items-center justify-center gap-4 md:gap-8 relative">
          
          {/* Left Arrow */}
          <button className="hidden md:flex absolute -left-4 lg:left-0 z-20 w-12 h-12 bg-white rounded-full items-center justify-center shadow-md text-gray-600 hover:text-primary transition-colors hover:scale-105 border border-gray-100">
            <LuChevronLeft size={24} />
          </button>

          {/* Cards Wrapper */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-5xl">
            {testimonials.map((test, idx) => {
              const isCenter = idx === 1;
              return (
                <motion.div
                  key={test.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-8 transition-all duration-500 text-center flex flex-col items-center ${
                    isCenter 
                      ? "w-full md:w-[45%] z-10 transform scale-100 md:scale-110 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-100" 
                      : "w-full md:w-[35%] opacity-60 hover:opacity-100 transform scale-100 md:scale-90 hidden md:flex"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-6 w-full justify-center">
                    <img 
                      src={test.image} 
                      alt={test.name} 
                      className="w-16 h-16 rounded-full object-cover shadow-sm bg-gray-100"
                    />
                    <div className="text-left">
                      <h4 className="text-lg font-bold text-gray-900 leading-tight">{test.name}</h4>
                      <p className="text-sm text-gray-500 font-medium">{test.role}</p>
                    </div>
                  </div>
                  <p className={`text-gray-500 leading-relaxed font-medium ${isCenter ? 'text-[15px]' : 'text-sm'}`}>
                    "{test.text}"
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button className="hidden md:flex absolute -right-4 lg:right-0 z-20 w-12 h-12 bg-white rounded-full items-center justify-center shadow-md text-gray-600 hover:text-primary transition-colors hover:scale-105 border border-gray-100">
            <LuChevronRight size={24} />
          </button>

        </div>

        {/* Mobile indicators */}
        <div className="flex justify-center gap-2 mt-8 md:hidden">
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-8 h-2 rounded-full bg-primary"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
