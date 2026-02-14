import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Phone, Linkedin, Github, MessageSquare } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'inezodence@gmail.com',
    href: 'mailto:inezodence@gmail.com',
    color: 'from-red-500 to-rose-500',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ineza-odence',
    href: 'https://linkedin.com/in/ineza-odence-48a6b1289/',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+250 736 069 776',
    href: 'https://wa.me/250736069776',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Kigali, Rwanda',
    href: '#',
    color: 'from-amber-500 to-orange-500',
  },
];

export default function Contact() {
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
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-500/5 to-transparent" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-indigo-400 font-medium tracking-wide uppercase text-sm mb-4">
              Get In Touch
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Let's <span className="gradient-text">Work Together</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Let's create something amazing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
              <div className="glass rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 
                                 transition-all duration-300 group"
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} 
                                      flex items-center justify-center flex-shrink-0 
                                      group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{item.label}</p>
                        <p className="text-white font-medium group-hover:text-indigo-400 transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-400 mb-4">Follow me on</p>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center 
                                 hover:bg-white/10 hover:scale-110 transition-all"
                    >
                      <Github className="w-5 h-5 text-gray-400 hover:text-white" />
                    </a>
                    <a
                      href="https://linkedin.com/in/ineza-odence-48a6b1289/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center 
                                 hover:bg-white/10 hover:scale-110 transition-all"
                    >
                      <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Google Forms */}
            <div className={`transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}>
              <div className="glass rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <MessageSquare className="w-6 h-6 text-indigo-400" />
                  Send a Message
                </h3>

                <p className="text-gray-400 mb-6">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>

                {/* Google Form Embed */}
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSckRwO-afsEbPG-jKJvGN6xHUz7gseIPmFw-TwuQgFHP9tTdQ/viewform?usp=publish-editor"
                    width="100%"
                    height="500"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    className="bg-white"
                    title="Contact Form"
                  >
                    Loading…
                  </iframe>
                </div>

                {/* Alternative Contact Method */}
                <div className="mt-6 p-4 bg-amber-500/10 rounded-xl border border-amber-500/20">
                  <p className="text-sm text-amber-400">
                    <strong>Prefer direct contact?</strong> Email me at{' '}
                    <a 
                      href="mailto:inezodence@gmail.com" 
                      className="underline hover:text-white transition-colors"
                    >
                      inezodence@gmail.com
                    </a>
                    {' '}or message me on{' '}
                    <a 
                      href="https://wa.me/250736069776" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-white transition-colors"
                    >
                      WhatsApp
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
