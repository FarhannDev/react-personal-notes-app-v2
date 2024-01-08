import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import ContentHeading from '../components/ContentHeading';
import NoteFormInput from '../components/NoteFormInput';
import { addNote } from '../utils/api/network-data';
import { useLanguage } from '../hooks/useLanguage';

import 'react-toastify/dist/ReactToastify.css';

export function Seo() {
  return (
    <Helmet>
      <title>Buat Catatan Baru</title>
      <meta name="description" content="Nested component" />
    </Helmet>
  );
}

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
      <Seo />

      <Container>
        <ContentHeading
          title={language === 'id' ? 'Buat Catatan Baru' : 'Create New Notes'}
        />
        <NoteFormInput addNote={onAddNotesHandler} />
      </Container>
    </React.Fragment>
  );
}
