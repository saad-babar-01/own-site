"use client";
import React from 'react';
import { Code, Zap, Shield, Cpu, Smartphone, GitBranch, Briefcase, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface PortfolioItem {
  title: string;
  description: string;
}

interface TechStack {
  name: string;
  icon: React.ReactNode;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: 'Web Development',
      description: 'Build cutting-edge, responsive websites with modern frameworks and technologies tailored to your business needs.',
      icon: <Code size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />,
    },
    {
      title: 'Cloud Solutions',
      description: 'Leverage scalable cloud infrastructure to optimize performance, security, and cost-efficiency for your applications.',
      icon: <Zap size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />,
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your digital assets with advanced security protocols, penetration testing, and real-time monitoring.',
      icon: <Shield size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />,
    },
    {
      title: 'AI Integration',
      description: 'Enhance your products with AI-driven features, including machine learning models and intelligent automation.',
      icon: <Cpu size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />,
    },
    {
      title: 'Mobile App Development',
      description: 'Create powerful, user-friendly mobile apps for iOS and Android with seamless performance and modern design.',
      icon: <Smartphone size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />,
    },
    {
      title: 'DevOps Services',
      description: 'Streamline your development pipeline with CI/CD, automation, and infrastructure management for faster delivery.',
      icon: <GitBranch size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />,
    },
  ];

  const portfolioItems: PortfolioItem[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A scalable online store with advanced payment integration and real-time analytics.',
    },
    {
      title: 'Healthcare App',
      description: 'A secure mobile app for patient management with AI-driven diagnostics.',
    },
  ];

  const techStack: TechStack[] = [
    { name: 'React', icon: <Code size={24} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" /> },
    { name: 'Next.js', icon: <Code size={24} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" /> },
    { name: 'AWS', icon: <Zap size={24} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" /> },
    { name: 'TensorFlow', icon: <Cpu size={24} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" /> },
  ];

  // Split "Our Services" into letters for reveal animation
  const titleLetters = "Our Services".split('');
  // Split "Innovate. Transform. Succeed." into words for scale-in animation
  const sloganWords = ["Innovate.", "Transform.", "Succeed."];

  return (
    <div className="min-h-screen bg-black/95 text-white">
      {/* Hero Section */}
      <section className="relative bg-black/90 backdrop-blur-xl pt-40 pb-20 overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 absolute top-0 left-0 right-0"></div>
        {/* Particle Background */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-cyan-300/30 rounded-full particle-orbit"
              style={{
                width: `${Math.random() * 3 + 2}px`,
                height: `${Math.random() * 3 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float-orbit ${Math.random() * 6 + 4}s linear 1`,
                animationDelay: `${Math.random() * 4}s`,
                willChange: 'transform',
              }}
            />
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent">
              {titleLetters.map((letter, index) => (
                <span
                  key={index}
                  className="reveal"
                  style={{ animationDelay: `${index * 0.1}s`, display: letter === ' ' ? 'inline-block' : 'inline' }}
                >
                  {letter}
                </span>
              ))}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-cyan-300/70 max-w-lg">
              <span className="inline-block">
                {sloganWords.map((word, index) => (
                  <span
                    key={index}
                    className="scale-in"
                    style={{ animationDelay: `${index * 0.3 + 1.2}s`, display: 'inline-block', marginRight: '0.2em' }}
                  >
                    {word}
                  </span>
                ))}
              </span>
            </p>
            <p className="mt-2 text-cyan-300/70 max-w-lg">
              Discover our range of innovative solutions designed to empower your business with cutting-edge technology and unparalleled expertise.
            </p>
           
          </div>
          <div className="flex-1 hidden lg:block">
            <div
              className="relative rotate-slow"
              style={{
                clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                animationDelay: '0s',
              }}
            >
              <svg
                className="w-full h-64 text-cyan-300/50 shadow-[0_0_15px_rgba(0,255,255,0.4)]"
                viewBox="0 0 200 200"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {/* Hexagonal outer path */}
                <path
                  d="M100 20 L170 60 L170 140 L100 180 L30 140 L30 60 Z"
                  className="pulse-path"
                  strokeDasharray="400"
                  strokeDashoffset="400"
                  style={{ animationDelay: '0s' }}
                />
                {/* Inner hexagonal path */}
                <path
                  d="M100 40 L150 70 L150 130 L100 160 L50 130 L50 70 Z"
                  className="pulse-path"
                  strokeDasharray="300"
                  strokeDashoffset="300"
                  style={{ animationDelay: '0.5s' }}
                />
                {/* Connecting lines */}
                <path
                  d="M100 20 L100 40 M170 60 L150 70 M170 140 L150 130 M100 180 L100 160 M30 140 L50 130 M30 60 L50 70"
                  className="pulse-path"
                  strokeDasharray="200"
                  strokeDashoffset="200"
                  style={{ animationDelay: '1s' }}
                />
                {/* Nodes */}
                <circle cx="100" cy="20" r="4" fill="cyan-300/70" className="neon-pulse" style={{ animationDelay: '1.5s' }} />
                <circle cx="170" cy="60" r="4" fill="cyan-300/70" className="neon-pulse" style={{ animationDelay: '1.7s' }} />
                <circle cx="170" cy="140" r="4" fill="cyan-300/70" className="neon-pulse" style={{ animationDelay: '1.9s' }} />
                <circle cx="100" cy="180" r="4" fill="cyan-300/70" className="neon-pulse" style={{ animationDelay: '2.1s' }} />
                <circle cx="30" cy="140" r="4" fill="cyan-300/70" className="neon-pulse" style={{ animationDelay: '2.3s' }} />
                <circle cx="30" cy="60" r="4" fill="cyan-300/70" className="neon-pulse" style={{ animationDelay: '2.5s' }} />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Web Development Section */}
      <section className="py-16 bg-black/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex justify-center lg:justify-start mb-4">{services[0].icon}</div>
              <h2 className="text-3xl font-black text-cyan-400 text-center lg:text-left">Web Development</h2>
              <p className="mt-4 text-cyan-300/70">
                Our web development services deliver high-performance, responsive, and visually stunning websites. We specialize in modern frameworks like React, Next.js, and Angular, ensuring your site is fast, secure, and scalable.
              </p>
              <ul className="mt-4 space-y-2 text-cyan-300/70">
                <li className="flex items-center space-x-2">
                  <ArrowRight size={16} className="text-cyan-300" />
                  <span>Custom website design and development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ArrowRight size={16} className="text-cyan-300" />
                  <span>E-commerce solutions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ArrowRight size={16} className="text-cyan-300" />
                  <span>SEO optimization</span>
                </li>
              </ul>
              <Link href="/contact" className="group inline-block mt-6">
                <span className="text-cyan-300 font-bold uppercase tracking-widest relative">
                  Learn More
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-500 group-hover:w-full"></div>
                </span>
              </Link>
            </div>
            <div className="flex-1 hidden lg:block">
              <div className="bg-black/80 border border-cyan-500/20 p-6 rounded-lg shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                <img src="/placeholder-webdev.jpg" alt="Web Development" className="w-full h-64 object-cover rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Solutions Section */}
      <section className="py-16 bg-black/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
            <div className="flex-1">
              <div className="flex justify-center lg:justify-start mb-4">{services[1].icon}</div>
              <h2 className="text-3xl font-black text-cyan-400 text-center lg:text-left">Cloud Solutions</h2>
              <p className="mt-4 text-cyan-300/70">
                Our cloud solutions provide scalable, secure, and cost-effective infrastructure. We work with leading platforms like AWS, Azure, and Google Cloud to optimize your operations.
              </p>
              <ul className="mt-4 space-y-2 text-cyan-300/70">
                <li className="flex items-center space-x-2">
                  <ArrowRight size={16} className="text-cyan-300" />
                  <span>Cloud migration and management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ArrowRight size={16} className="text-cyan-300" />
                  <span>Serverless architecture</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ArrowRight size={16} className="text-cyan-300" />
                  <span>Cost optimization strategies</span>
                </li>
              </ul>
              <Link href="/contact" className="group inline-block mt-6">
                <span className="text-cyan-300 font-bold uppercase tracking-widest relative">
                  Learn More
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-500 group-hover:w-full"></div>
                </span>
              </Link>
            </div>
            <div className="flex-1 hidden lg:block">
              <div className="bg-black/80 border border-cyan-500/20 p-6 rounded-lg shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                <img src="/placeholder-cloud.jpg" alt="Cloud Solutions" className="w-full h-64 object-cover rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cybersecurity Section */}
      <section className="py-16 bg-black/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex justify-center lg:justify-start mb-4">{services[2].icon}</div>
              <h2 className="text-3xl font-black text-cyan-400 text-center lg:text-left">Cybersecurity</h2>
              <p className="mt-4 text-cyan-300/70">
                Our cybersecurity services safeguard your business with advanced protection, including penetration testing, threat monitoring, and compliance solutions.
              </p>
              <ul className="mt-4 space-y-2 text-cyan-300/70">
                <li className="flex items-center space-x-2">
                  <ArrowRight size={16} className="text-cyan-300" />
                  <span>Penetration testing and audits</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ArrowRight size={16} className="text-cyan-300" />
                  <span>Real-time threat monitoring</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ArrowRight size={16} className="text-cyan-300" />
                  <span>Compliance with GDPR, HIPAA, etc.</span>
                </li>
              </ul>
              <Link href="/contact" className="group inline-block mt-6">
                <span className="text-cyan-300 font-bold uppercase tracking-widest relative">
                  Learn More
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-500 group-hover:w-full"></div>
                </span>
              </Link>
            </div>
            <div className="flex-1 hidden lg:block">
              <div className="bg-black/80 border border-cyan-500/20 p-6 rounded-lg shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                <img src="/placeholder-cybersecurity.jpg" alt="Cybersecurity" className="w-full h-64 object-cover rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Integration Section */}
      <section className="py-16 bg-black/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
            <div className="flex-1">
              <div className="flex justify-center lg:justify-start mb-4">{services[3].icon}</div>
              <h2 className="text-3xl font-black text-cyan-400 text-center lg:text-left">AI Integration</h2>
              <p className="mt-4 text-cyan-300/70">
                Transform your business with AI-driven solutions, from predictive analytics to intelligent automation and custom machine learning models.
              </p>
              <ul className="mt-4 space-y-2 text-cyan-300/70">
                <li className="flex items-center space-x-2">
                  <ArrowRight size={16} className="text-cyan-300" />
                  <span>Custom AI model development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ArrowRight size={16} className="text-cyan-300" />
                  <span>Predictive analytics and insights</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ArrowRight size={16} className="text-cyan-300" />
                  <span>Automation workflows</span>
                </li>
              </ul>
              <Link href="/contact" className="group inline-block mt-6">
                <span className="text-cyan-300 font-bold uppercase tracking-widest relative">
                  Learn More
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-500 group-hover:w-full"></div>
                </span>
              </Link>
            </div>
            <div className="flex-1 hidden lg:block">
              <div className="bg-black/80 border border-cyan-500/20 p-6 rounded-lg shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                <img src="/placeholder-ai.jpg" alt="AI Integration" className="w-full h-64 object-cover rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Development Section */}
      <section className="py-16 bg-black/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex justify-center lg:justify-start mb-4">{services[4].icon}</div>
              <h2 className="text-3xl font-black text-cyan-400 text-center lg:text-left">Mobile App Development</h2>
              <p className="mt-4 text-cyan-300/70">
                We design and develop high-quality mobile applications for iOS and Android, ensuring seamless user experiences and robust performance.
              </p>
              <ul className="mt-4 space-y-2 text-cyan-300/70">
                <li className="flex items-center space-x-2">
                  <ArrowRight size={16} className="text-cyan-300" />
                  <span>Native and cross-platform apps</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ArrowRight size={16} className="text-cyan-300" />
                  <span>UI/UX design for mobile</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ArrowRight size={16} className="text-cyan-300" />
                  <span>App store optimization</span>
                </li>
              </ul>
              <Link href="/contact" className="group inline-block mt-6">
                <span className="text-cyan-300 font-bold uppercase tracking-widest relative">
                  Learn More
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-500 group-hover:w-full"></div>
                </span>
              </Link>
            </div>
            <div className="flex-1 hidden lg:block">
              <div className="bg-black/80 border border-cyan-500/20 p-6 rounded-lg shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                <img src="/placeholder-mobile.jpg" alt="Mobile App Development" className="w-full h-64 object-cover rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DevOps Services Section */}
      <section className="py-16 bg-black/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
            <div className="flex-1">
              <div className="flex justify-center lg:justify-start mb-4">{services[5].icon}</div>
              <h2 className="text-3xl font-black text-cyan-400 text-center lg:text-left">DevOps Services</h2>
              <p className="mt-4 text-cyan-300/70">
                Our DevOps services enhance your development pipeline with automation, continuous integration, and infrastructure as code for faster, reliable deployments.
              </p>
              <ul className="mt-4 space-y-2 text-cyan-300/70">
                <li className="flex items-center space-x-2">
                  <ArrowRight size={16} className="text-cyan-300" />
                  <span>CI/CD pipeline setup</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ArrowRight size={16} className="text-cyan-300" />
                  <span>Infrastructure automation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ArrowRight size={16} className="text-cyan-300" />
                  <span>Monitoring and logging</span>
                </li>
              </ul>
              <Link href="/contact" className="group inline-block mt-6">
                <span className="text-cyan-300 font-bold uppercase tracking-widest relative">
                  Learn More
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-500 group-hover:w-full"></div>
                </span>
              </Link>
            </div>
            <div className="flex-1 hidden lg:block">
              <div className="bg-black/80 border border-cyan-500/20 p-6 rounded-lg shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                <img src="/placeholder-devops.jpg" alt="DevOps Services" className="w-full h-64 object-cover rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Highlights Section */}
      <section className="py-16 bg-black/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-cyan-400 text-center mb-8">Portfolio Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={item.title}
                className="group relative bg-black/80 border border-cyan-500/20 p-6 rounded-lg hover:border-cyan-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <Briefcase size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-cyan-300 group-hover:text-cyan-100 text-center transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="mt-2 text-cyan-300/70 text-center">{item.description}</p>
                <Link href="/portfolio" className="group inline-block mt-6">
                  <span className="text-cyan-300 font-bold uppercase tracking-widest relative">
                    View Project
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-500 group-hover:w-full"></div>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 bg-black/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-cyan-400 text-center mb-8">Our Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="group relative bg-black/80 border border-cyan-500/20 p-6 rounded-lg hover:border-cyan-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold text-cyan-300 group-hover:text-cyan-100 text-center transition-colors duration-300">
                  {tech.name}
                </h3>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-500 group-hover:w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-cyan-400 tracking-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 text-lg text-cyan-300/70 max-w-2xl mx-auto">
            Contact us today to discuss how our services can help you achieve your goals.
          </p>
         
        </div>
      </section>
    </div>
  );
};

export default Services;