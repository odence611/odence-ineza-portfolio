import { useEffect, useRef, useState } from 'react';
import { MapPin, Code, Mountain, Palette } from 'lucide-react';

const stats = [
  { value: 5, suffix: '+', label: 'Years Learning Tech', icon: Code },
  { value: 15, suffix: '+', label: 'Projects Built', icon: Palette },
  { value: 98.65, suffix: '%', label: 'ALX Score', icon: Mountain },
  { value: 8, suffix: '+', label: 'Certifications', icon: MapPin },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current * 100) / 100);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span ref={ref}>
      {value % 1 === 0 ? Math.floor(count) : count.toFixed(2)}
      {suffix}
    </span>
  );
}

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-indigo-400 font-medium tracking-wide uppercase text-sm mb-4">
              Get To Know Me
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Bridging Science, Technology & Creative Design
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Image */}
            <div className={`relative transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
              <div className="relative">
                {/* Decorative Frame */}
                <div className="absolute -inset-4 border border-indigo-500/30 rounded-2xl transform rotate-3" />
                <div className="absolute -inset-4 border border-amber-500/30 rounded-2xl transform -rotate-3" />
                
                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src="/odence2.jpeg"
                    alt="Ineza Odence"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05050a]/60 via-transparent to-transparent" />
                </div>

                {/* Floating Card */}
                <div className="absolute -bottom-6 -right-6 glass p-4 rounded-xl max-w-[200px]">
                  <div className="text-amber-400 font-bold text-lg">Rwanda</div>
                  <div className="text-gray-400 text-sm">Based in Kigali</div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className={`space-y-6 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  A Rwandan Creative Designer & Multidisciplinary Innovator
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  Born and raised in <span className="text-white font-medium">Rwanda</span>, I've always been fascinated by the intersection of 
                  technology, design, and the natural world. My journey began with a curiosity about how things work, 
                  which evolved into a passion for building digital solutions that address real-world challenges.
                </p>
                
                <p className="text-gray-400 leading-relaxed">
                  As a <span className="text-amber-400 font-medium">Creative Designer</span> and{' '}
                  <span className="text-indigo-400 font-medium">Applied Geology student</span> at the University of Rwanda, 
                  I combine artistic vision with scientific rigor and technical expertise. I taught myself programming 
                  and design, challenged expectations, and forged a unique career at the intersection 
                  of creativity, earth sciences, and technology.
                </p>
                
                <p className="text-gray-400 leading-relaxed">
                  Today, I'm building solutions for <span className="text-amber-400 font-medium">mining innovation</span>, 
                  environmental monitoring, and infrastructure development. My mission is to leverage design, AI, geospatial 
                  technology, and software development to transform industries across Rwanda and Africa.
                </p>
                
                <p className="text-gray-400 leading-relaxed">
                  Through programs like the <span className="text-white font-medium">Aspire Leaders Program, AU CIEFFA & ImpactHER</span> and{' '}
                  <span className="text-white font-medium">Wavumbuzi Program</span>, I've developed skills 
                  that complement my creative and technical abilities. I believe in the power of design and technology 
                  to create positive change and am committed to being part of Africa's digital transformation.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="flex flex-wrap gap-3 pt-4">
                {['Creative Designer', 'Problem Solver', 'Innovation Driven', 'Resilient'].map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 
                               hover:border-indigo-500/50 hover:text-white transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl text-center group hover:border-indigo-500/30 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-indigo-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
