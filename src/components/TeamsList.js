import React from 'react';
import PropTypes from 'prop-types';
import TeamCard from './TeamCard';

const TeamsList = ({teams, viewRequestLink, configureLink}) => (
  teams.map(team => (
    <TeamCard
      key={team.id}
      title={team.teamName}
      challengeId={team.idTopcoderChallenge}
      requests={team.baseCount}
      viewRequestsLink={viewRequestLink.replace(':id', team.idTeamMarvelApp)}
      configureLink={configureLink.replace(':id', team.idTeamMarvelApp)}
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
