import React from 'react';

const ServicesPage = () => {
  const services = [
    {
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed to meet your unique business requirements and drive operational efficiency.',
      icon: '💻',
      features: ['Web Applications', 'Desktop Software', 'API Development', 'System Integration']
    },
    {
      title: 'Cloud Solutions & Migration',
      description: 'Seamless migration to cloud platforms with optimized infrastructure for scalability and cost-effectiveness.',
      icon: '☁️',
      features: ['AWS/Azure Migration', 'Cloud Architecture', 'DevOps Implementation', 'Performance Optimization']
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
      icon: '📱',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter Apps']
    },
    {
      title: 'Data Analytics & AI',
      description: 'Transform raw data into actionable insights using advanced analytics and machine learning technologies.',
      icon: '📊',
      features: ['Business Intelligence', 'Machine Learning', 'Predictive Analytics', 'Data Visualization']
    },
    {
      title: 'Cybersecurity Services',
      description: 'Comprehensive security solutions to protect your digital assets and ensure regulatory compliance.',
      icon: '🔒',
      features: ['Security Audits', 'Threat Detection', 'Compliance Management', 'Incident Response']
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation strategies to modernize your business processes and technology stack.',
      icon: '🚀',
      features: ['Strategy Consulting', 'Process Automation', 'Legacy System Modernization', 'Change Management']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your business needs, goals, and challenges through comprehensive analysis.'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our experts design scalable, secure solutions with user experience at the forefront.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Agile development with continuous testing ensures quality and timely delivery.'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Seamless deployment with ongoing support and maintenance to ensure long-term success.'
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-indigo-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to accelerate your business growth,
            enhance operational efficiency, and drive digital innovation across all sectors.
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transform -translate-y-1/2" style={{width: 'calc(100vw / 4 - 5rem)'}}></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
              <p className="text-xl text-gray-600">
                Cutting-edge technologies and frameworks for robust, scalable solutions.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center">
              {['React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL'].map((tech, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="text-2xl font-bold text-indigo-600">{tech}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss your requirements and create a customized solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300">
                View Our Work
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;
