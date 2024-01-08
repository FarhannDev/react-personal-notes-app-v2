/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Card } from 'react-bootstrap';
import WishlistCardItem from '../components/WishlistCardItem';
import WelcomeCard from '../components/WelcomeCard';
import ContentHeading from '../components/ContentHeading';
import { getUserLogged } from '../utils/api/network-data';
import { useAuth } from '../hooks/useAuth';
import { useLanguage } from '../hooks/useLanguage';

export function Seo() {
  return (
    <Helmet>
      <title>React Personal Notes V2</title>
      <meta name="description" content="Nested component" />
    </Helmet>
  );
}

export default function HomePage() {
  const { initializing, isAuthenticated } = useAuth();
  const { language } = useLanguage();

  if (initializing) {
    return null;
  }

  return (
    <React.Fragment>
      <Seo />
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
