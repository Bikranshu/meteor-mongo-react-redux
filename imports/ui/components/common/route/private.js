import React from "react";
import { Route, Redirect } from "react-router-dom";

/**
 * If we have a logged-in user, display the component, otherwise redirect to login page.
 */
const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated
                ? <Component {...props} />
                : <Redirect to={{ pathname: "/" }} />}
    />
);

export default PrivateRoute;