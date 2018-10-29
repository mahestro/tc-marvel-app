import React from 'react';
import PropTypes from 'prop-types';

const ProjectTypeItem = ({name, label, handleDelete}) => (
  <div className="form__selector__item">
    <strong>{label}</strong>
    { ' | ' }
    <a
      href="#nowhere"
      className="link-delete"
      onClick={handleDelete}
      name={name}
    >delete</a>
  </div>
);

ProjectTypeItem.propTypes = {
  name: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default ProjectTypeItem;
