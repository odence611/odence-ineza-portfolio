import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Download, Mail, Phone, MapPin, Linkedin } from 'lucide-react';

interface CVProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CV({ isOpen, onClose }: CVProps) {
  const [, setIsPrinting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleDownload = () => {
    setIsPrinting(true);
    setTimeout(() => {
      window.print();
      setIsPrinting(false);
    }, 100);
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="cv-print-portal fixed inset-0 z-50 overflow-auto bg-black/90 backdrop-blur-sm print:absolute print:inset-0 print:h-auto print:overflow-visible print:bg-white print:backdrop-blur-none print:z-[9999]">
      <style>{`
        @media print {
          body > *:not(.cv-print-portal) { display: none !important; }
        }
      `}</style>
      {/* Header Actions */}
      <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-[#0f0f1a]/90 backdrop-blur-xl border-b border-white/10 print:hidden">
        <h2 className="text-xl font-bold text-white">Ineza Odence - CV</h2>
        <div className="flex items-center gap-3">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </button>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* CV Content */}
      <div className="max-w-4xl mx-auto p-8 print:p-0 print:w-full print:max-w-none">
        <div className="bg-white text-black p-12 print:p-8 rounded-xl print:rounded-none shadow-2xl print:shadow-none print:border-none">
          {/* Header */}
          <div className="border-b-2 border-indigo-600 pb-6 mb-6">
            <h1 className="text-4xl font-bold text-indigo-900 mb-2">INEZA ODENCE</h1>
            <p className="text-xl text-gray-600 mb-4">Rwandan Creative Designer | Applied Geology Student | Full Stack Developer</p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <Mail className="w-4 h-4" /> inezodence@gmail.com
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-4 h-4" /> +250 736 069 776
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" /> Kigali, Rwanda
              </span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-4 h-4" /> linkedin.com/in/ineza-odence
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-indigo-900 border-b border-gray-300 pb-1 mb-3">PROFESSIONAL SUMMARY</h2>
            <p className="text-gray-700 leading-relaxed">
              A multidisciplinary Rwandan Creative Designer ,developer and Applied Geology student with expertise in web development, 
              brand design, and geospatial technology. Passionate about combining design, technology, and earth sciences 
              to create innovative solutions for Africa's challenges. Proven track record through 10+ professional certifications 
              and hands-on project experience.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-indigo-900 border-b border-gray-300 pb-1 mb-3">EXPERIENCE</h2>
            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-gray-900">Self-Employed</h3>
                <span className="text-sm text-gray-600">Freelance / Remote</span>
              </div>
              <p className="text-gray-700 font-medium">Web, Mobile & AI Developer</p>
              <p className="text-gray-700 text-sm mt-1">
                Building diverse projects spanning web applications, mobile apps, and AI-powered solutions. 
                Delivering high-quality, scalable solutions solving real problems for clients globally.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-indigo-900 border-b border-gray-300 pb-1 mb-3">EDUCATION</h2>
            <div className="mb-3">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-gray-900">University of Rwanda</h3>
                <span className="text-sm text-gray-600">2024 - Present</span>
              </div>
              <p className="text-gray-700">Bachelor of Science with Honours in Applied Geology - Year 2</p>
              <p className="text-sm text-gray-600">Relevant Coursework: Mineral Exploration, GIS & Remote Sensing, Structural Geology, Environmental Geology</p>
            </div>
            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-gray-900">Ecole des Sciences Byimana</h3>
                <span className="text-sm text-gray-600">Class of 2023</span>
              </div>
              <p className="text-gray-700">Advanced Level Certificate (A2) - Mathematics, Physics, Computer Science (MPC)</p>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-indigo-900 border-b border-gray-300 pb-1 mb-3">TECHNICAL SKILLS</h2>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div><span className="font-semibold">Design:</span> Brand Design, UI/UX Design, Figma, Adobe Creative Suite</div>
              <div><span className="font-semibold">Frontend:</span> HTML, CSS, JavaScript, React, React Native, Tailwind CSS</div>
              <div><span className="font-semibold">Backend:</span> Node.js, Python, RESTful APIs</div>
              <div><span className="font-semibold">Database:</span> PostgreSQL, MongoDB, Supabase</div>
              <div><span className="font-semibold">Tools:</span> Git, GitHub, SolidWorks, GIS Software</div>
              <div><span className="font-semibold">Other:</span> AI Tools, Workflow Automation, Geospatial Analysis</div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-indigo-900 border-b border-gray-300 pb-1 mb-3">CERTIFICATIONS</h2>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>• Full Stack Software Engineering (ALX) - 98.65%</div>
              <div>• AI Career Essentials (ALX)</div>
              <div>• AU CIEFFA Online Youth Capacity Building Training</div>
              <div>• Virtual Assistant (ALX)</div>
              <div>• Infection Prevention & Control (WHO)</div>
              <div>• Queen's Commonwealth Essay Competition (RCS)</div>
              <div>• Aspire Leaders Program (Harvard)</div>
              <div>• Cybersecurity Fundamentals (ADBI)</div>
              <div>• Financial Planning (Athena Global)</div>
              <div>• Change Management (Athena Global)</div>
              <div>• English Language of Instruction (NESA)</div>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-indigo-900 border-b border-gray-300 pb-1 mb-3">PROJECTS</h2>
            <div className="space-y-3 text-sm">
              <div>
                <h3 className="font-semibold text-gray-900">Personal Portfolio Website</h3>
                <p className="text-gray-700">Designed and developed a modern portfolio with React, Tailwind CSS, and animations to showcase skills and attract opportunities.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Brand Identity Projects</h3>
                <p className="text-gray-700">Created brand identities including logos, color palettes, and design systems for personal and academic projects.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Student Grade Calculator</h3>
                <p className="text-gray-700">Built a web app for students to calculate weighted grades, used by 50+ classmates.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Rock Classification Guide</h3>
                <p className="text-gray-700">Interactive educational web app for geology students to identify rocks and minerals.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">UI Kit Design System</h3>
                <p className="text-gray-700">Comprehensive component library reducing design time by 60% for new projects.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Weather Dashboard</h3>
                <p className="text-gray-700">Real-time weather tracking application integrated with OpenWeather API.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Task Manager App</h3>
                <p className="text-gray-700">React Native mobile application for personal productivity and task tracking.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Social Media Graphics Pack</h3>
                <p className="text-gray-700">Professional template collection for consistent personal branding across platforms.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Code Snippet Library</h3>
                <p className="text-gray-700">Personal knowledge base with search functionality for reusable code patterns.</p>
              </div>
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-indigo-900 border-b border-gray-300 pb-1 mb-3">AWARDS & RECOGNITION</h2>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Queen's Commonwealth Essay Competition Certificate (2023)</li>
              <li>• ALX Full Stack Software Engineering - 98.65% Score</li>
              <li>• Aspire Leaders Program Alumni</li>
            </ul>
          </div>

          {/* Languages & Interests */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-bold text-indigo-900 border-b border-gray-300 pb-1 mb-3">LANGUAGES</h2>
              <ul className="text-sm text-gray-700">
                <li>• Kinyarwanda (Native)</li>
                <li>• English (C1/C2 - Professional)</li>
                <li>• French (Basic)</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold text-indigo-900 border-b border-gray-300 pb-1 mb-3">INTERESTS</h2>
              <ul className="text-sm text-gray-700">
                <li>• Coding & Software Development</li>
                <li>• Basketball</li>
                <li>• Brainstorming & Innovation</li>
                <li>• Geology & Earth Sciences</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  , document.body);
}
