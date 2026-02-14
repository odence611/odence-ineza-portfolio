import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import CV from '../components/CV';

const typingTexts = [
  'Brand Design',
  'Geospatial Data',
  'Mining Innovation',
  'AI Solutions',
  'Environmental Tech',
  'Creative Design',
  'Full Stack Development',
];

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typing effect
  useEffect(() => {
    const currentText = typingTexts[currentTextIndex];
    
    if (isTyping) {
      if (displayText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, currentTextIndex]);

  return (
    <>
      <section
        ref={heroRef}
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Background Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[150px]" />
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-20 h-20 border border-indigo-500/30 rotate-45 animate-float" />
          <div className="absolute bottom-40 left-20 w-16 h-16 border border-amber-500/30 rounded-full animate-float-delayed" />
          <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-indigo-500/20 rotate-12 animate-bounce-subtle" />
          <div className="absolute bottom-1/3 left-1/3 w-12 h-12 border border-purple-500/30 rotate-12 animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 w-full section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              {/* Left Content */}
              <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                {/* Greeting */}
                <div className="space-y-2">
                  <p className="text-indigo-400 font-medium tracking-wide uppercase text-sm">
                    Hello, I'm a Rwandan
                  </p>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                    Ineza{' '}
                    <span className="gradient-text">Odence</span>
                  </h1>
                  <p className="text-xl text-amber-400 font-medium mt-2">
                    Creative Designer & Brand Specialist
                  </p>
                </div>

                {/* Title with Typing Effect */}
                <div className="space-y-4">
                  <p className="text-xl text-gray-300">
                    Applied Geology Student | Web & Mobile Developer | Geospatial & AI Innovator
                  </p>
                  <div className="h-10 flex items-center">
                    <span className="text-lg text-amber-400 font-medium">
                      {displayText}
                      <span className="inline-block w-0.5 h-5 bg-amber-400 ml-1 animate-pulse" />
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xl sm:text-2xl text-gray-400 max-w-xl leading-relaxed">
                  I Build Technology for{' '}
                  <span className="text-white font-semibold">Earth</span>,{' '}
                  <span className="text-white font-semibold">Environment</span> &{' '}
                  <span className="text-amber-400 font-semibold">Africa's Future.</span>
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 
                               text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-indigo-500/30 
                               hover:scale-105 transition-all duration-300"
                  >
                    <span>View My Projects</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <button
                    onClick={() => setCvOpen(true)}
                    className="flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold 
                               rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download CV</span>
                  </button>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex items-center gap-2 px-8 py-4 border border-amber-500/50 text-amber-400 font-semibold 
                               rounded-xl hover:bg-amber-500/10 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Let's Work Together</span>
                  </a>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-8 pt-8">
                  {[
                    { value: '5+', label: 'Years Learning Tech' },
                    { value: '15+', label: 'Projects Built' },
                    { value: '98.65%', label: 'ALX Score' },
                    { value: '10+', label: 'Certifications' },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${800 + index * 100}ms` }}
                    >
                      <div className="text-3xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content - Profile Image */}
              <div className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}>
                {/* Image Container with Effects */}
                <div className="relative">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-3xl blur-3xl scale-110" />
                  
                  {/* Rotating Border */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-500 rounded-3xl opacity-50 animate-spin-slow" 
                       style={{ animationDuration: '10s' }} />
                  
                  {/* Image */}
                  <div className="relative w-80 h-96 sm:w-96 sm:h-[480px] rounded-3xl overflow-hidden border border-white/10">
                    <img
                      src="/odence1.jpeg"
                      alt="Ineza Odence"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05050a]/80 via-transparent to-transparent" />
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -bottom-4 -left-4 glass px-4 py-3 rounded-xl animate-float">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm font-medium text-white">Available for Work</span>
                    </div>
                  </div>

                  {/* Tech Stack Badge */}
                  <div className="absolute -top-4 -right-4 glass px-4 py-3 rounded-xl animate-float-delayed">
                    <div className="text-sm font-medium text-indigo-400">Creative Designer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#05050a] to-transparent pointer-events-none" />
      </section>

      {/* CV Modal */}
      <CV isOpen={cvOpen} onClose={() => setCvOpen(false)} />
    </>
  );
}
