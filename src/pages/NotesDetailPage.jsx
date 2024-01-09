/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container, Stack } from 'react-bootstrap';
import { getNote } from '../utils/api/network-data';
import {
  DeleteButton,
  ArchiveButton,
  PageNotFound,
  NoteDetail,
} from '../components/LoadableComponent';

export default function NotesDetailPage() {
  const { noteId } = useParams();
  const [notes, setNotes] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDataFromNetwork = async () => {
      const { data, error } = await getNote(noteId);
      setNotes(data);
      setIsError(error);

      setIsLoading(false);
    };

    fetchDataFromNetwork();
  }, [noteId]);

  const NotesDetailPageNotFound = () => {
    return (
      <>
        <Container>
          <PageNotFound title="Catatan yang kamu cari tidak ditemukan" />
        </Container>
      </>
    );
  };

  if (!isError && isLoading) return null;

  const content = (
    <>
      <Container>
        <Seo
          title={notes?.title}
          description={`${notes?.body.substring(0, 250)}`}
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

  return notes ? content : <NotesDetailPageNotFound />;
}

export function Seo({ title, description }) {
  return (
    <Helmet>
      <title>Detail Catatan - {title} </title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
