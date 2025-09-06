"use client"
import React, { useState, useEffect } from 'react';
import { Globe, Mail, Phone, MapPin, Twitter, Github, Linkedin, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  const socialLinks = [
    { href: 'https://github.com', icon: <Github size={20} className="text-cyan-300 group-hover:text-cyan-100 transition-transform duration-300 group-hover:scale-110" /> },
    { href: 'https://linkedin.com', icon: <Linkedin size={20} className="text-cyan-300 group-hover:text-cyan-100 transition-transform duration-300 group-hover:scale-110" /> },
    { href: 'https://twitter.com', icon: <Twitter size={20} className="text-cyan-300 group-hover:text-cyan-100 transition-transform duration-300 group-hover:scale-110" /> },
  ];

  const quickLinks = [
    'Home', 'Services', 'Portfolio', 'About', 'Contact'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black/95 backdrop-blur-xl py-16 border-t border-cyan-500/20 text-white overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-cyan-300/20 rounded-full particle"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 6}s infinite`,
              animationDelay: `${Math.random() * 5}s`,
              willChange: 'transform, opacity',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 group flex flex-col items-start">
            <div className="relative">
              <h3 className="text-3xl font-black text-cyan-400 tracking-tight">
                NEXUS
                <span className="text-xl font-light text-cyan-200/70 ml-2">LABS</span>
              </h3>
              <div className="h-0.5 bg-gradient-to-r from-cyan-500 to-cyan-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              <div className="absolute inset-0 border-2 border-cyan-500/50 animate-pulse opacity-50 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(0,255,255,0.5)]"></div>
            </div>
            <p className="text-cyan-300/70 text-sm leading-relaxed">
              Empowering businesses with cutting-edge technology solutions for a digital-first world.
            </p>
          </div>

          {/* Explore (Styled to match first footer's Quick Links) */}
          <div className="flex flex-col items-start">
            <h4 className="text-xl font-bold text-cyan-400 mb-6 uppercase tracking-wide flex items-center">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></span>
              Explore
            </h4>
            <div className="space-y-3">
              {quickLinks.map((item, index) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="group flex items-center text-cyan-300/70 hover:text-cyan-100 transition-all duration-300 hover:translate-x-2 hover:bg-cyan-500/5 p-2 rounded"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-2 h-2 bg-cyan-500/50 rounded-full mr-3 group-hover:bg-cyan-300 group-hover:scale-150 transition-all duration-300"></div>
                  <span className="relative text-base font-bold uppercase tracking-wider">
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-start">
            <h4 className="text-xl font-bold text-cyan-300 mb-4 uppercase tracking-wide">Contact</h4>
            <ul className="space-y-3">
              {[
                { icon: <Mail size={16} className="text-cyan-300 group-hover:text-cyan-100 transition-transform duration-300 group-hover:scale-110" />, text: 'info@nexuslabs.com' },
                { icon: <Phone size={16} className="text-cyan-300 group-hover:text-cyan-100 transition-transform duration-300 group-hover:scale-110" />, text: '+1 (555) 123-4567' },
                { icon: <MapPin size={16} className="text-cyan-300 group-hover:text-cyan-100 transition-transform duration-300 group-hover:scale-110" />, text: '123 Tech Street, Silicon Valley, CA' },
              ].map((contact, index) => (
                <li key={index} className="group flex items-center text-cyan-300/70 text-sm">
                  {contact.icon}
                  <span className="ml-2">{contact.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Connected */}
          <div className="flex flex-col items-start">
            <h4 className="text-xl font-bold text-cyan-300 mb-4 uppercase tracking-wide">Stay Connected</h4>
            <div className="space-y-4">
              <div>
                <p className="text-cyan-300/70 text-sm mb-4">
                  Subscribe to our newsletter for the latest updates.
                </p>
                <div className="flex space-x-2 w-full">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-black/50 border border-cyan-500/30 rounded-lg text-cyan-100 placeholder-cyan-300/50 focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black rounded-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]">
                    <Globe size={16} />
                  </button>
                </div>
              </div>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-2 bg-black/80 border border-cyan-500/30 rounded-lg text-cyan-300 transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
                  >
                    {social.icon}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-500 group-hover:w-full"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-cyan-500/20 text-center">
          <p className="text-cyan-300/70 text-sm">
            &copy; {new Date().getFullYear()} Nexus Labs. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black rounded-full shadow-[0_0_25px_rgba(0,255,255,0.8),0_0_50px_rgba(0,255,255,0.4)] transition-all duration-500 hover:scale-110 z-40 ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp size={20} className="transition-transform duration-300 hover:-translate-y-1" />
      </button>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.5; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }

        .particle {
          filter: blur(0.5px);
        }
      `}</style>
    </footer>
  );
};

export default Footer;