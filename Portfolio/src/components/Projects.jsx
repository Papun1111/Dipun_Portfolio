// Projects.jsx
import { useState } from "react";
import {
  Container,
  Tab,
  Nav,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard.jsx";
// Import your work data (ensure that workdata.js exports an object with keys like eVentura, winterRock, etc.)
import { workData as portfolioProjects } from "../assets/work/workdata.js";
import "animate.css";
import "./Project.css";

// Helper to format a camelCase or concatenated string into a title
const formatTitle = (str) => {
  return str
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (char) => char.toUpperCase());
};

// Helper to convert GitHub blob URLs to raw URLs if needed
const getRawUrl = (url) => {
  if (url.includes("github.com") && url.includes("/blob/")) {
    return url.replace("github.com", "raw.githubusercontent.com").replace("/blob/", "/");
  }
  return url;
};

// A component to render one section of a project. It uses a recursive renderContent.
const ProjectSection = ({ section }) => {
  const renderContent = (content) => {
    if (content == null) return null;
    if (typeof content === "string" || typeof content === "number") {
      return <p>{content}</p>;
    }
    if (Array.isArray(content)) {
      return content.map((item, idx) => (
        <div key={idx} className="mb-2">
          {renderContent(item)}
        </div>
      ));
    }
    if (typeof content === "object") {
      // Handle known keys (models, phases, image, images)
      if (content.models) {
        return (
          <Row className="g-4">
            {content.models.map((model, idx) => (
              <Col md={6} key={idx}>
                <div className="model-card p-3 h-100 border rounded">
                  <h5>{model.name}</h5>
                  <small className="text-muted">{model.category}</small>
                  <ul className="mt-2">
                    {model.features.map((feature, fIdx) => (
                      <li key={fIdx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </Col>
            ))}
          </Row>
        );
      }
      if (content.phases) {
        return (
          <div className="timeline">
            {content.phases.map((phase, idx) => (
              <div key={idx} className="timeline-phase mb-3">
                <h5>{phase.name}</h5>
                <small className="text-muted">{phase.duration}</small>
                <ul className="mt-2">
                  {phase.activities.map((activity, aIdx) => (
                    <li key={aIdx}>{activity}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      }
      if (content.image) {
        return (
          <div className="mb-3">
            <Image
              src={getRawUrl(content.image.path)}
              alt={content.image.caption}
              fluid
              className="rounded"
              loading="eager" // force eager loading
            />
            <p className="text-muted text-center mt-2">
              {content.image.caption}
            </p>
          </div>
        );
      }
      if (content.images) {
        return (
          <Row className="g-4 mb-3">
            {content.images.map((img, idx) => (
              <Col md={6} key={idx}>
                <div className="mb-3">
                  <Image
                    src={getRawUrl(img.path)}
                    alt={img.caption}
                    fluid
                    className="rounded"
                    loading="eager"
                  />
                  <p className="text-muted text-center mt-2">
                    {img.caption}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        );
      }
      // Otherwise, recursively render each key/value pair in this object
      return Object.entries(content).map(([key, value]) => (
        <div key={key} className="content-section mb-3">
          {typeof value === "object" ? (
            <>
              <h5 className="mt-2">{formatTitle(key)}</h5>
              {renderContent(value)}
            </>
          ) : (
            <p>
              <strong>{formatTitle(key)}:</strong> {value}
            </p>
          )}
        </div>
      ));
    }
    return null;
  };

  return (
    <div className="project-section mb-5">
      <h3 className="section-title mb-4">{section.title}</h3>
      {renderContent(section.content)}
    </div>
  );
};

export const Projects = () => {
  const [activeProject, setActiveProject] = useState("ev-india");

  return (
    <section className="projects-page py-5" id="projects">
      <Container>
        <h2 className="display-5 mb-5 text-center">Featured Projects</h2>

        {/* Card Grid */}
        <Row className="g-4 mb-5">
          {Object.values(portfolioProjects).map((project) => (
            <Col key={project.id} lg={6}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>

        {/* Tabbed Details View */}
        <Tab.Container activeKey={activeProject}>
          <Nav variant="tabs" className="mb-4">
            {Object.values(portfolioProjects).map((project) => (
              <Nav.Item key={project.id}>
                <Nav.Link
                  eventKey={project.id}
                  onClick={() => setActiveProject(project.id)}
                >
                  {project.title}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>

          {/* Key Tab.Content by activeProject to force remount on tab change */}
          <Tab.Content key={activeProject}>
            {Object.values(portfolioProjects).map((project) => {
              // Dynamically generate sections from every property in the project,
              // excluding a few metadata keys.
              const excludedKeys = ["id", "title", "tableOfContents"];
              const sections = Object.entries(project)
                .filter(([key]) => !excludedKeys.includes(key))
                .map(([key, value]) => ({
                  title: formatTitle(key),
                  content: value,
                }));

              return (
                <Tab.Pane
                  key={project.id} // Use a stable key here
                  eventKey={project.id}
                  mountOnEnter
                  unmountOnExit
                >
                  <div className="project-details">
                    {sections.map((section, idx) => (
                      <ProjectSection key={idx} section={section} />
                    ))}
                  </div>
                </Tab.Pane>
              );
            })}
          </Tab.Content>
        </Tab.Container>
      </Container>
    </section>
  );
};
