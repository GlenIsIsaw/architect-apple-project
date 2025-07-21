import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`navbar-custom ${scrolled ? "scrolled" : ""}`}
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Navbar.Brand href="#home" className="navbar-brand">
            <span className="brand-name">Architech Apple</span>
          </Navbar.Brand>
        </motion.div>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggler border-0"
        >
          <span className="toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {["About", "Skills", "Projects", "Contact"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
              >
                <Nav.Link
                  href={`#${item.toLowerCase()}`}
                  className="nav-link"
                  onClick={() => setExpanded(false)}
                >
                  <span className="nav-number">{`0${index + 1}.`}</span>
                  <span className="nav-text">{item}</span>
                </Nav.Link>
              </motion.div>
            ))}
          </Nav>

          <div className="social-icons d-flex mt-3 mt-lg-0 ms-lg-4">
            {[
              { icon: <FiLinkedin />, url: "https://linkedin.com" },
              {
                icon: <FiFacebook />,
                url: "https://www.facebook.com/fernalynanne.robles.7",
              },
              {
                icon: <HiOutlineMail />,
                url: `https://mail.google.com/mail/?view=cm&fs=1&to=studio@yourarchitecture.com&su=${encodeURIComponent(
                  "Project Inquiry from Your Website"
                )}&body=${encodeURIComponent(
                  "Hello,\n\nI'm interested in discussing a potential project. Here are some details:\n\n- Project Type: \n- Budget: \n- Timeline: \n\nLooking forward to your reply.\n\nBest regards,\n[Your Name]"
                )}`,
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
