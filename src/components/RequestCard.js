import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const RequestCard = ({id, title, requestDate, memberEmail, projects, handleDelete}) => (
  <div className="card">
    <div className="card__info">
      <div className="card__info__title">{`[${title}] #${projects[0].baseCount}`}</div>
      <div className="card__info__details">
        <div>{memberEmail}</div>
        <div>{moment(requestDate).format('MMM Do YY, h:mm a')}</div>
      </div>
    </div>

    <div className="card__links">
      <ul>
        {
          projects.map(project => (
            <li key={project._id}>
              <a href={`https://marvelapp.com/project/${project.idPrototypeMarvelApp}`} target="_blank" rel="noopener noreferrer">{project.projectType.projectName}</a>
              {
                project.collaboratorSuccessful ?
                <i className="icon icon--status status--success"></i> :
                <i className="icon icon--status status--error"></i>
              }
            </li>
          ))
        }
        <li><a href="#nowhere" name={id} onClick={handleDelete}>Delete</a></li>
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
