import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ user, children, ...rest }) => {
    return (
        <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location }
              }}
            />
          );
        }

        return null;
      }}
    />
    )
}

export default ProtectedRoute;
