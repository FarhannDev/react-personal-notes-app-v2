import { FaMoon, FaSun } from 'react-icons/fa';
import ThemeContext from '../contexts/ThemeContext';
import { useContext } from 'react';

export default function ToggleColorMode() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      type="button"
      onClick={toggleTheme}
      title="Ubah Tema Perangkat"
      className="btn-toggle-color-mode"
    >
      {theme === 'light' ? (
        <FaMoon fontSize={24} color="1c1919" />
      ) : (
        <FaSun fontSize={24} />
      )}
    </button>
  );
}
