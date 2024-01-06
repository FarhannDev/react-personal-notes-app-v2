/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container, Stack } from 'react-bootstrap';
import { getNote } from '../utils/data/local-data';
import NoteDetail from '../components/NoteDetail';
import DeleteButton from '../components/DeleteButton';
import ArchiveButton from '../components/ArchiveButton';
import PageNotFound from '../components/PageNotFound';

export default function NotesDetailPage() {
  const { noteId } = useParams();
  const [notes, setNotes] = useState(getNote(noteId));
  const NotesDetailPageNotFound = () => {
    return (
      <>
        <Container>
          <PageNotFound title="Catatan yang kamu cari tidak ditemukan" />
        </Container>
      </>
    );
  };

  const content = !notes ? (
    <NotesDetailPageNotFound />
  ) : (
    <>
      <Container>
        <Seo
          title={notes.title}
          description={`${notes.body.substring(0, 250)}`}
        />
        <NoteDetail {...notes} />
        <div className="button-action-container">
          <Stack direction="horizontal" gap={2}>
            <DeleteButton id={notes.id} />
            <ArchiveButton id={notes.id} archived={notes.archived} />
          </Stack>
        </div>
      </Container>
    </>
  );

  return content;
}

export function Seo({ title, description }) {
  return (
    <Helmet>
      <title>Detail Catatan - {title} </title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
