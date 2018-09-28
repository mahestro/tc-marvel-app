import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Header from '../components/Header';
import TeamsList from './TeamsList';
import PrototypesList from './PrototypesList';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/dashboard/teams" Component={TeamsList} />
          <Route path="/dashboard/teams/:teamId/prototypes/" Component={PrototypesList} />
        </Switch>
      </div>
    );
  }
}

export default Dashboard;
