import React from 'react';

const AboutPage = () => {
  const values = [
    {
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions that redefine industry standards.",
      icon: "💡"
    },
    {
      title: "Excellence",
      description: "Quality is at the core of everything we do, ensuring exceptional results for our clients.",
      icon: "⭐"
    },
    {
      title: "Integrity",
      description: "We build trust through transparency, honesty, and ethical business practices.",
      icon: "🤝"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork, both internally and with our valued clients.",
      icon: "👥"
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "15+ years in tech leadership, passionate about driving digital transformation.",
      image: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Former Google engineer with expertise in scalable cloud architectures.",
      image: "MR"
    },
    {
      name: "Emily Watson",
      role: "Head of Design",
      bio: "Award-winning UX designer focused on creating intuitive user experiences.",
      image: "EW"
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      bio: "Full-stack expert specializing in modern web technologies and AI integration.",
      image: "DK"
    },
    {
      name: "Lisa Thompson",
      role: "Client Success Manager",
      bio: "Dedicated to ensuring our clients achieve maximum ROI from our solutions.",
      image: "LT"
    },
    {
      name: "Alex Johnson",
      role: "DevOps Engineer",
      bio: "Infrastructure specialist ensuring reliable, scalable, and secure deployments.",
      image: "AJ"
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-indigo-600">TechNova Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded in 2018, TechNova Solutions has been at the forefront of digital innovation,
            helping businesses transform their operations and achieve unprecedented growth through
            technology excellence.
          </p>
        </section>

        {/* Story Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    TechNova Solutions was born from a simple yet powerful idea: technology should
                    empower businesses, not complicate them. Our founders, Sarah Chen and Marcus Rodriguez,
                    recognized the gap between technological possibilities and practical business applications.
                  </p>
                  <p>
                    Starting as a small consultancy, we've grown into a full-service technology partner,
                    serving clients from startups to Fortune 500 companies. Our commitment to innovation,
                    quality, and client success has been the driving force behind our rapid expansion.
                  </p>
                  <p>
                    Today, we continue to push boundaries, adopting emerging technologies and methodologies
                    to deliver solutions that not only meet today's needs but anticipate tomorrow's challenges.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold mb-2">2018</div>
                      <div className="text-sm opacity-90">Founded</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-2">500+</div>
                      <div className="text-sm opacity-90">Projects</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-2">50+</div>
                      <div className="text-sm opacity-90">Team Members</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-2">98%</div>
                      <div className="text-sm opacity-90">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The talented individuals who make TechNova Solutions exceptional.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">{member.image}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-indigo-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Work with Us?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our innovative technology solutions.
            </p>
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg">
              Get in Touch
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
