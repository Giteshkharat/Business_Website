import React, { useState } from 'react';

const PortfolioPage = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Full-stack e-commerce solution with payment integration and inventory management.',
      image: '🛒',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      results: '300% increase in online sales',
      client: 'Retail Corp'
    },
    {
      id: 2,
      title: 'Healthcare Management System',
      category: 'web',
      description: 'Comprehensive patient management system with telemedicine capabilities.',
      image: '🏥',
      technologies: ['React', 'Python', 'PostgreSQL', 'AWS'],
      results: '50% reduction in administrative time',
      client: 'MedCare Solutions'
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      category: 'mobile',
      description: 'Secure mobile banking application with biometric authentication.',
      image: '📱',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'JWT'],
      results: '1M+ downloads in first year',
      client: 'SecureBank'
    },
    {
      id: 4,
      title: 'Cloud Migration Project',
      category: 'cloud',
      description: 'Large-scale migration from on-premises to cloud infrastructure.',
      image: '☁️',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      results: '60% cost reduction, 99.9% uptime',
      client: 'Enterprise Inc'
    },
    {
      id: 5,
      title: 'AI Analytics Dashboard',
      category: 'data',
      description: 'Real-time analytics platform with machine learning insights.',
      image: '📊',
      technologies: ['Python', 'TensorFlow', 'React', 'D3.js'],
      results: '40% improvement in decision making',
      client: 'DataCorp'
    },
    {
      id: 6,
      title: 'IoT Smart Home System',
      category: 'iot',
      description: 'Connected home automation system with voice control.',
      image: '🏠',
      technologies: ['Arduino', 'Node.js', 'MQTT', 'React'],
      results: '5000+ active users',
      client: 'SmartHome Ltd'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'cloud', name: 'Cloud Solutions' },
    { id: 'data', name: 'Data & AI' },
    { id: 'iot', name: 'IoT Solutions' }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-indigo-600">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our successful projects and see how we've helped businesses transform
            their operations with innovative technology solutions.
          </p>
        </section>

        {/* Filter Buttons */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="p-8">
                  <div className="text-6xl mb-6 text-center">{project.image}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Client: <span className="font-semibold">{project.client}</span></span>
                    </div>
                    <div className="mt-2 text-green-600 font-semibold">
                      {project.results}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Project Success Metrics</h2>
            <p className="text-xl text-gray-600">Our track record speaks for itself</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">150+</div>
              <div className="text-gray-600 font-semibold">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600 font-semibold">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">99%</div>
              <div className="text-gray-600 font-semibold">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">24/7</div>
              <div className="text-gray-600 font-semibold">Support</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss your vision and create something amazing together.
            </p>
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg">
              Get Free Consultation
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PortfolioPage;
