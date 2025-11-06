import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Comparison from './components/Comparison';
import DesignGallery from './components/DesignGallery';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Navbar />
      <Hero />
      <Comparison />
      <DesignGallery />
      <Footer />
    </div>
  );
}
