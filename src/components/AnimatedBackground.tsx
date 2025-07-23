import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const AnimatedBackground: React.FC = () => {
  const { theme } = useTheme();

  const waves = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {waves.map((wave) => (
        <motion.div
          key={wave}
          className="absolute opacity-10"
          initial={{ x: -100, y: Math.random() * window.innerHeight }}
          animate={{
            x: window.innerWidth + 100,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: 15 + wave * 2,
            repeat: Infinity,
            ease: 'linear',
            delay: wave * 2,
          }}
        >
          <svg
            width="200"
            height="100"
            viewBox="0 0 200 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 50 Q50 20 100 50 T200 50 V100 H0 Z"
              fill={theme.colors.accent}
              fillOpacity="0.3"
            />
          </svg>
        </motion.div>
      ))}
      
      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full opacity-20"
          style={{ backgroundColor: theme.colors.accent }}
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight 
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 50 - 25, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;