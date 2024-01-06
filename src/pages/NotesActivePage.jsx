/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useSearchParams } from 'react-router-dom';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import { getAllNotes } from '../utils/data/local-data';
import { ToastContainer } from 'react-toastify';

import ContentHeading from '../components/ContentHeading';
import NoteCardItem from '../components/NoteCardItem';
import SearchBar from '../components/SearchBar';
import AddButton from '../components/AddButton';

export function Seo() {
  return (
    <Helmet>
      <title>Daftar Catatan Aktif</title>
      <meta name="description" content="Nested component" />
    </Helmet>
  );
}

export default function NotesActivePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('keyword') || '';
  });

  useEffect(() => {
    setNotes(getAllNotes);
  }, []);

  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  const filteredNotes = notes
    .filter((note) => {
      return (
        !note.archived &&
        note.title.toLowerCase().includes(keyword.toLowerCase())
      );
    })
    .sort((a, b) =>
      b.createdAt.toString().localeCompare(a.createdAt.toString())
    );

  const NoteListItem = () => (
    <Row className="justify-content-start pt-3">
      {filteredNotes.map((note, idx) => (
        <Col lg={6} md={12} key={idx}>
          <NoteCardItem
            title={note.title}
            description={note.body}
            date={note.createdAt}
            link={`/notes/${note.id}`}
          />
        </Col>
      ))}
    </Row>
  );

  const NoteListItemIsEmpty = () => (
    <div className="d-flex justify-content-center pt-5">
      <ContentHeading title="Belum Ada Daftar Catatan" />
    </div>
  );

  const content = (
    <React.Fragment>
      <Seo />
      <Container>
        {/* Tampil React Toast Notification */}
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <Row className="justify-content-start py-3">
          <Col>
            <ContentHeading title={'Daftar Catatan Aktif'} />
            <SearchBar
              keyword={keyword}
              keywordChange={onKeywordChangeHandler}
              placeholder={'Cari Catatan Aktif'}
            />
          </Col>
        </Row>

        {filteredNotes.length ? <NoteListItem /> : <NoteListItemIsEmpty />}

        <AddButton />
      </Container>
    </React.Fragment>
  );

  return content;
}
