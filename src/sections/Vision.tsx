import { useEffect, useRef, useState } from 'react';
import { Target, Rocket, Globe, Zap } from 'lucide-react';

const missionPoints = [
  {
    icon: Target,
    title: 'Geology + Technology',
    description: 'Combining earth sciences with cutting-edge digital solutions',
  },
  {
    icon: Rocket,
    title: 'AI Innovation',
    description: 'Leveraging artificial intelligence for predictive analytics',
  },
  {
    icon: Globe,
    title: 'Africa Focused',
    description: 'Building solutions tailored for African challenges',
  },
  {
    icon: Zap,
    title: 'Sustainable Impact',
    description: 'Creating lasting positive change in communities',
  },
];

export default function Vision() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="vision"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-amber-900/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] 
                        bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-amber-500/10 rounded-full blur-[100px] 
                        animate-pulse-slow" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 border border-indigo-500/20 rounded-full animate-float" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-amber-500/20 rotate-45 animate-float-delayed" />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-purple-500/20 rotate-12 animate-bounce-subtle" />
      </div>

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-5xl mx-auto text-center">
          {/* Section Header */}
          <div className={`mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-indigo-400 font-medium tracking-wide uppercase text-sm mb-4">
              My Purpose
            </p>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              My <span className="gradient-text">Mission</span>
            </h2>
          </div>

          {/* Mission Statement */}
          <div className={`mb-16 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 leading-relaxed font-light">
              To combine <span className="text-indigo-400 font-semibold">geology</span>,{' '}
              <span className="text-purple-400 font-semibold">artificial intelligence</span>, and{' '}
              <span className="text-amber-400 font-semibold">digital systems</span> to transform{' '}
              <span className="text-white font-semibold">mining</span>,{' '}
              <span className="text-white font-semibold">environmental monitoring</span>, and{' '}
              <span className="text-white font-semibold">infrastructure development</span> in{' '}
              <span className="text-amber-400 font-bold">Rwanda</span> and{' '}
              <span className="text-amber-400 font-bold">Africa</span>.
            </p>
          </div>

          {/* Mission Points */}
          <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {missionPoints.map((point, index) => (
              <div
                key={index}
                className="group glass p-6 rounded-2xl border border-white/10 hover:border-indigo-500/30 
                           transition-all duration-500 hover:scale-105"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 
                                flex items-center justify-center group-hover:from-indigo-500 group-hover:to-purple-500 
                                transition-all duration-300">
                  <point.icon className="w-7 h-7 text-indigo-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{point.title}</h3>
                <p className="text-sm text-gray-400">{point.description}</p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className={`transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <blockquote className="relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-6xl text-indigo-500/30 font-serif">"</div>
              <p className="text-xl text-gray-400 italic pt-8">
                The future belongs to those who believe in the beauty of their dreams. 
                I dream of an Africa where technology and science work hand in hand 
                to solve our most pressing challenges.
              </p>
              <footer className="mt-4 text-amber-400 font-medium">
                — Ineza Odence
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
