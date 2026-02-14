import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Code2, Database, LineChart, Globe, Smartphone, PenTool, Layout, Figma, Layers, X, CheckCircle } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Personal Portfolio Website',
    category: 'Web Design & Development',
    icon: Layout,
    featured: true,
    problem: 'Needed a professional online presence to showcase skills and attract opportunities.',
    solution: 'Designed and developed a modern, responsive portfolio with dark theme, animations, and interactive elements.',
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Figma'],
    impact: 'Successfully showcases my work and has attracted multiple internship inquiries.',
    color: 'from-indigo-500 to-purple-500',
    caseStudy: {
      overview: 'A complete personal brand website built from scratch to establish professional online presence.',
      process: [
        'Researched modern portfolio trends and best practices',
        'Created wireframes and mockups in Figma',
        'Developed dark theme with indigo/amber accent colors',
        'Implemented smooth scroll animations and hover effects',
        'Optimized for mobile responsiveness and performance'
      ],
      features: [
        'Responsive design for all screen sizes',
        'Interactive particle background',
        'Smooth scroll navigation',
        'Animated skill bars and counters',
        'Downloadable CV functionality',
        'Contact form integration'
      ],
      results: [
        'Clean, professional design that stands out',
        'Fast loading times (< 2 seconds)',
        'Positive feedback from recruiters and peers',
        'Increased LinkedIn profile views by 40%'
      ]
    }
  },
  {
    id: 2,
    title: 'Brand Identity System',
    category: 'Brand Design',
    icon: PenTool,
    featured: true,
    problem: 'Personal brand needed cohesive visual identity across all platforms.',
    solution: 'Created a complete brand identity including logo, color palette, typography, and design guidelines.',
    technologies: ['Figma', 'Adobe Illustrator', 'Color Theory'],
    impact: 'Established consistent personal brand across portfolio, social media, and professional materials.',
    color: 'from-amber-500 to-orange-500',
    caseStudy: {
      overview: 'Complete brand identity design for personal professional presence.',
      process: [
        'Defined brand values and personality',
        'Created mood boards and color palettes',
        'Designed logo variations and mark',
        'Established typography hierarchy',
        'Built brand guidelines document'
      ],
      features: [
        'Custom logo design with variations',
        'Primary and secondary color palettes',
        'Typography system with font pairings',
        'Brand guidelines documentation',
        'Social media templates'
      ],
      results: [
        'Consistent brand across all platforms',
        'Professional visual identity',
        'Recognizable personal brand',
        'Used across portfolio and LinkedIn'
      ]
    }
  },
  {
    id: 3,
    title: 'Student Grade Calculator',
    category: 'Web Application',
    icon: LineChart,
    featured: false,
    problem: 'Students struggle to calculate their weighted grades and predict final scores.',
    solution: 'Built a simple web app that calculates weighted grades and shows what scores are needed for target grades.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    impact: 'Used by 50+ classmates to track their academic performance throughout the semester.',
    color: 'from-green-500 to-emerald-500',
    caseStudy: {
      overview: 'A practical tool for students to manage their academic performance.',
      process: [
        'Identified common pain point among students',
        'Designed simple, intuitive interface',
        'Implemented weighted calculation logic',
        'Added local storage for data persistence',
        'Tested with classmates for feedback'
      ],
      features: [
        'Add multiple courses with different weights',
        'Calculate current average automatically',
        'Predict final grade based on remaining assignments',
        'Save data locally in browser',
        'Mobile-friendly responsive design'
      ],
      results: [
        '50+ active users in my class',
        'Positive feedback on simplicity',
        'Helped students plan their studies',
        'Shared via WhatsApp and word of mouth'
      ]
    }
  },
  {
    id: 4,
    title: 'UI Kit Design System',
    category: 'UI/UX Design',
    icon: Figma,
    featured: false,
    problem: 'Needed reusable design components for faster project development.',
    solution: 'Created a comprehensive UI kit with buttons, forms, cards, and navigation components.',
    technologies: ['Figma', 'Auto Layout', 'Components'],
    impact: 'Reduced design time by 60% for new projects by using reusable components.',
    color: 'from-pink-500 to-rose-500',
    caseStudy: {
      overview: 'A reusable UI component library for faster design workflow.',
      process: [
        'Analyzed common UI patterns in my projects',
        'Designed base components with variants',
        'Created component documentation',
        'Organized with Figma auto-layout',
        'Tested components in real projects'
      ],
      features: [
        '50+ reusable components',
        'Consistent spacing and sizing',
        'Dark and light mode variants',
        'Interactive component states',
        'Easy to customize and extend'
      ],
      results: [
        '60% faster design workflow',
        'Consistent design across projects',
        'Easier collaboration with developers',
        'Reusable for client projects'
      ]
    }
  },
  {
    id: 5,
    title: 'Rock Classification Guide',
    category: 'Educational Web App',
    icon: Database,
    featured: false,
    problem: 'Geology students need quick access to rock and mineral identification information.',
    solution: 'Created an interactive guide with search, filters, and visual references for common rocks and minerals.',
    technologies: ['React', 'JSON', 'CSS'],
    impact: 'Helped students in my geology class with quick reference during field work and exams.',
    color: 'from-amber-500 to-yellow-500',
    caseStudy: {
      overview: 'An educational tool for geology students to identify rocks and minerals.',
      process: [
        'Compiled data from course materials',
        'Designed search and filter interface',
        'Built interactive quiz feature',
        'Added high-quality reference images',
        'Tested with classmates for usability'
      ],
      features: [
        'Search by name, type, or properties',
        'Filter by hardness, color, texture',
        'Detailed descriptions with images',
        'Quiz mode for practice',
        'Works offline after first load'
      ],
      results: [
        'Used by classmates for exam prep',
        'Helpful during field work',
        'Positive feedback from professors',
        'Referenced in study groups'
      ]
    }
  },
  {
    id: 6,
    title: 'Weather Dashboard',
    category: 'API Integration Project',
    icon: Globe,
    featured: false,
    problem: 'Wanted to practice API integration while creating something useful.',
    solution: 'Built a weather dashboard that displays current conditions and forecasts for multiple cities.',
    technologies: ['JavaScript', 'OpenWeather API', 'HTML/CSS'],
    impact: 'Improved API integration skills and created a practical daily-use tool.',
    color: 'from-blue-500 to-cyan-500',
    caseStudy: {
      overview: 'A weather dashboard to practice working with external APIs.',
      process: [
        'Researched weather APIs and selected OpenWeather',
        'Designed clean, information-rich interface',
        'Implemented async data fetching',
        'Added error handling and loading states',
        'Optimized for performance'
      ],
      features: [
        'Search for any city worldwide',
        'Current weather conditions display',
        '5-day forecast with icons',
        'Save favorite locations',
        'Temperature unit conversion'
      ],
      results: [
        'Learned API integration patterns',
        'Improved async JavaScript skills',
        'Created daily-use personal tool',
        'Added to portfolio projects'
      ]
    }
  },
  {
    id: 7,
    title: 'Task Manager App',
    category: 'Productivity Tool',
    icon: Smartphone,
    featured: false,
    problem: 'Needed a simple, distraction-free task manager for personal use.',
    solution: 'Developed a clean task manager with categories, priorities, and due dates.',
    technologies: ['React Native', 'AsyncStorage'],
    impact: 'Daily use for personal task management and productivity tracking.',
    color: 'from-purple-500 to-violet-500',
    caseStudy: {
      overview: 'A mobile task manager built for personal productivity.',
      process: [
        'Identified needs from existing app limitations',
        'Designed minimal, focused interface',
        'Built with React Native for cross-platform',
        'Implemented local data storage',
        'Added reminder notifications'
      ],
      features: [
        'Quick task entry with minimal steps',
        'Set priorities and due dates',
        'Categorize tasks by project',
        'Mark tasks as complete',
        'View completed task history'
      ],
      results: [
        'Used daily for 6+ months',
        'Improved personal productivity',
        'Helped manage coursework deadlines',
        'Learned mobile app development'
      ]
    }
  },
  {
    id: 8,
    title: 'Social Media Graphics Pack',
    category: 'Graphic Design',
    icon: Layers,
    featured: false,
    problem: 'Needed consistent, professional graphics for LinkedIn and social media.',
    solution: 'Created a set of templates for posts, banners, and stories with consistent branding.',
    technologies: ['Figma', 'Canva', 'Design Principles'],
    impact: 'Improved social media presence with professional, consistent visuals.',
    color: 'from-rose-500 to-pink-500',
    caseStudy: {
      overview: 'A collection of social media graphic templates for personal branding.',
      process: [
        'Analyzed successful LinkedIn profiles',
        'Designed templates for different content types',
        'Created consistent visual language',
        'Made templates easy to customize',
        'Exported in various sizes for platforms'
      ],
      features: [
        'LinkedIn banner templates',
        'Post graphics for achievements',
        'Story templates for Instagram',
        'Certificate showcase designs',
        'Quote graphics with branding'
      ],
      results: [
        'More professional social presence',
        'Consistent visual identity',
        'Higher engagement on posts',
        'Easier content creation'
      ]
    }
  },
  {
    id: 9,
    title: 'Code Snippet Library',
    category: 'Developer Tool',
    icon: Code2,
    featured: false,
    problem: 'Often needed to reuse code snippets but had them scattered across files.',
    solution: 'Created a personal code snippet library with search, tags, and copy functionality.',
    technologies: ['React', 'LocalStorage', 'Tailwind CSS'],
    impact: 'Saved hours of development time by organizing reusable code.',
    color: 'from-gray-500 to-slate-500',
    caseStudy: {
      overview: 'A personal collection of reusable code snippets for faster development.',
      process: [
        'Identified commonly reused code patterns',
        'Designed search and tag system',
        'Built with React for easy access',
        'Added syntax highlighting',
        'Implemented one-click copy'
      ],
      features: [
        'Save code snippets with descriptions',
        'Tag and categorize by language/type',
        'Full-text search functionality',
        'One-click copy to clipboard',
        'Syntax highlighting for readability'
      ],
      results: [
        'Hours saved searching old projects',
        'Centralized code knowledge base',
        'Faster project setup',
        'Improved code consistency'
      ]
    }
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
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
      id="projects"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-indigo-400 font-medium tracking-wide uppercase text-sm mb-4">
              Portfolio Showcase
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Personal projects showcasing my skills in design, development, and creativity
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group glass rounded-2xl p-6 border border-white/10 hover:border-indigo-500/30 
                           transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} 
                                flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <project.icon className="w-7 h-7 text-white" />
                </div>

                {/* Category */}
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white 
                                  bg-gradient-to-r ${project.color} mb-3`}>
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>

                {/* Problem & Solution */}
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-400 line-clamp-2">
                    <span className="text-gray-500">Problem:</span> {project.problem}
                  </p>
                  <p className="text-sm text-gray-300 line-clamp-2">
                    <span className="text-indigo-400">Solution:</span> {project.solution}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-white/5 rounded text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Impact */}
                <p className="text-xs text-amber-400 mb-4 line-clamp-2">
                  <span className="text-gray-500">Impact:</span> {project.impact}
                </p>

                {/* View Case Study Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-2 text-sm text-indigo-400 hover:text-white transition-colors group/btn"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm overflow-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="glass rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 border border-white/20 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-8 pb-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${selectedProject.color} 
                                flex items-center justify-center`}>
                  <selectedProject.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white 
                                    bg-gradient-to-r ${selectedProject.color} mb-2`}>
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Case Study Content */}
            <div className="space-y-8">
              {/* Overview */}
              <div>
                <h4 className="text-lg font-bold text-indigo-400 mb-3">Project Overview</h4>
                <p className="text-gray-300 leading-relaxed">{selectedProject.caseStudy.overview}</p>
              </div>

              {/* Problem & Solution */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                  <h4 className="text-lg font-bold text-red-400 mb-2">The Problem</h4>
                  <p className="text-gray-300 text-sm">{selectedProject.problem}</p>
                </div>
                <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                  <h4 className="text-lg font-bold text-green-400 mb-2">The Solution</h4>
                  <p className="text-gray-300 text-sm">{selectedProject.solution}</p>
                </div>
              </div>

              {/* Process */}
              <div>
                <h4 className="text-lg font-bold text-indigo-400 mb-3">Development Process</h4>
                <ul className="space-y-2">
                  {selectedProject.caseStudy.process.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 text-xs text-indigo-400 font-bold">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-lg font-bold text-indigo-400 mb-3">Key Features</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedProject.caseStudy.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="p-6 bg-amber-500/10 rounded-xl border border-amber-500/20">
                <h4 className="text-lg font-bold text-amber-400 mb-3">Results & Impact</h4>
                <ul className="space-y-2">
                  {selectedProject.caseStudy.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="text-amber-400">→</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-lg font-bold text-indigo-400 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-white/10 rounded-lg text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="mt-8 w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white 
                         font-semibold rounded-xl hover:shadow-lg transition-all"
            >
              Close Case Study
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
