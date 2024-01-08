import { MdGTranslate } from 'react-icons/md';
import { Stack } from 'react-bootstrap';
import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../hooks/useLanguage';

export default function ToggleLocaleLanguange() {
  const { theme } = useTheme();
  const { language, changeLanguage } = useLanguage();

  return (
    <button
      onClick={changeLanguage}
      type="button"
      title="Ubah Bahasa Perangkat"
      className="btn-toggle-color-mode d-none d-lg-block me-2"
    >
      <Stack direction="horizontal" gap={2}>
        <span className="locale-icon">
          {theme === 'light' ? (
            <MdGTranslate fontSize={24} color="5d5d5d" />
          ) : (
            <MdGTranslate fontSize={24} />
          )}
        </span>
        <span className="locale-codename">{language}</span>
      </Stack>
    </button>
  );
}
