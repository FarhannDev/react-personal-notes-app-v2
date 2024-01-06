/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export function Seo() {
  return (
    <Helmet>
      <title>Halaman About</title>
      <meta name="description" content="Nested component" />
    </Helmet>
  );
}

export default class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hello: 'Hello' };
  }

  render() {
    return (
      <React.Fragment>
        <Seo />
        <h1>About </h1>

        <Link to={'/'}>Kembali Ke Halaman Utama</Link>
      </React.Fragment>
    );
  }
}
