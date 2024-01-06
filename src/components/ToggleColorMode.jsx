import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../hooks/useTheme.js';

export default function ToggleColorMode() {
  const { theme, toggleTheme } = useTheme();
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
