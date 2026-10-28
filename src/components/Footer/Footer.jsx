import { useLanguage } from '../../i18n/LanguageContext';
import './Footer.css';
import logoWithName from '../../assets/img/logo_with_name.svg';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const { t, homePath } = useLanguage();
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    } else {
      navigate(`${homePath}#${targetId}`);
    }
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__brand">
            <img src={logoWithName} alt="Galhiardo Tech" className="footer__logo" />
            <p className="footer__description">
              {t("Transformando ideias em soluções digitais de alta performance. Consultoria especializada em tecnologia e inovação.")}
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__column">
              <h4>{t("Navegação")}</h4>
              <ul>
                <li><a href={`${homePath}#home`} onClick={(e) => handleLinkClick(e, 'home')}>{t("Início")}</a></li>
                <li><a href={`${homePath}#servicos`} onClick={(e) => handleLinkClick(e, 'servicos')}>{t("Serviços")}</a></li>
                <li><a href={`${homePath}#sobre`} onClick={(e) => handleLinkClick(e, 'sobre')}>{t("Sobre")}</a></li>
                <li><a href={`${homePath}#depoimentos`} onClick={(e) => handleLinkClick(e, 'depoimentos')}>{t("Depoimentos")}</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4>{t("Serviços")}</h4>
              <ul>
                <li>{t("Consultoria em TI")}</li>
                <li>{t("Desenvolvimento Web")}</li>
                <li>{t("Arquitetura de Software")}</li>
                <li>{t("Transformação Digital")}</li>
              </ul>
            </div>

            <div className="footer__column">
              <h4>{t("Contato")}</h4>
              <ul>
                <li>
                  <a href="mailto:galhiardoTech@gmail.com">galhiardoTech@gmail.com</a>
                </li>
                <li>
                  <a href="tel:+5511950869006">+55 (11) 95086-9006</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {currentYear} Galhiardo.tech. {t('Todos os direitos reservados.')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

