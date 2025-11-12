import React, { useState } from 'react';

const CareersPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior React Developer',
      department: 'engineering',
      type: 'Full-time',
      location: 'San Francisco, CA',
      salary: '$120k - $160k',
      description: 'Join our frontend team to build amazing user experiences with React and modern web technologies.',
      requirements: ['5+ years React experience', 'TypeScript', 'GraphQL', 'Testing frameworks'],
      benefits: ['Health insurance', '401k matching', 'Flexible PTO', 'Remote work options']
    },
    {
      id: 2,
      title: 'DevOps Engineer',
      department: 'engineering',
      type: 'Full-time',
      location: 'Remote',
      salary: '$110k - $140k',
      description: 'Build and maintain our cloud infrastructure, ensuring scalability and reliability.',
      requirements: ['AWS/Azure experience', 'Docker & Kubernetes', 'CI/CD pipelines', 'Infrastructure as Code'],
      benefits: ['Health insurance', '401k matching', 'Flexible PTO', 'Learning budget']
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      department: 'design',
      type: 'Full-time',
      location: 'New York, NY',
      salary: '$90k - $120k',
      description: 'Create beautiful and intuitive user experiences for our digital products.',
      requirements: ['Figma & Sketch', 'User research', 'Prototyping', 'Design systems'],
      benefits: ['Health insurance', '401k matching', 'Flexible PTO', 'Design tools budget']
    },
    {
      id: 4,
      title: 'Data Scientist',
      department: 'data',
      type: 'Full-time',
      location: 'Austin, TX',
      salary: '$130k - $170k',
      description: 'Extract insights from complex datasets and build predictive models.',
      requirements: ['Python & R', 'Machine Learning', 'SQL', 'Statistical analysis'],
      benefits: ['Health insurance', '401k matching', 'Flexible PTO', 'Conference attendance']
    },
    {
      id: 5,
      title: 'Product Manager',
      department: 'product',
      type: 'Full-time',
      location: 'Seattle, WA',
      salary: '$140k - $180k',
      description: 'Drive product strategy and work closely with engineering teams to deliver value.',
      requirements: ['Product management experience', 'Agile methodologies', 'Data analysis', 'Technical background'],
      benefits: ['Health insurance', '401k matching', 'Flexible PTO', 'Equity package']
    },
    {
      id: 6,
      title: 'Marketing Specialist',
      department: 'marketing',
      type: 'Full-time',
      location: 'Remote',
      salary: '$70k - $90k',
      description: 'Develop and execute marketing campaigns to grow our brand presence.',
      requirements: ['Digital marketing', 'Content creation', 'SEO/SEM', 'Analytics tools'],
      benefits: ['Health insurance', '401k matching', 'Flexible PTO', 'Professional development']
    }
  ];

  const departments = [
    { id: 'all', name: 'All Departments', count: jobOpenings.length },
    { id: 'engineering', name: 'Engineering', count: jobOpenings.filter(j => j.department === 'engineering').length },
    { id: 'design', name: 'Design', count: jobOpenings.filter(j => j.department === 'design').length },
    { id: 'data', name: 'Data Science', count: jobOpenings.filter(j => j.department === 'data').length },
    { id: 'product', name: 'Product', count: jobOpenings.filter(j => j.department === 'product').length },
    { id: 'marketing', name: 'Marketing', count: jobOpenings.filter(j => j.department === 'marketing').length }
  ];

  const filteredJobs = selectedDepartment === 'all'
    ? jobOpenings
    : jobOpenings.filter(job => job.department === selectedDepartment);

  const perks = [
    {
      icon: '🏥',
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs'
    },
    {
      icon: '💰',
      title: 'Financial Benefits',
      description: 'Competitive salary, 401k matching, and equity participation opportunities'
    },
    {
      icon: '🏖️',
      title: 'Work-Life Balance',
      description: 'Flexible PTO, remote work options, and generous parental leave'
    },
    {
      icon: '📚',
      title: 'Learning & Growth',
      description: 'Professional development budget, conference attendance, and mentorship programs'
    },
    {
      icon: '🍕',
      title: 'Team Culture',
      description: 'Team outings, virtual happy hours, and collaborative work environment'
    },
    {
      icon: '🛠️',
      title: 'Modern Tools',
      description: 'Latest technology stack, ergonomic equipment, and development tools'
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Join Our <span className="text-indigo-600">Team</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Be part of a dynamic team that's shaping the future of technology.
            We're looking for passionate individuals ready to make an impact.
          </p>
        </section>

        {/* Why Join Us Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why TechNova?</h2>
            <p className="text-xl text-gray-600">More than just a job - a career that matters</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-5xl mb-6">{perk.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{perk.title}</h3>
                <p className="text-gray-600 leading-relaxed">{perk.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Job Openings */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">Find your next opportunity</p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  selectedDepartment === dept.id
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{dept.name}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  selectedDepartment === dept.id
                    ? 'bg-indigo-500 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {dept.count}
                </span>
              </button>
            ))}
          </div>

          {/* Jobs Grid */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <span className="mr-2">🏢</span>
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <span className="mr-2">💼</span>
                        {job.type}
                      </span>
                      <span className="flex items-center">
                        <span className="mr-2">💰</span>
                        {job.salary}
                      </span>
                    </div>
                  </div>
                  <button className="mt-4 lg:mt-0 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300">
                    Apply Now
                  </button>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{job.description}</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {job.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Culture Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Culture</h2>
              <p className="text-xl text-gray-600">What makes TechNova a great place to work</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation First</h3>
                <p className="text-gray-600">We encourage creative thinking and bold ideas that push boundaries.</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-6">🤝</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Collaboration</h3>
                <p className="text-gray-600">We believe in the power of teamwork and open communication.</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-6">📈</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Growth Mindset</h3>
                <p className="text-gray-600">Continuous learning and professional development are core to our culture.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">Don't See Your Perfect Role?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let's talk about opportunities.
            </p>
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg">
              Send Your Resume
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CareersPage;
