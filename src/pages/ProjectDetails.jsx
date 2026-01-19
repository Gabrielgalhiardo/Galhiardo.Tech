import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import SEO from '../components/SEO/SEO';
import { getProjectBySlug } from '../data/projects';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNavigateToSection = (e, sectionId) => {
    e.preventDefault();
    navigate(`/#${sectionId}`, { replace: false });
    // O ScrollToTop vai lidar com o scroll para a seção
  };

  if (!project) {
    return (
      <main className="project-details">
        <SEO title="Projeto não encontrado" description="O projeto solicitado não foi localizado." />
        <div className="project-details__empty">
          <p className="project-details__eyebrow">Oops</p>
          <h1>Projeto não encontrado</h1>
          <p>O link pode estar desatualizado ou ter sido removido.</p>
          <Link to="/" className="project-details__back">
            Voltar para os projetos
          </Link>
        </div>
      </main>
    );
  }

  const {
    title,
    description,
    longDescription,
    coverImage,
    logo,
    tags = [],
    challenge,
    solution,
    results = [],
    gallery = [],
  } = project;

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setLightboxOpen(false);
        document.body.style.overflow = '';
      } else if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
      } else if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, gallery.length]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <main className="project-details">
      <SEO
        title={`${title} | Projeto`}
        description={description}
        image={coverImage}
      />

      <section className="project-details__hero">
        <div className="project-details__copy">
          <p className="project-details__eyebrow">Projeto em destaque</p>
          <h1>{title}</h1>
          <p className="project-details__lead">{description}</p>
          <div className="project-details__tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div 
          className="project-details__hero-media"
          style={logo ? { backgroundImage: `url(${logo})` } : {}}
        >
        </div>
      </section>

      <section className="project-details__grid">
        <div>
          <h3>Visão geral</h3>
          <p>{longDescription}</p>
        </div>
        <div>
          <h3>Desafio</h3>
          <p>{challenge}</p>
        </div>
        <div>
          <h3>Solução</h3>
          <p>{solution}</p>
        </div>
        <div>
          <h3>Resultados</h3>
          <ul>
            {results.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="project-gallery">
        <div className="project-gallery__header">
          <div>
            <p className="project-details__eyebrow">Telas e fluxos</p>
            <h3>Galeria do projeto</h3>
            <p>Alguns recortes das jornadas principais.</p>
          </div>
          <a 
            href="#contato" 
            className="project-gallery__cta"
            onClick={(e) => handleNavigateToSection(e, 'contato')}
          >
            Quero algo assim
          </a>
        </div>
        <div className="project-gallery__grid">
          {gallery.map((item, index) => (
            <figure 
              key={`${item.alt}-${index}`}
              className="project-gallery__item"
              onClick={() => openLightbox(index)}
            >
              <img src={item.src} alt={item.alt} />
              <figcaption>{item.alt}</figcaption>
              <div className="project-gallery__overlay">
                <Search className="project-gallery__zoom-icon" size={32} />
              </div>
            </figure>
          ))}
        </div>
      </section>

      {lightboxOpen && gallery.length > 0 && (
        <div className="lightbox" onClick={closeLightbox}>
          <button 
            className="lightbox__close"
            onClick={closeLightbox}
            aria-label="Fechar visualização"
          >
            <X size={24} />
          </button>
          <button 
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={32} />
          </button>
          <button 
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Próxima imagem"
          >
            <ChevronRight size={32} />
          </button>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={gallery[currentImageIndex].src} 
              alt={gallery[currentImageIndex].alt}
              className="lightbox__image"
            />
            <div className="lightbox__caption">
              <p>{gallery[currentImageIndex].alt}</p>
              <span className="lightbox__counter">
                {currentImageIndex + 1} / {gallery.length}
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="project-details__footer">
        <a 
          href="#projetos" 
          className="project-details__back"
          onClick={(e) => handleNavigateToSection(e, 'projetos')}
        >
          Voltar para projetos
        </a>
        <a 
          href="#contato" 
          className="project-details__primary"
          onClick={(e) => handleNavigateToSection(e, 'contato')}
        >
          Discutir um projeto
        </a>
      </div>
    </main>
  );
};

export default ProjectDetails;
