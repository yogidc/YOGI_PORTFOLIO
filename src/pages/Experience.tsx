import React from 'react';
import { motion } from 'framer-motion';
import { Building, Calendar, Award, Users } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Experience: React.FC = () => {
  const { theme } = useTheme();

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
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const certificateLink = "https://drive.google.com/file/d/1ZdIOkzIaKhfDU4UFQbpE31QioxPNIeWc/view?usp=drive_link";

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
              Professional <span style={{ color: theme.colors.accent }}>Experience</span>
            </h1>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: theme.colors.accent }} />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative"
          >
            {/* Timeline line */}
            <div
              className="absolute left-8 top-0 bottom-0 w-1"
              style={{ backgroundColor: theme.colors.accent + '30' }}
            />

            <div className="relative">
              {/* Experience item */}
              <motion.div
                className="flex items-start space-x-6"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center border-4"
                  style={{ 
                    backgroundColor: theme.colors.accent,
                    borderColor: theme.colors.background
                  }}
                >
                  <Building size={24} style={{ color: theme.colors.primary }} />
                </div>

                <div
                  className="flex-1 rounded-2xl p-8 shadow-lg border"
                  style={{ 
                    backgroundColor: theme.colors.cardBg,
                    borderColor: theme.colors.accent + '30'
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold" style={{ color: theme.colors.accent }}>
                      Package App Development Associate
                    </h2>
                    <div className="flex items-center mt-2 md:mt-0" style={{ color: theme.colors.text }}>
                      <Calendar size={18} className="mr-2" />
                      <span>2 Months</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-4" style={{ color: theme.colors.text }}>
                    Intern @ Accenture
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center" style={{ color: theme.colors.accent }}>
                        <Award size={18} className="mr-2" />
                        Skills Gained
                      </h4>
                      <ul className="space-y-2">
                        {['ORDER MANAGEMENT','SAP MM','P2P', 'ABAP'].map((skill, index) => (
                          <li
                            key={index}
                            className="px-3 py-2 rounded-lg"
                            style={{ 
                              backgroundColor: theme.colors.accent + '20',
                              color: theme.colors.text
                            }}
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center" style={{ color: theme.colors.accent }}>
                        <Users size={18} className="mr-2" />
                        Training Programs
                      </h4>
                      <ul className="space-y-2">
                        {['RPA', 'Cloud', 'GenAI', 'SAP S/4 HANA'].map((training, index) => (
                          <li
                            key={index}
                            className="px-3 py-2 rounded-lg"
                            style={{ 
                              backgroundColor: theme.colors.light + '20',
                              color: theme.colors.text
                            }}
                          >
                            {training}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: theme.colors.secondary + '50' }}
                  >
                    <h4 className="font-semibold mb-2" style={{ color: theme.colors.accent }}>
                      Key Project: McCormick Implementation
                    </h4>
                    <p style={{ color: theme.colors.text }}>
                      Contributed to the McCormick implementation project, gaining hands-on experience 
                      in enterprise-level software development and business process optimization.
                    </p>
                  </div>
                  <a
                    href={certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 mt-4 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: theme.colors.accent + '20',
                      color: theme.colors.accent
                    }}
                  >
                    <Award size={16} className="mr-2" />
                    View Certificate
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center p-8 rounded-2xl border"
            style={{ 
              backgroundColor: theme.colors.cardBg,
              borderColor: theme.colors.accent + '30'
            }}
          >
            <h3 className="text-xl font-semibold mb-4" style={{ color: theme.colors.accent }}>
              Looking for New Opportunities
            </h3>
            <p style={{ color: theme.colors.text }}>
              I'm actively seeking full-time opportunities in software development where I can 
              contribute my skills and continue growing as a developer.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;