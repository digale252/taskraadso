import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LuX, LuSend, LuBot } from 'react-icons/lu';

const ChatbotWindow = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm the RaadsoTech assistant. How can I help you today? Ask me about our vision, mission, services, location, or pricing.", sender: "bot" }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages(prev => [...prev, userMessage]);
    
    const query = input.toLowerCase();
    let botResponse = "I'm not sure about that. I can answer questions about our vision, mission, services, location, and pricing.";

    if (query.includes('vision') || query.includes('mission')) {
      botResponse = "Our vision is to be the leading technology partner in Somalia. Our mission is to streamline business operations, manage inventory, and drive growth through innovative software solutions.";
    } else if (query.includes('contact') || query.includes('location') || query.includes('where')) {
      botResponse = "You can reach us via our Contact form below, WhatsApp, or call us. We are located in Mogadishu, Somalia.";
    } else if (query.includes('service') || query.includes('what do you do')) {
      botResponse = "We provide tailored ERP Systems, innovative Web & App Development, POS Systems, and comprehensive Cloud Services.";
    } else if (query.includes('price') || query.includes('cost') || query.includes('how much')) {
      botResponse = "Our prices vary depending on the project scope and requirements. Please use the 'Send Message' button to get a detailed quote.";
    } else if (query.includes('hi') || query.includes('hello')) {
      botResponse = "Hello there! How can I assist you with RaadsoTech today?";
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { text: botResponse, sender: "bot" }]);
    }, 600);

    setInput('');
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      className="fixed bottom-28 right-6 md:right-10 w-80 md:w-96 bg-white dark:bg-[#0f0f0f] rounded-2xl shadow-2xl border border-gray-100 dark:border-white/10 z-[100] flex flex-col overflow-hidden"
      style={{ height: '400px' }}
    >
      {/* Header */}
      <div className="bg-primary p-4 flex items-center justify-between text-black">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <LuBot size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-sm">RaadsoTech Bot</h3>
            <span className="text-xs opacity-80 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span> Online
            </span>
          </div>
        </div>
        <button onClick={onClose} className="text-black/70 hover:text-black">
          <LuX size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-gray-50/50 dark:bg-[#0b0b0b]">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === 'user' ? 'bg-black text-white rounded-br-sm' : 'bg-white dark:bg-[#121212] border border-gray-100 dark:border-white/10 text-gray-800 dark:text-gray-100 shadow-sm rounded-bl-sm'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="p-3 bg-white dark:bg-[#0f0f0f] border-t border-gray-100 dark:border-white/10 flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 bg-gray-50 dark:bg-[#151515] border border-gray-200 dark:border-white/10 rounded-full px-4 py-2 text-sm text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-primary"
        />
        <button 
          type="submit"
          className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform"
        >
          <LuSend size={16} />
        </button>
      </form>
    </motion.div>
  );
};

export default ChatbotWindow;
