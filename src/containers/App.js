import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Request from './Request';
import RequestError from './RequestError';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/challenge/:challengeId"
          component={Request} />
        <Route
          path="/error"
          component={RequestError} />
      </Switch>
    );
  }
}

export default App;
