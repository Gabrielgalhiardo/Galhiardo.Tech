import { useEffect, useRef } from 'react';
import { Rocket, Gem, TrendingUp, Handshake } from 'lucide-react';
import './Hero.css';
import Button from '../Button/Button';
import Section from '../Section/Section';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // Adiciona classe de animação após montagem
    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll('.animate-fade-in-up, .animate-slide-in-right');
      elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
      });
    }
  }, []);

  const handleScrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Section id="home" variant="default" className="hero">
      <div className="hero__content" ref={heroRef}>
        <div className="hero__text">
          <h1 className="hero__title animate-fade-in-up">
            Leve seu negócio para o{' '}
            <span className="hero__highlight">próximo nível</span> digital
          </h1>
          <p className="hero__description animate-fade-in-up">
            Sites profissionais, sistemas sob medida e a estratégia certa para quem 
            quer vender mais. Transformamos sua empresa em uma autoridade na internet 
            com tecnologia de ponta e design premium.
          </p>
          <div className="hero__cta animate-fade-in-up">
            <Button 
              variant="primary" 
              size="lg" 
              onClick={handleScrollToContact}
            >
              Solicitar Orçamento Grátis
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                const element = document.getElementById('servicos');
                if (element) {
                  const offsetTop = element.offsetTop - 100;
                  window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
              }}
            >
              Ver Nossas Soluções
            </Button>
          </div>
        </div>
        
        {/* Cards visuais focados em BENEFÍCIOS, não features */}
        <div className="hero__visual animate-slide-in-right">
          <div className="hero__card-grid">
            <div className="hero__card hero__card--1">
              <div className="hero__card-icon">
                <Rocket size={32} />
              </div>
              <h3>Velocidade</h3>
              <p>Seu site abrindo instantaneamente</p>
            </div>
            <div className="hero__card hero__card--2">
              <div className="hero__card-icon">
                <Gem size={32} />
              </div>
              <h3>Design Premium</h3>
              <p>Visual que passa confiança</p>
            </div>
            <div className="hero__card hero__card--3">
              <div className="hero__card-icon">
                <TrendingUp size={32} />
              </div>
              <h3>Mais Vendas</h3>
              <p>Foco total em conversão</p>
            </div>
            <div className="hero__card hero__card--4">
              <div className="hero__card-icon">
                <Handshake size={32} />
              </div>
              <h3>Suporte Real</h3>
              <p>Você nunca fica na mão</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;