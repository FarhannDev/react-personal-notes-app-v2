/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import { useAuth } from '../hooks/useAuth';
import { useLanguage } from '../hooks/useLanguage';
import {
  WelcomeCard,
  WishlistCardItem,
  ContentHeading,
  MetaTagSeo,
} from '../components/LoadableComponent';

export default function HomePage() {
  const { isAuthenticated } = useAuth();
  const { language } = useLanguage();

  return (
    <React.Fragment>
      <MetaTagSeo
        title={
          language === 'id'
            ? 'Selamat datang di aplikasi personal notes'
            : 'Welcome React Personal Notes'
        }
        description="Aplikasi personal notes adalah Sebuah Proyek Akhir Membangun SPA + API, Context, dan Hooks pada learning React Developer kelas Fundamental.        "
      />
      <Container>
        {/* Tampilkan intro */}
        <Row className="justify-content-start">
          <Col>
            <WelcomeCard
              title={
                language === 'id'
                  ? `Halo ${isAuthenticated.name}, Selamat datang di aplikasi personal notes`
                  : `Hello ${isAuthenticated.name}, Welcome to the personal notes application`
              }
              description={
                language === 'id'
                  ? 'Aplikasi personal notes adalah Sebuah Proyek Akhir Membangun SPA + API, Context, dan Hooks pada learning React Developer kelas Fundamental.'
                  : 'The personal notes application is a final project to build SPA + API, Context, and Hooks in React Developer learning in the Fundamental class.'
              }
            />
          </Col>
        </Row>
        <Row className="justify-content-start pt-5">
          <Col>
            {/*  */}
            <ContentHeading
              title={
                language === 'id'
                  ? 'Apa yang bisa kamu lakukan?'
                  : 'What can you do?'
              }
            />

            <Row className="justify-content-arround">
              <Col lg={4} md={6}>
                <WishlistCardItem
                  title={
                    language === 'id' ? 'Buat Catatan Baru' : 'Create New Notes'
                  }
                  description={
                    language === 'id'
                      ? 'Yuk perbanyak catatan kamu hari ini supaya kamu gak lupa '
                      : `Come on, expand your notes today so you don't forget`
                  }
                  link={'/notes/new'}
                />
              </Col>
              <Col lg={4} md={6}>
                <WishlistCardItem
                  title={language === 'id' ? 'Daftar Catatan' : 'Note List'}
                  description={
                    language === 'id'
                      ? 'Lihat Semua Daftar Catatan Aktif Kamu'
                      : 'View All Your Active Notes List'
                  }
                  link={'/notes'}
                />
              </Col>
              <Col lg={4} md={6}>
                <WishlistCardItem
                  title={
                    language === 'id' ? 'Catatan Diarsipkan' : 'Notes Archived'
                  }
                  description={
                    language === 'id'
                      ? 'Lihat Semua Daftar Catatan Yang kamu Arsipkan'
                      : 'View all lists of notes that you have archived'
                  }
                  link={'/notes/archive'}
                />
              </Col>
            </Row>
            {/*  */}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
