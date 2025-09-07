"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Zap, Shield, Cpu } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { label: 'Services', href: '/services', icon: <Code size={16} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" /> },
    { label: 'Portfolio', href: '/portfolio', icon: <Zap size={16} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" /> },
    { label: 'About', href: '/about', icon: <Shield size={16} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" /> },
   
    { label: 'Contact', href: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl shadow-[0_0_30px_rgba(0,255,255,0.3)] border-b border-cyan-500/20' 
          : 'bg-black/70 backdrop-blur-lg'
      }`}
    >
      {/* Top neon accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
      
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

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-400 transform rotate-45 transition-all duration-500 group-hover:rotate-180 group-hover:scale-110 flex items-center justify-center shadow-[0_0_25px_rgba(0,255,255,0.8),0_0_50px_rgba(0,255,255,0.4)]">
                <Code className="text-black transform -rotate-45 group-hover:rotate-45 transition-transform duration-500" size={24} />
              </div>
              <div className="absolute inset-0 w-12 h-12 border-2 border-transparent bg-gradient-to-r from-cyan-500/50 to-cyan-400/50 transform rotate-45 animate-pulse opacity-50 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(0,255,255,0.5)]"></div>
            </div>
            <div className="hidden md:block">
              <h1 className="text-2xl font-black text-cyan-400 tracking-tight">
                NEXUS
                <span className="text-lg font-light text-cyan-200/70 ml-2">LABS</span>
              </h1>
              <div className="h-0.5 bg-gradient-to-r from-cyan-500 to-cyan-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <div key={link.label} className="relative group">
                <a
                  href={link.href}
                  className="relative px-6 py-3 text-cyan-300 font-bold text-sm uppercase tracking-widest transition-all duration-300 flex items-center space-x-2 bg-black/80 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-400 hover:text-black hover:shadow-[0_0_25px_rgba(0,255,255,0.8),0_0_50px_rgba(0,255,255,0.4)]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    {link.icon && <span className="transition-transform duration-300 group-hover:scale-110">{link.icon}</span>}
                    <span>{link.label}</span>
                  </span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-500 group-hover:w-full"></div>
                </a>
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="bg-gradient-to-r from-cyan-500 to-cyan-400 text-black px-8 py-3 rounded-lg font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,255,0.8),0_0_50px_rgba(0,255,255,0.4)]">
              <span className="relative z-10">GET QUOTE</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center bg-black/80 border border-cyan-500/30 rounded-lg text-cyan-300 transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-400 hover:text-black hover:shadow-[0_0_25px_rgba(0,255,255,0.8),0_0_50px_rgba(0,255,255,0.4)]"
            aria-label="Toggle menu"
          >
            <div className="relative">
              {isMenuOpen ? (
                <X className="transition-transform duration-300 scale-100" />
              ) : (
                <Menu className="transition-transform duration-300 scale-100" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl transform transition-all duration-500 shadow-[0_0_30px_rgba(0,255,255,0.4)] ${
        isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="px-6 py-8 space-y-4">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex items-center space-x-4 text-cyan-300 text-xl font-bold uppercase tracking-wider py-4 border-b border-cyan-500/20 bg-black/80 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.icon && (
                <span className="text-cyan-300 group-hover:text-cyan-100 transition-transform duration-300 group-hover:scale-110">
                  {link.icon}
                </span>
              )}
              <span>{link.label}</span>
              <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 group-hover:via-cyan-500/80 transition-all duration-300"></div>
            </a>
          ))}
          
          <button className="w-full mt-8 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black py-4 rounded-lg text-xl font-black uppercase tracking-widest transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,255,0.8),0_0_50px_rgba(0,255,255,0.4)]">
            GET QUOTE
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.5; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
        
        .particle {
          filter: blur(0.5px);
        }
      `}</style>
    </header>
  );
};

export default Header;