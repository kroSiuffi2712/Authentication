import React  from "react";
import { Route, Redirect   } from "react-router-dom";

import {useSelector} from 'react-redux';

function PrivateRoute({ component: Component, ...rest }) {

  const authentication = useSelector(state => state.authentication);

  return (
    <Route
      {...rest}
      render={props =>
        authentication.isAuthenticated  ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/", state: { referer: props.location } }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;