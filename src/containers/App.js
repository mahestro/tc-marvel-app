import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import Dashboard from './Dashboard';
import TeamsList from './TeamsList';
import RequestForm from './RequestForm';
import Login from './Login';
import RequestError from './RequestError';
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
            authenticated={this.props.isAuthenticated}
            path={Routes.DASHBOARD}
            component={Dashboard} />
          <PrivateRoute
            authenticated={this.props.isAuthenticated}
            path={Routes.TEAMS}
            component={TeamsList} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.site.isAuthenticated
  };
};

export default connect(mapStateToProps, null, null, {pure: false})(App);
