import React, { useState } from 'react';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Cloud Computing: Trends to Watch in 2024',
      excerpt: 'Explore the latest trends shaping the cloud computing landscape and how businesses can leverage them for competitive advantage.',
      category: 'cloud',
      author: 'Sarah Chen',
      date: '2024-01-15',
      readTime: '5 min read',
      image: '☁️',
      tags: ['Cloud Computing', 'AWS', 'Technology Trends']
    },
    {
      id: 2,
      title: 'Building Scalable React Applications: Best Practices',
      excerpt: 'Learn essential patterns and techniques for creating maintainable, high-performance React applications at scale.',
      category: 'development',
      author: 'Marcus Rodriguez',
      date: '2024-01-12',
      readTime: '8 min read',
      image: '⚛️',
      tags: ['React', 'JavaScript', 'Frontend Development']
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: Protecting Your Digital Assets',
      excerpt: 'Understanding the evolving threat landscape and implementing robust security measures in an AI-driven world.',
      category: 'security',
      author: 'Emily Watson',
      date: '2024-01-10',
      readTime: '6 min read',
      image: '🔒',
      tags: ['Cybersecurity', 'AI', 'Data Protection']
    },
    {
      id: 4,
      title: 'Data-Driven Decision Making: From Raw Data to Business Insights',
      excerpt: 'How modern businesses are transforming data into actionable insights using advanced analytics and machine learning.',
      category: 'data',
      author: 'David Kim',
      date: '2024-01-08',
      readTime: '7 min read',
      image: '📊',
      tags: ['Data Analytics', 'Machine Learning', 'Business Intelligence']
    },
    {
      id: 5,
      title: 'Mobile App Development: Native vs Cross-Platform',
      excerpt: 'Comparing development approaches and helping you choose the right strategy for your mobile application needs.',
      category: 'mobile',
      author: 'Lisa Thompson',
      date: '2024-01-05',
      readTime: '6 min read',
      image: '📱',
      tags: ['Mobile Development', 'React Native', 'iOS', 'Android']
    },
    {
      id: 6,
      title: 'DevOps Culture: Building High-Performing Development Teams',
      excerpt: 'Exploring the principles and practices that drive successful DevOps implementation and team collaboration.',
      category: 'devops',
      author: 'Alex Johnson',
      date: '2024-01-03',
      readTime: '9 min read',
      image: '🚀',
      tags: ['DevOps', 'Team Culture', 'CI/CD', 'Automation']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'development', name: 'Development', count: blogPosts.filter(p => p.category === 'development').length },
    { id: 'cloud', name: 'Cloud', count: blogPosts.filter(p => p.category === 'cloud').length },
    { id: 'security', name: 'Security', count: blogPosts.filter(p => p.category === 'security').length },
    { id: 'data', name: 'Data & AI', count: blogPosts.filter(p => p.category === 'data').length },
    { id: 'mobile', name: 'Mobile', count: blogPosts.filter(p => p.category === 'mobile').length },
    { id: 'devops', name: 'DevOps', count: blogPosts.filter(p => p.category === 'devops').length }
  ];

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Tech <span className="text-indigo-600">Insights</span> & Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, best practices, and insights from our
            team of technology experts. Discover what's shaping the future of digital innovation.
          </p>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{category.name}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  selectedCategory === category.id
                    ? 'bg-indigo-500 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="text-5xl mb-6 text-center">{post.image}</div>

                  <div className="mb-4">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium capitalize">
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight hover:text-indigo-600 transition-colors duration-300">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
                    <div className="flex items-center space-x-4">
                      <span>By {post.author}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-12 mb-20">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Stay in the Loop</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get the latest tech insights and industry updates delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* Featured Topics */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Topics</h2>
            <p className="text-xl text-gray-600">What our readers are interested in</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { topic: 'React Development', count: '45 articles' },
              { topic: 'Cloud Architecture', count: '32 articles' },
              { topic: 'Cybersecurity', count: '28 articles' },
              { topic: 'Data Science', count: '36 articles' },
              { topic: 'Mobile Apps', count: '24 articles' },
              { topic: 'DevOps', count: '31 articles' },
              { topic: 'AI & Machine Learning', count: '29 articles' },
              { topic: 'Web Performance', count: '22 articles' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
                <h3 className="font-bold text-gray-900 mb-2">{item.topic}</h3>
                <p className="text-indigo-600 text-sm">{item.count}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">Have a Tech Question?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Can't find what you're looking for? Our experts are here to help with personalized advice and solutions.
            </p>
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg">
              Contact Our Experts
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;
