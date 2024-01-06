/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useMemo, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // KODE INI UNTUK SETTING TEMA PERANGKAT
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme-react-personal-notes-v2') || 'light'
  );
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      // mendapatkan nilai tema baru berdasarkan state sebelumnya
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      // menyimpan nilai tema baru ke local storage
      localStorage.setItem('theme-react-personal-notes-v2', newTheme);
      // mengembalikan state dengan nilai theme terbaru.

      return newTheme;
    });
  };

  const themeContextValue = React.useMemo(() => {
    document.documentElement.setAttribute('data-theme', theme);
    return { theme, setTheme, toggleTheme };
  }, [theme]);

  // useMemo(() => {
  //   document.documentElement.setAttribute('data-theme', theme);
  // }, [theme]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
