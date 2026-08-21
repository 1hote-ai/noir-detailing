import { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { BeforeAfter } from './components/sections/BeforeAfter';
import { Process } from './components/sections/Process';
import { Gallery } from './components/sections/Gallery';
import { Booking } from './components/sections/Booking';
import { Footer } from './components/sections/Footer';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="bg-bg min-h-screen text-ink selection:bg-accent/30 selection:text-ink relative overflow-x-hidden">
        <Navbar />
        <Hero />
        <Services />
        <BeforeAfter />
        <Process />
        <Gallery />
        <Booking />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
