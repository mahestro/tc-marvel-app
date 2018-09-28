import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import Dashboard from './Dashboard';
import RequestForm from './RequestForm';
import Login from './Login';
import RequestError from './RequestError';
import Header from '../components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            path="/login"
            component={Login} />
          <Route
            path="/challenge/:challengeId"
            component={RequestForm} />
          <Route
            path="/error"
            component={RequestError} />
          <PrivateRoute
            authenticated={this.props.isAuthenticated}
            path="/dashboard"
            component={Dashboard} />
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
