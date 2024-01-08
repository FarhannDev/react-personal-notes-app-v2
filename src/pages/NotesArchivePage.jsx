/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useSearchParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import ContentHeading from '../components/ContentHeading';
import NoteCardItem from '../components/NoteCardItem';
import SearchBar from '../components/SearchBar';
import AddButton from '../components/AddButton';
import { getArchivedNotes } from '../utils/api/network-data';
import { useLanguage } from '../hooks/useLanguage';
import Loading from '../components/Loading';

export function Seo() {
  return (
    <Helmet>
      <title>Daftar Catatan Diarsipkan</title>
      <meta name="description" content="Nested component" />
    </Helmet>
  );
}

export default function NotesArchivePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('keyword') || '';
  });

  const [isLoading, setIsLoading] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const fetchDataFromNetwork = async () => {
      setIsLoading(true);
      const { data } = await getArchivedNotes();
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

  const filteredArchiveNotes = notes
    .filter((note) => {
      return note.title.toLowerCase().includes(keyword.toLowerCase());
    })
    .sort((a, b) =>
      b.createdAt.toString().localeCompare(a.createdAt.toString())
    );

  const NoteListItem = () => (
    <Row className="justify-content-start pt-3">
      {filteredArchiveNotes.map((note, idx) => (
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
            <ContentHeading
              title={
                language === 'id'
                  ? 'Daftar Catatan Diarsipkan'
                  : 'List of Archived Notes'
              }
            />
            <SearchBar
              keyword={keyword}
              keywordChange={onKeywordChangeHandler}
              placeholder={
                language === 'id'
                  ? 'Cari Catatan Diarsipkan'
                  : 'Search Archived Notes'
              }
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
            {filteredArchiveNotes.length ? (
              <NoteListItem />
            ) : (
              <NoteListItemIsEmpty />
            )}
          </>
        )}

        <AddButton />
      </Container>
    </React.Fragment>
  );

  return content;
}
