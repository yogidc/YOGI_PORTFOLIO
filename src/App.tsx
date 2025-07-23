import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Extracurricular from './pages/Extracurricular';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="relative min-h-screen">
          <AnimatedBackground />
          <Header />
          <main className="pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/extracurricular" element={<Extracurricular />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;