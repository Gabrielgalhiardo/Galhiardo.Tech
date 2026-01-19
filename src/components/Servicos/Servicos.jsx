import { useEffect, useRef } from 'react';
import { Building2, DollarSign, Settings, Search, Smartphone, Shield, Check } from 'lucide-react';
import './Servicos.css';
import Section from '../Section/Section';
import Card from '../Card/Card';

const Servicos = () => {
  const servicosRef = useRef(null);

  useEffect(() => {
    // Mantive a sua lógica de animação que está ótima
    if (servicosRef.current) {
      const cards = servicosRef.current.querySelectorAll('.servico-card');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
              }, index * 100);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      cards.forEach((card) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
      });
    }
  }, []);

  // MUDANÇA PRINCIPAL: Textos focados em BENEFÍCIO e SOLUÇÃO
  const servicos = [
    {
      icon: Building2,
      title: 'Sites Institucionais',
      description: 'A vitrine digital da sua empresa. Transmita autoridade e confiança imediata para quem pesquisa sobre você no Google.',
      features: ['Design Premium e Exclusivo', 'Carrega rápido no 4G', 'Painel fácil de editar']
    },
    {
      icon: DollarSign,
      title: 'Páginas de Venda',
      description: 'Landing Pages focadas em uma única coisa: transformar visitantes em clientes pagantes. Ideal para lançamentos e anúncios.',
      features: ['Alta taxa de conversão', 'Integração com WhatsApp', 'Rastreamento de acessos']
    },
    {
      icon: Settings,
      title: 'Sistemas Sob Medida',
      description: 'Sua empresa ainda usa planilhas manuais? Criamos sistemas para automatizar seu estoque, agenda e gestão financeira.',
      features: ['Fim da papelada', 'Acesso de qualquer lugar', 'Relatórios automáticos']
    },
    {
      icon: Search,
      title: 'Otimização Google (SEO)',
      description: 'Não adianta ter site se ninguém te acha. Ajustamos seu posicionamento para você aparecer nas buscas da sua cidade.',
      features: ['Apareça no Google Maps', 'Melhoria de Ranking', 'Textos estratégicos']
    },
    {
      icon: Smartphone,
      title: 'Aplicativos Web (PWA)',
      description: 'Sistemas que funcionam como aplicativos de celular, sem precisar baixar nada na loja. Modernidade para seu cliente.',
      features: ['Design responsivo', 'Instalável no celular', 'Custo menor que App nativo']
    },
    {
      icon: Shield,
      title: 'Suporte & Evolução',
      description: 'Não te abandonamos após a entrega. Mantemos seu site seguro, atualizado e funcionando 24 horas por dia.',
      features: ['Backups diários', 'Proteção contra vírus', 'Atendimento rápido']
    }
  ];

  return (
    <Section id="servicos" variant="ice" className="servicos">
      <div className="servicos__header">
        <h2 className="servicos__title">Como podemos ajudar?</h2>
        <p className="servicos__subtitle">
          Da criação do seu site até a automatização da sua empresa. 
          Tecnologia descomplicada para gerar lucro.
        </p>
      </div>

      <div className="servicos__grid" ref={servicosRef}>
        {servicos.map((servico, index) => {
          const IconComponent = servico.icon;
          return (
            <Card key={index} variant="elevated" hover className="servico-card">
              <div className="servico-card__icon">
                <IconComponent size={32} />
              </div>
              <h3 className="servico-card__title">{servico.title}</h3>
              <p className="servico-card__description">{servico.description}</p>
              <ul className="servico-card__features">
                {servico.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="servico-card__check">
                      <Check size={16} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};

export default Servicos;