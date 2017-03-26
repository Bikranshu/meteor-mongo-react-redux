import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {hashHistory, Router, Route, IndexRoute} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

// Import custom components
import App from './components/app.component';
import NotFoundPage from './components/error/not-found.component';
import LoginForm from './components/login/login.component';
import Dashboard from './components/dashboard/dashboard.component';
import SignUpForm from './components/signup/signup.component';
import ForgotForm from './components/forgot/forgot.component';
import store from './store/store.js';


const history = syncHistoryWithStore(hashHistory, store);

render(
    <Provider store={store}>
        <Router  history={history}>
            <Route path="/" component={LoginForm}/>
            <Route path="/forgot" component={ForgotForm}/>
            <Route path="/signup" component={SignUpForm}/>
            <Route path="/dashboard" component={App}>
                <IndexRoute component={Dashboard} />
            </Route>
            <Route path="*" component={NotFoundPage} />
        </Router>
    </Provider>,
    document.getElementById('root-container')
);