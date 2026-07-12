import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import ScrollToTop from './components/utils/ScrollToTop';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white">
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home theme={theme} onToggleTheme={toggleTheme} />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
