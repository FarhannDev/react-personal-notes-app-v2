/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form, Button } from 'react-bootstrap';

export default function NoteFormInput({ addNote }) {
  const [inputTitle, setInputTitle] = useState('');
  const [inputBody, setInputBody] = useState('');

  const onTitleChangeEventHandler = (event) =>
    setInputTitle(event.target.value);
  const onBodyChangeEventHandler = (event) =>
    setInputBody(event.target.innerHTML);
  const isDisabledButton = Boolean(inputTitle.length && inputBody.length);

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    addNote({ title: inputTitle, body: inputBody });

    setInputTitle('');
    setInputBody('');
  };

  const onResetInputValue = () => {
    setInputTitle('');
    setInputBody('');
  };

  const content = (
    <React.Fragment>
      <Row className="justify-content-start pt-3">
        <Col>
          <Form onSubmit={onSubmitEventHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Tulis Judul Catatan Kamu"
                className="notelist-form-input"
                value={inputTitle}
                onChange={onTitleChangeEventHandler}
              />
            </Form.Group>

            <Form.Group className="mb-5">
              <div
                contentEditable
                className="notelist-form-input__textarea"
                data-placeholder="Tuliskan semua yang ada di pikiran kamu..."
                onInput={onBodyChangeEventHandler}
              ></div>
            </Form.Group>

            <div className="d-grid gap-3 mx-auto">
              <Button
                type="submit"
                variant="secondary"
                className="notelist-form-input__button"
                disabled={!isDisabledButton}
              >
                Simpan
              </Button>
              <Button
                type="button"
                variant="outline-secondary"
                className="notelist-form-input__button"
                onClick={onResetInputValue}
              >
                Batalkan
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </React.Fragment>
  );

  return content;
}

NoteFormInput.propTypes = { addNote: PropTypes.func.isRequired };
