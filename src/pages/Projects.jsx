import React, { useState } from 'react';
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import archProject1 from '../assets/sample-project.jpg';
import archProject2 from '../assets/sample-project-2.jpg';
import archProject3 from '../assets/sample-project-3.jpg';
import archProject4 from '../assets/sample-project-4.jpg';

const Projects = () => {
  const [key, setKey] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Contemporary Art Museum',
      description: 'Award-winning museum design featuring innovative light wells and sustainable materials. The project achieved LEED Platinum certification.',
      tags: ['Cultural', 'Sustainable Design', '3D Modeling'],
      image: archProject1,
      year: '2023',
      location: 'Berlin, Germany',
      category: 'cultural'
    },
    {
      id: 2,
      title: 'Cliffside Residence',
      description: 'Luxury residential project with cantilevered design overlooking the Mediterranean. Features local stone and passive cooling techniques.',
      tags: ['Residential', 'Structural Innovation', 'Site Planning'],
      image: archProject2,
      year: '2022',
      location: 'Santorini, Greece',
      category: 'residential'
    },
    {
      id: 3,
      title: 'Mixed-Use Urban Development',
      description: 'High-density development combining retail, office and residential spaces with green roofs and pedestrian-friendly plazas.',
      tags: ['Urban Design', 'Zoning Analysis', 'Facade Design'],
      image: archProject3,
      year: '2021',
      location: 'Singapore',
      category: 'commercial'
    },
    {
      id: 4,
      title: 'Community Cultural Center',
      description: 'Public space designed for social interaction and cultural activities, featuring flexible event spaces and indigenous material palette.',
      tags: ['Public Architecture', 'Community Engagement', 'Accessibility'],
      image: archProject4,
      year: '2020',
      location: 'Melbourne, Australia',
      category: 'public'
    }
  ];

  const filteredProjects = key === 'all' 
    ? projects 
    : projects.filter(project => project.category === key);

  return (
    <section id="projects" className="fade-in">
      <Container>
        <h2 className="section-title">
          <span className="highlight">03.</span> Architectural Works
        </h2>
        
        <Tabs
          id="projects-tabs"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-5 arch-tabs"
        >
          <Tab eventKey="all" title="All Projects" />
          <Tab eventKey="cultural" title="Cultural" />
          <Tab eventKey="residential" title="Residential" />
          <Tab eventKey="commercial" title="Commercial" />
          <Tab eventKey="public" title="Public" />
        </Tabs>
        
        <Row className="g-4">
          {filteredProjects.map((project, index) => (
            <Col key={project.id} lg={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;