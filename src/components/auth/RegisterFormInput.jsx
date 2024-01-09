/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useInput } from '../../hooks/useInput';
import { useLanguage } from '../../hooks/useLanguage';

export default function RegisterFormInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPasswordChange] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const { language } = useLanguage();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    // Memeriksa apakah password dan konfirmasi password cocok
    setPasswordsMatch(event.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPasswordChange(event.target.value);
    // Memeriksa apakah password dan konfirmasi password cocok
    setPasswordsMatch(password === event.target.value);
  };

  const disabledButton = Boolean(name && email && password && confirmPassword);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // Menangani logika formulir setelah submit
    if (passwordsMatch) {
      register({ name, email, password });
    } else {
      alert('Password dan konfirmasi password tidak cocok');
      setPassword('');
      setConfirmPasswordChange('');
    }
  };

  return (
    <React.Fragment>
      <Row className="justify-content-start pt-3">
        <Col>
          <Form onSubmit={onSubmitHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="auth-form-label">
                {language === 'id' ? 'Nama Lengkap' : 'Full Name'}
              </Form.Label>
              <Form.Control
                type="text"
                placeholder={
                  language === 'id' ? 'Masukan Nama' : 'Enter Full Name'
                }
                className="auth-form-input"
                value={name}
                onChange={onNameChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
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
                onChange={onEmailChange}
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
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="auth-form-label">
                Confirm Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder={
                  language === 'id' ? 'Konfirmasi Password' : 'Password Confirm'
                }
                className="auth-form-input"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </Form.Group>

            <div className="d-grid gap-3 mx-auto pt-3">
              <Button
                disabled={!disabledButton}
                type="submit"
                variant="secondary"
                size="lg"
              >
                {language === 'id' ? 'Daftarkan' : 'Register Now'}
              </Button>
            </div>

            <div className="d-flex flex-column pt-4">
              <div>
                <span className="auth-form-label">
                  {language === 'id'
                    ? `Sudah punya akun?`
                    : 'Already have an account?'}
                </span>{' '}
                <Link
                  className="auth-form-label text-decoration-underline"
                  to={'/login'}
                >
                  Login {language === 'id' ? 'di sini' : 'Now'}
                </Link>
              </div>
            </div>
          </Form>
        </Col>
      </Row>
    </React.Fragment>
  );
}

RegisterFormInput.propTypes = { register: PropTypes.func.isRequired };
