import React from 'react';
import Hero from '../components/Hero/Hero';
import Servicos from '../components/Servicos/Servicos';
import Sobre from '../components/Sobre/Sobre';
import Depoimentos from '../components/Depoimentos/Depoimentos';
import Contato from '../components/Contato/Contato';
import ProjectCarousel from '../components/Project_carousel/ProjectCarousel';

const Home = () => {
  return (
    <main>
      <Hero />
      <Servicos />

      <section
        id="projetos"
        style={{ padding: '40px 0', backgroundColor: '#f9f9f9', textAlign: 'center' }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#333' }}>
          Projetos Recentes
        </h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 30px', color: '#666' }}>
          Conheça alguns dos trabalhos desenvolvidos, desde plataformas educacionais até jogos interativos.
        </p>

        <ProjectCarousel />
      </section>

      <Sobre />
      <Depoimentos />
      <Contato />
    </main>
  );
};

export default Home;
