import React from 'react';
import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import PortfolioCard from '../cards/PortfolioCard';
import { portfolio } from '../../data/portfolio';

const Portfolio = () => {
  return (
    <Container id="portfolio" className="bg-gray-50">
      <SectionTitle 
        title="Our Recent Work" 
        subtitle="Portfolio" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {portfolio.map((item, index) => (
          <PortfolioCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </Container>
  );
};

export default Portfolio;
