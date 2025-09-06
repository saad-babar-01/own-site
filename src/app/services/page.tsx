
"use client"
import React, { useState } from 'react';
import { Brain, Cloud, Shield, Code, Database, Zap, Users, Target, Eye, Layers, Award, ArrowRight, CheckCircle, Star, Briefcase, Settings, Globe, ChevronDown, ChevronUp } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  technologies: string[];
  deliverables: string[];
  timeline: string;
  price: string;
}

interface ServiceCategory {
  title: string;
  description: string;
  services: Service[];
}

interface ProcessStep {
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
}

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ai-solutions');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const serviceCategories: Record<string, ServiceCategory> = {
    'ai-solutions': {
      title: 'AI & Machine Learning',
      description: 'Transform your business with intelligent automation and predictive analytics',
      services: [
        {
          id: 'ai-analytics',
          title: 'AI-Powered Analytics',
          description: 'Advanced data analytics with machine learning algorithms for predictive insights and automated decision-making.',
          icon: <Brain size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />,
          features: [
            'Real-time data processing',
            'Predictive modeling',
            'Automated reporting',
            'Custom dashboards',
            'AI-driven insights'
          ],
          technologies: ['TensorFlow', 'PyTorch', 'Apache Spark', 'Kubernetes', 'Python'],
          deliverables: [
            'Custom AI models',
            'Analytics dashboard',
            'API documentation',
            'Training materials',
            '6-month support'
          ],
          timeline: '12-16 weeks',
          price: 'Starting from $75,000'
        },
        {
          id: 'nlp-solutions',
          title: 'Natural Language Processing',
          description: 'Intelligent text analysis, chatbots, and language understanding systems for enhanced customer experience.',
          icon: <Database size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />,
          features: [
            'Sentiment analysis',
            'Intelligent chatbots',
            'Document processing',
            'Multi-language support',
            'Voice recognition'
          ],
          technologies: ['OpenAI GPT', 'BERT', 'spaCy', 'Transformers', 'Azure Cognitive'],
          deliverables: [
            'NLP models',
            'Chatbot integration',
            'API endpoints',
            'Admin panel',
            'Performance metrics'
          ],
          timeline: '10-14 weeks',
          price: 'Starting from $60,000'
        }
      ]
    },
    'cloud-services': {
      title: 'Cloud & Infrastructure',
      description: 'Scalable cloud solutions for modern enterprises',
      services: [
        {
          id: 'cloud-migration',
          title: 'Cloud Migration & Optimization',
          description: 'Seamless migration to cloud platforms with performance optimization and cost reduction strategies.',
          icon: <Cloud size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />,
          features: [
            'Multi-cloud strategy',
            'Cost optimization',
            'Security compliance',
            'Performance monitoring',
            'Disaster recovery'
          ],
          technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Terraform'],
          deliverables: [
            'Migration roadmap',
            'Cloud architecture',
            'Monitoring setup',
            'Security configuration',
            'Documentation'
          ],
          timeline: '8-12 weeks',
          price: 'Starting from $45,000'
        },
        {
          id: 'microservices',
          title: 'Microservices Architecture',
          description: 'Design and implement scalable microservices architecture for high-performance applications.',
          icon: <Layers size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />,
          features: [
            'Service decomposition',
            'API gateway setup',
            'Load balancing',
            'Service mesh',
            'Auto-scaling'
          ],
          technologies: ['Kubernetes', 'Istio', 'Docker', 'Node.js', 'GraphQL'],
          deliverables: [
            'Microservices design',
            'Container orchestration',
            'API documentation',
            'Monitoring dashboard',
            'Deployment pipeline'
          ],
          timeline: '14-18 weeks',
          price: 'Starting from $85,000'
        }
      ]
    },
    'web-development': {
      title: 'Web Development',
      description: 'Modern web applications with cutting-edge technologies',
      services: [
        {
          id: 'full-stack-dev',
          title: 'Full-Stack Development',
          description: 'End-to-end web application development with modern frameworks and responsive design.',
          icon: <Code size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />,
          features: [
            'Responsive design',
            'Progressive web apps',
            'Real-time features',
            'SEO optimization',
            'Performance tuning'
          ],
          technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'TypeScript'],
          deliverables: [
            'Web application',
            'Admin dashboard',
            'Mobile responsiveness',
            'SEO setup',
            'Deployment guide'
          ],
          timeline: '10-16 weeks',
          price: 'Starting from $35,000'
        },
        {
          id: 'ecommerce-platform',
          title: 'E-Commerce Platforms',
          description: 'Custom e-commerce solutions with advanced payment processing and inventory management.',
          icon: <Briefcase size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />,
          features: [
            'Payment gateway integration',
            'Inventory management',
            'Order processing',
            'Customer analytics',
            'Multi-vendor support'
          ],
          technologies: ['Shopify Plus', 'WooCommerce', 'Stripe', 'PayPal', 'AWS'],
          deliverables: [
            'E-commerce platform',
            'Payment integration',
            'Inventory system',
            'Analytics dashboard',
            'Mobile app'
          ],
          timeline: '12-20 weeks',
          price: 'Starting from $50,000'
        }
      ]
    },
    'cybersecurity': {
      title: 'Cybersecurity',
      description: 'Enterprise-grade security solutions and compliance',
      services: [
        {
          id: 'security-audit',
          title: 'Security Audit & Penetration Testing',
          description: 'Comprehensive security assessment with vulnerability testing and compliance verification.',
          icon: <Shield size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />,
          features: [
            'Vulnerability assessment',
            'Penetration testing',
            'Compliance audit',
            'Security recommendations',
            'Risk assessment'
          ],
          technologies: ['Nessus', 'Metasploit', 'Burp Suite', 'OWASP', 'Kali Linux'],
          deliverables: [
            'Security audit report',
            'Vulnerability list',
            'Risk assessment',
            'Remediation plan',
            'Compliance checklist'
          ],
          timeline: '4-6 weeks',
          price: 'Starting from $25,000'
        },
        {
          id: 'soc-implementation',
          title: 'SOC Implementation',
          description: 'Security Operations Center setup with 24/7 monitoring and incident response capabilities.',
          icon: <Eye size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />,
          features: [
            '24/7 monitoring',
            'Incident response',
            'Threat intelligence',
            'SIEM integration',
            'Automated alerts'
          ],
          technologies: ['Splunk', 'ELK Stack', 'CrowdStrike', 'Palo Alto', 'IBM QRadar'],
          deliverables: [
            'SOC infrastructure',
            'Monitoring dashboard',
            'Incident playbooks',
            'Staff training',
            'Ongoing support'
          ],
          timeline: '16-24 weeks',
          price: 'Starting from $120,000'
        }
      ]
    }
  };

  const processSteps: ProcessStep[] = [
    {
      title: 'Discovery & Planning',
      description: 'In-depth analysis of your requirements, goals, and technical constraints.',
      icon: <Users size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />,
      duration: '1-2 weeks'
    },
    {
      title: 'Architecture Design',
      description: 'Detailed technical architecture and project roadmap development.',
      icon: <Layers size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />,
      duration: '2-3 weeks'
    },
    {
      title: 'Development & Integration',
      description: 'Agile development with continuous integration and testing.',
      icon: <Code size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />,
      duration: '8-16 weeks'
    },
    {
      title: 'Testing & Optimization',
      description: 'Comprehensive testing, performance optimization, and security validation.',
      icon: <Target size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />,
      duration: '2-4 weeks'
    },
    {
      title: 'Deployment & Support',
      description: 'Production deployment with ongoing monitoring and support.',
      icon: <Zap size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />,
      duration: 'Ongoing'
    }
  ];

  const toggleServiceDetails = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const currentServices = serviceCategories[activeCategory]?.services || [];

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
              OUR
            </span>{' '}
            <span className="text-cyan-400">
              SERVICES
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-cyan-300/70 max-w-4xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to accelerate your digital transformation and drive measurable business results.
          </p>
        </div>
      </section>

      {/* Service Categories Navigation */}
      <section className="py-8 bg-black/90 backdrop-blur-xl border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(serviceCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-gradient-to-r from-cyan-500 to-cyan-400 text-black shadow-[0_0_20px_rgba(0,255,255,0.5)]'
                    : 'bg-black/80 border border-cyan-500/30 text-cyan-300 hover:border-cyan-500/50 hover:text-cyan-100'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Category Header */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-cyan-400 mb-4">
            {serviceCategories[activeCategory]?.title}
          </h2>
          <p className="text-xl text-cyan-300/70 max-w-3xl mx-auto">
            {serviceCategories[activeCategory]?.description}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentServices.map((service, index) => (
              <div
                key={service.id}
                className="group relative bg-black/80 border border-cyan-500/20 rounded-lg hover:border-cyan-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className="mr-4">{service.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-cyan-400 font-semibold text-sm mt-1">{service.timeline}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-cyan-300 font-bold text-lg">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-cyan-300/70 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-cyan-300 font-semibold mb-2 uppercase tracking-wide text-sm">Key Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-cyan-300/70 text-sm">
                            <CheckCircle size={14} className="text-cyan-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => toggleServiceDetails(service.id)}
                      className="text-cyan-300 hover:text-cyan-100 font-bold text-sm uppercase tracking-wider flex items-center transition-colors duration-300"
                    >
                      {expandedService === service.id ? (
                        <>Less Details <ChevronUp size={16} className="ml-2" /></>
                      ) : (
                        <>View Details <ChevronDown size={16} className="ml-2" /></>
                      )}
                    </button>
                    <button className="bg-gradient-to-r from-cyan-500 to-cyan-400 text-black px-6 py-2 rounded-lg font-bold text-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,255,0.8),0_0_50px_rgba(0,255,255,0.4)] flex items-center">
                      <ArrowRight size={14} className="mr-2" />
                      Get Quote
                    </button>
                  </div>

                  {expandedService === service.id && (
                    <div className="mt-6 pt-6 border-t border-cyan-500/20">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h5 className="text-cyan-300 font-semibold mb-3 uppercase tracking-wide text-sm">Technologies</h5>
                          <div className="space-y-2">
                            {service.technologies.map((tech, idx) => (
                              <div key={idx} className="bg-black/60 border border-cyan-500/30 px-3 py-1 rounded text-cyan-300/70 text-sm">
                                {tech}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="text-cyan-300 font-semibold mb-3 uppercase tracking-wide text-sm">Deliverables</h5>
                          <div className="space-y-2">
                            {service.deliverables.map((deliverable, idx) => (
                              <div key={idx} className="flex items-center text-cyan-300/70 text-sm">
                                <Award size={12} className="text-cyan-400 mr-2 flex-shrink-0" />
                                {deliverable}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="text-cyan-300 font-semibold mb-3 uppercase tracking-wide text-sm">All Features</h5>
                          <div className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center text-cyan-300/70 text-sm">
                                <CheckCircle size={12} className="text-cyan-400 mr-2 flex-shrink-0" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-500 group-hover:w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-black/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-cyan-400 text-center mb-12">Our Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="group relative bg-black/80 border border-cyan-500/20 p-6 rounded-lg hover:border-cyan-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="flex justify-center mb-4">{step.icon}</div>
                  <div className="bg-gradient-to-r from-cyan-500 to-cyan-400 text-black px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">
                    STEP {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-cyan-300 group-hover:text-cyan-100 mb-3 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-cyan-300/70 text-sm mb-4 leading-relaxed">{step.description}</p>
                  <div className="bg-black/60 border border-cyan-500/30 px-3 py-2 rounded text-cyan-400 font-semibold text-xs">
                    {step.duration}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-500 group-hover:w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-cyan-400 text-center mb-12">Why Choose NEXUS LABS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Star size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />,
                title: 'Expert Team',
                description: 'Certified professionals with 10+ years of industry experience.'
              },
              {
                icon: <Zap size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />,
                title: 'Rapid Delivery',
                description: 'Agile methodology ensuring faster time-to-market.'
              },
              {
                icon: <Shield size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />,
                title: 'Enterprise Security',
                description: 'Bank-grade security and compliance built-in.'
              },
              {
                icon: <Globe size={40} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />,
                title: '24/7 Support',
                description: 'Round-the-clock technical support and maintenance.'
              }
            ].map((benefit, index) => (
              <div
                key={benefit.title}
                className="group relative bg-black/80 border border-cyan-500/20 p-6 rounded-lg hover:border-cyan-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-cyan-300 group-hover:text-cyan-100 mb-3 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-cyan-300/70 leading-relaxed">{benefit.description}</p>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-500 group-hover:w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-black/90 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-black/80 border border-cyan-500/20 p-12 rounded-lg shadow-[0_0_25px_rgba(0,255,255,0.3)]">
            <h2 className="text-3xl font-black text-cyan-400 mb-6">Ready to Get Started?</h2>
            <p className="text-cyan-300/70 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-cyan-400 text-black px-8 py-4 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,255,0.8),0_0_50px_rgba(0,255,255,0.4)]">
                Get Free Consultation
              </button>
              <button className="bg-gradient-to-r from-cyan-500 to-cyan-400 text-black px-8 py-4 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,255,0.8),0_0_50px_rgba(0,255,255,0.4)]">
                Download Service Guide
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
        
        .particle {
          filter: blur(0.5px);
        }
      `}</style>
    </div>
  );
};

export default Services;
