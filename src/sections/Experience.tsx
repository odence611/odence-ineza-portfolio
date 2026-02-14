import { useEffect, useRef, useState } from 'react';
import { Briefcase, Code2, Database, Globe, Palette, Cpu, Layers } from 'lucide-react';

const skills = [
  { name: 'Full Stack Development', icon: Code2, description: 'HTML, CSS, JavaScript, React, React Native, Node.js, Python' },
  { name: 'Backend Systems', icon: Layers, description: 'RESTful APIs, Server Architecture, Authentication' },
  { name: 'Database Management', icon: Database, description: 'MySQL, PostgreSQL, MongoDB, Supabase' },
  { name: 'API Integrations', icon: Globe, description: 'Third-party services, Payment gateways, Maps' },
  { name: 'UI/UX Design', icon: Palette, description: 'Responsive design, User experience, Prototyping' },
  { name: 'AI Workflow Automation', icon: Cpu, description: 'Machine learning integration, Process automation' },
];

const techStack = [
  'React', 'React Native', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB',
  'Supabase', 'Git', 'GitHub', 'SolidWorks', 'GIS', 'AI Tools'
];

export default function Experience() {
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
      id="experience"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/5 to-transparent" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-indigo-400 font-medium tracking-wide uppercase text-sm mb-4">
              Professional Journey
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Independent, solution-driven, performance-focused developer
            </p>
          </div>

          {/* Main Experience Card */}
          <div className={`max-w-4xl mx-auto mb-16 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="glass rounded-2xl p-8 lg:p-10 border border-white/10 hover:border-indigo-500/30 transition-all duration-500">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Self-Employed – Web, Mobile & AI Developer
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-gray-400">
                      <span className="text-amber-400 font-medium">Freelance / Remote</span>
                      <span>•</span>
                      <span>Rwanda & International</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed">
                    As an independent developer, I've built a diverse portfolio of projects spanning 
                    web applications, mobile apps, and AI-powered solutions. I work directly with clients 
                    to understand their needs and deliver high-quality, scalable solutions that solve real problems.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {['Independent', 'Solution-Driven', 'Performance-Focused'].map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group glass p-6 rounded-xl border border-white/10 hover:border-indigo-500/30 
                           transition-all duration-300 hover:scale-[1.02]"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 
                                  flex items-center justify-center flex-shrink-0 group-hover:from-indigo-500 group-hover:to-purple-500 
                                  transition-all duration-300">
                    <skill.icon className="w-6 h-6 text-indigo-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-indigo-400 transition-colors">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-gray-400">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className={`transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <h3 className="text-xl font-bold text-white text-center mb-6">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 glass rounded-lg text-gray-300 hover:text-white hover:border-amber-500/30 
                             transition-all duration-300 hover:scale-105"
                  style={{ transitionDelay: `${index * 30}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
