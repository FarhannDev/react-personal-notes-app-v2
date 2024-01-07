import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../../hooks/useTheme';

export default function ToggleColorMode() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      title="Ubah Tema Perangkat"
      className="btn-toggle-color-mode d-none d-lg-block me-2"
    >
      {theme === 'light' ? (
        <FaMoon fontSize={24} color="5d5d5d" />
      ) : (
        <FaSun fontSize={24} />
      )}
    </button>
  );
}
