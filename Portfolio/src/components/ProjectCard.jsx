// ProjectCard.jsx
import { Card, Button, Row, Col, Image } from "react-bootstrap";

// Helper: pick a thumbnail from (for example) the first image inside insightsDeepDive
const getThumbnail = (project) => {
  if (project.insightsDeepDive) {
    for (let key in project.insightsDeepDive) {
      const section = project.insightsDeepDive[key];
      if (section.image && section.image.path) {
        return section.image.path;
      }
    }
  }
  return null;
};

export const ProjectCard = ({ project }) => {
  const thumbnail = getThumbnail(project);
  // Use executiveSummary if available; otherwise fall back to projectBackground.
  const overview = project.executiveSummary || project.projectBackground;

  return (
    <Card className="project-card h-100 shadow">
      {thumbnail && (
        <Card.Img
          variant="top"
          src={thumbnail}
          alt={`${project.title} thumbnail`}
          className="img-fluid"
        />
      )}
      <Card.Body>
        <Card.Title className="text-primary">{project.title}</Card.Title>
        {project.timeline ? (
          <Card.Subtitle className="mb-3 text-muted">
            {project.timeline}
          </Card.Subtitle>
        ) : (
          <Card.Subtitle className="mb-3 text-muted">
            Project ID: {project.id}
          </Card.Subtitle>
        )}

        <div className="mb-3">
          <h6 className="text-secondary">Overview</h6>
          <p>{overview}</p>
        </div>

        {project.tableOfContents && (
          <div className="project-highlights">
            <h6 className="text-secondary">Key Sections</h6>
            <ul className="list-unstyled">
              {project.tableOfContents.map((item, idx) => (
                <li key={idx} className="d-flex align-items-center mb-2">
                  <span className="bullet-point me-2">•</span>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        <a href={`/projects/${project.id}`} className="stretched-link">
          <Button variant="outline-primary" size="sm" className="mt-3">
            View Details
          </Button>
        </a>
      </Card.Body>
    </Card>
  );
};
