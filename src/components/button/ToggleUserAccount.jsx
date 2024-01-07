import { FaUser } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';

export default function ToggleUserAccount() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/user/profile')}
      type="button"
      title="Profil Saya"
      className="btn-toggle-color-mode me-2"
    >
      {theme === 'light' ? (
        <FaUser fontSize={24} color="5d5d5d" />
      ) : (
        <FaUser fontSize={24} />
      )}
    </button>
  );
}
