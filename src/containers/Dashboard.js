import React, { Component } from 'react';
import { Redirect } from 'react-router';
import * as Routes from '../constants/routes';

class Dashboard extends Component {
  render() {
    return (
      <Redirect to={Routes.TEAMS} />
    );
  }
}

export default Dashboard;
