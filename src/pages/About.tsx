import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Heart, Languages, Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const About: React.FC = () => {
  const { theme } = useTheme();

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = "https://drive.google.com/file/d/1XU1prsqRNAJCQtrxQxcXwiTQNC066rJi/view?usp=drivesdk";
    link.download = '/MY_Resume.pdf';
    link.click();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: theme.colors.text }}>
              About <span style={{ color: theme.colors.accent }}>Me</span>
            </h1>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: theme.colors.accent }} />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="rounded-2xl p-8 shadow-lg border"
            style={{ 
              backgroundColor: theme.colors.cardBg,
              borderColor: theme.colors.accent + '30'
            }}
          >
            <h2 className="text-2xl font-semibold mb-6" style={{ color: theme.colors.accent }}>
              My Journey
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: theme.colors.text }}>
              I am a passionate 4th-year Computer Science student Passionate in full-stack development 
              with experience in React.js, Node.js, and MongoDB. I thrive in dynamic environments and 
              excel at translating innovative ideas into scalable software solutions. My teamwork and 
              problem-solving skills complement my technical expertise. 
            </p>
            
            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: theme.colors.accent,
                color: theme.colors.primary
              }}
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={itemVariants}
              className="rounded-2xl p-6 shadow-lg border"
              style={{ 
                backgroundColor: theme.colors.cardBg,
                borderColor: theme.colors.accent + '30'
              }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center" style={{ color: theme.colors.accent }}>
                <User size={24} className="mr-2" />
                Personal Info
              </h3>
              <div className="space-y-3">
                <div className="flex items-center" style={{ color: theme.colors.text }}>
                  <MapPin size={18} className="mr-3" style={{ color: theme.colors.accent }} />
                  <span>P.E.S College of Engineering, Mandya</span>
                </div>
                <div className="flex items-center" style={{ color: theme.colors.text }}>
                  <Calendar size={18} className="mr-3" style={{ color: theme.colors.accent }} />
                  <span>Age: 21</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-2xl p-6 shadow-lg border"
              style={{ 
                backgroundColor: theme.colors.cardBg,
                borderColor: theme.colors.accent + '30'
              }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center" style={{ color: theme.colors.accent }}>
                <Heart size={24} className="mr-2" />
                Hobbies
              </h3>
              <div className="space-y-2">
                {['Art', 'Technology Exploration'].map((hobby, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 rounded-lg"
                    style={{ 
                      backgroundColor: theme.colors.accent + '20',
                      color: theme.colors.text
                    }}
                  >
                    {hobby}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="rounded-2xl p-6 shadow-lg border"
            style={{ 
              backgroundColor: theme.colors.cardBg,
              borderColor: theme.colors.accent + '30'
            }}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center" style={{ color: theme.colors.accent }}>
              <Languages size={24} className="mr-2" />
              Languages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg" style={{ backgroundColor: theme.colors.accent + '10' }}>
                <h4 className="font-semibold" style={{ color: theme.colors.text }}>English</h4>
                <p style={{ color: theme.colors.accent }}>Fluent</p>
              </div>
              <div className="text-center p-4 rounded-lg" style={{ backgroundColor: theme.colors.accent + '10' }}>
                <h4 className="font-semibold" style={{ color: theme.colors.text }}>Kannada</h4>
                <p style={{ color: theme.colors.accent }}>Native</p>
              </div>
              <div className="text-center p-4 rounded-lg" style={{ backgroundColor: theme.colors.accent + '10' }}>
                <h4 className="font-semibold" style={{ color: theme.colors.text }}>Hindi</h4>
                <p style={{ color: theme.colors.accent }}>Conversational</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;