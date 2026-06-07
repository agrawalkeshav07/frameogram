import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Catalogue from './components/Catalogue';
import Gallery from './components/Gallery';
import InstagramSection from './components/InstagramSection';
import AppointmentBooking from './components/AppointmentBooking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorMagnifier from './components/CursorMagnifier';
import Preloader from './components/Preloader';
import WhatsAppConstructionNotice from './components/WhatsAppConstructionNotice';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">{loading && <Preloader />}</AnimatePresence>
      <CursorMagnifier />
      <WhatsAppConstructionNotice />
      <div className="relative min-h-screen overflow-x-hidden bg-frame-black text-frame-white">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: loading ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <About />
          <Products />
          <Catalogue />
          <Gallery />
          <InstagramSection />
          <AppointmentBooking />
          <Contact />
        </motion.main>
        <Footer />
      </div>
    </>
  );
}
