import React from 'react';
import { Link, useParams } from 'react-router-dom';
import SEO from '../components/SEO/SEO';
import { getProjectBySlug } from '../data/projects';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

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
    tags = [],
    challenge,
    solution,
    results = [],
    gallery = [],
  } = project;

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
        <div className="project-details__hero-media">
          <img src={coverImage} alt={`Capa do projeto ${title}`} />
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
          <Link to="/#contato" className="project-gallery__cta">Quero algo assim</Link>
        </div>
        <div className="project-gallery__grid">
          {gallery.map((item, index) => (
            <figure key={`${item.alt}-${index}`}>
              <img src={item.src} alt={item.alt} />
              <figcaption>{item.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <div className="project-details__footer">
        <Link to="/#projetos" className="project-details__back">
          Voltar para projetos
        </Link>
        <Link to="/#contato" className="project-details__primary">
          Discutir um projeto
        </Link>
      </div>
    </main>
  );
};

export default ProjectDetails;
