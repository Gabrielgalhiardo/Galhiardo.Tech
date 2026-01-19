import { useState } from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import './Contato.css';
import Section from '../Section/Section';
import Button from '../Button/Button';
import Card from '../Card/Card';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    mensagem: ''
  });

  // Função para aplicar máscara de telefone brasileiro
  const applyPhoneMask = (value) => {
    // Remove tudo que não é dígito
    const numbers = value.replace(/\D/g, '');
    
    // Limita a 11 dígitos (DDD + 9 dígitos para celular)
    const limitedNumbers = numbers.slice(0, 11);
    
    // Aplica a máscara conforme o tamanho
    if (limitedNumbers.length === 0) {
      return '';
    } else if (limitedNumbers.length <= 2) {
      return `(${limitedNumbers}`;
    } else if (limitedNumbers.length <= 6) {
      return `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(2)}`;
    } else if (limitedNumbers.length <= 10) {
      // Telefone fixo (10 dígitos)
      return `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(2, 6)}-${limitedNumbers.slice(6)}`;
    } else {
      // Telefone celular (11 dígitos)
      return `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(2, 7)}-${limitedNumbers.slice(7, 11)}`;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Aplica máscara apenas no campo telefone
    if (name === 'telefone') {
      const maskedValue = applyPhoneMask(value);
      setFormData(prev => ({
        ...prev,
        [name]: maskedValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();
    
    // Formata a mensagem com os dados do formulário
    let mensagem = 'Olá! Gostaria de entrar em contato sobre os serviços da Galhiardo.tech.\n\n';
    
    if (formData.nome) {
      mensagem += `*Nome:* ${formData.nome}\n`;
    }
    if (formData.email) {
      mensagem += `*Email:* ${formData.email}\n`;
    }
    if (formData.telefone) {
      mensagem += `*Telefone:* ${formData.telefone}\n`;
    }
    if (formData.empresa) {
      mensagem += `*Empresa:* ${formData.empresa}\n`;
    }
    if (formData.mensagem) {
      mensagem += `\n*Mensagem:*\n${formData.mensagem}`;
    }
    
    const phoneNumber = '5511950869006';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const contatoInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'galhiardoTech@gmail.com',
      link: 'mailto:galhiardoTech@gmail.com'
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '+55 (11) 95086-9006',
      link: 'tel:+5511950869006'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: '+55 (11) 95086-9006',
      link: `https://wa.me/5511950869006?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da Galhiardo.tech.')}`
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
            <div className="contato__form-header">
              <h3 className="contato__form-title">Preencha seus dados</h3>
              <p className="contato__form-subtitle">
                Envie sua mensagem diretamente pelo WhatsApp
              </p>
            </div>
            <form className="contato__form" onSubmit={handleWhatsAppRedirect}>
              <div className="contato__form-row">
                <div className="contato__form-group">
                  <label htmlFor="nome" className="contato__label">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className="contato__input"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="contato__form-group">
                  <label htmlFor="email" className="contato__label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
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
                    maxLength={15}
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
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows="6"
                  className="contato__textarea"
                  placeholder="Conte-nos sobre seu projeto ou necessidade..."
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="contato__submit"
              >
                <MessageCircle size={20} className="contato__submit-icon" />
                Enviar pelo WhatsApp
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
              {contatoInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    className="contato__info-item"
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className="contato__info-icon">
                      <IconComponent size={24} />
                    </div>
                    <div className="contato__info-content">
                      <div className="contato__info-label">{info.title}</div>
                      <div className="contato__info-value">{info.content}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default Contato;

