import React from 'react';
import { Route, Redirect } from 'react-router';
import * as Routes from '../constants/routes';

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
        authenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: Routes.LOGIN,
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
