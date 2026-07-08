import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import Input from '../ui/Input';
import TextArea from '../ui/TextArea';
import Button from '../ui/Button';

const Contact = () => {
  return (
    <Container id="contact" className="bg-white">
      <SectionTitle 
        title="Get in Touch" 
        subtitle="Contact Us" 
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-black mb-6">Let's build something amazing together.</h3>
          <div className="w-full mt-4">
            <img 
              src="/img/contact image.png" 
              alt="Contact Us" 
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 bg-gray-50/50"
        >
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="First Name" id="firstName" placeholder="John" />
              <Input label="Last Name" id="lastName" placeholder="Doe" />
            </div>
            <Input label="Email Address" id="email" type="email" placeholder="john@example.com" />
            <Input label="Subject" id="subject" placeholder="Project Inquiry" />
            <TextArea label="Message" id="message" placeholder="Tell us about your project..." />
            <Button variant="primary" className="w-full mt-4 py-4 text-lg">Send Message</Button>
          </form>
        </motion.div>
      </div>
    </Container>
  );
};

export default Contact;
