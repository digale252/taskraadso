import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuMessageCircle, LuSend, LuPhone, LuX } from 'react-icons/lu';
import { FaWhatsapp, FaRobot } from 'react-icons/fa';
import ChatbotWindow from './ChatbotWindow';

const FloatingActionMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleItemClick = (e, id) => {
    if (id === 'chatbot') {
      e.preventDefault();
      setIsChatbotOpen(true);
      setIsOpen(false);
    }
  };

  const menuItems = [
    { id: 'send', label: 'Send Message', icon: <LuSend size={20} className="text-black" />, bgColor: 'bg-primary', link: '#contact' },
    { id: 'whatsapp', label: 'WhatsApp', icon: <FaWhatsapp size={24} className="text-white" />, bgColor: 'bg-[#25D366]', link: 'https://wa.me/252610000000', target: '_blank' },
    { id: 'call', label: 'Call Me', icon: <LuPhone size={20} className="text-[#3b82f6]" />, bgColor: 'bg-[#f4f7f9]', link: 'tel:+252610000000' },
    { id: 'chatbot', label: 'Chatbot', icon: <FaRobot size={20} className="text-primary" />, bgColor: 'bg-[#f4f7f9]', link: '#' }
  ];

  return (
    <>
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex flex-col items-end">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-4 items-end mb-4"
            >
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={item.link}
                  target={item.target || '_self'}
                  rel={item.target === '_blank' ? 'noopener noreferrer' : ''}
                  onClick={(e) => handleItemClick(e, item.id)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  {/* Label */}
                  <div className="bg-white dark:bg-[#111111] px-5 py-2.5 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.05)] border border-gray-50 dark:border-white/10 text-sm font-bold text-gray-800 dark:text-gray-100 whitespace-nowrap">
                    {item.label}
                  </div>
                  
                  {/* Icon Button */}
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 ${item.bgColor}`}>
                    {item.icon}
                  </div>
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Toggle Button */}
        <div className="relative">
          <button
            onClick={toggleMenu}
            className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/40 hover:scale-105 transition-transform duration-300 relative z-10"
          >
            {/* Subtle ring around the main button */}
            <div className="absolute inset-[-6px] rounded-full border-[3px] border-primary/40 pointer-events-none"></div>
            
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <LuX size={28} className="text-black" /> : <LuMessageCircle size={28} className="text-black" />}
            </motion.div>
          </button>
        </div>
      </div>

      <ChatbotWindow 
        isOpen={isChatbotOpen} 
        onClose={() => setIsChatbotOpen(false)} 
      />
    </>
  );
};

export default FloatingActionMenu;
