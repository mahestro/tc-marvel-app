import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const RequestCard = ({id, title, requestDate, memberEmail, projects, handleDelete}) => (
  <div className="card">
    <div className="card__info">
      <div className="card__info__title">{`[${title}]`}</div>
      <div className="card__info__details">
        <div>{memberEmail}</div>
        <div>{moment(requestDate).format('MMM Do YY, h:mm')}</div>
        <div>Count: {projects[0].baseCount}</div>
      </div>
    </div>

    <div className="card__links">
      <ul>
        {
          projects.map(project => <li key={project._id}><a href={project.prototypeUrl} target="_blank">{project.projectType.projectName}</a></li>)
        }
        <li><a name={id} onClick={handleDelete}>Delete</a></li>
      </ul>
    </div>
  </div>
);

RequestCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  requestDate: PropTypes.string.isRequired,
  memberEmail: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default RequestCard;
