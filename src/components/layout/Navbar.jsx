import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown, FaMoon, FaSun } from 'react-icons/fa';
import * as LuIcons from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import { services } from '../../data/services';

const Navbar = ({ theme, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const servicesMenuCloseTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (servicesMenuCloseTimeoutRef.current) {
        clearTimeout(servicesMenuCloseTimeoutRef.current);
      }
    };
  }, []);

  const getServiceIcon = (iconName) => {
    return LuIcons[iconName] || LuIcons.LuBriefcase;
  };

  const servicesMenuItems = services;
  const infoMenuItems = [
    { label: 'Recent Work', icon: 'LuBell' },
    { label: 'Our Clients', icon: 'LuUsers' },
    { label: 'Frequently Asked', icon: 'LuHelpCircle' },
    { label: 'Latest News', icon: 'LuNewspaper' },
  ];
  const contactMenuItems = [
    { label: 'Contact Now', icon: 'LuHeadphones' },
    { label: 'Book a Call', icon: 'LuPhoneCall' },
  ];

  const openServicesMenu = () => {
    if (servicesMenuCloseTimeoutRef.current) {
      clearTimeout(servicesMenuCloseTimeoutRef.current);
    }
    setIsServicesHovered(true);
  };

  const closeServicesMenu = () => {
    servicesMenuCloseTimeoutRef.current = setTimeout(() => {
      setIsServicesHovered(false);
    }, 120);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-black/70 backdrop-blur-xl shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between relative">
        
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <Logo theme={theme} />
          </Link>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          <HashLink smooth to="/#home" className="text-black dark:text-white font-semibold hover:text-primary transition-colors text-[15px]">
            Home
          </HashLink>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={openServicesMenu}
            onMouseLeave={closeServicesMenu}
          >
            <div className="flex items-center gap-1 cursor-pointer text-black dark:text-white font-semibold hover:text-primary transition-colors text-[15px] py-2">
              Services <FaChevronDown size={12} className={`transition-transform duration-300 ${isServicesHovered ? 'rotate-180' : ''}`} />
            </div>
            
            <AnimatePresence>
              {isServicesHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.22 }}
                  onMouseEnter={openServicesMenu}
                  onMouseLeave={closeServicesMenu}
                  className={`fixed inset-x-0 flex justify-center pt-4 z-50 origin-top ${isScrolled ? 'top-[68px]' : 'top-[84px]'}`}
                >
                  <div className="relative w-[1040px] max-w-[96vw] rounded-2xl overflow-hidden bg-white dark:bg-[#0f0f0f] border border-gray-100 dark:border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.22)]">
                    <div className="h-1.5 bg-primary"></div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                      <div className="lg:col-span-8 p-6 border-b lg:border-b-0 lg:border-r border-gray-100 dark:border-white/10">
                        <h4 className="text-xs font-extrabold tracking-[0.16em] text-gray-500 dark:text-gray-400 uppercase mb-4">Our Services</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {servicesMenuItems.map((service) => {
                            const Icon = getServiceIcon(service.icon);
                            return (
                              <Link
                                key={service.id}
                                to={`/services/${service.id}`}
                                className="flex items-start gap-3 rounded-xl px-2 py-2.5 border border-gray-100 dark:border-white/10 hover:border-primary/30 hover:bg-primary/10 transition-colors group"
                                onClick={() => setIsServicesHovered(false)}
                              >
                                <div className="w-9 h-9 min-w-[36px] rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                                  <Icon size={16} />
                                </div>
                                <div className="flex-1">
                                  <p className="text-[15px] font-bold text-black dark:text-white leading-tight">{service.title}</p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                        <HashLink
                          smooth
                          to="/#services"
                          onClick={() => setIsServicesHovered(false)}
                          className="inline-flex items-center text-sm font-semibold text-gray-600 dark:text-gray-300 mt-3 hover:text-primary transition-colors"
                        >
                          Explore More
                        </HashLink>
                      </div>

                      <div className="lg:col-span-4 p-6">
                        <h4 className="text-xs font-extrabold tracking-[0.16em] text-gray-500 dark:text-gray-400 uppercase mb-4">Other Information</h4>
                        <div className="space-y-1 mb-5">
                          {infoMenuItems.map((item) => {
                            const Icon = getServiceIcon(item.icon);
                            return (
                              <HashLink key={item.label} smooth to="/#portfolio" onClick={() => setIsServicesHovered(false)} className="flex items-center gap-2 rounded-xl px-2 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary transition-colors">
                                <Icon size={15} /> {item.label}
                              </HashLink>
                            );
                          })}
                        </div>

                        <h4 className="text-xs font-extrabold tracking-[0.16em] text-gray-500 dark:text-gray-400 uppercase mb-3">Contact Info</h4>
                        <div className="space-y-1 mb-4">
                          {contactMenuItems.map((item) => {
                            const Icon = getServiceIcon(item.icon);
                            return (
                              <HashLink key={item.label} smooth to="/#contact" onClick={() => setIsServicesHovered(false)} className="flex items-center gap-2 rounded-xl px-2 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary transition-colors">
                                <Icon size={15} /> {item.label}
                              </HashLink>
                            );
                          })}
                        </div>

                        <HashLink
                          smooth
                          to="/#contact"
                          onClick={() => setIsServicesHovered(false)}
                          className="inline-flex items-center justify-center w-full rounded-xl bg-primary text-black font-bold text-sm py-2.5 hover:bg-black hover:text-primary transition-colors"
                        >
                          Hire Now
                        </HashLink>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <HashLink smooth to="/#portfolio" className="text-black dark:text-white font-semibold hover:text-primary transition-colors text-[15px]">
            Portfolio
          </HashLink>
          <HashLink smooth to="/#contact" className="text-black dark:text-white font-semibold hover:text-primary transition-colors text-[15px]">
            Contact
          </HashLink>
        </nav>

        {/* Right: Theme Toggle + Client Area Button */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-xl flex items-center justify-center border border-gray-200 dark:border-white/10 bg-white dark:bg-[#121212] text-black dark:text-white hover:border-primary transition-colors"
          >
            {theme === 'dark' ? <FaSun size={14} /> : <FaMoon size={14} />}
          </button>
          <Button variant="primary" className="px-7 py-2.5 rounded-full text-sm font-bold shadow-[0_4px_14px_0_rgba(243,199,21,0.39)] hover:shadow-[0_6px_20px_rgba(243,199,21,0.5)]">
            Client Area
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-2xl text-black dark:text-white p-2"
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
            className="lg:hidden bg-white dark:bg-[#0f0f0f] border-t border-gray-100 dark:border-white/10 px-6 py-4 shadow-xl"
          >
            <div className="flex flex-col gap-4 text-center">
              <button
                onClick={onToggleTheme}
                className="mx-auto mb-2 w-10 h-10 rounded-xl flex items-center justify-center border border-gray-200 dark:border-white/10 bg-white dark:bg-[#121212] text-black dark:text-white"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <FaSun size={14} /> : <FaMoon size={14} />}
              </button>
              <HashLink smooth to="/#home" onClick={() => setMobileMenuOpen(false)} className="text-black dark:text-white font-bold py-3 border-b border-gray-50 dark:border-white/10 text-[15px]">
                Home
              </HashLink>
              
              <div className="py-3 border-b border-gray-50 dark:border-white/10 flex flex-col items-center">
                <span className="text-black dark:text-white font-bold text-[15px] mb-4">Services</span>
                <div className="flex flex-col gap-3 w-full">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-gray-600 dark:text-gray-300 font-medium text-sm hover:text-primary capitalize"
                    >
                      {service.title.toLowerCase()}
                    </Link>
                  ))}
                </div>
              </div>

              <HashLink smooth to="/#portfolio" onClick={() => setMobileMenuOpen(false)} className="text-black dark:text-white font-bold py-3 border-b border-gray-50 dark:border-white/10 text-[15px]">
                Portfolio
              </HashLink>
              <HashLink smooth to="/#contact" onClick={() => setMobileMenuOpen(false)} className="text-black dark:text-white font-bold py-3 border-b border-gray-50 dark:border-white/10 text-[15px]">
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
