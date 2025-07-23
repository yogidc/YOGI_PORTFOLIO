import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="border-t py-8 mt-16"
      style={{ 
        backgroundColor: theme.colors.secondary,
        borderColor: theme.colors.accent + '30'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a
              href="https://github.com/yogidc"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:opacity-80"
              style={{ color: theme.colors.accent }}
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/yogithashree-dc-783771266/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:opacity-80"
              style={{ color: theme.colors.accent }}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:yogithashreedc@gmail.com"
              className="transition-colors duration-200 hover:opacity-80"
              style={{ color: theme.colors.accent }}
            >
              <Mail size={24} />
            </a>
          </div>
          
          <div className="flex items-center space-x-2" style={{ color: theme.colors.text }}>
            <span>Built with</span>
            <Heart size={16} style={{ color: theme.colors.accent }} />
            <span>by YOGITHASHREE DC</span>
          </div>
        </div>
        
        <div className="text-center mt-4 pt-4 border-t" style={{ borderColor: theme.colors.accent + '30' }}>
          <p style={{ color: theme.colors.text + 'CC' }}>
            © 2025 YOGITHASHREE DC. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;