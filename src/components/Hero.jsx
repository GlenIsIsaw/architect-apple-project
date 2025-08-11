import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import architectImage from '../assets-webp/sample-project.webp'; // Your professional image

const Hero = () => {
  return (
    <section id="home" className="hero-section d-flex align-items-center">
      <Container>
        <Row className="align-items-center min-vh-80">
          <Col lg={6} className="hero-content pe-lg-5">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h6 className="text-uppercase letter-spacing mb-3">Architect & Designer</h6>
              <h1 className="display-2 fw-light mb-3">Fernalyn Robles</h1>
              <h2 className="display-5 fw-light mb-4 text-muted">
                I design spaces that <span className="text-dark">inspire</span>
              </h2>
              <p className="lead mb-4">
                With {new Date().getFullYear() - 2015}+ years of experience, I create thoughtful 
                architecture that blends form, function, and sustainability.
              </p>
              <div className="d-flex gap-3">
                <Button 
                  href="#projects" 
                  variant="outline-dark" 
                  size="lg"
                  className="px-4 py-2 border-2"
                >
                  View Portfolio
                </Button>
                <Button 
                  href="#contact" 
                  variant="dark" 
                  size="lg"
                  className="px-4 py-2"
                >
                  Contact Me
                </Button>
              </div>
            </motion.div>
          </Col>
          <Col lg={6} className="d-none d-lg-block">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-image-container"
            >
              <img 
                src={architectImage} 
                alt="Fernalyn Robles - Architect"
                loading='lazy' 
                className="hero-image img-fluid"
              />
            </motion.div>
          </Col>
        </Row>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="scroll-down text-center mt-5"
        >
          <a href="#about" className="text-dark">
            <FiChevronDown size={28} className="animate-bounce" />
          </a>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;