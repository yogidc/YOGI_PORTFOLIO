export interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  liveDemo: string;
  github: string;
  duration: string;
}

export interface Education {
  year: string;
  institution: string;
  qualification: string;
  score: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Theme {
  isDark: boolean;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    light: string;
    background: string;
    text: string;
    cardBg: string;
  };
}