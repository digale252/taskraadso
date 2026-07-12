import React from 'react';
import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import ServiceCard from '../cards/ServiceCard';
import { services } from '../../data/services';

const Services = () => {
  return (
    <Container id="services" className="bg-white dark:bg-black transition-colors duration-300">
      <SectionTitle 
        title="What We Do" 
        subtitle="Our Services" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </Container>
  );
};

export default Services;
