import React, { useMemo, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import ThemeContext from '../contexts/ThemeContext';

export default function Root() {
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
    return { theme, setTheme, toggleTheme };
  }, [theme]);

  useMemo(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={themeContextValue}>
        {/* Tampilkan Menu Navigation */}
        <Navigation name="Personal Notes" />

        {/* Rendered Content Main */}
        <main>
          <Outlet />
        </main>
      </ThemeContext.Provider>
    </>
  );
}
