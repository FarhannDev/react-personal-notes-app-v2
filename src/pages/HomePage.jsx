/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Card } from 'react-bootstrap';
import WishlistCardItem from '../components/WishlistCardItem';
import WelcomeCard from '../components/WelcomeCard';
import ContentHeading from '../components/ContentHeading';
import { getUserLogged } from '../utils/api/network-data';
import { useAuth } from '../hooks/useAuth';

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
              title={`Halo ${isAuthenticated.name}, Selamat datang di aplikasi personal notes`}
              description="Aplikasi personal notes adalah Sebuah Proyek Akhir Membangun SPA + API, Context, dan Hooks pada learning React Developer kelas Fundamental."
            />
          </Col>
        </Row>
        <Row className="justify-content-start pt-5">
          <Col>
            {/*  */}
            <ContentHeading title={'Apa yang bisa kamu lakukan?'} />

            <Row className="justify-content-arround">
              <Col lg={4} md={6}>
                <WishlistCardItem
                  title={'Buat Catatan Baru'}
                  description={
                    'Yuk perbanyak catatan kamu hari ini supaya kamu gak lupa '
                  }
                  link={'/notes/new'}
                />
              </Col>
              <Col lg={4} md={6}>
                <WishlistCardItem
                  title={'Daftar Catatan'}
                  description={'Lihat Semua Daftar Catatan Aktif Kamu'}
                  link={'/notes'}
                />
              </Col>
              <Col lg={4} md={6}>
                <WishlistCardItem
                  title={'Catatan Diarsipkan'}
                  description={'Lihat Semua Daftar Catatan Yang kamu Arsipkan'}
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
