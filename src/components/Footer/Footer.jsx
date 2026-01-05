import './Footer.css';
import logoWithName from '../../assets/img/logo_with_name.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__brand">
            <img src={logoWithName} alt="Galhiardo Tech" className="footer__logo" />
            <p className="footer__description">
              Transformando ideias em soluções digitais de alta performance. 
              Consultoria especializada em tecnologia e inovação.
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__column">
              <h4>Navegação</h4>
              <ul>
                <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Início</a></li>
                <li><a href="#servicos" onClick={(e) => handleLinkClick(e, 'servicos')}>Serviços</a></li>
                <li><a href="#sobre" onClick={(e) => handleLinkClick(e, 'sobre')}>Sobre</a></li>
                <li><a href="#depoimentos" onClick={(e) => handleLinkClick(e, 'depoimentos')}>Depoimentos</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4>Serviços</h4>
              <ul>
                <li>Consultoria em TI</li>
                <li>Desenvolvimento Web</li>
                <li>Arquitetura de Software</li>
                <li>Transformação Digital</li>
              </ul>
            </div>

            <div className="footer__column">
              <h4>Contato</h4>
              <ul>
                <li>
                  <a href="mailto:galhiardogabriel@gmail.com">galhiardogabriel@gmail.com</a>
                </li>
                <li>
                  <a href="tel:+5511950869006">+55 (11) 95086-9006</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {currentYear} Galhiardo.tech. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

