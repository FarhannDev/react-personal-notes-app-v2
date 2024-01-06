/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../assets/styles/welcome-card.css';

const WelcomeCard = ({ title, description }) => {
  return (
    <>
      <Card body className="welcome-card-item">
        <h1 className="welcome-card__title">{title}</h1>
        <p className="welcome-card__description">{description}</p>
      </Card>
    </>
  );
};

WelcomeCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default WelcomeCard;
