import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner, Alert,
} from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [inputType, setInputType] = useState("email");
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    address: "", // Added address field
    projectType: "",
    projectDetails: ""
  });
const [errors, setErrors] = useState({});
  const [phoneError, setPhoneError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const navigate = useNavigate();

  const toggleInputType = () => {
    setInputType((prev) => (prev === "email" ? "phone" : "email"));
    setFormData(prev => ({ ...prev, contact: "" }));
    setPhoneError("");
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;

    // Allow only numbers
    if (!/^\d*$/.test(value)) return;

    // Limit to 11 digits
    if (value.length > 11) return;

    // Validate first two digits are '09'
    if (value.length >= 2 && !value.startsWith("09")) {
      setPhoneError("Phone number must start with 09");
    } else {
      setPhoneError("");
    }

    setFormData(prev => ({ ...prev, contact: value }));
    if (errors.contact) setErrors(prev => ({ ...prev, contact: "" }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (inputType === 'email') {
      if (!formData.contact.trim()) {
        newErrors.contact = 'Email is required';
      } else if (!/^\S+@\S+\.\S+$/.test(formData.contact)) {
        newErrors.contact = 'Invalid email format';
      }
    } else {
      if (!formData.contact.trim()) {
        newErrors.contact = 'Phone number is required';
      } else if (formData.contact.length !== 11 || !formData.contact.startsWith('09')) {
        newErrors.contact = 'Invalid phone number (must be 11 digits starting with 09)';
      }
    }
    
    // Added address validation
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    
    if (!formData.projectType || formData.projectType === 'Select project type') {
      newErrors.projectType = 'Please select a project type';
    }
    
    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Project details are required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmitError("");
  
  if (!validateForm()) return;
  
  setIsLoading(true);
  
  try {
    await emailjs.send(
     import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
        from_name: formData.name,
        from_contact: formData.contact,
        from_address: formData.address,
        project_type: formData.projectType,
        project_details: formData.projectDetails,
        date: new Date().toLocaleDateString() // Added timestamp
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Public key instead of user ID
    );
    
    navigate('/contact-success', {
      state: {
        name: formData.name,
        contact: formData.contact,
        timestamp: new Date().toISOString() // For tracking
      }
    });
    
  } catch (error) {
    console.error('Submission error:', error);
    setSubmitError(
      error.response?.text || 
      'Message failed. Please email directly at roblesfernalynam@gmail.com'
    );
  } finally {
    setIsLoading(false);
  }
};

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
                  Daet, Camarines Norte
                  <br />
                  4600
                </p>
              </div>

              <div className="info-item">
                <h4>Email</h4>
                <p>
                  <a
                    href="https://mail.google.com/mail/u/0/#inbox?compose=new&to=roblesfernalynann@gmail.com"
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
                  <a href="tel:+15551234567">+63 920 573 7388</a>
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
            {submitError && (
              <Alert variant="danger" className="mb-4">
                {submitError}
              </Alert>
            )}
            
            <Form onSubmit={handleSubmit}>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group controlId="formName">
                      <Form.Label>Your Name <span className="text-muted">*</span></Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="e.g. Sarah Johnson"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      {errors.name && (
                        <div className="text-muted small mt-1">{errors.name}</div>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formContact">
                      <Form.Label>
                        {inputType === "email" ? "Email Address" : "Phone Number"} <span className="text-muted">*</span>
                      </Form.Label>
                      <div className="fade-switch">
                        {inputType === "email" ? (
                          <Form.Control
                            type="email"
                            name="contact"
                            placeholder="e.g. sarah@example.com"
                            value={formData.contact}
                            onChange={handleChange}
                            required
                          />
                        ) : (
                          <>
                            <Form.Control
                              type="tel"
                              name="contact"
                              placeholder="e.g. 09123456789"
                              value={formData.contact}
                              onChange={handlePhoneChange}
                              maxLength={11}
                              required
                            />
                            {/* <div className="text-muted small mt-1">
                              Format: 09XXXXXXXXX (11 digits)
                            </div> */}
                          </>
                        )}
                      </div>
                      {(errors.contact || phoneError) && (
                        <div className="text-muted small mt-1">{errors.contact || phoneError}</div>
                      )}

                      <div className="text-end mt-2">
                        <button
                          type="button"
                          onClick={toggleInputType}
                          className="bg-transparent border-0 text-primary p-0"
                          style={{
                            textDecoration: "underline",
                            cursor: "pointer",
                          }}
                        >
                          {inputType === "email"
                            ? "Use phone number instead"
                            : "Use email instead"}
                        </button>
                      </div>
                    </Form.Group>
                  </Col>
                  {/* Added Address Field */}
                  <Col md={12}>
                    <Form.Group controlId="formAddress">
                      <Form.Label>Full Address<span className="text-muted">*</span></Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        name="address"
                        placeholder="e.g. 123 Main Street, Your City, Country"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                      {errors.address && (
                        <div className="text-muted small mt-1">{errors.address}</div>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group controlId="formProjectType">
                      <Form.Label>Project Type <span className="text-muted">*</span></Form.Label>
                      <Form.Select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select project type</option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Cultural">Cultural</option>
                        <option value="Public Space">Public Space</option>
                        <option value="Urban Design">Urban Design</option>
                        <option value="Other">Other</option>
                      </Form.Select>
                      {errors.projectType && (
                        <div className="text-muted small mt-1">{errors.projectType}</div>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group controlId="formProjectDetails">
                      <Form.Label>Project Details <span className="text-muted">*</span></Form.Label>
                      <Form.Control
                        as="textarea"
                        name="projectDetails"
                        rows={5}
                        placeholder="Tell me about your project, timeline, and budget..."
                        value={formData.projectDetails}
                        onChange={handleChange}
                        required
                      />
                      {errors.projectDetails && (
                        <div className="text-muted small mt-1">{errors.projectDetails}</div>
                      )}
                    </Form.Group>
                  </Col>
              <Col md={12} className="text-end">
                <Button
                  variant="primary"
                  type="submit"
                  className="submit-btn"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        className="me-2"
                      />
                      Sending...
                    </>
                  ) : (
                    "SEND MESSAGE"
                  )}
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