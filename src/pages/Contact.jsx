import React, { useRef, useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiSend, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const Contact = () => {
  const form = useRef();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then((result) => {
      setShowSuccess(true);
      form.current.reset();
      setTimeout(() => setShowSuccess(false), 5000);
    }, (error) => {
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    })
    .finally(() => {
      setIsSending(false);
    });
  };

  return (
    <section id="contact" className="fade-in">
      <Container>
        <h2 className="section-title">
          <span className="highlight">04.</span> Get In Touch
        </h2>
        <Row className="justify-content-center">
          <Col lg={10}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-center text-secondary mb-5">
                Interested in discussing a project or collaboration? I'm available for freelance 
                opportunities and interesting architectural challenges.
              </p>
              
              <Row>
                <Col lg={6} className="mb-5 mb-lg-0">
                  <div className="contact-info">
                    <h4 className="mb-4">Contact Information</h4>
                    
                    <div className="contact-item">
                      <FiMapPin className="contact-icon" />
                      <div>
                        <h6>Studio Location</h6>
                        <p className="text-secondary">123 Design Street, Creative District<br />Your City, ST 10001</p>
                      </div>
                    </div>
                    
                    <div className="contact-item">
                      <FiMail className="contact-icon" />
                      <div>
                        <h6>Email</h6>
                        <p className="text-secondary">studio@yourarchitecture.com</p>
                      </div>
                    </div>
                    
                    <div className="contact-item">
                      <FiPhone className="contact-icon" />
                      <div>
                        <h6>Phone</h6>
                        <p className="text-secondary">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </div>
                </Col>
                
                <Col lg={6}>
                  {showSuccess && (
                    <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                      Your message has been sent successfully. I'll get back to you soon!
                    </Alert>
                  )}
                  
                  {showError && (
                    <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
                      There was an error sending your message. Please try again or contact me directly via email.
                    </Alert>
                  )}
                  
                  <Form ref={form} onSubmit={sendEmail}>
                    <Form.Group className="mb-4" controlId="formName">
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="user_name" 
                        placeholder="e.g. Sarah Johnson" 
                        required 
                      />
                    </Form.Group>
                    
                    <Form.Group className="mb-4" controlId="formEmail">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control 
                        type="email" 
                        name="user_email" 
                        placeholder="e.g. sarah@example.com" 
                        required 
                      />
                    </Form.Group>
                    
                    <Form.Group className="mb-4" controlId="formSubject">
                      <Form.Label>Project Type</Form.Label>
                      <Form.Select name="subject" required>
                        <option value="">Select project type</option>
                        <option value="Residential Design">Residential Design</option>
                        <option value="Commercial Space">Commercial Space</option>
                        <option value="Urban Planning">Urban Planning</option>
                        <option value="Interior Design">Interior Design</option>
                        <option value="Other Inquiry">Other Inquiry</option>
                      </Form.Select>
                    </Form.Group>
                    
                    <Form.Group className="mb-4" controlId="formMessage">
                      <Form.Label>Project Details</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        name="message" 
                        rows={5} 
                        placeholder="Tell me about your project, timeline, and budget..." 
                        required 
                      />
                    </Form.Group>
                    
                    <div className="text-end">
                      <Button 
                        variant="primary" 
                        type="submit" 
                        className="btn-custom"
                        disabled={isSending}
                      >
                        {isSending ? 'Sending...' : 'Send Message'} <FiSend className="ms-2" />
                      </Button>
                    </div>
                  </Form>
                </Col>
              </Row>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;