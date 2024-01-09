import React from 'react';
import { Helmet } from 'react-helmet';
import { Navigation, PageNotFound } from '../components/LoadableComponent';

export function Seo() {
  return (
    <Helmet>
      <title>Halaman Tidak Ditemukan</title>
      <meta name="description" content="Nested component" />
    </Helmet>
  );
}

export default function PageNotFoundPage() {
  return (
    <React.Fragment>
      <Seo />
      <Navigation name="Personal Notes" />
      <PageNotFound title="Halaman Tidak Ditemukan" />
    </React.Fragment>
  );
}
