import { createContext, useContext, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { localizedPath, translate } from './translations';

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const { pathname } = useLocation();
  const language = /^\/en(?:\/|$)/.test(pathname) ? 'en' : 'pt';
  const value = useMemo(() => ({
    language,
    homePath: localizedPath('/', language),
    t: (text) => translate(language, text),
    path: (pathname) => localizedPath(pathname, language),
  }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

// The provider follows the URL so refreshes and shared links retain the language.
export const useLanguage = () => useContext(LanguageContext);
