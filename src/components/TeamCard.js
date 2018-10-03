import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TeamCard = ({title, challengeId, requests, viewRequestsLink, configureLink}) => (
  <div className="card">
    <div className="card__info">
      <div className="card__info__title">{title}</div>
      <div className="card__info__details">
        Challenge Id: <strong>{challengeId}</strong>
        <div>Requests: <strong>{requests}</strong></div>
      </div>
    </div>

    <div className="card__links">
      <ul>
        <li><Link to={viewRequestsLink}>View Requests</Link></li>
        <li><Link to={configureLink}>Configure</Link></li>
      </ul>
    </div>
  </div>
);

TeamCard.propTypes = {
  title: PropTypes.string.isRequired,
  challengeId: PropTypes.number.isRequired,
  requests: PropTypes.number.isRequired,
  viewRequestsLink: PropTypes.string.isRequired,
  configureLink: PropTypes.string.isRequired
};

export default TeamCard;
