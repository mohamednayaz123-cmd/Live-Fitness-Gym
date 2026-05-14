import { StrictMode } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Motivation from './components/Motivation';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Trainers from './components/Trainers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-white font-sans selection:bg-brand-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Motivation />
        <Reviews />
        <Gallery />
        <Pricing />
        <Trainers />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
