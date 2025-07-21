import { Card } from 'react-bootstrap';
import { FiExternalLink } from 'react-icons/fi';

const ArchProjectCard = ({ title, description, imageUrl, tags }) => {
  return (
    <Card className="arch-project-card">
      <div className="project-image-container">
        <Card.Img variant="top" src={imageUrl} />
        <div className="image-overlay" />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <div className="project-tags">
            {tags.map((tag, i) => (
              <span key={i} className="tag">{tag}</span>
            ))}
          </div>
          <a href="#" className="project-link">
            <FiExternalLink />
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ArchProjectCard;