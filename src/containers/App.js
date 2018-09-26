import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import Dashboard from './Dashboard';
import Request from './Request';
import Login from './Login';
import RequestError from './RequestError';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route
          path="/login"
          component={Login} />
        <Route
          path="/challenge/:challengeId"
          component={Request} />
        <Route
          path="/error"
          component={RequestError} />
        <PrivateRoute
          authenticated={this.props.authenticated}
          path="/dashboard"
          component={Dashboard} />
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.site.authenticated
  };
};

export default connect(mapStateToProps)(App);
