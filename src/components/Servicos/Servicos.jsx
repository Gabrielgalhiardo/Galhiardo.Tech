import { useLanguage } from '../../i18n/LanguageContext';
import { useEffect, useRef } from 'react';
import { Building2, DollarSign, Settings, Search, Smartphone, Shield, Check } from 'lucide-react';
import './Servicos.css';
import Section from '../Section/Section';
import Card from '../Card/Card';

const Servicos = () => {
  const { t } = useLanguage();
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
      title: t("Sites Institucionais"),
      description: t("A vitrine digital da sua empresa. Transmita autoridade e confiança imediata para quem pesquisa sobre você no Google."),
      features: [t("Design Premium e Exclusivo"), t("Carrega rápido no 4G"), t("Painel fácil de editar")]
    },
    {
      icon: DollarSign,
      title: t("Páginas de Venda"),
      description: t("Landing Pages focadas em uma única coisa: transformar visitantes em clientes pagantes. Ideal para lançamentos e anúncios."),
      features: [t("Alta taxa de conversão"), t("Integração com WhatsApp"), t("Rastreamento de acessos")]
    },
    {
      icon: Settings,
      title: t("Sistemas Sob Medida"),
      description: t("Sua empresa ainda usa planilhas manuais? Criamos sistemas para automatizar seu estoque, agenda e gestão financeira."),
      features: [t("Fim da papelada"), t("Acesso de qualquer lugar"), t("Relatórios automáticos")]
    },
    {
      icon: Search,
      title: t("Otimização Google (SEO)"),
      description: t("Não adianta ter site se ninguém te acha. Ajustamos seu posicionamento para você aparecer nas buscas da sua cidade."),
      features: [t("Apareça no Google Maps"), t("Melhoria de Ranking"), t("Textos estratégicos")]
    },
    {
      icon: Smartphone,
      title: t("Aplicativos Web (PWA)"),
      description: t("Sistemas que funcionam como aplicativos de celular, sem precisar baixar nada na loja. Modernidade para seu cliente."),
      features: [t("Design responsivo"), t("Instalável no celular"), t("Custo menor que App nativo")]
    },
    {
      icon: Shield,
      title: t("Suporte & Evolução"),
      description: t("Não te abandonamos após a entrega. Mantemos seu site seguro, atualizado e funcionando 24 horas por dia."),
      features: [t("Backups diários"), t("Proteção contra vírus"), t("Atendimento rápido")]
    }
  ];

  return (
    <Section id="servicos" variant="ice" className="servicos">
      <div className="servicos__header">
        <h2 className="servicos__title">{t("Como podemos ajudar?")}</h2>
        <p className="servicos__subtitle">
          {t("Da criação do seu site até a automatização da sua empresa. Tecnologia descomplicada para gerar lucro.")}
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
