import { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/img/logo.svg';
import logoWithName from '../../assets/img/logo_with_name.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
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
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <a href="#home" className="navbar__logo" onClick={(e) => handleLinkClick(e, 'home')}>
          <img src={logoWithName} alt="Galhiardo Tech" className="navbar__logo--desktop" />
          <img src={logo} alt="Galhiardo Tech" className="navbar__logo--mobile" />
        </a>

        <button
          className="navbar__toggle"
          aria-label="Toggle menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={isMobileMenuOpen ? 'active' : ''}></span>
          <span className={isMobileMenuOpen ? 'active' : ''}></span>
          <span className={isMobileMenuOpen ? 'active' : ''}></span>
        </button>

        <ul className={`navbar__menu ${isMobileMenuOpen ? 'navbar__menu--open' : ''}`}>
          <li>
            <a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Início</a>
          </li>
          <li>
            <a href="#servicos" onClick={(e) => handleLinkClick(e, 'servicos')}>Serviços</a>
          </li>
          <li>
            <a href="#sobre" onClick={(e) => handleLinkClick(e, 'sobre')}>Sobre</a>
          </li>
          <li>
            <a href="#depoimentos" onClick={(e) => handleLinkClick(e, 'depoimentos')}>Depoimentos</a>
          </li>
          <li>
            <a href="#contato" onClick={(e) => handleLinkClick(e, 'contato')}>Contato</a>
          </li>
          <li className="navbar__cta">
            <a 
              href="#contato" 
              className="btn btn--primary btn--sm"
              onClick={(e) => handleLinkClick(e, 'contato')}
            >
              Orçamento Grátis
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

