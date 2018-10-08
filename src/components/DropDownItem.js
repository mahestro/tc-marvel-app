import React from 'react';
import PropTypes from 'prop-types';

const DropDownItem = ({name, handleClick}) => (
  <li><a onClick={handleClick}>{name}</a></li>
);

DropDownItem.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default DropDownItem;
