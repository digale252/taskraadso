import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import SocialIcon from '../ui/SocialIcon';

const Footer = () => {
  return (
    <footer className="relative bg-primary text-black pt-24 pb-10 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Elegant Geometric 'R' Watermark */}
      <div className="absolute top-[-20%] right-[-10%] text-[40rem] font-black text-black/[0.05] select-none pointer-events-none leading-none rotate-12">
        R
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <img
            src="/img/logo-black.png"
            alt="RAADSO TECH Logo"
            className="h-12 md:h-16 object-contain mb-6"
          />
          <p className="text-gray-800 max-w-sm mb-8 leading-relaxed">
            We build premium, modern, and responsive digital solutions tailored to elevate your business in the digital landscape.
          </p>
          <div className="flex gap-4">
            <SocialIcon icon={FaTwitter} href="#" label="Twitter" />
            <SocialIcon icon={FaLinkedin} href="#" label="LinkedIn" />
            <SocialIcon icon={FaGithub} href="#" label="GitHub" />
            <SocialIcon icon={FaInstagram} href="#" label="Instagram" />
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-black tracking-wider uppercase text-sm">Quick Links</h4>
          <ul className="flex flex-col gap-4 text-gray-800">
            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-black tracking-wider uppercase text-sm">Contact</h4>
          <ul className="flex flex-col gap-4 text-gray-800">
            <li>info@raadsotech.com</li>
            <li>+252 61 1178748</li>
            <li>howlwadag/ wahen</li>
          </ul>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto border-t border-black/15 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-700 text-sm">
        <p>&copy; {new Date().getFullYear()} RAADSO TECH. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
