import React from 'react';
import PropTypes from 'prop-types';
import TeamCard from './TeamCard';

const TeamsList = ({teams, viewRequestLink, configureLink}) => (
  teams.map(team => (
    <TeamCard
      key={team.teamId}
      title={team.teamName}
      challengeId={team.challengeId}
      requests={team.requests}
      viewRequestsLink={viewRequestLink.replace(':id', team.teamId)}
      configureLink={configureLink.replace(':id', team.teamId)}
    />
  ))
);

TeamsList.defaultProps = {
  teams: []
};

TeamsList.propTypes = {
  teams: PropTypes.array
};

export default TeamsList;
