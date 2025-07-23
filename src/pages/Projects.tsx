import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Project } from '../types';

const Projects: React.FC = () => {
  const { theme } = useTheme();

  const projects: Project[] = [
    {
      id: 1,
      title: 'Timetable Generator',
      description: 'A full-stack app that auto-generates academic timetables using a backtracking algorithm.',
      features: ['CRUD Operations', 'Conflict Resolution', 'Elective Handling'],
      techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      liveDemo: 'https://timetable-generator-demo.netlify.app',
      github: 'https://github.com/yogithashree/timetable-generator',
      duration: 'Apr 2025–Jun 2025'
    },
    {
      id: 2,
      title: 'Agro Rent',
      description: 'A MERN-based equipment rental platform for farmers.',
      features: ['Authentication', 'Machine Listing', 'Booking System', 'Ratings & Reviews'],
      techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      liveDemo: 'https://agro-rent-demo.netlify.app',
      github: 'https://github.com/yogidc/AGRO_RENT',
      duration: 'Dec 2024–Feb 2025'
    },
    {
      id: 3,
      title: 'Meal Master',
      description: 'Chef booking platform replacing manual bookings.',
      features: ['Booking Form', 'Contact System', 'Static Frontend', 'Responsive Design'],
      techStack: ['HTML', 'CSS', 'JavaScript'],
      liveDemo: 'https://yogidc.github.io/MealMaster/',
      github: 'https://github.com/yogidc/MealMaster',
      duration: 'Jun 2024–Aug 2024'
    },
    {
      id: 3,
      title: ' RESTAURANT MENU',
      description: ' Created a simple basic responsive restaurant menu using Bootstrap, focusing on front-end layout and design.',
      features: [
        'Responsive Design',
        'Static Frontend'
      ],
      techStack: ['HTML', 'CSS', 'JavaScript','Bootstrap'],
      liveDemo: 'https://yogidc.github.io/Resturent/',
      github: 'https://github.com/yogidc/Resturent',
      duration: 'MAY 2024'
    },
    {
      id: 3,
      title: ' Tic-TOC-TOE',
      description: ' Created a simple basic responsive restaurant menu using Bootstrap, focusing on front-end layout and design.',
      features: [
        'Responsive Design',
        'Static Frontend',
        'interaction game'
      ],
      techStack: ['HTML', 'CSS', 'JavaScript'],
      liveDemo: 'https://yogidc.github.io/tic-tac-toe/',
      github: 'https://github.com/yogidc/tic-tac-toe',
      duration: 'MAY 2024'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: theme.colors.text }}>
              Featured <span style={{ color: theme.colors.accent }}>Projects</span>
            </h1>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: theme.colors.accent }} />
            <p className="mt-6 text-lg max-w-3xl mx-auto" style={{ color: theme.colors.text + 'CC' }}>
              A showcase of my development projects demonstrating full-stack capabilities, 
              problem-solving skills, and modern web development practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="rounded-2xl overflow-hidden shadow-lg border group hover:shadow-2xl transition-all duration-500"
                style={{ 
                  backgroundColor: theme.colors.cardBg,
                  borderColor: theme.colors.accent + '30'
                }}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Project Header */}
                <div
                  className="p-6 relative overflow-hidden"
                  style={{ backgroundColor: theme.colors.secondary }}
                >
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-32 h-32 rounded-full" 
                         style={{ backgroundColor: theme.colors.accent }} />
                    <div className="absolute bottom-4 left-4 w-20 h-20 rounded-full" 
                         style={{ backgroundColor: theme.colors.light }} />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold" style={{ color: theme.colors.accent }}>
                        {project.title}
                      </h3>
                      <Zap size={20} style={{ color: theme.colors.accent }} />
                    </div>
                    <div className="flex items-center text-sm" style={{ color: theme.colors.text + 'CC' }}>
                      <Calendar size={16} className="mr-2" />
                      {project.duration}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="mb-4 text-sm leading-relaxed" style={{ color: theme.colors.text + 'DD' }}>
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2" style={{ color: theme.colors.accent }}>
                      Key Features:
                    </h4>
                    <div className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="text-xs px-2 py-1 rounded-md"
                          style={{ 
                            backgroundColor: theme.colors.accent + '15',
                            color: theme.colors.text
                          }}
                        >
                          • {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2" style={{ color: theme.colors.accent }}>
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs px-2 py-1 rounded-full font-medium"
                          style={{ 
                            backgroundColor: theme.colors.accent,
                            color: theme.colors.primary
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                      style={{ 
                        backgroundColor: theme.colors.accent,
                        color: theme.colors.primary
                      }}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-4 py-2 rounded-lg font-medium border-2 transition-all duration-300 hover:scale-105"
                      style={{ 
                        borderColor: theme.colors.accent,
                        color: theme.colors.accent,
                        backgroundColor: 'transparent'
                      }}
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="text-center p-8 rounded-2xl border"
            style={{ 
              backgroundColor: theme.colors.cardBg,
              borderColor: theme.colors.accent + '30'
            }}
          >
            <h3 className="text-xl font-semibold mb-4" style={{ color: theme.colors.accent }}>
              More Projects Coming Soon!
            </h3>
            <p style={{ color: theme.colors.text }}>
              I'm constantly working on new projects and learning new technologies. 
              Check back regularly for updates!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;