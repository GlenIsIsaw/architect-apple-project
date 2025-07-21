import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="py-5 text-center">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="social-icons mb-4">
            {[
              { icon: <FiGithub />, url: 'https://github.com' },
              { icon: <FiLinkedin />, url: 'https://linkedin.com' },
              { icon: <FiTwitter />, url: 'https://twitter.com' },
              { icon: <FiMail />, url: 'mailto:example@email.com' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-3"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-secondary mb-2">
            Designed & Built by Glen
          </p>
          <p className="text-secondary small">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer;