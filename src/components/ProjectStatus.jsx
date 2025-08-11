import React, { useState } from "react";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import { motion } from "framer-motion";
import img6 from "../assets/sample-project-6.jpg";
import img7 from "../assets/sample-project-7.jpg";
import img6 from "../assets/sample-project-6.jpg";

// Sample data - can be moved to a separate file
const statusProjects = [
  {
    id: 101,
    title: "Riverfront Cultural Hub",
    description:
      "Currently under construction, reimagining urban waterfront spaces.",
    tags: ["Cultural", "Urban Design"],
    year: "2023-2025",
    location: "Portland, OR",
    status: "ongoing",
    image: img6,
  },
  {
    id: 102,
    title: "Mountain Eco Retreat",
    description: "Luxury residential project in final construction phases.",
    tags: ["Residential", "Eco-Friendly"],
    year: "2023-2024",
    location: "Aspen, CO",
    status: "ongoing",
    image: img7,
  },
  {
    id: 201,
    title: "Downtown Office Tower",
    description: "Award-winning commercial space completed in 2022.",
    tags: ["Commercial", "High-Rise"],
    year: "2022",
    location: "Chicago, IL",
    status: "completed",
    image: img6,
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
                        : "Completed"}
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
