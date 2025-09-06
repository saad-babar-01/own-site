"use client"
import React, { useState } from 'react';
import { Brain, Cloud, Shield, Code, Database, Zap, Users, Target, Eye, Layers, Award, ArrowRight, CheckCircle, Star, Briefcase, Settings, Globe, ChevronDown, ChevronUp, ExternalLink, Play, Calendar, TrendingUp, Activity } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  timeline: string;
  client: string;
  industry: string;
  liveUrl?: string;
  caseStudyUrl?: string;
}

interface Category {
  id: string;
  name: string;
  count: number;
  icon: React.ReactNode;
}

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const categories: Category[] = [
    {
      id: 'all',
      name: 'All Projects',
      count: 12,
      icon: <Globe size={20} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />
    },
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      count: 4,
      icon: <Brain size={20} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />
    },
    {
      id: 'web-development',
      name: 'Web Development',
      count: 3,
      icon: <Code size={20} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />
    },
    {
      id: 'cloud-infrastructure',
      name: 'Cloud & Infrastructure',
      count: 3,
      icon: <Cloud size={20} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      count: 2,
      icon: <Shield size={20} className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300" />
    }
  ];

  const projects: Project[] = [
    {
      id: 'ai-analytics-platform',
      title: 'AI-Powered Analytics Platform',
      category: 'ai-ml',
      description: 'Enterprise-grade analytics platform with real-time data processing and predictive modeling capabilities.',
      image: '/placeholder-project-1.jpg',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'Docker', 'AWS'],
      features: [
        'Real-time data ingestion',
        'Predictive analytics models',
        'Interactive dashboards',
        'Automated reporting',
        'API integrations'
      ],
      results: [
        { metric: 'Data Processing Speed', value: '10x Faster', description: 'Improved processing speed compared to legacy system' },
        { metric: 'Prediction Accuracy', value: '94%', description: 'Machine learning model accuracy rate' },
        { metric: 'Cost Reduction', value: '40%', description: 'Operational cost savings achieved' }
      ],
      timeline: '16 weeks',
      client: 'TechCorp Global',
      industry: 'Technology',
      liveUrl: '#',
      caseStudyUrl: '#'
    },
    {
      id: 'ecommerce-platform',
      title: 'Next-Gen E-Commerce Platform',
      category: 'web-development',
      description: 'Scalable e-commerce solution with advanced payment processing and inventory management.',
      image: '/placeholder-project-2.jpg',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB', 'Redis', 'Vercel'],
      features: [
        'Multi-vendor marketplace',
        'Advanced search & filtering',
        'Real-time inventory tracking',
        'Mobile-first design',
        'Payment gateway integration'
      ],
      results: [
        { metric: 'Sales Increase', value: '250%', description: 'Revenue growth in first 6 months' },
        { metric: 'Page Load Speed', value: '0.8s', description: 'Average page load time' },
        { metric: 'Mobile Conversions', value: '65%', description: 'Mobile traffic conversion rate' }
      ],
      timeline: '20 weeks',
      client: 'RetailMax',
      industry: 'E-Commerce',
      liveUrl: '#',
      caseStudyUrl: '#'
    },
    {
      id: 'cloud-migration',
      title: 'Enterprise Cloud Migration',
      category: 'cloud-infrastructure',
      description: 'Complete migration of legacy infrastructure to scalable cloud architecture.',
      image: '/placeholder-project-3.jpg',
      technologies: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'Jenkins', 'Prometheus'],
      features: [
        'Zero-downtime migration',
        'Auto-scaling infrastructure',
        'Disaster recovery setup',
        'Cost optimization',
        'Security compliance'
      ],
      results: [
        { metric: 'Uptime Improvement', value: '99.99%', description: 'System availability achieved' },
        { metric: 'Cost Savings', value: '45%', description: 'Infrastructure cost reduction' },
        { metric: 'Deployment Speed', value: '10x Faster', description: 'Application deployment time' }
      ],
      timeline: '12 weeks',
      client: 'FinanceFirst Bank',
      industry: 'Financial Services',
      caseStudyUrl: '#'
    },
    {
      id: 'security-soc',
      title: 'Security Operations Center',
      category: 'cybersecurity',
      description: '24/7 security monitoring and incident response system with AI-powered threat detection.',
      image: '/placeholder-project-4.jpg',
      technologies: ['Splunk', 'ELK Stack', 'Python', 'CrowdStrike', 'Palo Alto', 'MISP'],
      features: [
        '24/7 threat monitoring',
        'AI-powered detection',
        'Automated incident response',
        'Compliance reporting',
        'Threat intelligence integration'
      ],
      results: [
        { metric: 'Threat Detection', value: '99.7%', description: 'Advanced threat detection rate' },
        { metric: 'Response Time', value: '< 5min', description: 'Average incident response time' },
        { metric: 'False Positives', value: '-85%', description: 'Reduction in false alerts' }
      ],
      timeline: '24 weeks',
      client: 'HealthSecure Inc.',
      industry: 'Healthcare',
      caseStudyUrl: '#'
    },
    {
      id: 'nlp-chatbot',
      title: 'Intelligent Customer Service Bot',
      category: 'ai-ml',
      description: 'Advanced NLP-powered chatbot with multi-language support and sentiment analysis.',
      image: '/placeholder-project-5.jpg',
      technologies: ['Python', 'OpenAI GPT', 'BERT', 'Flask', 'React', 'PostgreSQL'],
      features: [
        'Natural language understanding',
        'Multi-language support',
        'Sentiment analysis',
        'Knowledge base integration',
        'Human handoff capability'
      ],
      results: [
        { metric: 'Customer Satisfaction', value: '92%', description: 'Customer satisfaction score' },
        { metric: 'Resolution Rate', value: '78%', description: 'First-contact resolution rate' },
        { metric: 'Response Time', value: '< 2sec', description: 'Average response time' }
      ],
      timeline: '14 weeks',
      client: 'ServicePro Solutions',
      industry: 'Customer Service',
      liveUrl: '#',
      caseStudyUrl: '#'
    },
    {
      id: 'microservices-architecture',
      title: 'Microservices Architecture Redesign',
      category: 'cloud-infrastructure',
      description: 'Complete application modernization using microservices architecture and containerization.',
      image: '/placeholder-project-6.jpg',
      technologies: ['Node.js', 'Docker', 'Kubernetes', 'GraphQL', 'MongoDB', 'RabbitMQ'],
      features: [
        'Service decomposition',
        'API gateway implementation',
        'Event-driven architecture',
        'Auto-scaling services',
        'Monitoring & logging'
      ],
      results: [
        { metric: 'Scalability', value: '500%', description: 'Increased system scalability' },
        { metric: 'Development Speed', value: '3x Faster', description: 'Feature development velocity' },
        { metric: 'System Reliability', value: '99.95%', description: 'System uptime achieved' }
      ],
      timeline: '18 weeks',
      client: 'ScaleUp Technologies',
      industry: 'SaaS',
      caseStudyUrl: '#'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const toggleProjectDetails = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const stats = [
    { label: 'Projects Completed', value: '500+', icon: <Award size={24} className="text-cyan-400" /> },
    { label: 'Happy Clients', value: '200+', icon: <Users size={24} className="text-cyan-400" /> },
    { label: 'Success Rate', value: '99%', icon: <Target size={24} className="text-cyan-400" /> },
    { label: 'Years Experience', value: '5+', icon: <Calendar size={24} className="text-cyan-400" /> }
  ];

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

        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent">
              OUR
            </span>{' '}
            <span className="text-cyan-400">
              PORTFOLIO
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-cyan-300/70 max-w-4xl mx-auto leading-relaxed">
            Showcase of cutting-edge solutions that have transformed businesses and driven measurable results across industries.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group bg-black/80 border border-cyan-500/20 p-6 rounded-lg hover:border-cyan-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-3">{stat.icon}</div>
                <div className="text-3xl font-black text-cyan-300 group-hover:text-cyan-100 mb-2 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-cyan-300/70 text-sm uppercase tracking-wide">{stat.label}</div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-500 group-hover:w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-black/90 backdrop-blur-xl border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-cyan-400 text-black shadow-[0_0_20px_rgba(0,255,255,0.5)]'
                    : 'bg-black/80 border border-cyan-500/30 text-cyan-300 hover:border-cyan-500/50 hover:text-cyan-100'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
                <span className={`ml-2 px-2 py-1 rounded-full text-xs font-black ${
                  activeCategory === category.id 
                    ? 'bg-black/20 text-black' 
                    : 'bg-cyan-500/20 text-cyan-400'
                }`}>
                  {category.id === 'all' ? projects.length : category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-black/80 border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-cyan-500/20 to-cyan-300/20 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-black/60 z-10"></div>
                  <div className="relative z-20 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-cyan-500/30 to-cyan-300/30 rounded-full flex items-center justify-center border-2 border-cyan-500/50">
                      <Briefcase size={32} className="text-cyan-300" />
                    </div>
                    <p className="text-cyan-300/70 text-sm uppercase tracking-wide">{project.industry}</p>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"></div>
                </div>

                <div className="p-8">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-gradient-to-r from-cyan-500 to-cyan-400 text-black px-3 py-1 rounded-full text-xs font-bold uppercase">
                          {categories.find(cat => cat.id === project.category)?.name.split(' ')[0] || 'Project'}
                        </span>
                        <span className="text-cyan-400 font-semibold text-sm">{project.timeline}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-cyan-300/70 mb-4 leading-relaxed">{project.description}</p>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.results.slice(0, 3).map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-black text-cyan-400 mb-1">{result.value}</div>
                        <div className="text-xs text-cyan-300/70 uppercase tracking-wide">{result.metric}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="bg-black/60 border border-cyan-500/30 px-3 py-1 rounded text-cyan-300/70 text-xs">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-cyan-400 text-xs font-semibold">+{project.technologies.length - 4} more</span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => toggleProjectDetails(project.id)}
                      className="text-cyan-300 hover:text-cyan-100 font-bold text-sm uppercase tracking-wider flex items-center transition-colors duration-300"
                    >
                      {expandedProject === project.id ? (
                        <>Less Details <ChevronUp size={16} className="ml-2" /></>
                      ) : (
                        <>View Details <ChevronDown size={16} className="ml-2" /></>
                      )}
                    </button>
                    
                    <div className="flex space-x-3">
                      {project.liveUrl && (
                        <button className="bg-gradient-to-r from-cyan-500 to-cyan-400 text-black px-6 py-2 rounded-lg font-bold text-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,255,0.8),0_0_50px_rgba(0,255,255,0.4)] flex items-center">
                          <ExternalLink size={14} className="mr-2" />
                          Live Demo
                        </button>
                      )}
                      {project.caseStudyUrl && (
                        <button className="bg-gradient-to-r from-cyan-500 to-cyan-400 text-black px-6 py-2 rounded-lg font-bold text-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,255,0.8),0_0_50px_rgba(0,255,255,0.4)] flex items-center">
                          <Award size={14} className="mr-2" />
                          Case Study
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {expandedProject === project.id && (
                    <div className="mt-8 pt-6 border-t border-cyan-500/20">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Features & Technologies */}
                        <div>
                          <h5 className="text-cyan-300 font-semibold mb-4 uppercase tracking-wide text-sm">Key Features</h5>
                          <div className="space-y-3 mb-6">
                            {project.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center text-cyan-300/70 text-sm">
                                <CheckCircle size={14} className="text-cyan-400 mr-3 flex-shrink-0" />
                                {feature}
                              </div>
                            ))}
                          </div>
                          
                          <h5 className="text-cyan-300 font-semibold mb-3 uppercase tracking-wide text-sm">Technologies Used</h5>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <span key={idx} className="bg-black/60 border border-cyan-500/30 px-3 py-2 rounded text-cyan-300/70 text-sm">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Results & Client Info */}
                        <div>
                          <h5 className="text-cyan-300 font-semibold mb-4 uppercase tracking-wide text-sm">Project Results</h5>
                          <div className="space-y-4 mb-6">
                            {project.results.map((result, idx) => (
                              <div key={idx} className="bg-black/60 border border-cyan-500/30 p-4 rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-cyan-300/70 text-sm">{result.metric}</span>
                                  <span className="text-cyan-400 font-bold text-lg">{result.value}</span>
                                </div>
                                <p className="text-cyan-300/60 text-xs">{result.description}</p>
                              </div>
                            ))}
                          </div>

                          <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-300/10 border border-cyan-500/30 p-4 rounded-lg">
                            <h6 className="text-cyan-300 font-semibold text-sm mb-2">Client Information</h6>
                            <p className="text-cyan-300/70 text-sm mb-1"><strong>Company:</strong> {project.client}</p>
                            <p className="text-cyan-300/70 text-sm mb-1"><strong>Industry:</strong> {project.industry}</p>
                            <p className="text-cyan-300/70 text-sm"><strong>Timeline:</strong> {project.timeline}</p>
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

      {/* Call to Action */}
      <section className="py-20 bg-black/90 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-black/80 border border-cyan-500/20 p-12 rounded-lg shadow-[0_0_25px_rgba(0,255,255,0.3)]">
            <h2 className="text-3xl font-black text-cyan-400 mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-cyan-300/70 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a solution that drives real business results. Join our portfolio of successful clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-cyan-400 text-black px-8 py-4 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,255,0.8),0_0_50px_rgba(0,255,255,0.4)]">
                Start Your Project
              </button>
              <button className="bg-gradient-to-r from-cyan-500 to-cyan-400 text-black px-8 py-4 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,255,0.8),0_0_50px_rgba(0,255,255,0.4)]">
                View All Case Studies
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

export default Portfolio;