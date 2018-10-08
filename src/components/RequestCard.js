import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RequestCard = ({title, requestDate, memberEmail, marvelLink, editRequestLink, handleDelete}) => (
  <div className="card">
    <div className="card__info">
      <div className="card__info__title">{`[${title}]`}</div>
      <div className="card__info__details">
        Date: <strong>{requestDate}</strong>
        <div>{memberEmail}</div>
      </div>
    </div>

    <div className="card__links">
      <ul>
        <li><a href={marvelLink} target="_blank">Marvel Link</a></li>
        <li><Link to={editRequestLink}>Edit Request</Link></li>
        <li><a onClick={handleDelete}>Delete</a></li>
      </ul>
    </div>
  </div>
);

RequestCard.propTypes = {
  title: PropTypes.string.isRequired,
  requestDate: PropTypes.string.isRequired,
  memberEmail: PropTypes.string.isRequired,
  marvelLink: PropTypes.string.isRequired,
  editRequestLink: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default RequestCard;
