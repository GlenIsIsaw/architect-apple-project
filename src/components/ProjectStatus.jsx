import React, { useState } from "react";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import { motion } from "framer-motion";
import img6 from "../assets-webp/AncestralHouse.JPG.webp";
import img7 from "../assets-webp/Laguna1.webp";
import img8 from "../assets-webp/sample-project-8.webp";
import img9 from "../assets-webp/SiennaHotel.webp";
import img10 from "../assets-webp/GomezBuilding.webp";
import img11 from "../assets-webp/DenrMay.webp";
import img12 from "../assets-webp/NewProject.webp";

// Sample data - can be moved to a separate file
const statusProjects = [
  {
    id: 107,
    title: "Three Story Apartment Building",
    description:
      "Modern three-storey apartment with roof deck emphasizing functional urban design.",
    tags: ["Urban Design", "Modern Architecture"],
    year: "2025",
    location: "Manila",
    status: "new",
    image: img12,
    loading: "lazy",
  },
  {
    id: 101,
    title: "Ancestral House",
    description:
      "Renovated ancestral home preserving traditional brick arches and classic Filipino wood craftsmanship.",
    tags: ["Cultural Heritage", "Restoration"],
    year: "2025",
    location: "Imus, Cavite",
    status: "completed",
    image: img6,
    loading: "lazy",
  },
  {
    id: 102,
    title: "Sienna Hotel",
    description:
      "Contemporary commercial hotel featuring bold geometric lines and modern façade design.",
    tags: ["Commercial", "Hospitality Design"],
    year: "2022",
    location: "Camarines Norte",
    status: "completed",
    image: img9,
    loading: "lazy",
  },
  {
    id: 103,
    title: "Bigtas Residential",
    description: "Luxury residential project in final construction phases.",
    tags: ["Residential", "Interior Design"],
    year: "2023-2025",
    location: "Biñan, Laguna",
    status: "ongoing",
    image: img7,
    loading: "lazy",
  },
  {
    id: 104,
    title: "Genuine Building",
    description:
      "Modern mixed-use building showcasing sleek horizontal lines and open façades.",
    tags: ["Mixed-Use Development", "Structural Design"],
    year: "2022",
    location: "Camarines Norte",
    status: "ongoing",
    image: img8,
    loading: "lazy",
  },
  {
    id: 105,
    title: "Gomez Building",
    description:
      "Commercial structure featuring modern symmetry and refined stone façade detailing.",
    tags: ["Commercial", "Urban Design"],
    year: "2023-2025",
    location: "Camarines Norte",
    status: "ongoing",
    image: img10,
    loading: "lazy",
  },
  {
    id: 106,
    title: "DENR EMB Building",
    description:
      "Sustainable government facility designed with vertical fins and eco-responsive architecture.",
    tags: ["Government", "Eco-Friendly"],
    year: "2024-2025",
    location: "Camarines Norte",
    status: "ongoing",
    image: img11,
    loading: "lazy",
  },
  
  // Add more projects...
];

const ProjectStatus = () => {
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredProjects =
    statusFilter === "all"
      ? statusProjects
      : statusProjects.filter((project) => project.status === statusFilter);

  return (
    <section id="project-status" className="ps-container">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            <span className="section-number">03.</span> Projects
          </h2>

          <Tabs className="ps-tabs-container">
            <Tab className="ps-tab ps-tab-active">All Projects</Tab>
            {/* Other tabs */}
          </Tabs>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Row className="ps-grid">
            {filteredProjects.map(
              (
                project // Changed from projects to filteredProjects
              ) => (
                <Col key={project.id} className="ps-card">
                  <div className="ps-image-wrapper">
                    <img src={project.image} className="ps-image" />
                    <span className={`ps-status ps-status-${project.status}`}>
                      {project.status === "ongoing"
                        ? "In Progress"
                        : project.status === "completed"
                        ? "Completed"
                        : "New"}
                    </span>
                  </div>
                  <div className="ps-card-content">
                    <h3 className="ps-card-title">{project.title}</h3>
                    <div className="ps-meta">
                      <span>{project.year}</span>
                      <span>{project.location}</span>
                    </div>
                    <p className="ps-description">{project.description}</p>
                    <div className="ps-tags">
                      {project.tags.map((tag, index) => (
                        <span
                          key={`${project.id}-${tag}-${index}`}
                          className="ps-tag"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Col>
              )
            )}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default ProjectStatus;
