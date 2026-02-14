import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import CV from '../components/CV';

interface NavbarProps {
  scrollY: number;
}

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Why Me', href: '#why-hire-me' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ scrollY }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [cvOpen, setCvOpen] = useState(false);
  const isScrolled = scrollY > 50;

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.slice(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0f0f1a]/90 backdrop-blur-xl border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full section-padding">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group relative flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white font-bold text-lg">IO</span>
            </div>
            <span className={`font-bold text-lg hidden sm:block transition-all duration-300 ${
              isScrolled ? 'text-white' : 'text-white/90'
            }`}>
              Ineza Odence
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  activeSection === link.href.slice(1)
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-indigo-500 to-amber-500 transition-all duration-300 ${
                    activeSection === link.href.slice(1)
                      ? 'w-6'
                      : 'w-0 group-hover:w-6'
                  }`}
                />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setCvOpen(true)}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-lg 
                         hover:shadow-lg hover:shadow-amber-500/30 hover:scale-105 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-[#0f0f1a]/95 backdrop-blur-xl border-b border-white/10 
                    transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="section-padding py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeSection === link.href.slice(1)
                  ? 'bg-indigo-500/20 text-white'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => setCvOpen(true)}
            className="flex items-center justify-center gap-2 w-full px-4 py-3 mt-4 bg-gradient-to-r from-amber-500 to-amber-600 
                       text-black font-semibold rounded-lg"
          >
            <Download className="w-4 h-4" />
            <span>Download CV</span>
          </button>
        </div>
      </div>

      <CV isOpen={cvOpen} onClose={() => setCvOpen(false)} />
    </nav>
  );
}
