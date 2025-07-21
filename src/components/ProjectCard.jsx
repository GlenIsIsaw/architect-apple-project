import React from 'react';
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  return (
    <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
      <Card className="project-card h-100 border-0 shadow-sm">
        {/* Project Image - now using project.image from props */}
        <div className="project-image-container">
          <Card.Img 
            variant="top" 
            src={project.image} 
            alt={project.title}
            className="project-image"
          />
          <div className="image-overlay" />
        </div>
        
        <Card.Body className="p-4">
          <div className="d-flex justify-content-between align-items-start mb-3">
            <Card.Title className="mb-2 fs-5 fw-bold">{project.title}</Card.Title>
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="me-2 text-secondary">
                  <FiGithub size={18} />
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-secondary">
                  <FiExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
          <Card.Text className="text-secondary mb-3 small">{project.description}</Card.Text>
          <div className="project-tags">
            {project.tags.map((tag, index) => (
              <span key={index} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;