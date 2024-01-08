/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useInput } from '../../hooks/useInput';
import { useLanguage } from '../../hooks/useLanguage';

export default function LoginFormInput({ login }) {
  const [email, onEmailHandler] = useInput('');
  const [password, onPasswordHandler] = useInput('');
  const handlerButtonDisabled = Boolean(email && password);

  const { language } = useLanguage();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (handlerButtonDisabled) {
      login({ email, password });
    }
  };

  return (
    <React.Fragment>
      <Row className="justify-content-start pt-3">
        <Col>
          <Form onSubmit={onSubmitHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="auth-form-label">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder={
                  language === 'id'
                    ? 'Masukan Email Address'
                    : 'Enter Email Address'
                }
                className="auth-form-input"
                value={email}
                onChange={onEmailHandler}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="auth-form-label">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder={
                  language === 'id' ? 'Masukan Password' : 'Enter Password'
                }
                className="auth-form-input"
                value={password}
                onChange={onPasswordHandler}
              />
            </Form.Group>

            <div className="d-grid gap-3 mx-auto pt-3">
              <Button
                disabled={!handlerButtonDisabled}
                type="submit"
                variant="secondary"
                size="lg"
              >
                {language === 'id' ? 'Masuk' : 'Login'}
              </Button>
            </div>

            <div className="d-flex flex-column pt-4">
              <div>
                <span className="auth-form-label">
                  {language === 'id'
                    ? `Belum punya akun? `
                    : `Don't have an account yet?`}
                </span>{' '}
                <Link
                  className="auth-form-label text-decoration-underline"
                  to={'/register'}
                >
                  Register {language === 'id' ? 'di sini' : 'Now'}
                </Link>
              </div>
            </div>
          </Form>
        </Col>
      </Row>
    </React.Fragment>
  );
}
