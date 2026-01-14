import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '../Project_card/ProjectCard';
import { projects } from '../../data/projects';
import './ProjectCarousel.css';

const ProjectCarousel = () => {
  const [active, setActive] = useState(0);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();
  const delay = 2000; // Um pouco mais lento para apreciar os cards grandes

  const getMod = (n, m) => ((n % m) + m) % m;

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => setActive(prev => prev + 1), delay);
    return () => resetTimeout();
  }, [active]);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const nextSlide = () => setActive(active + 1);
  const prevSlide = () => setActive(active - 1);

  const handleOpenProject = (slug) => navigate(`/projetos/${slug}`);

  // --- CONFIGURAÇÃO VISUAL 3D ---
  const getStyles = (offset) => {
    const isActive = offset === 0;
    
    // Configurações para Cards Maiores
    // Distância horizontal: Como o card tem 400px, usamos 450px para dar um respiro
    const translateX = offset * 450; 
    
    // Escala: O centro é 1, os lados são 0.85 (um pouco menores)
    const scale = isActive ? 1 : 0.85;
    
    // Rotação: 30 graus para dar profundidade
    const rotateY = offset * -10; 
    
    const zIndex = 10 - Math.abs(offset);
    const opacity = isActive ? 1 : 0.6; // Lados ficam levemente transparentes

    return {
      transform: `translateX(${translateX}px) scale(${scale}) perspective(1000px) rotateY(${rotateY}deg)`,
      zIndex: zIndex,
      opacity: opacity,
      filter: isActive ? 'none' : 'blur(1px) brightness(0.9)', // Foco no centro
      pointerEvents: isActive ? 'auto' : 'none',
    };
  };

  return (
    <div className="carousel-container">
      <button className="nav-button prev" onClick={prevSlide}>&#8249;</button>
      
      <div className="carousel-track">
        {/* Renderiza APENAS 3 cartões: -1 (Anterior), 0 (Atual), 1 (Próximo) */}
        {[-1, 0, 1].map((offset) => {
          const renderIndex = getMod(active + offset, projects.length);
          const project = projects[renderIndex];
          const uniqueKey = `card-${active + offset}`;

          return (
            <div 
              key={uniqueKey} 
              className="card-wrapper"
              style={getStyles(offset)}
            >
              <ProjectCard 
                title={project.title}
                description={project.description}
                image={project.carouselImage || project.coverImage}
                onClick={() => handleOpenProject(project.slug)}
              />
            </div>
          );
        })}
      </div>

      <button className="nav-button next" onClick={nextSlide}>&#8250;</button>
    </div>
  );
};

export default ProjectCarousel;