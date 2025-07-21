import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaVectorSquare, FaCity, FaHome, FaTree } from 'react-icons/fa';
import { GiMaterialsScience, GiStonePath } from 'react-icons/gi';
import { SiAutodesk, SiBlender } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Concept Design",
      icon: <FaVectorSquare size={24} />,
      skills: [
        { name: "Urban Planning", level: 90 },
        { name: "3D Visualization", level: 95 },
        { name: "Rendering", level: 85 }
      ]
    },
    {
      title: "BIM Management",
      icon: <SiAutodesk size={24} />,
      skills: [
        { name: "Residential Design", level: 85 },
        { name: "Construction Detailing", level: 80 },
        { name: "Documentation", level: 90 }
      ]
    },
    {
      title: "Sustainable Design",
      icon: <FaTree size={24} />,
      skills: [
        { name: "Material Science", level: 75 },
        { name: "Energy Efficiency", level: 85 },
        { name: "Green Building", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading mb-5">
            <span className="section-number">02.</span> Core Competencies
          </h2>
          
          <Row className="g-4">
            {skillCategories.map((category, index) => (
              <Col lg={4} md={6} key={index}>
                <motion.div
                  className="skill-category-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="category-header">
                    <div className="category-icon">
                      {category.icon}
                    </div>
                    <h3 className="category-title">{category.title}</h3>
                  </div>
                  
                  <ul className="skill-list">
                    {category.skills.map((skill, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                      >
                        <div className="skill-name">{skill.name}</div>
                        <div className="skill-level">
                          {[...Array(5)].map((_, level) => (
                            <span 
                              key={level}
                              className={`level-dot ${level < Math.floor(skill.level/20) ? 'active' : ''}`}
                            />
                          ))}
                          <span className="level-text">
                            {skill.level >= 80 ? 'Proficient' : 
                             skill.level >= 60 ? 'Experienced' : 'Learning'}
                          </span>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;