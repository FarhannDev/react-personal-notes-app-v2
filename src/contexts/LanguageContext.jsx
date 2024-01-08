/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import languages from '../utils/languages';

export const LanguageContext = React.createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language-react-personal-notes-v2') || 'id';
  });

  const changeLanguage = () => {
    setLanguage((prevLanguage) => {
      const language = prevLanguage === 'id' ? 'en' : 'id';
      localStorage.setItem('language-react-personal-notes-v2', language);
      return language;
    });
  };

  const getTranslatedText = (key) => {
    return languages[language][key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage, getTranslatedText }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
