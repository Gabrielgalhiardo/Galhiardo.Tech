import './Sobre.css';
import Section from '../Section/Section';
import Button from '../Button/Button';

const Sobre = () => {
  // DICA: Ajustei os números para parecerem mais consistentes com uma consultoria premium
  const stats = [
    { number: '100%', label: 'Compromisso com Prazo' }, // Mais forte que "3 projetos"
    { number: '24/7', label: 'Sua Empresa Online' },
    { number: '3+', label: 'Anos de Desenvolvimento' },
    { number: 'Top', label: 'Performance Google' }
  ];

  const valores = [
    {
      icon: '🎯',
      title: 'Foco em Vendas',
      description: 'Não fazemos apenas "arte". Criamos ferramentas digitais focadas em trazer retorno financeiro.'
    },
    {
      icon: '🛡️', // Mudei para escudo (segurança) que vende muito bem
      title: 'Segurança e Solidez',
      description: 'Seu site construído com código limpo e seguro, sem gambiarras que dão problema no futuro.'
    },
    {
      icon: '💎',
      title: 'Acabamento Premium',
      description: 'Design moderno e responsivo que passa credibilidade imediata para o seu cliente.'
    },
    {
      icon: '🚀',
      title: 'Velocidade Real',
      description: 'Otimização avançada para carregar instantaneamente em qualquer celular (4G ou Wi-Fi).'
    }
  ];

  return (
    <Section id="sobre" variant="default" className="sobre">
      <div className="sobre__content">
        <div className="sobre__text">
          <h2 className="sobre__title">Por que a <span style={{color: 'var(--primary)'}}>Galhiardo.tech</span>?</h2>
          
          {/* TEXTO ATUALIZADO AQUI */}
          <p className="sobre__description">
            Muitas agências entregam apenas um visual bonito. Nós entregamos <strong>engenharia de negócios</strong>. 
            A Galhiardo.tech nasceu para preencher a lacuna entre a programação complexa e a necessidade simples 
            da sua empresa: vender mais e aparecer bem na internet.
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
              <div className="stat-card__number">{stat.number}</div>
              <div className="stat-card__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="sobre__valores">
        <h3 className="sobre__valores-title">Nossos Diferenciais</h3>
        <div className="sobre__valores-grid">
          {valores.map((valor, index) => (
            <div key={index} className="valor-card">
              <div className="valor-card__icon">{valor.icon}</div>
              <h4 className="valor-card__title">{valor.title}</h4>
              <p className="valor-card__description">{valor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Sobre;