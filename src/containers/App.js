import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import Dashboard from './Dashboard';
import Teams from './Teams';
import RequestForm from './RequestForm';
import Login from './Login';
import RequestError from './RequestError';
import PrototypesRequestsList from './PrototypesRequestsList';
import TeamForm from './TeamForm';
import Header from '../components/Header';
import * as Routes from '../constants/routes';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            path={Routes.LOGIN}
            component={Login} />
          <Route
            path={Routes.REQUEST}
            component={RequestForm} />
          <Route
            path={Routes.ERROR}
            component={RequestError} />
          <PrivateRoute
            exact
            path={Routes.DASHBOARD}
            component={Dashboard} />
          <PrivateRoute
            path={Routes.TEAMS}
            component={Teams} />
          <PrivateRoute
            exact
            path={Routes.TEAM}
            component={TeamForm} />
          <PrivateRoute
            exact
            path={Routes.NEW_TEAM}
            component={TeamForm} />
          <PrivateRoute
            path={Routes.PROTOTYPES}
            component={PrototypesRequestsList} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
