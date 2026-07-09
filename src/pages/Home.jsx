import React from 'react';
import Hero from '../components/sections/Hero';
import FeaturedProject from '../components/sections/FeaturedProject';
import Partners from '../components/sections/Partners';
import Services from '../components/sections/Services';
import Portfolio from '../components/sections/Portfolio';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedProject />
      <Partners />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Home;
