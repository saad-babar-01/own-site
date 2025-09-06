"use client"
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare, Briefcase, Globe, Calendar, CheckCircle, Star, Zap, Shield, Users, Award, ExternalLink, Linkedin, Twitter, Github } from 'lucide-react';

interface ContactMethod {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  action?: string;
}

interface OfficeLocation {
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  timezone: string;
  isHeadquarters?: boolean;
}

interface Service {
  name: string;
  description: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
    newsletter: false
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const contactMethods: ContactMethod[] = [
    {
      icon: <Mail size={32} className="text-cyan-300" />,
      title: 'Email Us',
      value: 'contact@nexuslabs.com',
      description: 'Send us your project details',
      action: 'mailto:contact@nexuslabs.com'
    },
    {
      icon: <Phone size={32} className="text-cyan-300" />,
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      description: 'Speak with our experts',
      action: 'tel:+15551234567'
    },
    {
      icon: <MessageSquare size={32} className="text-cyan-300" />,
      title: 'Live Chat',
      value: 'Available 24/7',
      description: 'Instant support and consultation'
    },
    {
      icon: <Calendar size={32} className="text-cyan-300" />,
      title: 'Schedule Meeting',
      value: 'Book a Call',
      description: '30-minute strategy session'
    }
  ];

  const offices: OfficeLocation[] = [
    {
      city: 'San Francisco',
      country: 'USA',
      address: '123 Innovation Drive, Suite 500, San Francisco, CA 94105',
      phone: '+1 (555) 123-4567',
      email: 'sf@nexuslabs.com',
      timezone: 'PST (UTC-8)',
      isHeadquarters: true
    },
    {
      city: 'London',
      country: 'UK',
      address: '45 Tech Square, London EC2A 4DP',
      phone: '+44 20 7946 0958',
      email: 'london@nexuslabs.com',
      timezone: 'GMT (UTC+0)'
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      address: '1 Marina Bay, Singapore 018989',
      phone: '+65 6123 4567',
      email: 'singapore@nexuslabs.com',
      timezone: 'SGT (UTC+8)'
    }
  ];

  const services: Service[] = [
    { name: 'AI & Machine Learning', description: 'Intelligent automation and analytics' },
    { name: 'Web Development', description: 'Modern web applications and platforms' },
    { name: 'Cloud Infrastructure', description: 'Scalable cloud solutions and migration' },
    { name: 'Cybersecurity', description: 'Enterprise security and compliance' },
    { name: 'Mobile Development', description: 'iOS and Android applications' },
    { name: 'Data Analytics', description: 'Business intelligence and insights' },
    { name: 'DevOps & Automation', description: 'CI/CD and infrastructure automation' },
    { name: 'Consulting', description: 'Strategic technology advisory' }
  ];

  const budgetRanges = [
    '$10K - $25K',
    '$25K - $50K',
    '$50K - $100K',
    '$100K - $250K',
    '$250K+'
  ];

  const timelines = [
    '1-2 months',
    '3-4 months',
    '5-6 months',
    '6+ months',
    'Ongoing project'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 2000);
  };

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity, but most projects range from 8-24 weeks. We provide detailed timelines during our initial consultation.'
    },
    {
      question: 'Do you work with startups and small businesses?',
      answer: 'Yes! We work with organizations of all sizes, from startups to Fortune 500 companies. We tailor our solutions to fit your budget and requirements.'
    },
    {
      question: 'What is your development process?',
      answer: 'We follow an agile methodology with 5 key phases: Discovery, Design, Development, Testing, and Deployment. You\'ll have regular updates and input throughout the process.'
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Absolutely! We offer comprehensive support packages including 24/7 monitoring, regular updates, security patches, and technical support.'
    }
  ];

  return (
    <div className="min-h-screen bg-black/95 text-white">
      {/* Hero Section */}
      <section className="relative bg-black/90 backdrop-blur-xl pt-40 pb-20 overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 absolute top-0 left-0 right-0"></div>
        
        {/* Particle Background */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
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

        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent">
              CONTACT
            </span>{' '}
            <span className="text-cyan-400">
              US
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-cyan-300/70 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your business? Let's discuss your project and create something extraordinary together.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-black/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div
                key={method.title}
                className="group relative bg-black/80 border border-cyan-500/20 p-6 rounded-lg hover:border-cyan-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] text-center cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => method.action && window.open(method.action, '_self')}
              >
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold text-cyan-300 group-hover:text-cyan-100 mb-2 transition-colors duration-300">
                  {method.title}
                </h3>
                <p className="text-cyan-400 font-semibold mb-2">{method.value}</p>
                <p className="text-cyan-300/70 text-sm">{method.description}</p>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-500 group-hover:w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-black/80 border border-cyan-500/20 p-8 rounded-lg shadow-[0_0_25px_rgba(0,255,255,0.3)]">
              <h2 className="text-3xl font-black text-cyan-400 mb-6">Start Your Project</h2>
              <p className="text-cyan-300/70 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-cyan-300 font-semibold mb-2 text-sm uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-black/60 border border-cyan-500/30 rounded-lg px-4 py-3 text-cyan-100 placeholder-cyan-300/50 focus:border-cyan-500 focus:outline-none focus:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-cyan-300 font-semibold mb-2 text-sm uppercase tracking-wide">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-black/60 border border-cyan-500/30 rounded-lg px-4 py-3 text-cyan-100 placeholder-cyan-300/50 focus:border-cyan-500 focus:outline-none focus:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-cyan-300 font-semibold mb-2 text-sm uppercase tracking-wide">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-black/60 border border-cyan-500/30 rounded-lg px-4 py-3 text-cyan-100 placeholder-cyan-300/50 focus:border-cyan-500 focus:outline-none focus:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-cyan-300 font-semibold mb-2 text-sm uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-black/60 border border-cyan-500/30 rounded-lg px-4 py-3 text-cyan-100 placeholder-cyan-300/50 focus:border-cyan-500 focus:outline-none focus:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-cyan-300 font-semibold mb-2 text-sm uppercase tracking-wide">
                    Service Interested In *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full bg-black/60 border border-cyan-500/30 rounded-lg px-4 py-3 text-cyan-100 focus:border-cyan-500 focus:outline-none focus:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.name} value={service.name} className="bg-black text-cyan-100">
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-cyan-300 font-semibold mb-2 text-sm uppercase tracking-wide">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full bg-black/60 border border-cyan-500/30 rounded-lg px-4 py-3 text-cyan-100 focus:border-cyan-500 focus:outline-none focus:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((budget) => (
                        <option key={budget} value={budget} className="bg-black text-cyan-100">
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-cyan-300 font-semibold mb-2 text-sm uppercase tracking-wide">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full bg-black/60 border border-cyan-500/30 rounded-lg px-4 py-3 text-cyan-100 focus:border-cyan-500 focus:outline-none focus:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline} className="bg-black text-cyan-100">
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-cyan-300 font-semibold mb-2 text-sm uppercase tracking-wide">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-black/60 border border-cyan-500/30 rounded-lg px-4 py-3 text-cyan-100 placeholder-cyan-300/50 focus:border-cyan-500 focus:outline-none focus:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300 resize-none"
                    placeholder="Tell us about your project, goals, and requirements..."
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="newsletter"
                    id="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="mr-3 w-4 h-4 text-cyan-500 bg-black/60 border border-cyan-500/30 rounded focus:ring-cyan-500"
                  />
                  <label htmlFor="newsletter" className="text-cyan-300/70 text-sm">
                    Subscribe to our newsletter for tech insights and updates
                  </label>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={formStatus === 'sending'}
                  className="w-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-black px-8 py-4 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 transform hover:scale-105 shadow-[0_0_25px_rgba(0,255,255,0.8),0_0_50px_rgba(0,255,255,0.4)] hover:shadow-[0_0_35px_rgba(0,255,255,1),0_0_70px_rgba(0,255,255,0.6)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {formStatus === 'sending' ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-3"></div>
                      Sending...
                    </>
                  ) : formStatus === 'success' ? (
                    <>
                      <CheckCircle size={20} className="mr-3" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-3" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office Locations */}
              <div className="bg-black/80 border border-cyan-500/20 p-8 rounded-lg shadow-[0_0_25px_rgba(0,255,255,0.3)]">
                <h3 className="text-2xl font-black text-cyan-400 mb-6">Our Offices</h3>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div
                      key={office.city}
                      className="group border border-cyan-500/20 p-6 rounded-lg hover:border-cyan-500/50 transition-all duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="text-lg font-bold text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300">
                              {office.city}, {office.country}
                            </h4>
                            {office.isHeadquarters && (
                              <span className="bg-gradient-to-r from-cyan-500 to-cyan-400 text-black px-2 py-1 rounded text-xs font-bold">
                                HQ
                              </span>
                            )}
                          </div>
                          <p className="text-cyan-300/70 text-sm mb-3">{office.address}</p>
                        </div>
                        <MapPin size={20} className="text-cyan-400 flex-shrink-0 mt-1" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Phone size={14} className="text-cyan-400" />
                          <span className="text-cyan-300/70">{office.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail size={14} className="text-cyan-400" />
                          <span className="text-cyan-300/70">{office.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock size={14} className="text-cyan-400" />
                          <span className="text-cyan-300/70">{office.timezone}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-black/80 border border-cyan-500/20 p-8 rounded-lg shadow-[0_0_25px_rgba(0,255,255,0.3)]">
                <h3 className="text-2xl font-black text-cyan-400 mb-6">Why Partner With Us</h3>
                <div className="space-y-4">
                  {[
                    { icon: <Zap size={20} className="text-cyan-400" />, title: 'Rapid Response', description: '24-hour initial response time' },
                    { icon: <Shield size={20} className="text-cyan-400" />, title: 'Enterprise Security', description: 'Bank-grade security and compliance' },
                    { icon: <Users size={20} className="text-cyan-400" />, title: 'Expert Team', description: '50+ certified professionals' },
                    { icon: <Award size={20} className="text-cyan-400" />, title: 'Proven Results', description: '99% client satisfaction rate' }
                  ].map((benefit, index) => (
                    <div key={benefit.title} className="flex items-start space-x-4">
                      <div className="mt-1">{benefit.icon}</div>
                      <div>
                        <h4 className="text-cyan-300 font-semibold mb-1">{benefit.title}</h4>
                        <p className="text-cyan-300/70 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-black/80 border border-cyan-500/20 p-8 rounded-lg shadow-[0_0_25px_rgba(0,255,255,0.3)]">
                <h3 className="text-2xl font-black text-cyan-400 mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { name: 'LinkedIn', icon: <Linkedin size={24} />, url: '#' },
                    { name: 'Twitter', icon: <Twitter size={24} />, url: '#' },
                    { name: 'GitHub', icon: <Github size={24} />, url: '#' }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="bg-black/60 border border-cyan-500/30 p-4 rounded-lg text-cyan-300 hover:text-cyan-100 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transform hover:scale-105"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-black/90 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-cyan-400 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-black/80 border border-cyan-500/20 p-6 rounded-lg hover:border-cyan-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-bold text-cyan-300 mb-3">{faq.question}</h3>
                <p className="text-cyan-300/70 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.5; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
        
        .particle {
          filter: blur(0.5px);
        }
      `}</style>
    </div>
  );
};

export default Contact;