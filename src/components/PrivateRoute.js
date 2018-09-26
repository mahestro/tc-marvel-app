import React from 'react';
import { Route, Redirect } from 'react-router';

const PrivateRoute = ({component: Component, authenticated, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  );
};

export default PrivateRoute;
