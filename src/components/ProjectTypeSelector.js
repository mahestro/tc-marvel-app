import React from 'react';
import PropTypes from 'prop-types';
import ProjectTypeItem from './ProjectTypeItem';
import DropDown from './DropDown';

const ProjectTypeSelector = ({dropDownItems, projectTypes, required, handleAddProjectType, handleDeleteProjectType, error}) => {
  let wrapperClass = 'form__field';
  if (error && error.length > 0) {
    wrapperClass += ' form__field--error';
  }

  return (
    <div className={wrapperClass}>
      <div className="list__title">
        <div className="form__label">
          <label htmlFor="addProjectLink">Project Types</label>
          { required && <span className="input-required"> *</span> }
        </div>
        <DropDown
          label="Add Project Type"
          items={dropDownItems}
          handleClick={handleAddProjectType}
        />
      </div>

      { error && <div className="form__field__alert">{error}</div> }

      <div className="form__selector">
        {
          projectTypes.map((type, index) => (
            <ProjectTypeItem
              key={`${type.marvelAppId}_${index}_${type.id}`}
              name={`${type.projectName}_${index}`}
              label={type.projectName}
              handleDelete={handleDeleteProjectType}
            />
          ))
        }
      </div>
    </div>
  )
};

ProjectTypeSelector.propTypes = {
  dropDownItems: PropTypes.array,
  projectTypes: PropTypes.array,
  required: PropTypes.bool,
  handleAddProjectType: PropTypes.func.isRequired,
  handleDeleteProjectType: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default ProjectTypeSelector;
