import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            <span className="section-number">04.</span> Get In Touch
          </h2>

          <p className="contact-intro">
            Interested in discussing a project or collaboration? I'm available
            for freelance opportunities and interesting architectural
            challenges.
          </p>
        </motion.div>

        <Row className="contact-content">
          <Col lg={5} className="contact-info">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="info-title">Contact Information</h3>

              <div className="info-item">
                <h4>Office Location</h4>
                <p>
                  123 Design Street, Creative District
                  <br />
                  Your City, ST 10001
                </p>
              </div>

              <div className="info-item">
                <h4>Email</h4>
                <p>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=roblesfernalynann@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    roblesfernalynann@gmail.com
                  </a>
                </p>
              </div>

              <div className="info-item">
                <h4>Phone</h4>
                <p>
                  <a href="tel:+15551234567">+1 (555) 123-4567</a>
                </p>
              </div>
            </motion.div>
          </Col>

          <Col lg={7} className="contact-form">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Form>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group controlId="formName">
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="e.g. Sarah Johnson"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="e.g. sarah@example.com"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group controlId="formProjectType">
                      <Form.Label>Project Type</Form.Label>
                      <Form.Select>
                        <option>Select project type</option>
                        <option>Residential</option>
                        <option>Commercial</option>
                        <option>Cultural</option>
                        <option>Public Space</option>
                        <option>Urban Design</option>
                        <option>Other</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group controlId="formProjectDetails">
                      <Form.Label>Project Details</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Tell me about your project, timeline, and budget..."
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12} className="text-end">
                    <Button
                      variant="primary"
                      type="submit"
                      className="submit-btn"
                    >
                      SEND MESSAGE
                    </Button>
                  </Col>
                </Row>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
