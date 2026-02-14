import { useEffect, useState, useRef } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Certifications from './sections/Certifications';
import Vision from './sections/Vision';
import WhyHireMe from './sections/WhyHireMe';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#05050a] flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 border-4 border-indigo-500/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-indigo-500 rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-4 border-transparent border-t-amber-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Ineza Odence</h2>
          <p className="text-gray-400">Creative Designer ,Developer & Geologist</p>
          <p className="text-sm text-indigo-400 mt-2">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div ref={mainRef} className="relative min-h-screen bg-[#05050a] overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navbar scrollY={scrollY} />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Vision />
        <WhyHireMe />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Floating Hire Me Button */}
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="fixed bottom-8 right-8 z-40 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full shadow-lg shadow-amber-500/30 hover:scale-110 transition-transform duration-300 animate-bounce-subtle"
      >
        Hire Me
      </a>
    </div>
  );
}

export default App;
