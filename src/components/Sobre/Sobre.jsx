import { useEffect, useRef } from 'react';
import { Target, Shield, Gem, Rocket } from 'lucide-react';
import './Sobre.css';
import Section from '../Section/Section';
import Button from '../Button/Button';
import AnimatedCounter from './AnimatedCounter';

const Sobre = () => {
  const sobreRef = useRef(null);

  useEffect(() => {
    // Animação de entrada para os stat-cards
    const statCards = document.querySelectorAll('.stat-card');
    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0) scale(1)';
            }, index * 150);
            statObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    statCards.forEach((card) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px) scale(0.9)';
      card.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
      statObserver.observe(card);
    });

    // Animação de entrada para os cards de valores
    if (sobreRef.current) {
      const valorCards = sobreRef.current.querySelectorAll('.valor-card');
      const valorObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
              }, index * 100);
              valorObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      valorCards.forEach((card) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        valorObserver.observe(card);
      });
    }

    return () => {
      statObserver.disconnect();
      if (sobreRef.current) {
        const valorObserver = new IntersectionObserver(() => {});
        valorObserver.disconnect();
      }
    };
  }, []);

  // Stats com configuração para animação
  const stats = [
    { number: '100', suffix: '%', label: 'Compromisso com Prazo', duration: 2000 },
    { number: '24h', label: 'Sua Empresa Online', duration: 1500 },
    { number: '3', suffix: '+', label: 'Anos de Desenvolvimento', duration: 1800 },
    { number: 'Top', label: 'Performance Google', duration: 1000 }
  ];

  const valores = [
    {
      icon: Target,
      title: 'Foco em Vendas',
      description: 'Não fazemos apenas "arte". Criamos ferramentas digitais focadas em trazer retorno financeiro.'
    },
    {
      icon: Shield,
      title: 'Segurança e Solidez',
      description: 'Seu site construído com código limpo e seguro, sem gambiarras que dão problema no futuro.'
    },
    {
      icon: Gem,
      title: 'Acabamento Premium',
      description: 'Design moderno e responsivo que passa credibilidade imediata para o seu cliente.'
    },
    {
      icon: Rocket,
      title: 'Velocidade Real',
      description: 'Otimização avançada para carregar instantaneamente em qualquer celular (4G ou Wi-Fi).'
    }
  ];

  return (
    <Section id="sobre" variant="default" className="sobre">
      <div className="sobre__content">
        <div className="sobre__text">
          <h2 className="sobre__title">
            Por que a <span className="sobre__title-highlight">Galhiardo.tech</span>?
          </h2>
          
          <p className="sobre__description">
            Muitas agências entregam apenas um visual bonito. Nós entregamos <strong>engenharia de negócios</strong>. 
            A Galhiardo.tech nasceu para preencher a lacuna entre a programação complexa e a necessidade simples 
            da sua empresa: <strong>vender mais e aparecer bem na internet</strong>.
          </p>
          <p className="sobre__description">
            Utilizamos as mesmas tecnologias de grandes startups (como React e Next.js) para criar sites e sistemas 
            que são rápidos, seguros e, acima de tudo, fáceis para o seu cliente usar. 
            Nós cuidamos de toda a parte técnica ("o código pesado") para que você possa focar apenas em gerenciar o seu crescimento.
          </p>

          <div className="sobre__cta">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => {
                const element = document.getElementById('contato');
                if (element) {
                  const offsetTop = element.offsetTop - 100;
                  window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
              }}
            >
              Conheça Nossas Soluções
            </Button>
          </div>
        </div>

        <div className="sobre__stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-card__number">
                <AnimatedCounter 
                  value={stat.number}
                  suffix={stat.suffix || ''}
                  duration={stat.duration || 2000}
                  decimals={0}
                />
              </div>
              <div className="stat-card__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="sobre__valores" ref={sobreRef}>
        <h3 className="sobre__valores-title">Nossos Diferenciais</h3>
        <div className="sobre__valores-grid">
          {valores.map((valor, index) => {
            const IconComponent = valor.icon;
            return (
              <div key={index} className="valor-card">
                <div className="valor-card__icon">
                  <IconComponent size={48} />
                </div>
                <h4 className="valor-card__title">{valor.title}</h4>
                <p className="valor-card__description">{valor.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Sobre;