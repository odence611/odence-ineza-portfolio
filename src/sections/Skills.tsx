import { useEffect, useRef, useState } from 'react';
import { 
  Code2, 
  Smartphone, 
  Server, 
  Database, 
  GitBranch, 
  Box,
  Map,
  Brain,
  Users,
  Lightbulb,
  Puzzle,
  Mic,
  Target,
  Palette,
  PenTool,
  Figma
} from 'lucide-react';

const technicalSkills = [
  { name: 'Brand Design', level: 92, icon: PenTool, color: 'from-amber-500 to-orange-500' },
  { name: 'UI/UX Design', level: 90, icon: Figma, color: 'from-pink-500 to-rose-500' },
  { name: 'HTML/CSS/JavaScript', level: 95, icon: Code2, color: 'from-orange-500 to-yellow-500' },
  { name: 'React', level: 90, icon: Code2, color: 'from-cyan-500 to-blue-500' },
  { name: 'React Native', level: 85, icon: Smartphone, color: 'from-blue-500 to-indigo-500' },
  { name: 'Node.js', level: 88, icon: Server, color: 'from-green-500 to-emerald-500' },
  { name: 'Python', level: 82, icon: Code2, color: 'from-yellow-500 to-amber-500' },
  { name: 'PostgreSQL', level: 80, icon: Database, color: 'from-blue-600 to-indigo-600' },
  { name: 'MongoDB', level: 78, icon: Database, color: 'from-green-600 to-emerald-600' },
  { name: 'Supabase', level: 85, icon: Database, color: 'from-emerald-500 to-teal-500' },
  { name: 'Git & GitHub', level: 88, icon: GitBranch, color: 'from-gray-500 to-slate-500' },
  { name: 'SolidWorks', level: 75, icon: Box, color: 'from-red-500 to-rose-500' },
  { name: 'GIS & Remote Sensing', level: 80, icon: Map, color: 'from-purple-500 to-violet-500' },
  { name: 'AI Tools & Automation', level: 85, icon: Brain, color: 'from-indigo-500 to-purple-500' },
];

const softSkills = [
  { name: 'Leadership', icon: Users, description: 'Guiding teams to success' },
  { name: 'Innovation', icon: Lightbulb, description: 'Creative problem solving' },
  { name: 'Problem Solving', icon: Puzzle, description: 'Analytical thinking' },
  { name: 'Public Speaking', icon: Mic, description: 'Clear communication' },
  { name: 'Strategic Thinking', icon: Target, description: 'Long-term planning' },
];

const languages = [
  { name: 'Kinyarwanda', level: 100, status: 'Native' },
  { name: 'English', level: 90, status: 'C1/C2' },
  { name: 'French', level: 40, status: 'Basic' },
];

const hobbies = [
  { name: 'Coding', icon: Code2, description: 'Building side projects' },
  { name: 'Basketball', icon: Target, description: 'Team sports & fitness' },
  { name: 'Brainstorming', icon: Lightbulb, description: 'Idea generation' },
];

function SkillBar({ skill, index, isVisible }: { skill: typeof technicalSkills[0]; index: number; isVisible: boolean }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(skill.level);
      }, index * 80);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, index]);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center`}>
            <skill.icon className="w-4 h-4 text-white" />
          </div>
          <span className="text-gray-300 font-medium">{skill.name}</span>
        </div>
        <span className="text-indigo-400 font-semibold">{skill.level}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

function LanguageBar({ lang, index, isVisible }: { lang: typeof languages[0]; index: number; isVisible: boolean }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(lang.level);
      }, 500 + index * 150);
      return () => clearTimeout(timer);
    }
  }, [isVisible, lang.level, index]);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-gray-300 font-medium">{lang.name}</span>
        <span className="text-amber-400 text-sm">{lang.status}</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
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
      id="skills"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-indigo-400 font-medium tracking-wide uppercase text-sm mb-4">
              My Expertise
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Skills & <span className="gradient-text">Abilities</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Technical proficiency combined with soft skills and creative abilities
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Technical Skills */}
            <div className={`lg:col-span-2 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <div className="glass rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Code2 className="w-6 h-6 text-indigo-400" />
                  Technical Skills
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {technicalSkills.map((skill, index) => (
                    <SkillBar
                      key={index}
                      skill={skill}
                      index={index}
                      isVisible={isVisible}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Soft Skills */}
              <div className={`transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}>
                <div className="glass rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <Users className="w-5 h-5 text-amber-400" />
                    Soft Skills
                  </h3>
                  <div className="space-y-3">
                    {softSkills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 
                                        flex items-center justify-center flex-shrink-0">
                          <skill.icon className="w-5 h-5 text-indigo-400" />
                        </div>
                        <div>
                          <p className="text-white font-medium">{skill.name}</p>
                          <p className="text-xs text-gray-400">{skill.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className={`transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}>
                <div className="glass rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <Target className="w-5 h-5 text-green-400" />
                    Languages
                  </h3>
                  <div className="space-y-4">
                    {languages.map((lang, index) => (
                      <LanguageBar
                        key={index}
                        lang={lang}
                        index={index}
                        isVisible={isVisible}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Hobbies */}
              <div className={`transition-all duration-700 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}>
                <div className="glass rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <Palette className="w-5 h-5 text-purple-400" />
                    Hobbies & Interests
                  </h3>
                  <div className="space-y-3">
                    {hobbies.map((hobby, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 
                                        flex items-center justify-center flex-shrink-0">
                          <hobby.icon className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-white font-medium">{hobby.name}</p>
                          <p className="text-xs text-gray-400">{hobby.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
