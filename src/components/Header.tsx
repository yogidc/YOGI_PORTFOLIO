import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Experience', href: '/experience' },
    { name: 'Education', href: '/education' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Extracurricular', href: '/extracurricular' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-opacity-90 backdrop-blur-lg border-b"
      style={{ 
        backgroundColor: `${theme.colors.background}90`,
        borderColor: theme.colors.accent + '30'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold" style={{ color: theme.colors.accent }}>
            YD
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-colors duration-200 hover:text-opacity-80 ${
                  location.pathname === item.href ? 'font-semibold' : ''
                }`}
                style={{ 
                  color: location.pathname === item.href ? theme.colors.accent : theme.colors.text 
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors duration-200"
              style={{ backgroundColor: theme.colors.secondary }}
            >
              {theme.isDark ? (
                <Sun size={20} style={{ color: theme.colors.accent }} />
              ) : (
                <Moon size={20} style={{ color: theme.colors.accent }} />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg"
              style={{ backgroundColor: theme.colors.secondary }}
            >
              {isOpen ? (
                <X size={20} style={{ color: theme.colors.accent }} />
              ) : (
                <Menu size={20} style={{ color: theme.colors.accent }} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t"
          style={{ 
            backgroundColor: theme.colors.background,
            borderColor: theme.colors.accent + '30'
          }}
        >
          <div className="px-4 py-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block py-2 transition-colors duration-200 ${
                  location.pathname === item.href ? 'font-semibold' : ''
                }`}
                style={{ 
                  color: location.pathname === item.href ? theme.colors.accent : theme.colors.text 
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;