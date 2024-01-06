import { FaPlus } from 'react-icons/fa6';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function AddButton() {
  const navigate = useNavigate();

  const onButtonHandler = () => navigate('/notes/new');

  return (
    <div className="button-action-container">
      <Button
        type="button"
        className="button-action-styled"
        title="Buat Catatan Baru"
        onClick={onButtonHandler}
      >
        <FaPlus />
      </Button>
    </div>
  );
}
