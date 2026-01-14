import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, image, link, onClick }) => {
  const handleCardClick = () => {
    if (onClick) {
      onClick();
    } else if (link) {
      window.location.href = link;
    }
  };

  return (
    <div
      className="project-card"
      role="button"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          handleCardClick();
        }
      }}
      aria-label={`Abrir projeto ${title}`}
    >
      <div className="card-image-container">
        <img src={image} alt={title} className="card-image" />
        <div className="click-overlay">
          <span>Ver Projeto ➜</span>
        </div>
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;