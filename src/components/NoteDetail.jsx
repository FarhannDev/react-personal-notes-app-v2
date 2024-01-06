/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import parser from 'html-react-parser';
import { showFormattedDate } from '../utils/formatterDate';
import { FaClock } from 'react-icons/fa6';
import { editNote } from '../utils/data/local-data';

export default function NoteDetail({ id, title, body, createdAt }) {
  const [inputTitle, setInputTitle] = useState(title);
  const [inputBody, setInputBody] = useState(body);

  const onInputTitleChangeHandler = (event) =>
    setInputTitle(event.target.innerHTML);
  const onInputBodyChangeHandler = (event) =>
    setInputBody(event.target.innerHTML);

  useEffect(() => {
    editNote({ id, title: inputTitle, body: inputBody });
  }, [id, inputTitle, inputBody]);

  return (
    <>
      <Row className="justify-content-start ">
        <Col>
          <h1
            className="note-content-heading"
            data-placeholder="Tulis Catatan"
            contentEditable
            onInput={onInputTitleChangeHandler}
          >
            {title}
          </h1>
          <span className="note-content-date">
            <FaClock fontSize={14} /> {showFormattedDate(createdAt)}
          </span>
          <div
            className="note-content-body"
            data-placeholder="Tulis Catatan"
            contentEditable
            onInput={onInputBodyChangeHandler}
          >
            {parser(body)}
          </div>
        </Col>
      </Row>
    </>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};
