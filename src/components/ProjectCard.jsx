import React from 'react';
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <Card className="project-card h-100">
      <div className="project-image-container">
        <Card.Img variant="top" src={project.image} alt={project.title} />
        <div className="project-overlay">
          <span className="project-year">{project.year}</span>
          <span className="project-location">{project.location}</span>
        </div>
      </div>
      <Card.Body>
        <Card.Title className="project-title">{project.title}</Card.Title>
        <Card.Text className="project-description">
          {project.description}
        </Card.Text>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;