import React from "react";
import { Route, Redirect } from "react-router-dom";
//Setting private route
const PrivateRoute = ({ component: Component, authed, rest }) => (
  <Route
    {...rest}
    render={props =>
      authed === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

export default PrivateRoute;
