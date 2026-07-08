import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import ScrollToTop from './components/utils/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
