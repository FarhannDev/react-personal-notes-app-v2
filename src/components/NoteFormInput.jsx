/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useLanguage } from '../hooks/useLanguage';

export default function NoteFormInput({ addNote }) {
  const { language } = useLanguage();
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
                placeholder={
                  language === 'id' ? 'Tulis Judul Catatan' : 'Write Note Title'
                }
                className="notelist-form-input"
                value={inputTitle}
                onChange={onTitleChangeEventHandler}
              />
            </Form.Group>

            <Form.Group className="mb-5">
              <div
                contentEditable
                className="notelist-form-input__textarea"
                data-placeholder={
                  language === 'id'
                    ? 'Tuliskan semua yang ada di pikiran kamu...'
                    : `Write down everything that's on your mind...`
                }
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
                {language === 'id' ? 'Simpan' : 'Save'}
              </Button>
              <Button
                type="button"
                variant="outline-secondary"
                className="notelist-form-input__button"
                onClick={onResetInputValue}
              >
                {language === 'id' ? 'Batalkan' : 'Cancel'}
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
