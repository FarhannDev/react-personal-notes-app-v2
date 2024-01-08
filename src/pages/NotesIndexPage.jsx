/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useSearchParams, useNavigate, Navigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import ContentHeading from '../components/ContentHeading';
import NoteCardItem from '../components/NoteCardItem';
import SearchBar from '../components/SearchBar';
import AddButton from '../components/AddButton';
import Loading from '../components/Loading';
import { getActiveNotes } from '../utils/api/network-data';
import { useLanguage } from '../hooks/useLanguage';
import { useAuth } from '../hooks/useAuth';

export default function NotesIndexPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('keyword') || '';
  });

  const [isLoading, setIsLoading] = useState(false);
  const { language } = useLanguage();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate('/login');

  useEffect(() => {
    const fetchDataFromNetwork = async () => {
      // setIsLoading(false);
      setIsLoading(true);
      const { data, error } = await getActiveNotes();
      setNotes(data);

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    fetchDataFromNetwork();
  }, []);

  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  const filteredNotes = notes
    .filter((note) => {
      return note.title.toLowerCase().includes(keyword.toLowerCase());
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
      <ContentHeading
        title={
          language === 'id'
            ? 'Belum Ada Daftar Catatan'
            : 'No List of Notes Yet'
        }
      />
    </div>
  );

  const content = (
    <>
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
            <ContentHeading
              title={language === 'id' ? 'Daftar Catatan ' : 'Note List'}
            />
            <SearchBar
              keyword={keyword}
              keywordChange={onKeywordChangeHandler}
              placeholder={language === 'id' ? 'Cari Catatan' : 'Search'}
              loading={isLoading}
            />
          </Col>
        </Row>

        {isLoading ? (
          <Loading
            placeholder={
              language === 'id' ? 'Data Sedang Dimuat ...' : 'Loading...'
            }
          />
        ) : (
          <>
            {filteredNotes.length ? <NoteListItem /> : <NoteListItemIsEmpty />}
          </>
        )}

        <AddButton />
      </Container>
    </>
  );

  return content;
}

export function Seo() {
  return (
    <Helmet>
      <title>Daftar Semua Catatan </title>
      <meta name="description" content="Nested component" />
    </Helmet>
  );
}
