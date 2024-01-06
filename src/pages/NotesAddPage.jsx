import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import ContentHeading from '../components/ContentHeading';
import NoteFormInput from '../components/NoteFormInput';
import { addNote } from '../utils/data/local-data';

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

    navigate('/notes/active');
  };

  return (
    <React.Fragment>
      <Seo />

      <Container>
        <ContentHeading title={'Buat Catatan Baru'} />
        <NoteFormInput addNote={onAddNotesHandler} />
      </Container>
    </React.Fragment>
  );
}
