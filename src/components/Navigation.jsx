/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useAuth } from '../hooks/useAuth.js';
import { useLanguage } from '../hooks/useLanguage.js';
import {
  ToggleColorMode,
  ToggleLocaleLanguange,
  ToggleUserAccount,
} from './LoadableComponent';

export default function Navigation({ name }) {
  const { isAuthenticated } = useAuth();
  const { language, getTranslatedText } = useLanguage();

  const contentMenu = isAuthenticated ? (
    <>
      <Nav className="me-auto">
        <Link
          className="d-none d-lg-block mx-2  nav-link"
          aria-label="Daftar Menu"
          to={'/'}
        >
          {language === 'id' ? 'Beranda' : 'Home'}
        </Link>
        <Link
          className="d-none d-lg-block mx-2  nav-link"
          aria-label="Daftar Menu"
          to={'/notes'}
        >
          {' '}
          {language === 'id' ? 'Daftar Catatan' : 'List'}
        </Link>
        <Link
          className="d-none d-lg-block mx-2  nav-link"
          aria-label="Daftar Menu"
          to={'/notes/archive'}
        >
          {language === 'id' ? 'Diarsipkan' : 'Archived'}
        </Link>
      </Nav>
      <div className="d-flex justify-content-end ">
        <div className="d-none d-lg-flex">
          <ToggleColorMode />
          <ToggleLocaleLanguange />
          <ToggleUserAccount />
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="d-flex justify-content-end">
        <ToggleColorMode />
        <ToggleLocaleLanguange />
      </div>
    </>
  );

  return (
    <React.Fragment>
      <Navbar expand="lg" fixed="top">
        <Container>
          <Navbar.Brand>
            {language === 'id' ? 'Aplikasi Catatan' : name}
          </Navbar.Brand>
          {contentMenu}
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

Navigation.propTypes = { name: PropTypes.string.isRequired };
