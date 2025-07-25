import React from "react";
import { Container, Alert, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const ContactSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, contact } = location.state || {};

  return (
    <Container className="py-5 text-center">
      <Alert variant="success" className="mt-5">
        <h2>Thank You, {name}!</h2>
        <p className="lead">
          Your message has been sent successfully.
        </p>
        <p>
          We've received your inquiry and will get back to you at {contact} within 24-48 hours.
        </p>
      </Alert>
      
      <Button 
        variant="primary" 
        onClick={() => navigate('/')}
        className="mt-4"
      >
        Return to Home
      </Button>
    </Container>
  );
};

export default ContactSuccess;