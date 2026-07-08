import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Portfolio from '../components/sections/Portfolio';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
};

export default Home;
