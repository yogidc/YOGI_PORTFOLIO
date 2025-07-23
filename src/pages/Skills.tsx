import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Wrench } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Skills: React.FC = () => {
  const { theme } = useTheme();

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['C', 'C++', 'Python', 'Java', 'JavaScript']
    },
    {
      title: 'Frontend',
      icon: Globe,
      skills: ['HTML', 'CSS', 'Bootstrap', 'React.js']
    },
    {
      title: 'Backend',
      icon: Database,
      skills: ['Node.js', 'Express.js']
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MongoDB', 'MySQL']
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'Postman', 'VS Code']
    }
  ];

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: theme.colors.text }}>
              Technical <span style={{ color: theme.colors.accent }}>Skills</span>
            </h1>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: theme.colors.accent }} />
            <p className="mt-6 text-lg" style={{ color: theme.colors.text + 'CC' }}>
              A comprehensive overview of my technical expertise and proficiencies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-2xl p-6 shadow-lg border group hover:shadow-xl transition-all duration-300"
                style={{ 
                  backgroundColor: theme.colors.cardBg,
                  borderColor: theme.colors.accent + '30'
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center mb-6">
                  <div
                    className="p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: theme.colors.accent + '20' }}
                  >
                    <category.icon size={24} style={{ color: theme.colors.accent }} />
                  </div>
                  <h3 className="text-xl font-semibold" style={{ color: theme.colors.text }}>
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="relative"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.1 }}
                    >
                      <div
                        className="px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                        style={{ 
                          backgroundColor: theme.colors.accent + '10',
                          borderLeft: `4px solid ${theme.colors.accent}`
                        }}
                      >
                        <span className="font-medium" style={{ color: theme.colors.text }}>
                          {skill}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="text-center p-8 rounded-2xl border"
            style={{ 
              backgroundColor: theme.colors.secondary,
              borderColor: theme.colors.accent + '30'
            }}
          >
            <h3 className="text-2xl font-semibold mb-4" style={{ color: theme.colors.accent }}>
              Full-Stack Development
            </h3>
            <p className="text-lg mb-6" style={{ color: theme.colors.text }}>
              Specialized in MERN Stack development with a strong foundation in both frontend and backend technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['MongoDB', 'Express.js', 'React.js', 'Node.js'].map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-6 py-3 rounded-full font-semibold"
                  style={{ 
                    backgroundColor: theme.colors.accent,
                    color: theme.colors.primary
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;