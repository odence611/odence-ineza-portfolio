import { useEffect, useRef, useState } from 'react';
import { 
  Zap, 
  Target, 
  Clock, 
  Globe,
  Lightbulb,
  Users,
  CheckCircle2
} from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: 'Fast Learner',
    description: '98.65% score at ALX proves my ability to quickly master new technologies and concepts.',
    stat: '98.65%',
    statLabel: 'ALX Score'
  },
  {
    icon: Target,
    title: 'Results Driven',
    description: 'Every project I build solves real problems and delivers measurable impact.',
    stat: '15+',
    statLabel: 'Projects Completed'
  },
  {
    icon: Lightbulb,
    title: 'Creative Problem Solver',
    description: 'Unique blend of design thinking, technical skills, and scientific approach.',
    stat: '5+',
    statLabel: 'Years Experience'
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'Rwandan roots with international certifications from WHO, Harvard, and ALX.',
    stat: '10+',
    statLabel: 'Certifications'
  },
];

const differentiators = [
  'Multidisciplinary: Design + Code + Science',
  'Self-taught and highly motivated',
  'Proven track record of excellence',
  'Available for immediate start',
  'Passionate about African innovation',
  'Continuous learner and adapter',
];

export default function WhyHireMe() {
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
      id="why-hire-me"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-indigo-400 font-medium tracking-wide uppercase text-sm mb-4">
              Why Work With Me
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              What Sets Me <span className="gradient-text">Apart</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Not just another developer – a multidisciplinary innovator ready to make an impact
            </p>
          </div>

          {/* Stats Grid */}
          <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group glass rounded-2xl p-6 border border-white/10 hover:border-indigo-500/30 
                           transition-all duration-500 hover:scale-[1.02]"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 
                                  flex items-center justify-center group-hover:from-indigo-500 group-hover:to-purple-500 
                                  transition-all duration-300">
                    <reason.icon className="w-6 h-6 text-indigo-400 group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-amber-400">{reason.stat}</div>
                    <div className="text-xs text-gray-500">{reason.statLabel}</div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-400">{reason.description}</p>
              </div>
            ))}
          </div>

          {/* Differentiators */}
          <div className={`grid lg:grid-cols-2 gap-8 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {/* Left - Key Differentiators */}
            <div className="glass rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
                Key Differentiators
              </h3>
              <div className="space-y-4">
                {differentiators.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 
                                    flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Call to Action */}
            <div className="glass rounded-2xl p-8 border border-white/10 bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Collaborate?
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                I'm currently available for internships, freelance projects, and collaborative opportunities. 
                Whether you need a creative designer, a developer, or someone who can bridge both worlds – 
                I'm ready to bring value to your team.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-300">
                  <Clock className="w-5 h-5 text-amber-400" />
                  <span>Available for immediate start</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Globe className="w-5 h-5 text-amber-400" />
                  <span>Open to remote opportunities</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Users className="w-5 h-5 text-amber-400" />
                  <span>Great team player & communicator</span>
                </div>
              </div>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white 
                           font-semibold rounded-xl text-center hover:shadow-xl hover:shadow-indigo-500/30 
                           transition-all duration-300"
              >
                Let's Discuss Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
