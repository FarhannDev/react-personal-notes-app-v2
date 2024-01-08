import { FaMoon } from 'react-icons/fa';
import { IoSunnyOutline } from 'react-icons/io5';
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
        <IoSunnyOutline fontSize={24} color="5d5d5d" />
      ) : (
        // <FaMoon fontSize={24} color="5d5d5d" />
        // <IoSunnyOutline fontSize={24} />
        <FaMoon fontSize={24} />
      )}
    </button>
  );
}
