import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { Container, Button } from 'react-bootstrap';
import { FiSun, FiMoon } from 'react-icons/fi';
import './App.css';

function App() {
  return (
    <Router>
       <ThemeProvider>
      <Navbar />
       <Container fluid className="app-container">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Container>
      </ThemeProvider>
    </Router>
  );
}

const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useTheme();
  
  return (
    <Button 
      variant="link"
      className="theme-toggle"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
    </Button>
  );
};


export default App;