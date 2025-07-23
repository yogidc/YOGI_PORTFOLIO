import React, { createContext, useContext, useState, useEffect } from 'react';
import { Theme } from '../types';

const lightTheme: Theme = {
  isDark: false,
  colors: {
    primary: '#0A192F',
    secondary: '#112240',
    accent: '#64FFDA',
    light: '#E6F1FF',
    background: '#ffffff',
    text: '#0A192F',
    cardBg: '#ffffff',
  },
};

const darkTheme: Theme = {
  isDark: true,
  colors: {
    primary: '#0A192F',
    secondary: '#112240',
    accent: '#64FFDA',
    light: '#E6F1FF',
    background: '#0A192F',
    text: '#E6F1FF',
    cardBg: '#112240',
  },
};

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) {
      setIsDark(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolio-theme', JSON.stringify(isDark));
    document.documentElement.style.setProperty('--bg-color', isDark ? darkTheme.colors.background : lightTheme.colors.background);
    document.documentElement.style.setProperty('--text-color', isDark ? darkTheme.colors.text : lightTheme.colors.text);
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ backgroundColor: theme.colors.background, color: theme.colors.text, minHeight: '100vh' }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};