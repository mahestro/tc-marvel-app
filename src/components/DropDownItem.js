import React from 'react';
import PropTypes from 'prop-types';

const DropDownItem = ({name, label, handleClick}) => (
  <li><a onClick={handleClick} name={name}>{label}</a></li>
);

DropDownItem.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  handleClick: PropTypes.func.isRequired
};

export default DropDownItem;
