import { useEffect, useRef, useState } from 'react';
import { GraduationCap, BookOpen, MapPin, Calendar } from 'lucide-react';

const coursework = [
  { name: 'Mineral Exploration', icon: '⛏️', color: 'from-amber-500 to-orange-500' },
  { name: 'GIS & Remote Sensing', icon: '🛰️', color: 'from-indigo-500 to-purple-500' },
  { name: 'Structural Geology', icon: '🏔️', color: 'from-blue-500 to-cyan-500' },
  { name: 'Environmental Geology', icon: '🌱', color: 'from-green-500 to-emerald-500' },
  { name: 'Mining Geology', icon: '⚒️', color: 'from-gray-500 to-slate-500' },
  { name: 'Data Analysis', icon: '📊', color: 'from-pink-500 to-rose-500' },
];

export default function Education() {
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
      id="education"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[150px] -translate-y-1/2" />
      </div>

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-indigo-400 font-medium tracking-wide uppercase text-sm mb-4">
              Academic Background
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              My <span className="gradient-text">Education</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Building a strong foundation in Earth Sciences
            </p>
          </div>

          {/* Main Education Card */}
          <div className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-amber-500 hidden lg:block" />
              
              {/* Education Card */}
              <div className="lg:pl-20 relative mb-12">
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-5 h-5 bg-indigo-500 rounded-full border-4 border-[#05050a] hidden lg:block animate-pulse" />
                
                <div className="glass rounded-2xl p-8 lg:p-10 border border-white/10 hover:border-indigo-500/30 transition-all duration-500">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* University Icon */}
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          University of Rwanda
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-gray-400">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-indigo-400" />
                            <span>Kigali, Rwanda</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-amber-400" />
                            <span>2024 - Present</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="text-xl font-semibold text-indigo-400">
                          Bachelor of Science with Honours in Applied Geology
                        </h4>
                        <p className="text-amber-400 font-medium">Year 2</p>
                      </div>
                      
                      <p className="text-gray-400 leading-relaxed">
                        Pursuing a comprehensive degree that combines theoretical knowledge with practical 
                        applications in geology, mineral exploration, and environmental science. The program 
                        emphasizes fieldwork, laboratory analysis, and the use of modern geospatial technologies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Card 2 */}
              <div className="lg:pl-20 relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-5 h-5 bg-amber-500 rounded-full border-4 border-[#05050a] hidden lg:block" />
                
                <div className="glass rounded-2xl p-8 lg:p-10 border border-white/10 hover:border-amber-500/30 transition-all duration-500">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* School Icon */}
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          Ecole des Sciences Byimana
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-gray-400">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-indigo-400" />
                            <span>Ruhango, Rwanda</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-amber-400" />
                            <span> class of 2023</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="text-xl font-semibold text-indigo-400">
                          Advanced Level Certificate (A2)
                        </h4>
                        <p className="text-amber-400 font-medium">Mathematics, Physics, Computer Science (MPC)</p>
                      </div>
                      
                      <p className="text-gray-400 leading-relaxed">
                        Gained proficiency in C++, Python, and web development. Developed strong foundation in physics concepts, data structures, and algorithm design.
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {['Advanced Mathematics', 'Physics & Mechanics', 'Computer Science', 'Problem Solving', 'Scientific Methodology'].map((item, i) => (
                          <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coursework Grid */}
          <div className={`mt-16 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              <BookOpen className="w-6 h-6 inline-block mr-2 text-indigo-400" />
              Relevant Coursework
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {coursework.map((course, index) => (
                <div
                  key={index}
                  className="group glass p-4 rounded-xl text-center hover:border-indigo-500/30 
                             transition-all duration-300 hover:scale-105"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br ${course.color} 
                                  flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                    {course.icon}
                  </div>
                  <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    {course.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Education */}
          <div className={`mt-12 grid md:grid-cols-2 gap-6 transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="glass p-6 rounded-xl border border-white/10 hover:border-amber-500/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-white">ALX</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Full Stack Software Engineering</h4>
                  <p className="text-amber-400 text-sm mb-2">Score: 98.65%</p>
                  <p className="text-gray-400 text-sm">Comprehensive program covering modern web development technologies and best practices.</p>
                </div>
              </div>
            </div>
            
            <div className="glass p-6 rounded-xl border border-white/10 hover:border-indigo-500/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-white">AI</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">AI Career Essentials</h4>
                  <p className="text-indigo-400 text-sm mb-2">ALX Certification</p>
                  <p className="text-gray-400 text-sm">AI-augmented professional development skills in the digital age.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
