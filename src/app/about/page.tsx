"use client";
import React from 'react';
import { Users, ArrowRight, Star, Github, Link } from 'lucide-react';
import NextLink from 'next/link';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  github?: string;
  linkedin?: string;
}

interface Value {
  title: string;
  description: string;
}

const About: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Alice Johnson',
      role: 'CEO & Founder',
      image: '/team-alice.jpg',
      github: 'https://github.com/alicejohnson',
      linkedin: 'https://linkedin.com/in/alicejohnson',
    },
    {
      name: 'Bob Smith',
      role: 'Lead Developer',
      image: '/team-bob.jpg',
      github: 'https://github.com/bobsmith',
      linkedin: 'https://linkedin.com/in/bobsmith',
    },
    {
      name: 'Clara Williams',
      role: 'UI/UX Designer',
      image: '/team-clara.jpg',
      github: 'https://github.com/clarawilliams',
      linkedin: 'https://linkedin.com/in/clarawilliams',
    },
    {
      name: 'David Lee',
      role: 'AI Specialist',
      image: '/team-david.jpg',
      github: 'https://github.com/davidlee',
      linkedin: 'https://linkedin.com/in/davidlee',
    },
  ];

  const values: Value[] = [
    {
      title: 'Innovation',
      description: 'We push boundaries with cutting-edge technology to deliver transformative solutions.',
    },
    {
      title: 'Integrity',
      description: 'We uphold the highest standards of honesty and transparency in all our work.',
    },
    {
      title: 'Impact',
      description: 'We create solutions that drive meaningful change for our clients and their users.',
    },
  ];

  // Split "About Us" into letters for cyber-shift animation
  const titleLetters = "About Us".split('');
  // Split "Innovate. Inspire. Impact." into words for neon-reveal animation
  const sloganWords = ["Innovate.", "Inspire.", "Impact."];

  return (
    <div className="min-h-screen bg-black/95 text-white">
      {/* Hero Section */}
      <section className="relative bg-black/90 backdrop-blur-xl pt-48 pb-20 overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 absolute top-0 left-0 right-0"></div>
        {/* Starfield Background */}
        <div className="absolute inset-0 starfield-pulse">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-cyan-300/50 rounded-full"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `starfield-pulse ${Math.random() * 3 + 2}s linear 1`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
        {/* Interactive Particle Trails */}
        <div className="absolute inset-0 pointer-events-auto">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-cyan-300/30 rounded-full trail-orbit hover:shadow-[0_0_10px_rgba(0,255,255,0.8)] transition-all duration-300"
              style={{
                width: `${Math.random() * 5 + 3}px`,
                height: `${Math.random() * 5 + 3}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `trail-orbit ${Math.random() * 8 + 5}s linear 1`,
                animationDelay: `${Math.random() * 5}s`,
                willChange: 'transform',
              }}
            />
          ))}
        </div>
        {/* Central Glowing Orb */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500/20 rounded-full shadow-[0_0_50px_rgba(0,255,255,0.5)] neon-pulse"></div>
        {/* 3D Sphere Cluster */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <div className="sphere-cluster sphere-orbit">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="sphere"
                style={{
                  position: 'absolute',
                  width: '40px',
                  height: '40px',
                  background: 'radial-gradient(circle, rgba(6, 182, 212, 0.5) 0%, transparent 70%)',
                  borderRadius: '50%',
                  transform: `translate(${Math.random() * 80 - 40}px, ${Math.random() * 80 - 40}px) scale(1)`,
                  animationDelay: `${i * 0.2}s`,
                }}
              >
                <div className="sphere-inner neon-pulse" style={{ animationDelay: `${i * 0.2 + 0.5}s` }}></div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent cyber-shift">
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
          <p className="mt-6 text-xl md:text-2xl text-cyan-300/70 max-w-lg mx-auto">
            <span className="inline-block">
              {sloganWords.map((word, index) => (
                <span
                  key={index}
                  className="neon-reveal"
                  style={{ animationDelay: `${index * 0.5 + 1.5}s`, display: 'inline-block', marginRight: '0.2em' }}
                >
                  {word}
                </span>
              ))}
            </span>
          </p>
          <p className="mt-4 text-lg text-cyan-300/70 max-w-lg mx-auto">
            Explore NEXUS LABS, where visionary minds craft the future with bold technology and relentless passion.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-black/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-cyan-400 text-center mb-8 reveal">Our Story</h2>
          <div className="max-w-3xl mx-auto text-cyan-300/70 reveal" style={{ animationDelay: '0.2s' }}>
            <p>
              Founded in 2015, NEXUS LABS is a trailblazing software house dedicated to transforming ideas into reality. With a passion for innovation, we deliver cutting-edge solutions that empower businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-black/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-cyan-400 text-center mb-8 reveal">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="group relative bg-black/80 border border-cyan-500/20 p-6 rounded-lg hex-pulse hover:border-cyan-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] reveal"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div
                  className="overflow-hidden mb-4 mx-auto w-32 h-32"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex justify-center mb-4">
                  <Users size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-cyan-300 group-hover:text-cyan-100 text-center transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-cyan-300/70 text-center">{member.role}</p>
                <div className="mt-4 flex justify-center gap-4">
                  {member.github && (
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="group/icon flex items-center text-cyan-300 hover:text-cyan-100 transition-colors duration-300">
                      <Github size={20} className="mr-1" />
                      <span className="text-sm relative">
                        GitHub
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-500 group-hover/icon:w-full"></div>
                      </span>
                    </a>
                  )}
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="group/icon flex items-center text-cyan-300 hover:text-cyan-100 transition-colors duration-300">
                      <Link size={20} className="mr-1" />
                      <span className="text-sm relative">
                        LinkedIn
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-500 group-hover/icon:w-full"></div>
                      </span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-black/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-cyan-400 text-center mb-8 reveal">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group relative bg-black/80 p-6 rounded-lg gradient-border hover:border-cyan-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] reveal"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex justify-center mb-4">
                  <Star size={40} className="text-cyan-300 group-hover:text-cyan-100 icon-pulse transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-cyan-300 group-hover:text-cyan-100 text-center transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="mt-2 text-cyan-300/70 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-black/90 backdrop-blur-xl relative">
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-cyan-300/20 rounded-full particle-orbit"
              style={{
                width: `${Math.random() * 3 + 2}px`,
                height: `${Math.random() * 3 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `particle-orbit ${Math.random() * 6 + 4}s linear 1`,
                animationDelay: `${Math.random() * 4}s`,
                willChange: 'transform',
              }}
            />
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-cyan-400 text-center mb-8 reveal">Our Vision</h2>
          <div className="max-w-3xl mx-auto text-cyan-300/70 reveal" style={{ animationDelay: '0.2s' }}>
            <p>
              At NEXUS LABS, we envision a future where technology seamlessly empowers humanity, driving innovation and connectivity across the globe. Our goal is to lead the way in creating intelligent, sustainable solutions that shape a better tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black/90 backdrop-blur-xl relative">
        <div
          className="absolute inset-0 opacity-10 grid-pulse pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 20h40M20 0v40' stroke='%2306b6d4' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-cyan-400 tracking-tight">
            Shape the Future
          </h2>
          <p className="mt-4 text-lg text-cyan-300/70 max-w-2xl mx-auto">
            Join NEXUS LABS to build groundbreaking solutions that redefine industries.
          </p>
          <NextLink href="/contact">
            <button className="mt-8 relative group bg-transparent border-2 border-cyan-400 px-8 py-3 text-cyan-300 font-black text-sm uppercase tracking-widest overflow-hidden transition-all duration-500 hover:text-black shadow-[0_0_25px_rgba(0,255,255,0.8),0_0_50px_rgba(0,255,255,0.4)] hover:shadow-[0_0_40px_rgba(0,255,255,1),0_0_80px_rgba(0,255,255,0.7)] halo-glow hover:scale-120 hover:rotate-5">
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>Get Started</span>
                <ArrowRight size={16} />
              </span>
              <div className="absolute inset-0 bg-cyan-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <div className="absolute inset-0 border-2 border-cyan-400 transform scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></div>
            </button>
          </NextLink>
        </div>
      </section>
    </div>
  );
};

export default About;