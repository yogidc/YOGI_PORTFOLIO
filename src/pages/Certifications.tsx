import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Certifications: React.FC = () => {
  const { theme } = useTheme();

  const certifications = [
    {
      title: 'AI-ML Virtual Internship',
      provider: 'EduSkills',
      description: 'Comprehensive training in Artificial Intelligence and Machine Learning concepts, algorithms, and practical applications.',
      skills: ['Machine Learning', 'Artificial Intelligence', 'Data Science', 'Python'],
      date: '2024',
      link: 'https://media.licdn.com/dms/image/v2/D4E22AQFTaytZxm2dmg/feedshare-shrink_800/feedshare-shrink_800/0/1699066454270?e=1755734400&v=beta&t=XbHZo8RpaqWxolUWvWF8Z_OF7rEyu5qCxK2a0hffFb0'
    },
    {
      title: 'AWS Cloud Virtual Internship',
      provider: 'EduSkills',
      description: 'Hands-on experience with Amazon Web Services cloud platform, including core services and deployment strategies.',
      skills: ['AWS', 'Cloud Computing', 'EC2', 'S3', 'Lambda'],
      date: '2024',
      link: '#'
    },
    {
      title: 'Python Programming, JAVA Programming, Software Testing, Parallel Programming',
      provider: 'Infosys Springboard',
      description: 'Advanced programming certification to get more knowledge about the concepts',
      skills: ['Python', 'Data Structures', 'Algorithms', 'OOP','JAVA','Software Testing','parallel programming'],
      date: '2024',
      link: 'https://infyspringboard.onwingspan.com/web/en/app/profile/learning/history'
    },
    
    {
      title: 'Web Development Using React Framework',
      provider: 'DLithe & PES College of Engineering, Mandya',
      description: 'Intensive 10-day training program on essential concepts and practical applications of React, focused on building dynamic and responsive web applications.',
      skills: ['React.js', 'Web Development', 'Frontend Development', 'Responsive Design'],
      date: '4th - 15th June 2024',
      link: 'https://drive.google.com/file/d/1gAOxuGNx6kyCc8nCVjbb1TxEXG5Z4amh/view?usp=sharing'
    },
    {
      title: 'Data Science, AI and Cyber Security & Privacy Masterclass',
      provider: 'Deakin University & iSTEM Mentors',
      description: 'Masterclass covering foundational and interdisciplinary concepts in data science, artificial intelligence, cyber security, and privacy, with an assessment to validate understanding.',
      skills: ['Data Science', 'Artificial Intelligence', 'Cyber Security', 'Data Privacy'],
      date: '12th April 2024',
      link: 'https://drive.google.com/file/d/1_J15R8A2PE5fXw2iBjDwJbfSlnRQ7T8P/view?usp=drive_link'
    },
    
    {
      title: 'Foundation of Cybersecurity',
      provider: 'Google -Coursera',
      description: 'Data analysis and visualization techniques using modern tools and statistical methods.',
      skills: ['Data Analytics', 'Data Visualization', 'Statistics', 'Business Intelligence'],
      date: '16th January2024',
      link: 'https://media.licdn.com/dms/image/v2/D5622AQGxLpm32J1ojA/feedshare-shrink_800/feedshare-shrink_800/0/1705496617634?e=1755734400&v=beta&t=mYZmOIQh_MXQM7T-KkOXsx7gPTS1yjliNijn6Ia7IF0'
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
              Professional <span style={{ color: theme.colors.accent }}>Certifications</span>
            </h1>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: theme.colors.accent }} />
            <p className="mt-6 text-lg max-w-3xl mx-auto" style={{ color: theme.colors.text + 'CC' }}>
              Continuous learning and skill development through industry-recognized certification programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-2xl p-6 shadow-lg border group hover:shadow-xl transition-all duration-300"
                style={{ 
                  backgroundColor: theme.colors.cardBg,
                  borderColor: theme.colors.accent + '30'
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div
                      className="p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: theme.colors.accent + '20' }}
                    >
                      <Award size={24} style={{ color: theme.colors.accent }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold" style={{ color: theme.colors.text }}>
                        {cert.title}
                      </h3>
                      <p className="font-medium" style={{ color: theme.colors.accent }}>
                        {cert.provider}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm" style={{ color: theme.colors.text + 'CC' }}>
                    <Calendar size={16} className="mr-1" />
                    {cert.date}
                  </div>
                </div>

                <p className="mb-4 leading-relaxed" style={{ color: theme.colors.text + 'DD' }}>
                  {cert.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2" style={{ color: theme.colors.accent }}>
                    Skills Acquired:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 rounded-full text-sm font-medium"
                        style={{ 
                          backgroundColor: theme.colors.accent + '20',
                          color: theme.colors.text
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                  style={{ 
                    backgroundColor: theme.colors.accent + '20',
                    color: theme.colors.accent
                  }}
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Certificate
                </a>
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
            <Award size={48} className="mx-auto mb-4" style={{ color: theme.colors.accent }} />
            <h3 className="text-2xl font-semibold mb-4" style={{ color: theme.colors.accent }}>
              Commitment to Excellence
            </h3>
            <p className="text-lg" style={{ color: theme.colors.text }}>
              These certifications represent my dedication to staying current with industry trends 
              and continuously expanding my technical expertise in emerging technologies.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;