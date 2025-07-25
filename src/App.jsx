import { useEffect } from 'react';
import { init } from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContactSuccess from './components/ContactSuccess';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ProjectStatus from './components/ProjectStatus';
import { ThemeProvider } from './context/ThemeContext';
import { Container, Button } from 'react-bootstrap';
import { FiSun, FiMoon } from 'react-icons/fi';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize with environment variable
   init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Container fluid className="app-container">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <ProjectStatus />
                <Contact />
              </>
            } />
            <Route path="/contact-success" element={<ContactSuccess />} />
          </Routes>
          <Footer />
        </Container>
      </Router>
    </ThemeProvider>
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