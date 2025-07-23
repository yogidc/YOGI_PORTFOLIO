import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Home: React.FC = () => {
  const { theme } = useTheme();

  const handleDownloadResume = () => {
    // Create a dummy PDF download
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1XU1prsqRNAJCQtrxQxcXwiTQNC066rJi/view?usp=drivesdk';
    link.download = '/MY_Resume.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              style={{ color: theme.colors.text }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              YOGITHASHREE
              <span className="block" style={{ color: theme.colors.accent }}>
                DC
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl mb-8 opacity-90"
              style={{ color: theme.colors.text }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              EX-ASE Intern at ACCENTURE | DSA | Passionate Web Developer | MERN Stack | CSE Final Year Student
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                style={{ 
                  backgroundColor: theme.colors.accent,
                  color: theme.colors.primary
                }}
              >
                Explore Portfolio
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center px-8 py-4 rounded-lg font-semibold border-2 transition-all duration-300 hover:scale-105"
                style={{ 
                  borderColor: theme.colors.accent,
                  color: theme.colors.accent,
                  backgroundColor: 'transparent'
                }}
              >
                <Download size={20} className="mr-2" />
                Download Resume
              </button>
            </motion.div>
            
            <motion.div
              className="flex items-center space-x-6 mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <span style={{ color: theme.colors.text + 'CC' }}>Connect with me:</span>
              <a
                href="https://github.com/yogidc"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: theme.colors.secondary }}
              >
                <Github size={24} style={{ color: theme.colors.accent }} />
              </a>
              <a
                href="www.linkedin.com/in/yogithashree-dc-783771266"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: theme.colors.secondary }}
              >
                <Linkedin size={24} style={{ color: theme.colors.accent }} />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative z-10">
              <motion.div
                className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 shadow-2xl"
                style={{ borderColor: theme.colors.accent }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQHQQ055H25KoQ/profile-displayphoto-shrink_800_800/B56ZP8Y7XAH0Ag-/0/1735106214675?e=1755734400&v=beta&t=zVxBDcSKIyE1TafYhFXjhg30DKn7V7W7fayd-nJgP-Y"
                  alt="YOGITHASHREE D C"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full opacity-60"
                style={{ backgroundColor: theme.colors.accent }}
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full opacity-60"
                style={{ backgroundColor: theme.colors.light }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;