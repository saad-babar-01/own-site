"use client"
import React, { useState, useEffect } from 'react';
import { ArrowRight, ExternalLink, Github, X, ChevronLeft, ChevronRight, Zap, Code, Server, Cpu, Database, Cloud, Smartphone, Globe, Sparkles } from 'lucide-react';
import Link from 'next/link';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  category: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudy?: string;
  features: string[];
  challenges: string[];
  results: string[];
}

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'NexCommerce Platform',
      description: 'A scalable online store with advanced payment integration, inventory management, and personalized recommendations.',
      fullDescription: 'NexCommerce is a revolutionary e-commerce platform built with cutting-edge technology to deliver exceptional shopping experiences. It features AI-powered product recommendations, seamless checkout processes, and robust inventory management systems.',
      category: 'web',
      image: '/placeholder-ecommerce.jpg',
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      liveUrl: 'https://nexcommerce-demo.vercel.app',
      githubUrl: 'https://github.com/nexus-labs/nexcommerce',
      caseStudy: '/case-studies/ecommerce',
      features: [
        'AI-powered product recommendations',
        'Seamless multi-step checkout process',
        'Real-time inventory management',
        'Advanced admin dashboard',
        'Multi-currency and language support'
      ],
      challenges: [
        'Handling high traffic during flash sales',
        'Integrating multiple payment gateways',
        'Maintaining cart consistency across devices',
        'Optimizing for mobile devices'
      ],
      results: [
        '40% increase in conversion rate',
        '60% faster page load times',
        '99.9% uptime during holiday season',
        '25% higher average order value'
      ]
    },
    {
      id: 2,
      title: 'HealthNex AI Diagnostics',
      description: 'A secure mobile app for patient management with AI diagnostics, appointment scheduling, and telehealth capabilities.',
      fullDescription: 'HealthNex revolutionizes healthcare with AI-powered diagnostics and seamless patient management. This HIPAA-compliant platform enables remote consultations, automated preliminary diagnoses, and efficient healthcare resource management.',
      category: 'mobile',
      image: '/placeholder-healthcare.jpg',
      technologies: ['React Native', 'Firebase', 'TensorFlow', 'Python', 'HIPAA Compliance'],
      liveUrl: 'https://healthnex-app.com',
      githubUrl: 'https://github.com/nexus-labs/healthnex',
      caseStudy: '/case-studies/healthcare',
      features: [
        'AI-powered symptom checker and preliminary diagnosis',
        'Secure video consultations with healthcare providers',
        'Digital prescription management',
        'Health record integration',
        'Medication reminder system'
      ],
      challenges: [
        'Ensuring HIPAA compliance for all data',
        'Achieving accurate AI diagnosis predictions',
        'Maintaining performance on older mobile devices',
        'Integrating with various health record systems'
      ],
      results: [
        '92% accuracy in preliminary diagnoses',
        '40% reduction in unnecessary clinic visits',
        'Average wait time decreased from 3 days to 4 hours',
        '4.8/5 rating on app stores'
      ]
    },
    {
      id: 3,
      title: 'WealthNex Analytics Dashboard',
      description: 'Real-time analytics and visualization platform for financial data with predictive insights and reporting tools.',
      fullDescription: 'WealthNex provides financial institutions with powerful real-time analytics and predictive insights. The platform processes millions of data points to deliver actionable intelligence and comprehensive visualizations for informed decision-making.',
      category: 'web',
      image: '/placeholder-finance.jpg',
      technologies: ['Vue.js', 'D3.js', 'Python', 'AWS', 'WebSocket', 'Redis'],
      liveUrl: 'https://wealthnex-demo.com',
      caseStudy: '/case-studies/finance',
      features: [
        'Real-time financial data visualization',
        'Predictive market trend analysis',
        'Customizable dashboard with drag-and-drop widgets',
        'Automated report generation',
        'Multi-factor authentication and encryption'
      ],
      challenges: [
        'Processing real-time data streams with low latency',
        'Ensuring data accuracy and consistency',
        'Creating intuitive visualizations for complex data',
        'Meeting financial industry security standards'
      ],
      results: [
        '50% faster decision-making for clients',
        '30% improvement in predictive accuracy compared to legacy systems',
        'Handles over 1 million transactions daily',
        '99.99% uptime since launch'
      ]
    },
    {
      id: 4,
      title: 'HomeNex IoT Ecosystem',
      description: 'Connected device ecosystem for home automation with energy optimization and security features.',
      fullDescription: 'HomeNex is a comprehensive IoT ecosystem that transforms ordinary homes into smart, efficient living spaces. The system integrates lighting, climate control, security, and entertainment into a seamless, voice-controlled experience.',
      category: 'iot',
      image: '/placeholder-iot.jpg',
      technologies: ['React', 'Python', 'Raspberry Pi', 'MQTT', 'WebSocket', 'TensorFlow Lite'],
      githubUrl: 'https://github.com/nexus-labs/homenex',
      caseStudy: '/case-studies/iot',
      features: [
        'Voice-controlled home automation',
        'Energy usage optimization algorithms',
        'Advanced security with facial recognition',
        'Predictive maintenance alerts',
        'Seamless device interoperability'
      ],
      challenges: [
        'Ensuring compatibility with diverse IoT devices',
        'Maintaining security across all connected devices',
        'Creating reliable voice recognition in noisy environments',
        'Optimizing energy consumption of the system itself'
      ],
      results: [
        '30% reduction in energy costs for users',
        'Average response time under 100ms',
        '99.5% accuracy in voice command recognition',
        'Supported by 200+ IoT devices'
      ]
    },
    {
      id: 5,
      title: 'RetailAR Shopping Experience',
      description: 'Augmented reality application allowing customers to visualize products in their space before purchasing.',
      fullDescription: 'RetailAR transforms online shopping with immersive augmented reality experiences. Customers can visualize furniture, decor, and fashion items in their own space before making purchase decisions, dramatically reducing returns and increasing confidence.',
      category: 'ar',
      image: '/placeholder-ar.jpg',
      technologies: ['Unity', 'ARKit', 'ARCore', '3D Modeling', 'Swift', 'Java'],
      liveUrl: 'https://retailar-demo.com',
      caseStudy: '/case-studies/ar',
      features: [
        'Life-like 3D product visualization',
        'Multi-surface detection and placement',
        'Real-time lighting adjustment',
        'Social sharing of AR setups',
        'Integration with e-commerce platforms'
      ],
      challenges: [
        'Creating accurate 3D models from product photos',
        'Maintaining consistent scale across different devices',
        'Optimizing for mobile device performance',
        'Handling various lighting conditions'
      ],
      results: [
        '45% reduction in product returns',
        '2.5x longer session duration compared to traditional shopping',
        '70% of users more likely to purchase after using AR',
        'Featured in Apple\'s "App of the Day"'
      ]
    },
    {
      id: 6,
      title: 'SupplyChain Blockchain Solution',
      description: 'Transparent supply chain management system using blockchain technology for traceability and verification.',
      fullDescription: 'This blockchain-based supply chain solution brings unprecedented transparency and security to logistics and product tracking. From raw materials to end consumers, every step is immutably recorded, combating counterfeit goods and ensuring ethical sourcing.',
      category: 'blockchain',
      image: '/placeholder-blockchain.jpg',
      technologies: ['Ethereum', 'Solidity', 'Web3.js', 'IPFS', 'Node.js', 'React'],
      githubUrl: 'https://github.com/nexus-labs/supplychain-blockchain',
      caseStudy: '/case-studies/blockchain',
      features: [
        'End-to-end product journey tracking',
        'Smart contracts for automated verification',
        'Tamper-proof records of transactions',
        'Supplier reputation system',
        'Real-time shipping conditions monitoring'
      ],
      challenges: [
        'Balancing transparency with proprietary information protection',
        'Achieving sufficient transaction throughput',
        'Educating users on blockchain technology',
        'Integrating with legacy supply chain systems'
      ],
      results: [
        '100% traceability for all products',
        'Eliminated counterfeit goods in pilot program',
        '40% reduction in paperwork and manual verification',
        '30% faster customs clearance processes'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: <Sparkles size={18} /> },
    { id: 'web', name: 'Web Development', icon: <Globe size={18} /> },
    { id: 'mobile', name: 'Mobile Apps', icon: <Smartphone size={18} /> },
    { id: 'iot', name: 'Internet of Things', icon: <Cpu size={18} /> },
    { id: 'ar', name: 'AR/VR', icon: <Server size={18} /> },
    { id: 'blockchain', name: 'Blockchain', icon: <Database size={18} /> }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const openProject = (project: PortfolioItem) => {
    setSelectedProject(project);
    setCurrentIndex(portfolioItems.findIndex(item => item.id === project.id));
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const navigateProject = (direction: 'prev' | 'next') => {
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % portfolioItems.length;
    } else {
      newIndex = (currentIndex - 1 + portfolioItems.length) % portfolioItems.length;
    }
    
    setCurrentIndex(newIndex);
    setSelectedProject(portfolioItems[newIndex]);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-black/95 text-white pt-20">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-b from-cyan-900/10 to-black/90 backdrop-blur-xl py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(to_bottom,white_10%,transparent_70%)]"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-cyan-400/20 rounded-full particle animate-float"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 5}s`,
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent">
              Innovative Portfolio
            </span>
          </h1>
          <div className="h-1 w-24 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-cyan-300/80 max-w-3xl mx-auto mb-10">
            Exploring the frontier of technology through cutting-edge projects that transform industries and redefine possibilities.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <Link
              href="/services"
              className="px-6 py-3 bg-cyan-500/10 border border-cyan-500/50 text-cyan-300 rounded-lg hover:bg-cyan-500/20 hover:border-cyan-500 hover:text-cyan-100 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.2)] hover:shadow-[0_0_25px_rgba(0,255,255,0.3)] flex items-center"
            >
              <Zap className="mr-2" size={20} />
              Our Services
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-cyan-500/10 border border-cyan-500/50 text-cyan-300 rounded-lg hover:bg-cyan-500/20 hover:border-cyan-500 hover:text-cyan-100 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.2)] hover:shadow-[0_0_25px_rgba(0,255,255,0.3)] flex items-center"
            >
              Start a Project
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
        
        {/* Animated circuit border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-black/50 border border-cyan-500/20 rounded-lg">
              <div className="text-4xl font-black text-cyan-400 mb-2">50+</div>
              <div className="text-cyan-300/70">Projects Completed</div>
            </div>
            <div className="p-6 bg-black/50 border border-cyan-500/20 rounded-lg">
              <div className="text-4xl font-black text-cyan-400 mb-2">28</div>
              <div className="text-cyan-300/70">Happy Clients</div>
            </div>
            <div className="p-6 bg-black/50 border border-cyan-500/20 rounded-lg">
              <div className="text-4xl font-black text-cyan-400 mb-2">15</div>
              <div className="text-cyan-300/70">Awards Received</div>
            </div>
            <div className="p-6 bg-black/50 border border-cyan-500/20 rounded-lg">
              <div className="text-4xl font-black text-cyan-400 mb-2">99.7%</div>
              <div className="text-cyan-300/70">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-16 bg-black/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-cyan-400 text-center mb-4">Explore Our Work</h2>
          <p className="text-cyan-300/70 text-center max-w-2xl mx-auto mb-12">
            Filter through our diverse portfolio of innovative projects across various technologies and industries.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2 rounded-full border transition-all duration-300 flex items-center ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 shadow-[0_0_15px_rgba(0,255,255,0.3)]'
                    : 'bg-black/50 border-cyan-500/30 text-cyan-300/70 hover:border-cyan-500/50 hover:text-cyan-300'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`group relative bg-black/80 border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.1)] hover:shadow-[0_0_25px_rgba(0,255,255,0.3)] cursor-pointer transform hover:-translate-y-2 delay-${index * 100}`}
                onClick={() => openProject(item)}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="w-full h-full bg-gradient-to-br from-cyan-900/30 to-cyan-700/20 flex items-center justify-center">
                    <div className="text-5xl text-cyan-500/30">{"{}"}</div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs bg-cyan-900/80 text-cyan-300/90 rounded-full capitalize">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-cyan-300/70 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-cyan-900/30 text-cyan-300/80 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {item.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-cyan-900/30 text-cyan-300/80 rounded">
                        +{item.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-500 group-hover:w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-cyan-400 text-center mb-4">Our Technology Stack</h2>
          <p className="text-cyan-300/70 text-center max-w-2xl mx-auto mb-12">
            We leverage cutting-edge technologies to build innovative solutions that drive business transformation.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'React/Next.js', icon: <Code className="text-cyan-400" size={32} /> },
              { name: 'Node.js', icon: <Server className="text-cyan-400" size={32} /> },
              { name: 'Python/AI', icon: <Cpu className="text-cyan-400" size={32} /> },
              { name: 'Cloud/AWS', icon: <Cloud className="text-cyan-400" size={32} /> },
              { name: 'Mobile', icon: <Smartphone className="text-cyan-400" size={32} /> },
              { name: 'Blockchain', icon: <Database className="text-cyan-400" size={32} /> },
            ].map((tech, index) => (
              <div key={index} className="bg-black/50 border border-cyan-500/20 rounded-lg p-6 text-center group hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {tech.icon}
                </div>
                <h3 className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black/90 to-cyan-900/10 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-cyan-400 mb-6">Ready to Start Your Project?</h2>
          <p className="text-cyan-300/70 text-lg mb-10 max-w-2xl mx-auto">
            Let's collaborate to bring your innovative ideas to life with cutting-edge technology solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/contact"
              className="px-8 py-4 bg-cyan-500/10 border border-cyan-500/50 text-cyan-300 rounded-lg hover:bg-cyan-500/20 hover:border-cyan-500 hover:text-cyan-100 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.2)] hover:shadow-[0_0_25px_rgba(0,255,255,0.3)] flex items-center text-lg"
            >
              Start a Project
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/process"
              className="px-8 py-4 bg-cyan-500/10 border border-cyan-500/50 text-cyan-300 rounded-lg hover:bg-cyan-500/20 hover:border-cyan-500 hover:text-cyan-100 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.2)] hover:shadow-[0_0_25px_rgba(0,255,255,0.3)] flex items-center text-lg"
            >
              Our Process
              <Zap className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="relative bg-gradient-to-b from-black to-cyan-900/10 border border-cyan-500/30 rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeProject}
              className="absolute top-4 right-4 z-10 p-2 bg-black/80 border border-cyan-500/30 rounded-full text-cyan-300 hover:text-cyan-100 hover:border-cyan-500/50 transition-all duration-300"
            >
              <X size={24} />
            </button>

            <button
              onClick={() => navigateProject('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/80 border border-cyan-500/30 rounded-full text-cyan-300 hover:text-cyan-100 hover:border-cyan-500/50 transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={() => navigateProject('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/80 border border-cyan-500/30 rounded-full text-cyan-300 hover:text-cyan-100 hover:border-cyan-500/50 transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>

            <div className="h-64 bg-gradient-to-br from-cyan-900/30 to-cyan-700/20 flex items-center justify-center relative">
              <div className="text-7xl text-cyan-500/30">{"{}"}</div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-sm bg-cyan-900/80 text-cyan-300/90 rounded-full capitalize">
                  {selectedProject.category}
                </span>
              </div>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-black text-cyan-400 mb-2">
                {selectedProject.title}
              </h2>
              
              <p className="text-cyan-300/80 mb-8 text-lg">
                {selectedProject.fullDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center">
                    <Zap className="mr-2" size={20} />
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="text-cyan-300/70 flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center">
                    <Code className="mr-2" size={20} />
                    Challenges
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.challenges.map((challenge, index) => (
                      <li key={index} className="text-cyan-300/70 flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center">
                    <Sparkles className="mr-2" size={20} />
                    Results
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.results.map((result, index) => (
                      <li key={index} className="text-cyan-300/70 flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-cyan-300 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-cyan-900/30 text-cyan-300/80 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-5 py-2 bg-cyan-500/10 border border-cyan-500/50 text-cyan-300 rounded-lg hover:bg-cyan-500/20 hover:border-cyan-500 hover:text-cyan-100 transition-all duration-300"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </a>
                )}
                
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-5 py-2 bg-cyan-500/10 border border-cyan-500/50 text-cyan-300 rounded-lg hover:bg-cyan-500/20 hover:border-cyan-500 hover:text-cyan-100 transition-all duration-300"
                  >
                    <Github size={18} className="mr-2" />
                    View Code
                  </a>
                )}
                
                {selectedProject.caseStudy && (
                  <Link
                    href={selectedProject.caseStudy}
                    className="flex items-center px-5 py-2 bg-cyan-500/10 border border-cyan-500/50 text-cyan-300 rounded-lg hover:bg-cyan-500/20 hover:border-cyan-500 hover:text-cyan-100 transition-all duration-300"
                  >
                    <ArrowRight size={18} className="mr-2" />
                    Case Study
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;