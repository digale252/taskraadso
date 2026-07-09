import React from 'react';
import Hero from '../components/sections/Hero';
import FeaturedProject from '../components/sections/FeaturedProject';
import Partners from '../components/sections/Partners';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Portfolio from '../components/sections/Portfolio';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';
import FloatingActionMenu from '../components/ui/FloatingActionMenu';

const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedProject />
      <Partners />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <FloatingActionMenu />
    </main>
  );
};

export default Home;
