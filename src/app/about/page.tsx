"use client"
import React, { useState } from 'react';
import { Users, Target, Eye, Lightbulb, Code, Database, Cloud, Shield, Brain, Rocket, Star, Calendar, MapPin, Mail, Phone, ChevronDown, ChevronUp, Zap, Layers, Award } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  expertise: string;
  bio: string;
  years: string;
}

interface Milestone {
  year: string;
  title: string;
  description: string;
  metric: string;
}

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const About: React.FC = () => {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: 'Alex Chen',
      role: 'CEO & Founder',
      expertise: 'AI Strategy & Innovation',
      bio: 'Visionary leader with 15+ years driving technological transformation across Fortune 500 companies. Specializes in AI implementation and digital strategy.',
      years: '15+'
    },
    {
      name: 'Sarah Rodriguez',
      role: 'Chief Technology Officer',
      expertise: 'Full-Stack Architecture & Cloud',
      bio: 'Expert in scalable system design and cloud infrastructure. Led engineering teams at major tech companies before joining NEXUS LABS.',
      years: '12+'
    },
    {
      name: 'Marcus Johnson',
      role: 'Lead AI Engineer',
      expertise: 'Machine Learning & Data Science',
      bio: 'PhD in Computer Science with deep expertise in neural networks, natural language processing, and predictive analytics.',
      years: '10+'
    },
    {
      name: 'Elena Volkov',
      role: 'Head of Innovation',
      expertise: 'Emerging Technologies & R&D',
      bio: 'Research specialist in blockchain, quantum computing, and IoT. Holds multiple patents in distributed systems.',
      years: '8+'
    }
  ];

  const milestones: Milestone[] = [
    {
      year: '2019',
      title: 'Foundation',
      description: 'NEXUS LABS established with a mission to democratize advanced technology for enterprises worldwide.',
      metric: 'Founded with $2M seed funding'
    },
    {
      year: '2020',
      title: 'Market Entry',
      description: 'Launched our first AI-powered analytics platform, immediately capturing market attention.',
      metric: '100+ enterprise clients'
    },
    {
      year: '2021',
      title: 'Global Expansion',
      description: 'Opened international offices and established partnerships across three continents.',
      metric: '25 countries served'
    },
    {
      year: '2022',
      title: 'Industry Recognition',
      description: 'Won multiple innovation awards and secured major enterprise partnerships.',
      metric: '$50M in contracts secured'
    },
    {
      year: '2023',
      title: 'Technology Breakthrough',
      description: 'Pioneered next-generation AI solutions with 40% better performance metrics.',
      metric: '99.9% uptime achieved'
    },
    {
      year: '2024',
      title: 'Market Leadership',
      description: 'Established as industry leader with Fortune 500 clients and cutting-edge innovations.',
      metric: '500+ projects delivered'
    }
  ];

  const coreValues: Value[] = [
    {
      icon: <Zap size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />,
      title: 'Innovation Excellence',
      description: 'Pushing technological boundaries to deliver breakthrough solutions that redefine industry standards.'
    },
    {
      icon: <Shield size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />,
      title: 'Security First',
      description: 'Enterprise-grade security and compliance built into every solution from the ground up.'
    },
    {
      icon: <Users size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />,
      title: 'Client Success',
      description: 'Your success is our mission. We partner with you to achieve measurable business outcomes.'
    },
    {
      icon: <Layers size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />,
      title: 'Technical Mastery',
      description: 'Deep expertise across cutting-edge technologies, from AI to quantum computing.'
    }
  ];

  const toggleMemberDetails = (memberName: string) => {
    setExpandedMember(expandedMember === memberName ? null : memberName);
  };

  return (
    <div className="min-h-screen bg-black/95 text-white">
      {/* Hero Section */}
      <section className="relative bg-black/90 backdrop-blur-xl pt-40 pb-20 overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 absolute top-0 left-0 right-0"></div>
        
        {/* Particle Background */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
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
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent">
                ABOUT
              </span>{' '}
              <span className="text-cyan-400">
                NEXUS LABS
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-cyan-300/70 max-w-4xl mx-auto leading-relaxed">
              Pioneering the future of enterprise technology through innovation, expertise, and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-black/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-cyan-400 mb-8">Our Mission</h2>
              <div className="space-y-6">
                <p className="text-cyan-300/70 text-lg leading-relaxed">
                  Founded in 2019, NEXUS LABS emerged from a vision to bridge the gap between cutting-edge technology and practical business solutions. We specialize in transforming complex technological challenges into streamlined, scalable solutions.
                </p>
                <p className="text-cyan-300/70 text-lg leading-relaxed">
                  Our team of world-class engineers, data scientists, and technology strategists work collaboratively to deliver solutions that don't just meet today's needs, but anticipate tomorrow's opportunities.
                </p>
                <div className="bg-black/80 border border-cyan-500/20 p-6 rounded-lg shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                  <p className="text-cyan-300 font-bold text-lg italic">
                    "Innovation is not just what we do—it's who we are. Every solution we create pushes the boundaries of what's possible."
                  </p>
                  <p className="text-cyan-300/70 mt-2">— Alex Chen, CEO & Founder</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-black/80 border border-cyan-500/20 p-6 rounded-lg shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl font-black text-cyan-400 mb-2">500+</div>
                  <div className="text-cyan-300/70 text-sm uppercase tracking-wide">Projects Delivered</div>
                </div>
              </div>
              <div className="bg-black/80 border border-cyan-500/20 p-6 rounded-lg shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl font-black text-cyan-400 mb-2">50+</div>
                  <div className="text-cyan-300/70 text-sm uppercase tracking-wide">Global Clients</div>
                </div>
              </div>
              <div className="bg-black/80 border border-cyan-500/20 p-6 rounded-lg shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl font-black text-cyan-400 mb-2">99.9%</div>
                  <div className="text-cyan-300/70 text-sm uppercase tracking-wide">Uptime Guarantee</div>
                </div>
              </div>
              <div className="bg-black/80 border border-cyan-500/20 p-6 rounded-lg shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl font-black text-cyan-400 mb-2">24/7</div>
                  <div className="text-cyan-300/70 text-sm uppercase tracking-wide">Enterprise Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-cyan-400 text-center mb-12">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={value.title}
                className="group relative bg-black/80 border border-cyan-500/20 p-8 rounded-lg hover:border-cyan-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-cyan-300 group-hover:text-cyan-100 text-center mb-4 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-cyan-300/70 text-center leading-relaxed">{value.description}</p>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-500 group-hover:w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-black/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-cyan-400 text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-black/80 border border-cyan-500/20 p-6 rounded-lg hover:border-cyan-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-cyan-300/20 rounded-full flex items-center justify-center border-2 border-cyan-500/30 group-hover:border-cyan-500/50 transition-colors duration-300">
                      <Users size={32} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-cyan-300 group-hover:text-cyan-100 mb-2 transition-colors duration-300">{member.name}</h3>
                    <p className="text-cyan-400 font-semibold text-sm mb-2 uppercase tracking-wide">{member.role}</p>
                    <p className="text-cyan-300/70 text-sm mb-3">{member.expertise}</p>
                    <div className="text-cyan-500 font-bold text-lg mb-4">{member.years} Years</div>
                    <button
                      onClick={() => toggleMemberDetails(member.name)}
                      className="text-cyan-300 hover:text-cyan-100 text-sm font-bold uppercase tracking-wider flex items-center mx-auto transition-colors duration-300"
                    >
                      {expandedMember === member.name ? (
                        <>Less <ChevronUp size={16} className="ml-1" /></>
                      ) : (
                        <>Details <ChevronDown size={16} className="ml-1" /></>
                      )}
                    </button>
                    {expandedMember === member.name && (
                      <div className="mt-4 p-4 bg-black/60 border border-cyan-500/30 rounded-lg">
                        <p className="text-cyan-300/70 text-sm leading-relaxed">{member.bio}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-cyan-400 text-center mb-12">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="group relative bg-black/80 border border-cyan-500/20 p-8 rounded-lg hover:border-cyan-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-cyan-500 to-cyan-300 text-black px-4 py-2 rounded-full text-lg font-black mr-4">
                    {milestone.year}
                  </div>
                  <Calendar size={24} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-cyan-300 group-hover:text-cyan-100 mb-4 transition-colors duration-300">
                  {milestone.title}
                </h3>
                <p className="text-cyan-300/70 mb-4 leading-relaxed">{milestone.description}</p>
                <div className="bg-black/60 border border-cyan-500/30 p-3 rounded-lg">
                  <p className="text-cyan-400 font-bold text-sm uppercase tracking-wide">{milestone.metric}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-500 group-hover:w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Expertise */}
      <section className="py-16 bg-black/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-cyan-400 text-center mb-12">Technology Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Artificial Intelligence', icon: <Brain size={32} /> },
              { name: 'Cloud Computing', icon: <Cloud size={32} /> },
              { name: 'Blockchain', icon: <Shield size={32} /> },
              { name: 'Data Analytics', icon: <Database size={32} /> },
              { name: 'Full-Stack Dev', icon: <Code size={32} /> },
              { name: 'Machine Learning', icon: <Zap size={32} /> }
            ].map((tech, index) => (
              <div
                key={tech.name}
                className="group bg-black/80 border border-cyan-500/20 p-6 rounded-lg hover:border-cyan-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300 flex justify-center mb-4">
                  {tech.icon}
                </div>
                <p className="text-cyan-300/70 text-sm font-semibold">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
        <section className="py-20 bg-black/90 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-black/80 border border-cyan-500/20 p-12 rounded-lg shadow-[0_0_25px_rgba(0,255,255,0.3)]">
            <h2 className="text-3xl font-black text-cyan-400 mb-6">Ready to Innovate Together?</h2>
            <p className="text-cyan-300/70 text-lg mb-8 max-w-2xl mx-auto">
                Partner with NEXUS LABS to transform your business through cutting-edge technology solutions. Let's build the future, today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-cyan-400 text-black px-8 py-4 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,255,0.8),0_0_50px_rgba(0,255,255,0.4)]">
                Start Your Project
              </button>
              <button className="bg-gradient-to-r from-cyan-500 to-cyan-400 text-black px-8 py-4 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,255,0.8),0_0_50px_rgba(0,255,255,0.4)]">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.5; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
        
        .animation-delay-2s { animation-delay: 2s; }
        .animation-delay-4s { animation-delay: 4s; }
        
        .particle {
          filter: blur(0.5px);
        }
      `}</style>
    </div>
  );
};

export default About;