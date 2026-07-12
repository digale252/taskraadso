import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LuArrowLeft, LuCircleCheck } from 'react-icons/lu';
import { services } from '../data/services';
import Button from '../components/ui/Button';

const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [hoveredPackageIndex, setHoveredPackageIndex] = useState(1);

  useEffect(() => {
    const foundService = services.find(s => s.id === id);
    setService(foundService);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 bg-gray-50 dark:bg-black transition-colors duration-300">
        <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Service Not Found</h2>
        <Link to="/">
          <Button variant="primary">Go Back Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <main className="pt-32 pb-24 bg-gray-50 dark:bg-black min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Back Button */}
        <Link to="/#services" className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-300 hover:text-primary font-medium mb-8 transition-colors">
          <LuArrowLeft /> Back to Services
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-32">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 pr-0 lg:pr-8 pt-4"
          >
            <div className="mb-4 inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase">
              {service.title}
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold text-black dark:text-white leading-tight mb-4">
              Elevate your business with our <br />
              <span className="text-primary block mt-1">{service.title}.</span>
            </h1>
            
            <div className="w-12 h-1 bg-primary mb-6 rounded-full"></div>
            
            <p className="text-base text-gray-500 dark:text-gray-300 leading-relaxed mb-8">
              {service.longDescription}
            </p>
          </motion.div>
          
          {/* Right Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 relative pl-0 md:pl-6"
          >
            {/* Background Offset Blob (Fixed Z-index so it's not hidden behind page bg) */}
            <div className="absolute top-6 right-0 md:-right-8 w-[90%] h-[90%] bg-primary rounded-[30px] md:rounded-[40px] z-0"></div>
            
            {/* Main Image */}
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-[350px] md:h-[420px] object-cover rounded-[20px] md:rounded-[30px] shadow-2xl relative z-10"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/800x600?text=Service+Image';
              }}
            />
            
            {/* Floating Glassmorphism Highlights Card */}
            {service.highlights && (
              <div className="absolute -bottom-6 -right-2 md:-bottom-10 md:-right-10 bg-white/90 dark:bg-[#111111]/90 backdrop-blur-xl rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.1)] p-4 md:p-6 z-20 flex gap-6 md:gap-8 items-center border border-white/50 dark:border-white/10 w-max">
                {service.highlights.map((highlight, idx) => {
                  const Icon = require('react-icons/lu')[highlight.icon] || require('react-icons/lu').LuStar;
                  return (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-[#fff8e6] rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                        <Icon size={18} />
                      </div>
                      <span className="text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-200 leading-tight">
                        {highlight.title.split(' ').map((word, i) => <React.Fragment key={i}>{word}<br/></React.Fragment>)}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </div>

        {/* Packages Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">Choose Your Package</h2>
            <p className="text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">Select a package that best fits your business needs, or contact us for a custom solution tailored just for you.</p>
          </div>

          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 max-w-6xl mx-auto items-center"
            onMouseLeave={() => setHoveredPackageIndex(1)}
          >
            {service.packages && service.packages.map((pkg, idx) => {
              const isPopular = hoveredPackageIndex === idx;
              return (
                <div 
                  key={idx} 
                  onMouseEnter={() => setHoveredPackageIndex(idx)}
                  className={`relative rounded-[2rem] p-8 md:p-10 flex flex-col transition-all duration-300 cursor-pointer ${
                    isPopular 
                      ? 'bg-primary text-black z-20 transform md:scale-105 shadow-[0_20px_50px_rgba(243,199,21,0.4)] border-none' 
                      : 'bg-white dark:bg-[#0f0f0f] text-gray-600 dark:text-gray-300 shadow-xl border border-gray-100 dark:border-white/10 z-10 md:scale-95'
                  }`}
                >
                  <div className={`font-extrabold text-3xl lg:text-4xl mb-4 transition-colors ${isPopular ? 'text-black' : 'text-black dark:text-white'}`}>
                    {pkg.price}
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-4 transition-colors ${isPopular ? 'text-black' : 'text-black dark:text-white'}`}>
                    {pkg.name}
                  </h3>
                  
                  <p className={`text-sm mb-8 leading-relaxed transition-colors ${isPopular ? 'text-black/70' : 'text-gray-500 dark:text-gray-400'}`}>
                    For most businesses that want to optimize their online presence and grow.
                  </p>
                  
                  <ul className="flex-grow flex flex-col gap-4 mb-8">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-colors ${isPopular ? 'bg-black/10' : 'bg-primary/10'}`}>
                          <LuCircleCheck size={12} className={`transition-colors ${isPopular ? 'text-black' : 'text-primary'}`} />
                        </div>
                        <span className={`text-sm font-medium transition-colors ${isPopular ? 'text-black/80' : 'text-gray-600 dark:text-gray-300'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full rounded-full py-4 font-bold text-sm transition-all duration-300 ${
                    isPopular 
                      ? 'bg-white text-black hover:bg-gray-50 shadow-md' 
                      : 'bg-gray-50 dark:bg-[#181818] text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#202020]'
                  }`}>
                    {isPopular ? 'Upgrade' : 'Select Package'}
                  </button>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </main>
  );
};

export default ServiceDetail;
