import { useEffect, useRef, useState } from 'react';
import { Award, ExternalLink, CheckCircle, FileCheck } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: 'Full Stack Software Engineering',
    organization: 'ALX Africa',
    date: '2024',
    score: '98.65%',
    description: 'Comprehensive full-stack development program covering modern web technologies.',
    color: 'from-indigo-500 to-purple-500',
    icon: 'ALX',
    verifyUrl: null,
    verifyText: 'Transcript Available',
  },
  {
    id: 2,
    title: 'AI Career Essentials',
    organization: 'ALX Africa',
    date: 'July 2024',
    description: 'AI-augmented professional development skills in the digital age.',
    color: 'from-blue-500 to-cyan-500',
    icon: 'AI',
    verifyUrl: 'https://intranet.alxswe.com/certificates/TmGfHPn9F3',
    verifyText: 'Verify Certificate',
  },
  {
    id: 3,
    title: 'Virtual Assistant',
    organization: 'ALX Africa',
    date: 'October 2024',
    description: 'Virtual assistance skills and digital workplace productivity.',
    color: 'from-green-500 to-emerald-500',
    icon: 'VA',
    verifyUrl: 'https://intranet.alxswe.com/certificates/hszxrGRL9S',
    verifyText: 'Verify Certificate',
  },
  {
    id: 4,
    title: 'Infection Prevention & Control',
    organization: 'WHO',
    date: 'November 2024',
    description: 'Healthcare settings infection control for Ebola and Marburg disease outbreaks.',
    color: 'from-red-500 to-rose-500',
    icon: 'WHO',
    verifyUrl: 'https://openwho.org/verify/xirok-kotu6-cu3il-mog6m-zuvaf',
    verifyText: 'Verify Certificate',
  },
  {
    id: 5,
    title: "Queen's Commonwealth Essay Competition",
    organization: 'Royal Commonwealth Society',
    date: 'October 2023',
    description: 'Recognized for outstanding essay writing achievement.',
    color: 'from-amber-500 to-orange-500',
    icon: 'RCS',
    verifyUrl: null,
    verifyText: 'Certificate Available',
  },
  {
    id: 6,
    title: 'Aspire Leaders Program',
    organization: 'Harvard Business School Online',
    date: '2024',
    description: 'Leadership development and professional skills enhancement.',
    color: 'from-purple-500 to-pink-500',
    icon: 'ALP',
    verifyUrl: null,
    verifyText: 'Certificate Available',
  },
  {
    id: 7,
    title: 'Cybersecurity Fundamentals',
    organization: 'Asian Development Bank Institute',
    date: 'December 2024',
    description: 'Cybersecurity fundamentals and digital safety practices.',
    color: 'from-gray-500 to-slate-500',
    icon: 'CS',
    verifyUrl: 'https://elearning-adbi.org/certificate-verifier/?&code=116364-173-562-4409',
    verifyText: 'Verify Certificate',
  },
  {
    id: 8,
    title: 'Financial Planning for Young Professionals',
    organization: 'Athena Global Education',
    date: 'November 2023',
    description: 'Financial literacy and planning skills for young professionals.',
    color: 'from-emerald-500 to-teal-500',
    icon: 'FIN',
    verifyUrl: null,
    verifyText: 'Certificate Available',
  },
  {
    id: 9,
    title: 'Change Management',
    organization: 'Athena Global Education',
    date: 'November 2023',
    description: 'Strategic adaptation and change management principles.',
    color: 'from-cyan-500 to-blue-500',
    icon: 'CM',
    verifyUrl: null,
    verifyText: 'Certificate Available',
  },
  {
    id: 10,
    title: 'English Language of Instruction',
    organization: 'NESA Rwanda',
    date: 'January 2025',
    description: 'Certified English medium of instruction for academic purposes.',
    color: 'from-rose-500 to-pink-500',
    icon: 'ENG',
    verifyUrl: null,
    verifyText: 'Certificate #NESA202500137LOI',
  },
  {
    id: 11,
    title: 'AU CIEFFA Online Youth Capacity Building Training',
    organization: 'AU CIEFFA',
    date: '2024',
    description: 'Capacity building focused on youth leadership and girls\' and women\'s education .',
    color: 'from-teal-500 to-green-500',
    icon: 'AU',
    verifyUrl: null,
    verifyText: 'Certificate Available',
  },
];

const awards = [
  {
    title: "Queen's Commonwealth Essay Competition",
    organization: 'Royal Commonwealth Society',
    year: '2023',
    description: 'Recognized for outstanding essay writing',
  },
  {
    title: 'ALX Top Performer',
    organization: 'ALX Africa',
    year: '2024',
    description: '98.65% score in Full Stack Software Engineering',
  },
];

const learningHours = [
  { label: 'Coding & Development', hours: '2,500+' },
  { label: 'Design & Creativity', hours: '800+' },
  { label: 'Geology Coursework', hours: '1,200+' },
  { label: 'Online Learning', hours: '500+' },
];

export default function Certifications() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-indigo-400 font-medium tracking-wide uppercase text-sm mb-4">
              Credentials & Recognition
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              My <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Continuous learning with verifiable credentials
            </p>
          </div>

          {/* Learning Hours Stats */}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {learningHours.map((item, index) => (
              <div key={index} className="glass p-4 rounded-xl text-center border border-white/10">
                <div className="text-2xl font-bold text-amber-400">{item.hours}</div>
                <div className="text-sm text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Certifications Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-12">
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                className={`group glass rounded-xl p-5 border border-white/10 hover:border-indigo-500/30 
                           transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} 
                                flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <span className="text-white font-bold">{cert.icon}</span>
                </div>

                {/* Content */}
                <h3 className="text-sm font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-xs text-gray-400 mb-1">{cert.organization}</p>
                <p className="text-xs text-gray-500 mb-2">{cert.date}</p>
                
                {cert.score && (
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-500/20 rounded text-amber-400 text-xs font-medium mb-2">
                    <Award className="w-3 h-3" />
                    {cert.score}
                  </div>
                )}
                
                <p className="text-xs text-gray-400 line-clamp-2 mb-3">{cert.description}</p>

                {/* Verification Link */}
                {cert.verifyUrl ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-indigo-400 hover:text-white transition-colors"
                  >
                    <FileCheck className="w-3 h-3" />
                    <span>{cert.verifyText}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1 text-xs text-green-400">
                    <CheckCircle className="w-3 h-3" />
                    <span>{cert.verifyText}</span>
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Awards Section */}
          <div className={`transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="glass rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-amber-400" />
                Awards & Recognition
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {awards.map((award, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{award.title}</h4>
                      <p className="text-sm text-amber-400">{award.organization}</p>
                      <p className="text-xs text-gray-400">{award.year} • {award.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* View More */}
          <div className={`mt-8 text-center transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <a
              href="https://linkedin.com/in/ineza-odence-48a6b1289/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-indigo-400 hover:text-white transition-colors"
            >
              <span>View all credentials on LinkedIn</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
