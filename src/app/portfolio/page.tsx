
"use client";
import React, { useState } from 'react';
import { Briefcase, ArrowRight, Quote, ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

interface PortfolioItem {
  title: string;
  descriptionPoints: string[];
  image: string;
  category: 'Web' | 'Mobile' | 'AI' | 'Cloud' | 'Cybersecurity' | 'DevOps';
  technologies: string[];
  liveUrl: string;
  codeUrl: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Web' | 'Mobile' | 'AI' | 'Cloud' | 'Cybersecurity' | 'DevOps'>('All');

  const portfolioItems: PortfolioItem[] = [
    {
      title: 'E-Commerce Platform',
      descriptionPoints: [
        'Scalable online store with advanced payment integration.',
        'Real-time analytics dashboard for business insights.',
        'Responsive design for seamless shopping experiences.',
      ],
      image: '/portfolio-ecommerce.jpg',
      category: 'Web',
      technologies: ['React', 'Next.js', 'Stripe', 'AWS'],
      liveUrl: 'https://ecommerce-example.com',
      codeUrl: 'https://github.com/nexuslabs/ecommerce-platform',
    },
    {
      title: 'Healthcare App',
      descriptionPoints: [
        'Secure patient management system with AI diagnostics.',
        'Telemedicine features for remote consultations.',
        'HIPAA-compliant data handling and storage.',
      ],
      image: '/portfolio-healthcare.jpg',
      category: 'Mobile',
      technologies: ['React Native', 'TensorFlow', 'AWS', 'Node.js'],
      liveUrl: 'https://healthcare-app.com',
      codeUrl: 'https://github.com/nexuslabs/healthcare-app',
    },
    {
      title: 'FinTech Dashboard',
      descriptionPoints: [
        'Real-time tracking of investments and market trends.',
        'Secure API integrations for financial data.',
        'Customizable widgets for personalized user experience.',
      ],
      image: '/portfolio-fintech.jpg',
      category: 'Web',
      technologies: ['React', 'TypeScript', 'GraphQL', 'AWS Amplify'],
      liveUrl: 'https://fintech-dashboard.com',
      codeUrl: 'https://github.com/nexuslabs/fintech-dashboard',
    },
    {
      title: 'EdTech Platform',
      descriptionPoints: [
        'Interactive learning management system.',
        'Course creation tools for educators.',
        'Gamified learning experiences for students.',
      ],
      image: '/portfolio-edtech.jpg',
      category: 'Web',
      technologies: ['Next.js', 'MongoDB', 'Tailwind CSS', 'Vercel'],
      liveUrl: 'https://edtech-platform.com',
      codeUrl: 'https://github.com/nexuslabs/edtech-platform',
    },
    {
      title: 'AI-Powered Chatbot',
      descriptionPoints: [
        'Intelligent customer support chatbot.',
        'NLP integration for natural language understanding.',
        'CRM system compatibility for seamless operations.',
      ],
      image: '/portfolio-chatbot.jpg',
      category: 'AI',
      technologies: ['Python', 'TensorFlow', 'AWS Lambda', 'Dialogflow'],
      liveUrl: 'https://ai-chatbot.com',
      codeUrl: 'https://github.com/nexuslabs/ai-chatbot',
    },
    {
      title: 'Cloud Migration Solution',
      descriptionPoints: [
        'Seamless migration tool for enterprise applications.',
        'Zero downtime during cloud transition.',
        'Cost-effective infrastructure optimization.',
      ],
      image: '/portfolio-cloud.jpg',
      category: 'Cloud',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      liveUrl: 'https://cloud-migration.com',
      codeUrl: 'https://github.com/nexuslabs/cloud-migration',
    },
    {
      title: 'Cybersecurity Suite',
      descriptionPoints: [
        'Advanced threat detection and prevention system.',
        'Real-time monitoring with automated alerts.',
        'Compliance with GDPR and ISO 27001 standards.',
      ],
      image: '/portfolio-cybersecurity.jpg',
      category: 'Cybersecurity',
      technologies: ['Python', 'Splunk', 'AWS WAF', 'OpenSSL'],
      liveUrl: 'https://cybersecurity-suite.com',
      codeUrl: 'https://github.com/nexuslabs/cybersecurity-suite',
    },
    {
      title: 'DevOps Pipeline',
      descriptionPoints: [
        'Automated CI/CD pipeline for rapid deployments.',
        'Infrastructure as code for scalable systems.',
        'Monitoring and logging for performance insights.',
      ],
      image: '/portfolio-devops.jpg',
      category: 'DevOps',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Ansible'],
      liveUrl: 'https://devops-pipeline.com',
      codeUrl: 'https://github.com/nexuslabs/devops-pipeline',
    },
    {
      title: 'Social Media Analytics',
      descriptionPoints: [
        'Real-time analytics for social media campaigns.',
        'Sentiment analysis using AI models.',
        'Custom reporting dashboards for clients.',
      ],
      image: '/portfolio-socialmedia.jpg',
      category: 'AI',
      technologies: ['Python', 'PyTorch', 'AWS S3', 'React'],
      liveUrl: 'https://socialmedia-analytics.com',
      codeUrl: 'https://github.com/nexuslabs/socialmedia-analytics',
    },
    {
      title: 'IoT Smart Home App',
      descriptionPoints: [
        'Mobile app for controlling smart home devices.',
        'Integration with IoT protocols like MQTT.',
        'Secure user authentication and data encryption.',
      ],
      image: '/portfolio-iot.jpg',
      category: 'Mobile',
      technologies: ['Flutter', 'AWS IoT', 'Node.js', 'MongoDB'],
      liveUrl: 'https://iot-smarthome.com',
      codeUrl: 'https://github.com/nexuslabs/iot-smarthome',
    },
  ];

  const testimonials: Testimonial[] = [
    {
      quote: 'NEXUS LABS delivered an exceptional e-commerce platform that boosted our sales by 40%.',
      author: 'Jane Doe',
      role: 'CEO, ShopTrend',
    },
    {
      quote: 'The healthcare app was a game-changer for our clinic, streamlining patient care.',
      author: 'Dr. John Smith',
      role: 'Chief Medical Officer',
    },
  ];

  const filteredItems = filter === 'All' ? portfolioItems : portfolioItems.filter(item => item.category === filter);

  // Split "Our Portfolio" into letters for glitch animation
  const titleLetters = "Our Portfolio".split('');
  // Split "Showcasing Excellence." into words for typewriter-heavy animation
  const sloganWords = ["Showcasing", "Excellence."];

  return (
    <div className="min-h-screen bg-black/95 text-white">
     {/* Hero Section */}
      <section className="relative bg-black/90 backdrop-blur-xl pt-48 pb-20 overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 absolute top-0 left-0 right-0"></div>
        {/* Radial Gradient Background */}
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent"></div>
        {/* Circuit Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M10 10h40v40H10z' stroke='%2306b6d4' stroke-width='1'/%3E%3Cpath d='M20 20h20v20H20z' stroke='%2306b6d4' stroke-width='1'/%3E%3Ccircle cx='30' cy='30' r='2' fill='%2306b6d4'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        ></div>
        {/* Interactive Particle Background */}
        <div className="absolute inset-0 pointer-events-auto">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-cyan-300/30 rounded-full particle-orbit hover:bg-cyan-300/70 transition-all duration-300"
              style={{
                width: `${Math.random() * 4 + 3}px`,
                height: `${Math.random() * 4 + 3}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float-orbit ${Math.random() * 8 + 5}s linear 1`,
                animationDelay: `${Math.random() * 5}s`,
                willChange: 'transform',
              }}
            />
          ))}
        </div>
        {/* 3D Hexagonal Grid */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <div className="hex-grid hex-rotate">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="hex"
                style={{
                  position: 'absolute',
                  width: '60px',
                  height: '104px',
                  background: 'none',
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  top: `${(i % 2) * 52}px`,
                  left: `${Math.floor(i / 2) * 90}px`,
                  animationDelay: `${i * 0.2}s`,
                }}
              >
                <div className="hex-inner neon-pulse" style={{ animationDelay: `${i * 0.2 + 0.5}s` }}></div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent glitch">
            {titleLetters.map((letter, index) => (
              <span
                key={index}
                data-text={letter}
                style={{ animationDelay: `${index * 0.1}s`, display: letter === ' ' ? 'inline-block' : 'inline' }}
              >
                {letter}
              </span>
            ))}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-cyan-300/70 max-w-lg mx-auto">
            <span className="inline-block typewriter-heavy">
              {sloganWords.map((word, index) => (
                <span
                  key={index}
                  style={{ animationDelay: `${index * 0.5 + 1.5}s`, display: 'inline-block', marginRight: '0.2em' }}
                >
                  {word}
                </span>
              ))}
            </span>
          </p>
          <p className="mt-2 text-cyan-300/70 max-w-lg mx-auto">
            Dive into our portfolio of groundbreaking projects, crafted with cutting-edge technology and visionary design.
          </p>
         
        </div>
      </section>

      {/* Portfolio Items Section */}
      <section className="py-16 bg-black/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-cyan-400 text-center mb-8">Our Projects</h2>
          <div className="flex justify-center mb-8 space-x-4 flex-wrap gap-2">
            {['All', 'Web', 'Mobile', 'AI', 'Cloud', 'Cybersecurity', 'DevOps'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category as any)}
                className={`px-4 py-2 text-sm font-bold uppercase tracking-widest border border-cyan-500/20 rounded-full transition-all duration-300 ${
                  filter === category
                    ? 'bg-cyan-500/20 text-cyan-300 shadow-[0_0_15px_rgba(0,255,255,0.5)]'
                    : 'text-cyan-300/70 hover:text-cyan-300 hover:border-cyan-500/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.title}
                className="group relative bg-black/80 border border-cyan-500/20 p-6 rounded-lg hover:border-cyan-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] reveal"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="overflow-hidden rounded-lg mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex justify-center mb-4">
                  <Briefcase size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-cyan-300 group-hover:text-cyan-100 text-center transition-colors duration-300">
                  {item.title}
                </h3>
                <ul className="mt-2 text-cyan-300/70 text-center list-disc list-inside">
                  {item.descriptionPoints.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {item.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm text-cyan-300/70 bg-black/50 rounded-full border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex justify-center gap-4">
                  <a href={item.liveUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center text-cyan-300 hover:text-cyan-100 transition-colors duration-300">
                    <ExternalLink size={20} className="mr-1" />
                    <span className="font-bold uppercase tracking-widest text-sm relative">
                      Live Demo
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-500 group-hover:w-full"></div>
                    </span>
                  </a>
                  <a href={item.codeUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center text-cyan-300 hover:text-cyan-100 transition-colors duration-300">
                    <Github size={20} className="mr-1" />
                    <span className="font-bold uppercase tracking-widest text-sm relative">
                      Code Repo
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-500 group-hover:w-full"></div>
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-black/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-cyan-400 text-center mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative bg-black/80 border border-cyan-500/20 p-6 rounded-lg shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-all duration-300 reveal"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Quote size={24} className="text-cyan-300 mb-4" />
                <p className="text-cyan-300/70 italic">"{testimonial.quote}"</p>
                <p className="mt-4 text-cyan-300 font-bold">{testimonial.author}</p>
                <p className="text-cyan-300/70 text-sm">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-cyan-400 tracking-tight">
            Ready to Build Your Next Project?
          </h2>
          <p className="mt-4 text-lg text-cyan-300/70 max-w-2xl mx-auto">
            Contact us today to discuss how we can bring your vision to life with our expertise.
          </p>
          <Link href="/contact">
            <button className="mt-8 relative group bg-transparent border-2 border-cyan-400 px-8 py-3 text-cyan-300 font-black text-sm uppercase tracking-widest overflow-hidden transition-all duration-500 hover:text-black shadow-[0_0_25px_rgba(0,255,255,0.8),0_0_50px_rgba(0,255,255,0.4)] hover:shadow-[0_0_35px_rgba(0,255,255,1),0_0_70px_rgba(0,255,255,0.6)] neon-pulse hover:scale-110 hover:rotate-5">
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>Hire me</span>
                <ArrowRight size={16} />
              </span>
              <div className="absolute inset-0 bg-cyan-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <div className="absolute inset-0 border-2 border-cyan-400 transform scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></div>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;