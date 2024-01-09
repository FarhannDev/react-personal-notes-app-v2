/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import { Row, Col } from 'react-bootstrap';
import { showFormattedDate } from '../utils/formatterDate';
import { FaClock } from 'react-icons/fa6';

export default function NoteDetail({ title, body, createdAt }) {
  return (
    <>
      <Row className="justify-content-start ">
        <Col>
          <h1 className="note-content-heading" data-placeholder="Tulis Catatan">
            {title}
          </h1>
          <span className="note-content-date">
            <FaClock fontSize={14} /> {showFormattedDate(createdAt)}
          </span>
          <div className="note-content-body" data-placeholder="Tulis Catatan">
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
