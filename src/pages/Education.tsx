import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Education } from '../types';

const EducationPage: React.FC = () => {
  const { theme } = useTheme();

  const educationData: Education[] = [
    {
      year: '2022–Present',
      institution: 'P.E.S College of Engineering, Mandya',
      qualification: 'B.Tech CSE',
      score: 'CGPA: 8.97'
    },
    {
      year: '2020–2022',
      institution: 'Arvind PU College, Kunigal',
      qualification: 'Pre-University',
      score: '89.33%'
    },
    {
      year: '2019',
      institution: 'Poorna Prajna Convent, Maddur',
      qualification: 'Secondary School (SSLC)',
      score: '95.54%'
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
              Educational <span style={{ color: theme.colors.accent }}>Journey</span>
            </h1>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: theme.colors.accent }} />
          </motion.div>

          {/* Desktop Table View */}
          <motion.div
            variants={itemVariants}
            className="hidden md:block overflow-hidden rounded-2xl shadow-lg border"
            style={{ borderColor: theme.colors.accent + '30' }}
          >
            <table className="w-full">
              <thead style={{ backgroundColor: theme.colors.secondary }}>
                <tr>
                  <th className="px-6 py-4 text-left font-semibold" style={{ color: theme.colors.accent }}>
                    Year
                  </th>
                  <th className="px-6 py-4 text-left font-semibold" style={{ color: theme.colors.accent }}>
                    Institution
                  </th>
                  <th className="px-6 py-4 text-left font-semibold" style={{ color: theme.colors.accent }}>
                    Qualification
                  </th>
                  <th className="px-6 py-4 text-left font-semibold" style={{ color: theme.colors.accent }}>
                    Score
                  </th>
                </tr>
              </thead>
              <tbody style={{ backgroundColor: theme.colors.cardBg }}>
                {educationData.map((item, index) => (
                  <motion.tr
                    key={index}
                    className="border-t transition-colors duration-200 hover:bg-opacity-50"
                    style={{ 
                      borderColor: theme.colors.accent + '20',
                    }}
                    whileHover={{ 
                      backgroundColor: theme.colors.accent + '10'
                    }}
                  >
                    <td className="px-6 py-4" style={{ color: theme.colors.text }}>
                      <div className="flex items-center">
                        <Calendar size={18} className="mr-2" style={{ color: theme.colors.accent }} />
                        {item.year}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium" style={{ color: theme.colors.text }}>
                      {item.institution}
                    </td>
                    <td className="px-6 py-4" style={{ color: theme.colors.text }}>
                      <div className="flex items-center">
                        <GraduationCap size={18} className="mr-2" style={{ color: theme.colors.accent }} />
                        {item.qualification}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className="px-3 py-1 rounded-full text-sm font-semibold"
                        style={{ 
                          backgroundColor: theme.colors.accent,
                          color: theme.colors.primary
                        }}
                      >
                        {item.score}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-6">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-2xl p-6 shadow-lg border"
                style={{ 
                  backgroundColor: theme.colors.cardBg,
                  borderColor: theme.colors.accent + '30'
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center" style={{ color: theme.colors.accent }}>
                    <Calendar size={18} className="mr-2" />
                    <span className="font-semibold">{item.year}</span>
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-sm font-semibold"
                    style={{ 
                      backgroundColor: theme.colors.accent,
                      color: theme.colors.primary
                    }}
                  >
                    {item.score}
                  </span>
                </div>
                
                <h3 className="font-bold mb-2" style={{ color: theme.colors.text }}>
                  {item.institution}
                </h3>
                
                <div className="flex items-center" style={{ color: theme.colors.text }}>
                  <GraduationCap size={18} className="mr-2" style={{ color: theme.colors.accent }} />
                  <span>{item.qualification}</span>
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
            <Award size={48} className="mx-auto mb-4" style={{ color: theme.colors.accent }} />
            <h3 className="text-xl font-semibold mb-2" style={{ color: theme.colors.accent }}>
              Academic Excellence
            </h3>
            <p style={{ color: theme.colors.text }}>
              Consistent high performance throughout my academic journey, with a strong foundation 
              in Computer Science and Engineering principles.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default EducationPage;
