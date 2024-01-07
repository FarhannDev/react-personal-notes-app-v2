/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function RegisterFormInput() {
  return (
    <React.Fragment>
      <Row className="justify-content-start pt-3">
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="auth-form-label">Nama Lengkap</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukan Nama"
                className="auth-form-input"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="auth-form-label">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Masukan Email Address"
                className="auth-form-input"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="auth-form-label">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Masukan Password"
                className="auth-form-input"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="auth-form-label">
                Konfirmasi Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Konfirmasi Password"
                className="auth-form-input"
              />
            </Form.Group>

            <div className="d-grid gap-3 mx-auto pt-3">
              <Button type="submit" variant="secondary" size="lg">
                Daftarkan
              </Button>
            </div>

            <div className="d-flex flex-column pt-4">
              <div>
                <span className="auth-form-label">Sudah punya akun?</span>{' '}
                <Link
                  className="auth-form-label text-decoration-underline"
                  to={'/login'}
                >
                  Login di sini
                </Link>
              </div>
            </div>
          </Form>
        </Col>
      </Row>
    </React.Fragment>
  );
}
