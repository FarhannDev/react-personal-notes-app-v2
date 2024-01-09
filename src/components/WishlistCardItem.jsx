/* eslint-disable react/prop-types */
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../assets/styles/wishlist-card-item.css';

const WishlistCardItem = ({ title, description, link }) => {
  return (
    <>
      <Card className="wishlist-card-item">
        <Card.Body>
          <h1 className="wishlist-card__title ">{title}</h1>
          <p className="wishlist-card__description"> {description}</p>
          <Link className="stretched-link" to={link}></Link>
        </Card.Body>
      </Card>
    </>
  );
};

WishlistCardItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default WishlistCardItem;
