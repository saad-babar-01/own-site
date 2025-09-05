"use client"
import React from 'react';
import { ArrowRight, Briefcase, Layers, Shield, Zap, Workflow, Users, Award, Beaker, Globe, Heart } from 'lucide-react';
import Link from 'next/link';

interface PortfolioItem {
  title: string;
  description: string;
}

interface ProcessStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Testimonial {
  quote: string;
  client: string;
  company: string;
}

interface CaseStudy {
  title: string;
  description: string;
  metric: string;
}

const Home: React.FC = () => {
  const portfolioItems: PortfolioItem[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A scalable online store with advanced payment integration.',
    },
    {
      title: 'Healthcare App',
      description: 'A secure mobile app for patient management with AI diagnostics.',
    },
  ];

  const processSteps: ProcessStep[] = [
    {
      title: 'Discovery',
      description: 'We analyze your needs and define project goals.',
      icon: <Users size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />,
    },
    {
      title: 'Design',
      description: 'Crafting intuitive and visually appealing designs.',
      icon: <Layers size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />,
    },
    {
      title: 'Development',
      description: 'Building robust and scalable solutions.',
      icon: <Workflow size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />,
    },
    {
      title: 'Deployment',
      description: 'Seamless launch with ongoing support.',
      icon: <Zap size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />,
    },
  ];

  const testimonials: Testimonial[] = [
    {
      quote: 'NEXUS LABS transformed our business with their innovative solutions.',
      client: 'John Doe',
      company: 'TechCorp',
    },
    {
      quote: 'Their expertise in AI and cloud integration is unmatched.',
      client: 'Jane Smith',
      company: 'HealthSolutions',
    },
  ];

  const caseStudies: CaseStudy[] = [
    {
      title: 'Retail Analytics Platform',
      description: 'Developed a real-time analytics dashboard for a retail chain.',
      metric: 'Increased sales by 25% through data-driven insights.',
    },
    {
      title: 'Secure Banking App',
      description: 'Built a mobile banking app with advanced security features.',
      metric: 'Reduced fraud incidents by 40%.',
    },
  ];

  return (
    <div className="min-h-screen bg-black/95 text-white">
      {/* Hero Section */}
      <section className="relative bg-black/90 backdrop-blur-xl pt-40 pb-20 overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 absolute top-0 left-0 right-0"></div>
        {/* Particle Background */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-cyan-300/30 rounded-full particle"
              style={{
                width: `${Math.random() * 3 + 2}px`,
                height: `${Math.random() * 3 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 8 + 4}s infinite`,
                animationDelay: `${Math.random() * 4}s`,
                willChange: 'transform, opacity',
              }}
            />
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent">
              NEXUS LABS
            </h1>
            <p className="mt-4 text-lg md:text-xl text-cyan-300/70 max-w-lg overflow-hidden inline-block typewriter">
              Innovate. Transform. Succeed.
            </p>
            <p className="mt-2 text-cyan-300/70 max-w-lg">
              Empowering businesses with cutting-edge technology solutions.
            </p>
          </div>
          <div className="flex-1 hidden lg:block">
            <svg
              className="w-full h-64 text-cyan-300/50 circuit"
              viewBox="0 0 200 200"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M50 50 L50 150 L150 150 L150 50 L50 50 M75 75 L75 125 L125 125 L125 75 L75 75"
                strokeDasharray="400"
                strokeDashoffset="400"
                className="circuit-path"
              />
            </svg>
          </div>
        </div>
      </section>

      
      {/* Why Choose Us */}
      <section className="py-16 bg-black/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-cyan-400 text-center mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative bg-black/80 border border-cyan-500/20 p-6 rounded-lg hover:border-cyan-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]">
              <div className="flex justify-center mb-4">
                <Layers size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-cyan-300 group-hover:text-cyan-100 text-center">Innovation</h3>
              <p className="mt-2 text-cyan-300/70 text-center">We leverage the latest technologies to deliver cutting-edge solutions.</p>
            </div>
            <div className="group relative bg-black/80 border border-cyan-500/20 p-6 rounded-lg hover:border-cyan-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]">
              <div className="flex justify-center mb-4">
                <Shield size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-cyan-300 group-hover:text-cyan-100 text-center">Reliability</h3>
              <p className="mt-2 text-cyan-300/70 text-center">Our solutions are built to be secure, scalable, and dependable.</p>
            </div>
            <div className="group relative bg-black/80 border border-cyan-500/20 p-6 rounded-lg hover:border-cyan-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]">
              <div className="flex justify-center mb-4">
                <Zap size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-cyan-300 group-hover:text-cyan-100 text-center">Expertise</h3>
              <p className="mt-2 text-cyan-300/70 text-center">Our team brings years of experience to every project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-cyan-400 text-center mb-8">Our Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="group relative bg-black/80 border border-cyan-500/20 p-6 rounded-lg hover:border-cyan-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-cyan-300 group-hover:text-cyan-100 text-center transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="mt-2 text-cyan-300/70 text-center">{step.description}</p>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-500 group-hover:w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-black/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-cyan-400 text-center mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.client}
                className="group relative bg-black/80 border border-cyan-500/20 p-6 rounded-lg hover:border-cyan-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <Users size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />
                </div>
                <p className="text-cyan-300/70 text-center italic">"{testimonial.quote}"</p>
                <p className="mt-4 text-cyan-300 font-bold text-center">{testimonial.client}</p>
                <p className="text-cyan-300/50 text-center">{testimonial.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-cyan-400 text-center mb-8">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={study.title}
                className="group relative bg-black/80 border border-cyan-500/20 p-6 rounded-lg hover:border-cyan-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <Award size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-cyan-300 group-hover:text-cyan-100 text-center transition-colors duration-300">
                  {study.title}
                </h3>
                <p className="mt-2 text-cyan-300/70 text-center">{study.description}</p>
                <p className="mt-2 text-cyan-300 font-bold text-center">{study.metric}</p>
                <Link href="/portfolio" className="group inline-block mt-6">
                  <span className="text-cyan-300 font-bold uppercase tracking-widest relative">
                    Read More
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-500 group-hover:w-full"></div>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Lab */}
      <section className="py-16 bg-black/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-black text-cyan-400 text-center lg:text-left">Innovation Lab</h2>
              <p className="mt-4 text-cyan-300/70">
                Our Innovation Lab explores emerging technologies like blockchain, AR/VR, and IoT to create next-generation solutions for our clients.
              </p>
              <Link href="/tech" className="group inline-block mt-6">
                <span className="text-cyan-300 font-bold uppercase tracking-widest relative">
                  Explore Technologies
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-500 group-hover:w-full"></div>
                </span>
              </Link>
            </div>
            <div className="flex-1 hidden lg:block">
              <div className="bg-black/80 border border-cyan-500/20 p-6 rounded-lg shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                <img src="/placeholder-innovation.jpg" alt="Innovation Lab" className="w-full h-64 object-cover rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-black text-cyan-400 text-center lg:text-left">Our Vision</h2>
              <p className="mt-4 text-cyan-300/70">
                At NEXUS LABS, we envision a future where technology seamlessly empowers businesses to achieve their highest potential, driving global innovation and progress.
              </p>
              <Link href="/about" className="group inline-block mt-6">
                <span className="text-cyan-300 font-bold uppercase tracking-widest relative">
                  Discover Our Mission
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-500 group-hover:w-full"></div>
                </span>
              </Link>
            </div>
            <div className="flex-1 hidden lg:block">
              <div className="bg-black/80 border border-cyan-500/20 p-6 rounded-lg shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                <img src="/placeholder-vision.jpg" alt="Our Vision" className="w-full h-64 object-cover rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact */}
      <section className="py-16 bg-black/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-cyan-400 text-center mb-8">Global Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative bg-black/80 border border-cyan-500/20 p-6 rounded-lg hover:border-cyan-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]">
              <div className="flex justify-center mb-4">
                <Globe size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-cyan-300 group-hover:text-cyan-100 text-center">Diverse Industries</h3>
              <p className="mt-2 text-cyan-300/70 text-center">Serving sectors like retail, healthcare, finance, and education worldwide.</p>
            </div>
            <div className="group relative bg-black/80 border border-cyan-500/20 p-6 rounded-lg hover:border-cyan-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]">
              <div className="flex justify-center mb-4">
                <Users size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-cyan-300 group-hover:text-cyan-100 text-center">Global Clients</h3>
              <p className="mt-2 text-cyan-300/70 text-center">Partnering with businesses across North America, Europe, and Asia.</p>
            </div>
            <div className="group relative bg-black/80 border border-cyan-500/20 p-6 rounded-lg hover:border-cyan-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]">
              <div className="flex justify-center mb-4">
                <Award size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-cyan-300 group-hover:text-cyan-100 text-center">Proven Results</h3>
              <p className="mt-2 text-cyan-300/70 text-center">Delivering measurable outcomes for startups and enterprises alike.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Engagement */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-cyan-400 text-center mb-8">Community Engagement</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative bg-black/80 border border-cyan-500/20 p-6 rounded-lg hover:border-cyan-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]">
              <div className="flex justify-center mb-4">
                <Heart size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-cyan-300 group-hover:text-cyan-100 text-center">Open Source Contributions</h3>
              <p className="mt-2 text-cyan-300/70 text-center">Actively contributing to open-source projects to advance the tech community.</p>
            </div>
            <div className="group relative bg-black/80 border border-cyan-500/20 p-6 rounded-lg hover:border-cyan-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]">
              <div className="flex justify-center mb-4">
                <Users size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-cyan-300 group-hover:text-cyan-100 text-center">Tech Workshops</h3>
              <p className="mt-2 text-cyan-300/70 text-center">Hosting workshops to empower developers with the latest skills.</p>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Home;