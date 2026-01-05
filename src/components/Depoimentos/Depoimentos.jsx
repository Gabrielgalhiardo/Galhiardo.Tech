import './Depoimentos.css';
import Section from '../Section/Section';
import Card from '../Card/Card';
import fotoEmpreendedor from '../../assets/img/pessoasDepoimento/empredendor.jpg';
import fotoMarcenaria from '../../assets/img/pessoasDepoimento/marcenaria.png';
import fotoImobiliaria from '../../assets/img/pessoasDepoimento/imobiliaria.png';

const Depoimentos = () => {
  const depoimentos = [
    {
      nome: 'Luam Meira',
      cargo: 'Ceo, Empresário',
      empresa: 'TechStart',
      foto: fotoEmpreendedor,
      texto: 'A Galhiardo.tech transformou completamente nossa infraestrutura. Em 3 meses, reduzimos custos em 40% e aumentamos a performance em 200%. Profissionais excepcionais!',
      rating: 5
    },
    {
      nome: 'Milton Apolinário',
      cargo: 'Ceo da empresa',
      empresa: 'Marcenaria',
      foto: fotoMarcenaria,
      texto: 'Trabalhar com a Galhiardo.tech foi uma experiência única. Eles não apenas entregam código, mas estratégia e resultados. Nossa transformação digital foi um sucesso total.',
      rating: 5
    },
    {
      nome: 'Robson Galhiardo',
      cargo: 'Ceo da empresa',
      empresa: 'Imobiliária',
      foto: fotoImobiliaria,
      texto: 'Consultoria de altíssimo nível. A equipe entendeu perfeitamente nossas necessidades e entregou soluções que superaram nossas expectativas. Recomendo sem hesitação!',
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'star--filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <Section id="depoimentos" variant="ice" className="depoimentos">
      <div className="depoimentos__header">
        <h2 className="depoimentos__title">O que nossos clientes dizem</h2>
        <p className="depoimentos__subtitle">
          Depoimentos reais de empresas que transformaram seus negócios conosco
        </p>
      </div>

      <div className="depoimentos__grid">
        {depoimentos.map((depoimento, index) => (
          <Card key={index} variant="elevated" hover className="depoimento-card">
            <div className="depoimento-card__rating">
              {renderStars(depoimento.rating)}
            </div>
            <p className="depoimento-card__text">"{depoimento.texto}"</p>
            <div className="depoimento-card__author">
              <div className="depoimento-card__avatar">
                <img src={depoimento.foto} alt={depoimento.nome} />
              </div>
              <div className="depoimento-card__info">
                <div className="depoimento-card__name">{depoimento.nome}</div>
                <div className="depoimento-card__role">{depoimento.cargo}</div>
                <div className="depoimento-card__company">{depoimento.empresa}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Depoimentos;

