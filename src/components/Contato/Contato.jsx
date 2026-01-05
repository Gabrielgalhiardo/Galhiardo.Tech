import { useState } from 'react';
import './Contato.css';
import Section from '../Section/Section';
import Button from '../Button/Button';
import Card from '../Card/Card';
import iconEmail from '../../assets/img/icons/message-regular.svg';
import iconPhone from '../../assets/img/icons/telephone.svg';
import iconWhatsApp from '../../assets/img/icons/whatsapp-brands-solid.svg';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    mensagem: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

   
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        empresa: '',
        mensagem: ''
      });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  const contatoInfo = [
    {
      icon: iconEmail,
      title: 'Email',
      content: 'galhiardogabriel@gmail.com',
      link: 'mailto:galhiardogabriel@gmail.com'
    },
    {
      icon: iconPhone,
      title: 'Telefone',
      content: '+55 (11) 95086-9006',
      link: 'tel:+5511950869006'
    },
    {
      icon: iconWhatsApp,
      title: 'WhatsApp',
      content: '+55 (11) 95086-9006',
      link: 'https://wa.me/5511950869006'
    }
  ];

  return (
    <Section id="contato" variant="default" className="contato">
      <div className="contato__header">
        <h2 className="contato__title">Entre em Contato</h2>
        <p className="contato__subtitle">
          Pronto para transformar seu negócio? Vamos conversar sobre como podemos ajudar você.
        </p>
      </div>

      <div className="contato__content">
        <div className="contato__form-wrapper">
          <Card variant="elevated" className="contato__form-card">
            <form className="contato__form" onSubmit={handleSubmit}>
              <div className="contato__form-row">
                <div className="contato__form-group">
                  <label htmlFor="nome" className="contato__label">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="contato__input"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="contato__form-group">
                  <label htmlFor="email" className="contato__label">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contato__input"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="contato__form-row">
                <div className="contato__form-group">
                  <label htmlFor="telefone" className="contato__label">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="contato__input"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div className="contato__form-group">
                  <label htmlFor="empresa" className="contato__label">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    className="contato__input"
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>

              <div className="contato__form-group">
                <label htmlFor="mensagem" className="contato__label">
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="contato__textarea"
                  placeholder="Conte-nos sobre seu projeto ou necessidade..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="contato__success">
                  ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="contato__submit"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>
            </form>
          </Card>
        </div>

        <div className="contato__info">
          <Card variant="bordered" className="contato__info-card">
            <h3 className="contato__info-title">Outras formas de contato</h3>
            <p className="contato__info-description">
              Prefere falar diretamente? Entre em contato através dos canais abaixo.
            </p>

            <div className="contato__info-list">
              {contatoInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="contato__info-item"
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className="contato__info-icon">
                    <img src={info.icon} alt={info.title} />
                  </div>
                  <div className="contato__info-content">
                    <div className="contato__info-label">{info.title}</div>
                    <div className="contato__info-value">{info.content}</div>
                  </div>
                </a>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default Contato;

