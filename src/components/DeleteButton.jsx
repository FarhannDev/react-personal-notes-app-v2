/* eslint-disable react/prop-types */
import { Button } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { deleteNote } from '../utils/data/local-data';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

export default function DeleteButton({ id }) {
  const navigate = useNavigate();

  const onDeleteHandler = () => {
    deleteNote(id);

    toast.success('Berhasil hapus catatan ', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

    navigate('/notes/active');
  };

  return (
    <Button
      type="button"
      className="button-action-styled"
      title="Buat Catatan Baru"
      onClick={onDeleteHandler}
    >
      <FaTrash fontSize={18} />
    </Button>
  );
}

DeleteButton.propTypes = { id: PropTypes.string.isRequired };
