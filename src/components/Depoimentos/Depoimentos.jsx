import { Star } from 'lucide-react';
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
      cargo: 'CEO',
      empresa: 'TechStart',
      foto: fotoEmpreendedor,
      texto: 'Contratei a Galhiardo.tech para fazer o site da minha empresa. O que mais me impressionou foi a velocidade - em menos de uma semana já estava no ar. E o melhor: funciona perfeitamente no celular. Meus clientes conseguem acessar de qualquer lugar.',
      rating: 5
    },
    {
      nome: 'Milton Apolinário',
      cargo: 'Proprietário',
      empresa: 'Marcenaria Apolinário',
      foto: fotoMarcenaria,
      texto: 'Eu não entendo muito de tecnologia, mas o Gabriel explicou tudo de forma simples. O site ficou exatamente como eu queria e agora recebo muito mais orçamentos pelo WhatsApp. Valeu cada centavo investido.',
      rating: 5
    },
    {
      nome: 'Robson Galhiardo',
      cargo: 'Diretor',
      empresa: 'Imobiliária Galhiardo',
      foto: fotoImobiliaria,
      texto: 'Precisávamos de um sistema para gerenciar nossos imóveis. A Galhiardo.tech criou uma solução que facilitou muito nosso dia a dia. Antes era tudo em planilha, agora está tudo organizado e acessível de qualquer lugar.',
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`star ${i < rating ? 'star--filled' : ''}`}
        size={20}
        fill={i < rating ? 'currentColor' : 'none'}
      />
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
            <div className="depoimento-card__quote-icon">"</div>
            <div className="depoimento-card__rating">
              {renderStars(depoimento.rating)}
            </div>
            <p className="depoimento-card__text">{depoimento.texto}</p>
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

