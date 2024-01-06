import React from 'react';
import PropTypes from 'prop-types';
import { Container, Navbar } from 'react-bootstrap';
import '../assets/styles/navbar.css';

export default function Navigation({ name }) {
  return (
    <React.Fragment>
      <Navbar expand="lg" fixed="top">
        <Container>
          <Navbar.Brand>{name}</Navbar.Brand>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

Navigation.propTypes = { name: PropTypes.string.isRequired };
