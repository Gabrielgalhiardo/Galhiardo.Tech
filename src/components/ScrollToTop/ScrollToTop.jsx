import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Se houver um hash na URL, não faz scroll para o topo
    // Deixa a navegação com hash fazer o scroll para a seção
    if (hash) {
      // Aguarda um pouco para garantir que a página carregou
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          const offsetTop = element.offsetTop - 100;
          window.scrollTo({
            top: offsetTop,
            left: 0,
            behavior: 'smooth'
          });
        }
      }, 100);
      return;
    }

    // Scroll suave para o topo quando a rota mudar (sem hash)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;

