/* eslint-disable react/prop-types */
import * as React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const SearchBar = ({ keyword, keywordChange, placeholder }) => {
  return (
    <React.Fragment>
      <Form.Control
        type="text"
        placeholder={placeholder}
        className="search-box-form__input"
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
    </React.Fragment>
  );
};

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default SearchBar;
