import React, { useState } from 'react';
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import archProject1 from '../assets-webp/BigtasResidential.webp';
import archProject2 from '../assets-webp/GomezBuilding.webp';
import archProject3 from '../assets-webp/AncestralHouse.JPG.webp';
import archProject4 from '../assets-webp/SiennaHotel.webp';
import archProject5 from '../assets-webp/DenrMay.webp';
import archProject6 from '../assets-webp/rtc3.webp';
import archProject7 from '../assets-webp/NewProject.webp';

const Projects = () => {
  const [key, setKey] = useState('all');
  
  const projects = [
    {
      id: 7,
      title: 'Three Story Apartment Building',
      description: 'Three-storey apartment building with roof deck designed for urban efficiency, featuring clean geometric lines and balanced façade composition.',
      tags: ['Residential', 'Structural Innovation', 'Modern Design' ],
      image: archProject7,
      year: '2025',
      location: 'Manila',
      category: 'commercial'
    },
    {
      id: 1,
      title: 'Bigtas Residence',
      description: 'A modern kitchen-dining area featuring layered ceiling coves and pendant lighting that balance functionality with elegant spatial framing.',
      tags: ['Residential', 'Structural Innovation', 'Site Planning' ],
      image: archProject1,
      year: '2024',
      location: 'Biñan, Laguna',
      category: 'residential'
    },
    {
      id: 2,
      title: 'Gomez Building',
      description: 'A commercial structure combining symmetry and modernist geometry with stone cladding to enhance façade texture and material contrast.',
      tags: ['Cultural', 'Sustainable Design', '3D Modeling'],
      image: archProject2,
      year: '2023',
      location: 'Daet, Camarines Norte',
      category: 'commercial'
    },
    {
      id: 3,
      title: 'Atty. Buenaluz Ancestral House',
      description: 'A restored heritage interior blending brick archways and carved wooden furniture, emphasizing traditional Filipino craftsmanship and spatial warmth.',
      tags: ['Modern Design', 'Zoning Analysis', 'Facade Design'],
      image: archProject3,
      year: '2024',
      location: 'Imus, Cavite',
      category: 'cultural'
    },
    {
      id: 4,
      title: 'Siennas Hotel',
      description: 'A contemporary commercial building defined by bold linear forms, red façade accents, and rhythmic fenestration that convey a dynamic urban identity.',
      tags: ['Public Architecture', 'Community Engagement', 'Accessibility'],
      image: archProject4,
      year: '2022',
      location: 'Daet, Camarines Norte',
      category: 'commercial'
    },
    {
      id: 5,
      title: 'DENR EMB Building',
      description: 'A sustainable institutional design showcasing green terraces, vertical wooden fins, and a passive daylighting system for energy efficiency.',
      tags: ['Public Architecture', 'Community Engagement', 'Accessibility'],
      image: archProject5,
      year: '2025',
      location: 'Daet, Camarines Norte',
      category: 'public'
    },
    {
      id: 6,
      title: 'Genuine Building',
      description: 'A two-story mixed-use facility emphasizing horizontal continuity and natural lighting through cantilevered balconies and large glazed openings.',
      tags: ['Public Architecture', 'Community Engagement', 'Accessibility'],
      image: archProject6,
      year: '2022',
      location: 'Daet, Camarines Norte',
      category: 'commercial'
    }
  ];

  const filteredProjects = key === 'all' 
    ? projects 
    : projects.filter(project => project.category === key);

  return (
    <section id="projects" className="projects-section">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            <span className="section-number">03.</span> Architectural Works
          </h2>
          
          <Tabs
            id="projects-tabs"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="projects-tabs mb-5"
          >
            <Tab eventKey="all" title="All Projects" />
            <Tab eventKey="cultural" title="Cultural" />
            <Tab eventKey="residential" title="Residential" />
            <Tab eventKey="commercial" title="Commercial" />
            <Tab eventKey="public" title="Public" />
          </Tabs>
        </motion.div>
        
        <Row className="projects-grid">
          {filteredProjects.map((project, index) => (
            <Col key={project.id} lg={6} className="project-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
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