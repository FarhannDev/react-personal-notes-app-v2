import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import '../assets/styles/navbar.css';
import ToggleColorMode from './button/ToggleColorMode';
import ToggleLocaleLanguange from './button/ToggleLocaleLanguage';
import ToggleUserAccount from './button/ToggleUserAccount';

export default function Navigation({ name }) {
  return (
    <React.Fragment>
      <Navbar expand="lg" fixed="top">
        <Container>
          <Navbar.Brand>{name}</Navbar.Brand>
          <Nav className="me-auto">
            <Link
              className="d-none d-lg-block mx-2 nav-link"
              aria-label="Daftar Menu"
              to={'/'}
            >
              Beranda
            </Link>
            <Link
              className="d-none d-lg-block mx-2 nav-link"
              aria-label="Daftar Menu"
              to={'/notes'}
            >
              {' '}
              Daftar Catatan
            </Link>
            <Link
              className="d-none d-lg-block mx-2 nav-link"
              aria-label="Daftar Menu"
              to={'/notes/archive'}
            >
              Catatan Diarsipkan
            </Link>
            <Link
              className="d-none d-lg-block mx-2 nav-link"
              aria-label="Daftar Menu"
              to={'/notes/active'}
            >
              Catatan Aktif
            </Link>
          </Nav>
          <ToggleColorMode />
          <ToggleLocaleLanguange />
          <ToggleUserAccount />
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

Navigation.propTypes = { name: PropTypes.string.isRequired };
