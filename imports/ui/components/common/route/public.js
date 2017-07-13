import React from "react";
import {Route, Redirect} from "react-router-dom";

// Import custom components
import LoginForm from '../../login/login.component';
import SignUpForm from '../../signup/signup.component';
import ForgotForm from '../../forgot/forgot.component';

/**
 * public route page.
 */
const PublicRoute = () => (
    <div>
        <Route exact path="/" component={LoginForm}/>
        <Route path="/forgot" component={ForgotForm}/>
        <Route path="/signup" component={SignUpForm}/>
    </div>
);

export default PublicRoute;