import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as teamActions from '../actions/teamActions';
import * as Routes from '../constants/routes';
import TeamsList from '../components/TeamsList';

class PrototypesRequestsList extends Component {
  componentDidMount() {
    //this.props.actions.loadTeams();
  }

  render() {
    return (
      <section className="form">
        <Link to={Routes.TEAMS}>Back to Teams</Link>
        <div className="list__title">
          <h5>Requests</h5>
        </div>

        <div className="card-list-wrapper">
          {/* <TeamsList teams={this.props.teams} /> */}
        </div>
      </section>
    );
  }
};

const mapStateToProps = state => {
  return {
    teams: state.teams
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(teamActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PrototypesRequestsList);
