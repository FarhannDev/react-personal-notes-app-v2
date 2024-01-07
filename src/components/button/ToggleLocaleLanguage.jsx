import { FaGlobe } from 'react-icons/fa6';
import { Stack } from 'react-bootstrap';
import { useTheme } from '../../hooks/useTheme';

export default function ToggleLocaleLanguange() {
  const { theme } = useTheme();

  return (
    <button
      type="button"
      title="Ubah Bahasa Perangkat"
      className="btn-toggle-color-mode d-none d-lg-block me-2"
    >
      <Stack direction="horizontal" gap={2}>
        <span className="locale-icon">
          {theme === 'light' ? (
            <FaGlobe fontSize={24} color="5d5d5d" />
          ) : (
            <FaGlobe fontSize={24} />
          )}
        </span>
        <span className="locale-codename">ID</span>
      </Stack>
    </button>
  );
}
