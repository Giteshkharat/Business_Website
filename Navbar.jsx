import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-indigo-600 font-bold text-sm">TN</span>
              </div>
              <span>TechNova Solutions</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md transition duration-300 ${
                location.pathname === '/'
                  ? 'bg-white text-indigo-600'
                  : 'hover:bg-white hover:text-indigo-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md transition duration-300 ${
                location.pathname === '/about'
                  ? 'bg-white text-indigo-600'
                  : 'hover:bg-white hover:text-indigo-600'
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`px-3 py-2 rounded-md transition duration-300 ${
                location.pathname === '/services'
                  ? 'bg-white text-indigo-600'
                  : 'hover:bg-white hover:text-indigo-600'
              }`}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className={`px-3 py-2 rounded-md transition duration-300 ${
                location.pathname === '/portfolio'
                  ? 'bg-white text-indigo-600'
                  : 'hover:bg-white hover:text-indigo-600'
              }`}
            >
              Portfolio
            </Link>
            <Link
              to="/blog"
              className={`px-3 py-2 rounded-md transition duration-300 ${
                location.pathname === '/blog'
                  ? 'bg-white text-indigo-600'
                  : 'hover:bg-white hover:text-indigo-600'
              }`}
            >
              Blog
            </Link>
            <Link
              to="/careers"
              className={`px-3 py-2 rounded-md transition duration-300 ${
                location.pathname === '/careers'
                  ? 'bg-white text-indigo-600'
                  : 'hover:bg-white hover:text-indigo-600'
              }`}
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md transition duration-300 ${
                location.pathname === '/contact'
                  ? 'bg-white text-indigo-600'
                  : 'hover:bg-white hover:text-indigo-600'
              }`}
            >
              Contact
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-white hover:bg-opacity-20 transition duration-300"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none hover:bg-white hover:bg-opacity-20 p-2 rounded-md"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-indigo-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md transition duration-300 ${
                location.pathname === '/'
                  ? 'bg-white text-indigo-600'
                  : 'hover:bg-white hover:text-indigo-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md transition duration-300 ${
                location.pathname === '/about'
                  ? 'bg-white text-indigo-600'
                  : 'hover:bg-white hover:text-indigo-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`block px-3 py-2 rounded-md transition duration-300 ${
                location.pathname === '/services'
                  ? 'bg-white text-indigo-600'
                  : 'hover:bg-white hover:text-indigo-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className={`block px-3 py-2 rounded-md transition duration-300 ${
                location.pathname === '/portfolio'
                  ? 'bg-white text-indigo-600'
                  : 'hover:bg-white hover:text-indigo-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/blog"
              className={`block px-3 py-2 rounded-md transition duration-300 ${
                location.pathname === '/blog'
                  ? 'bg-white text-indigo-600'
                  : 'hover:bg-white hover:text-indigo-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/careers"
              className={`block px-3 py-2 rounded-md transition duration-300 ${
                location.pathname === '/careers'
                  ? 'bg-white text-indigo-600'
                  : 'hover:bg-white hover:text-indigo-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-md transition duration-300 ${
                location.pathname === '/contact'
                  ? 'bg-white text-indigo-600'
                  : 'hover:bg-white hover:text-indigo-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <button
              onClick={() => {
                toggleTheme();
                setIsOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-md hover:bg-white hover:bg-opacity-20 transition duration-300 flex items-center space-x-2"
            >
              {isDarkMode ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
