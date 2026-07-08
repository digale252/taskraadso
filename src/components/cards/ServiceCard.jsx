import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'react-icons/fa';
import Card from '../ui/Card';

const ServiceCard = ({ service, index }) => {
  const IconComponent = Icons[service.icon] || Icons.FaLaptopCode;

  return (
    <Link to={`/services/${service.id}`} className="block">
      <Card 
        delay={index * 0.1} 
        className="group hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(243,199,21,0.25)] hover:border-primary/50 transition-all duration-300 border border-transparent bg-white cursor-pointer h-full"
      >
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-300">
          <IconComponent size={28} />
        </div>
        <h3 className="text-xl font-bold mb-3 text-black">{service.title}</h3>
        <p className="text-gray-600 leading-relaxed">
          {service.description}
        </p>
      </Card>
    </Link>
  );
};

export default ServiceCard;
