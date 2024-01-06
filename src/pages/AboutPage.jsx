/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <>
      <h1>Halaman Tentang Kami</h1>
      <Link to={`/`}>Halaman utama</Link>
    </>
  );
}
