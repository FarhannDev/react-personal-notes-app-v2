import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { addNote } from '../utils/api/network-data';
import { useLanguage } from '../hooks/useLanguage';
import {
  ContentHeading,
  NoteFormInput,
  MetaTagSeo,
} from '../components/LoadableComponent';

export default function NotesAddPage() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const onAddNotesHandler = (note) => {
    addNote(note);
    toast.success('Catatan Baru DiTambahkan ', {
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

  return (
    <React.Fragment>
      <MetaTagSeo
        title={language === 'id' ? 'Buat Catatan Baru' : 'Create New Notes'}
        description="Aplikasi personal notes adalah Sebuah Proyek Akhir Membangun SPA + API, Context, dan Hooks pada learning React Developer kelas Fundamental.        "
      />

      <Container>
        <ContentHeading
          title={language === 'id' ? 'Buat Catatan Baru' : 'Create New Notes'}
        />
        <NoteFormInput addNote={onAddNotesHandler} />
      </Container>
    </React.Fragment>
  );
}
