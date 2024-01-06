/* eslint-disable react/prop-types */
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../assets/styles/note-card-item.css';
import { Link } from 'react-router-dom';
import { FaClock } from 'react-icons/fa6';
import { showFormattedDate } from '../utils/formatterDate';
import parser from 'html-react-parser';

const NoteCardItem = ({ title, description, date, link }) => {
  return (
    <>
      <Card className="note-card-item">
        <Card.Body>
          <h1 className="note-card-item__title">{title}</h1>
          <span className="note-card-item__date">
            <FaClock fontSize={14} /> {showFormattedDate(date)}
          </span>
          <p className="note-card-item__description">
            {' '}
            {description.length > 150
              ? `${description.substring(0, 150)}...`
              : parser(description)}
          </p>
          <Link className="stretched-link" to={link}></Link>
        </Card.Body>
      </Card>
    </>
  );
};

NoteCardItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NoteCardItem;
