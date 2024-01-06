/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Card } from 'react-bootstrap';
import WishlistCardItem from '../components/WishlistCardItem';
import WelcomeCard from '../components/WelcomeCard';
import ContentHeading from '../components/ContentHeading';

export function Seo() {
  return (
    <Helmet>
      <title>React Personal Notes V2</title>
      <meta name="description" content="Nested component" />
    </Helmet>
  );
}

export default function HomePage() {
  return (
    <React.Fragment>
      <Seo />
      <Container>
        {/* Tampilkan intro */}
        <Row className="justify-content-start">
          <Col>
            <WelcomeCard
              title=" Halo, Selamat datang di personal notes"
              description="Aplikasi personal notes adalah perangkat lunak yang dirancang untuk
        membantu pengguna menyimpan, mengatur, dan mengelola catatan pribadi
        mereka. Tujuannya adalah memberikan platform untuk mencatat ide,
        informasi penting, atau pikiran sehari-hari"
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
                  description={'Lihat Semua Daftar Catatan Yang kamu Tulis'}
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
              <Col lg={4} md={6}>
                <WishlistCardItem
                  title={'Catatan Aktif'}
                  description={'Lihat Semua Daftar Catatan Aktif Kamu'}
                  link={'/notes/active'}
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
