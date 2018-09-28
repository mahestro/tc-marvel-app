import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';
import * as Routes from '../constants/routes';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
        rest.isAuthenticated ? (
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

const mapStateToProps = state => {
  return {
    isAuthenticated: state.site.isAuthenticated
  };
};

export default connect(mapStateToProps, null, null, {pure: false})(PrivateRoute);
