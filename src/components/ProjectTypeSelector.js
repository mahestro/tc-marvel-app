import React from 'react';
import PropTypes from 'prop-types';
import ProjectTypeItem from './ProjectTypeItem';

const ProjectTypeSelector = ({projectTypes, handleAddProjectType, handleDeleteProjectType}) => (
  <div className="form__field">
    <div className="list__title">
      <div className="form__label">
        <label htmlFor="addProjectLink">Project Types</label>
      </div>
      <a onClick={handleAddProjectType}>Add Project Type</a>
    </div>

    <div className="form__selector">
      {
        projectTypes.map(type => (
          <ProjectTypeItem
            key={type.projectTypeId}
            name={type.name}
            handleDelete={handleDeleteProjectType}
          />
        ))
      }
    </div>
  </div>
);

ProjectTypeSelector.propTypes = {
  projectTypes: PropTypes.array
};

export default ProjectTypeSelector;
