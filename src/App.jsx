import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import SEO from './components/SEO/SEO';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <div className="app">
      <SEO
        title="Criação de Sites e Consultoria Web"
        description="Transforme seu negócio com soluções digitais de alta performance. Consultoria em tecnologia, desenvolvimento web, arquitetura de software e transformação digital. Resultados mensuráveis e ROI comprovado. Solicite seu orçamento grátis!"
        image="/og-image.jpg"
      />

      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos/:slug" element={<ProjectDetails />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;