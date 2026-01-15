import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/img/logo.svg';
import logoWithName from '../../assets/img/logo_with_name.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Bloquear scroll do body quando menu mobile estiver aberto
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    // Fechar menu ao clicar fora
    const handleClickOutside = (e) => {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        toggleRef.current &&
        !menuRef.current.contains(e.target) &&
        !toggleRef.current.contains(e.target)
      ) {
        setIsMobileMenuOpen(false);
      }
  };

    if (isMobileMenuOpen) {
      // Delay para evitar fechar imediatamente ao clicar no toggle
      const timeoutId = setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
      }, 100);

      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('touchstart', handleClickOutside);
      };
    }
  }, [isMobileMenuOpen]);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    // Se estiver na home, faz scroll para a seção
    if (isHomePage) {
      const element = document.getElementById(targetId);
      if (element) {
        const offsetTop = element.offsetTop - 100;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    } else {
      // Se estiver em outra página, redireciona para home com a seção
      navigate(`/#${targetId}`, { replace: false });
      // Aguarda a navegação e depois faz scroll
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const offsetTop = element.offsetTop - 100;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (isHomePage) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      navigate('/');
    }
  };

  const handleToggleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <a href="/" className="navbar__logo" onClick={handleLogoClick}>
          <img src={logoWithName} alt="Galhiardo Tech" className="navbar__logo--desktop" />
          <img src={logo} alt="Galhiardo Tech" className="navbar__logo--mobile" />
        </a>

        <button
          ref={toggleRef}
          className="navbar__toggle"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          onClick={handleToggleClick}
          type="button"
        >
          <span className={isMobileMenuOpen ? 'active' : ''}></span>
          <span className={isMobileMenuOpen ? 'active' : ''}></span>
          <span className={isMobileMenuOpen ? 'active' : ''}></span>
        </button>

        <ul 
          ref={menuRef}
          className={`navbar__menu ${isMobileMenuOpen ? 'navbar__menu--open' : ''}`}
        >
          <li>
            <a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Início</a>
          </li>
          <li>
            <a href="#servicos" onClick={(e) => handleLinkClick(e, 'servicos')}>Serviços</a>
          </li>
          <li>
            <a href="#projetos" onClick={(e) => handleLinkClick(e, 'projetos')}>Projetos</a>
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
              className="btn btn--primary"
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
