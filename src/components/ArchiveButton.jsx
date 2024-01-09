/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { archiveNote, unarchiveNote } from '../utils/api/network-data';

export default function ArchiveButton({ id, archived }) {
  const navigate = useNavigate();

  const onArchiveHandler = () => {
    archiveNote(id);

    toast.success('Catatan Diarsipkan ', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

    navigate('/notes');
  };

  const onUnArchiveHandler = () => {
    unarchiveNote(id);

    toast.success('Catatan Diaktifkan ', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

    navigate('/notes');
  };

  const ArchiveButton = () => {
    return (
      <Button
        type="button"
        className="button-action-styled"
        title="Buat Catatan Baru"
        onClick={onArchiveHandler}
      >
        <FaRegBookmark fontSize={18} />
      </Button>
    );
  };

  const UnArchiveButton = () => {
    return (
      <Button
        type="button"
        className="button-action-styled"
        title="Buat Catatan Baru"
        onClick={onUnArchiveHandler}
      >
        <FaBookmark fontSize={18} />
      </Button>
    );
  };

  return archived ? <UnArchiveButton /> : <ArchiveButton />;
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
};
