import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code, Users, Award, ExternalLink, Calendar } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Extracurricular: React.FC = () => {
  const { theme } = useTheme();

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

  const activities = [
    {
      title: 'Hackathon Participation',
      description: 'Actively participated in multiple hackathons, developing innovative solutions for real-world problems.',
      icon: Code,
      skills: ['Problem Solving', 'Team Collaboration', 'Innovation', 'Rapid Prototyping'],
      date: '2023-2024',
      certificateLink: 'https://drive.google.com/file/d/1JvlBhR9We9xg4vO5IQ_QBicCcsT_vZXx/view?usp=drive_link'
    },
    {
      title: 'Code-Debugging Competition',
      description: 'Participated in a Code-Debugging Competition organized by ISTE at PES College of Engineering, showcasing logical thinking and debugging skills.',
      icon: Code,
      skills: ['Debugging', 'Logical Reasoning', 'Problem Solving'],
      date: '2nd February 2024',
      certificateLink: 'https://drive.google.com/file/d/1GGIiKHT8LzfOcNuVZ5UyZd5nQNNsBLPY/view?usp=drive_link'
    },
    {
      title: 'Code Treasure Hunt',
      description: 'Participated in the Code Treasure Hunt event, applying logical thinking and programming knowledge to solve clues and challenges.',
      icon: Code,
      skills: ['Problem Solving', 'Teamwork', 'Logical Thinking', 'Code Navigation'],
      date: '2024',
      certificateLink: 'https://drive.google.com/file/d/12oP8cm3QwUfdAXfqBQ-5Z1UppFgCEVGK/view?usp=drive_link'
    },
    
  ];

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: theme.colors.text }}>
              Extracurricular <span style={{ color: theme.colors.accent }}>Activities</span>
            </h1>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: theme.colors.accent }} />
            <p className="mt-6 text-lg max-w-3xl mx-auto" style={{ color: theme.colors.text + 'CC' }}>
              Beyond academics, I actively participate in hackathons, coding competitions, and technical communities 
              to enhance my skills and contribute to the tech ecosystem.
            </p>
          </motion.div>

          {/* Certificates Section */}
          <div className="space-y-8">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-bold text-center mb-8" 
              style={{ color: theme.colors.accent }}
            >
              Activities
            </motion.h2>
            <div className="space-y-8">
              {activities.map((activity, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="rounded-2xl p-8 shadow-lg border"
                  style={{ 
                    backgroundColor: theme.colors.cardBg,
                    borderColor: theme.colors.accent + '30'
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg mr-4" style={{ backgroundColor: theme.colors.accent + '20' }}>
                      <activity.icon size={32} style={{ color: theme.colors.accent }} />
                    </div>
                    <div className="flex items-center text-sm" style={{ color: theme.colors.text + 'CC' }}>
                      <Calendar size={16} className="mr-1" />
                      {activity.date}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: theme.colors.text }}>
                    {activity.title}
                  </h3>
                  <p className="mb-3" style={{ color: theme.colors.text }}>
                    {activity.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {activity.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 rounded-full text-sm font-medium"
                        style={{ backgroundColor: theme.colors.accent + '20', color: theme.colors.text }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <a
                    href={activity.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 mt-4 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: theme.colors.accent + '20', color: theme.colors.accent }}
                  >
                    <Award size={16} className="mr-2" />
                    View Certificate
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            variants={itemVariants}
            className="text-center p-8 rounded-2xl border"
            style={{ 
              backgroundColor: theme.colors.secondary,
              borderColor: theme.colors.accent + '30'
            }}
          >
            <Trophy size={48} className="mx-auto mb-4" style={{ color: theme.colors.accent }} />
            <h3 className="text-2xl font-semibold mb-4" style={{ color: theme.colors.accent }}>
              Continuous Growth
            </h3>
            <p className="text-lg" style={{ color: theme.colors.text }}>
              Through active participation in extracurricular activities, I continuously challenge myself 
              to grow both technically and personally, building valuable skills that complement my academic journey.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Extracurricular;