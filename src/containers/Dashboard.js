import React, { Component } from 'react';
import { Route } from 'react-router';
import Header from '../components/Header';
import Teams from './Teams';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header title="Topcoder Marvelapp - Prototype Management" />
          <Route
            path="/dashboard/teams" Component={Teams} />
      </div>
    );
  }
}

export default Dashboard;
