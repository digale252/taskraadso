import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import PortfolioCard from '../cards/PortfolioCard';
import { portfolio } from '../../data/portfolio';

const Portfolio = () => {
  return (
    <Container id="portfolio" className="bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300">
      <SectionTitle 
        title="Our Recent Work" 
        subtitle="Portfolio" 
      />

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="text-gray-500 dark:text-gray-300 text-center max-w-2xl mx-auto -mt-6 mb-10"
      >
        Explore selected projects built by RaadsoTech across web apps, mobile products, and business platforms.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-6">
        {portfolio.slice(0, 3).map((item, index) => (
          <PortfolioCard
            key={item.id}
            item={item}
            index={index}
          />
        ))}
      </div>
    </Container>
  );
};

export default Portfolio;
