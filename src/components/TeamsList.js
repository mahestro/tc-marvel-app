import React from 'react';
import PropTypes from 'prop-types';
import TeamCard from './TeamCard';

const TeamsList = ({teams}) => (
  teams.map((team, index) =>
    <TeamCard
      key={index.toString()}
      title={team.teamName}
      challengeId={team.challengeId}
      requests={team.requests}
      viewRequestsLink='link1'
      configureLink='link2' />
  )

);

TeamsList.defaultProps = {
  teams: []
};

TeamsList.propTypes = {
  teams: PropTypes.array
};

export default TeamsList;
