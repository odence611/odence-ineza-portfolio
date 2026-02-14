import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/ineza-odence-48a6b1289/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:inezodence@gmail.com', label: 'Email' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] 
                        bg-gradient-to-t from-indigo-500/10 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 
                                flex items-center justify-center">
                  <span className="text-white font-bold text-xl">IO</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Ineza Odence</h3>
                  <p className="text-sm text-gray-400">Applied Geology & Tech</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Building technology for Earth, Environment & Africa's Future. 
                Combining geology, AI, and software development to create impactful solutions.
              </p>
              <p className="text-amber-400 font-medium">
                Building Africa's Digital Future
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-gray-400 hover:text-indigo-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="flex gap-3 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center 
                               hover:bg-indigo-500 hover:scale-110 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5 text-gray-400 hover:text-white" />
                  </a>
                ))}
              </div>
              <p className="text-gray-400 text-sm">
                Available for freelance projects, internships, and collaborations.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-1">
              © {new Date().getFullYear()} Ineza Odence. Made with 
              <Heart className="w-4 h-4 text-red-500 fill-red-500" /> 
              in Rwanda
            </p>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-gray-400 
                         hover:text-white hover:border-indigo-500/30 transition-all duration-300"
            >
              <span className="text-sm">Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
