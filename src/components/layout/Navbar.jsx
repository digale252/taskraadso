import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import { services } from '../../data/services';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home', isHash: true },
    { name: 'Portfolio', href: '/#portfolio', isHash: true },
    { name: 'Contact', href: '/#contact', isHash: true },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/70 backdrop-blur-xl shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between relative">
        
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          <HashLink smooth to="/#home" className="text-black font-semibold hover:text-primary transition-colors text-[15px]">
            Home
          </HashLink>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesHovered(true)}
            onMouseLeave={() => setIsServicesHovered(false)}
          >
            <div className="flex items-center gap-1 cursor-pointer text-black font-semibold hover:text-primary transition-colors text-[15px] py-2">
              Services <FaChevronDown size={12} className={`transition-transform duration-300 ${isServicesHovered ? 'rotate-180' : ''}`} />
            </div>
            
            <AnimatePresence>
              {isServicesHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden py-2"
                >
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      className="block px-6 py-3 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary font-medium transition-colors capitalize"
                      onClick={() => setIsServicesHovered(false)}
                    >
                      {service.title.toLowerCase()}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <HashLink smooth to="/#portfolio" className="text-black font-semibold hover:text-primary transition-colors text-[15px]">
            Portfolio
          </HashLink>
          <HashLink smooth to="/#contact" className="text-black font-semibold hover:text-primary transition-colors text-[15px]">
            Contact
          </HashLink>
        </nav>

        {/* Right: Client Area Button */}
        <div className="hidden lg:block">
          <Button variant="primary" className="px-7 py-2.5 rounded-full text-sm font-bold shadow-[0_4px_14px_0_rgba(243,199,21,0.39)] hover:shadow-[0_6px_20px_rgba(243,199,21,0.5)]">
            Client Area
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-2xl text-black p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 shadow-xl"
          >
            <div className="flex flex-col gap-4 text-center">
              <HashLink smooth to="/#home" onClick={() => setMobileMenuOpen(false)} className="text-black font-bold py-3 border-b border-gray-50 text-[15px]">
                Home
              </HashLink>
              
              <div className="py-3 border-b border-gray-50 flex flex-col items-center">
                <span className="text-black font-bold text-[15px] mb-4">Services</span>
                <div className="flex flex-col gap-3 w-full">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-gray-600 font-medium text-sm hover:text-primary capitalize"
                    >
                      {service.title.toLowerCase()}
                    </Link>
                  ))}
                </div>
              </div>

              <HashLink smooth to="/#portfolio" onClick={() => setMobileMenuOpen(false)} className="text-black font-bold py-3 border-b border-gray-50 text-[15px]">
                Portfolio
              </HashLink>
              <HashLink smooth to="/#contact" onClick={() => setMobileMenuOpen(false)} className="text-black font-bold py-3 border-b border-gray-50 text-[15px]">
                Contact
              </HashLink>
              <Button variant="primary" className="mt-4 w-full">Client Area</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
