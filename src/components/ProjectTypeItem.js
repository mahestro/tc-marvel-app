import React from 'react';
import PropTypes from 'prop-types';

const ProjectTypeItem = ({name, handleDelete}) => (
  <div className="form__selector__item">
    <strong>{name}</strong>
    { ' | ' }
    <a className="link-delete" onClick={handleDelete}>delete</a>
  </div>
);

ProjectTypeItem.propTypes = {
  name: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default ProjectTypeItem;
