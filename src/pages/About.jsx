import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import architectImage from "../assets-webp/ArchApple.webp";

const About = () => {
  const profileData = {
    name: "Fernalyn Robles",
    location: "San Francisco, CA",
    university: "Harvard Graduate School of Design",
    years: 10,
    projectTypes: "mixed-use developments and cultural institutions",
    designPrinciples: "contextual sensitivity and material honesty",
  };

  const skillCategories = [
    {
      title: "Design & Visualization",
      skills: [
        "Architectural Design",
        "3D Modeling (Rhino, SketchUp)",
        "BIM (Revit, ArchiCAD)",
        "Rendering (V-Ray, Lumion)",
      ],
    },
    {
      title: "Technical Expertise",
      skills: [
        "Construction Documentation",
        "Sustainable Design",
        "Urban Planning",
        "Parametric Design (Grasshopper)",
      ],
    },
    {
      title: "Creative Tools",
      skills: [
        "Adobe Creative Suite",
        "Physical Model Making",
        "Digital Fabrication",
        "Hand Sketching",
      ],
    },
  ];

  return (
    <section id="about" className="about-section py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading mb-5">
            <span className="section-number">01.</span> About Me
          </h2>

          <Row className="align-items-center">
            <Col lg={5} className="mb-5 mb-lg-0">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="profile-image-container">
                  <Image
                    src={architectImage}
                     loading='lazy'  
                    alt={`${profileData.name} - Architect`}
                    fluid
                    className="profile-image"
                  />
                  <div className="image-border-accent"></div>
                </div>
              </motion.div>
            </Col>

            <Col lg={7} className="ps-lg-5">
              <div className="about-content">
                <h3 className="mb-4">
                  Architect & Designer based in {profileData.location}
                </h3>

                <div className="about-text mb-5">
                  <p className="mb-3">
                    I specialize in creating thoughtful, sustainable spaces that
                    harmonize with their environment while meeting clients'
                    functional needs.
                  </p>
                  <p>
                    I hold a Master's in Architecture from{" "}
                    {profileData.university} and have
                    {profileData.years}+ years of professional experience
                    working with leading firms on projects ranging from{" "}
                    {profileData.projectTypes}. My design philosophy emphasizes{" "}
                    {profileData.designPrinciples}.
                  </p>
                </div>

                <div className="skills-section">
                  <h4 className="mb-4">Core Competencies</h4>
                  <Row>
                    {skillCategories.map((category, index) => (
                      <Col md={4} key={index} className="mb-4 mb-md-0">
                        <div className="skill-category">
                          <h5 className="category-title mb-3">
                            {category.title}
                          </h5>
                          <ul className="skill-list">
                            {category.skills.map((skill, i) => (
                              <motion.li
                                key={i}
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                              >
                                <span className="bullet">▹</span> {skill}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>

                <div className="signature mt-5">
                  <img
                    src={architectImage}
                    alt="Signature"
                    className="img-fluid"
                    style={{ height: "60px" }}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
