import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory';

import {Router, Route, IndexRoute} from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
const history = createHistory();

// Import custom components
import App from './components/app.component';
import NotFoundPage from './components/error/not-found.component';
import LoginForm from './components/login/login.component';
import Dashboard from './components/dashboard/dashboard.component';
import SignUpForm from './components/signup/signup.component';
import ForgotForm from './components/forgot/forgot.component';
import Product from './components/product/product.component';
import ProductList from './components/product/product-list.component';
import ProductForm from './components/product/product-form.component';
import ProductDetail from './components/product/product-detail.component';
import store from './store/store.js';

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={LoginForm}/>
                <Route path="/forgot" component={ForgotForm}/>
                <Route path="/signup" component={SignUpForm}/>
                <Route path="/dashboard" component={App}>
                    <IndexRoute component={Dashboard}/>

                    <Route path="/products" component={Product}>
                        <IndexRoute component={ProductList}/>
                        <Route path="new" component={ProductForm}/>
                        <Route path=":id" component={ProductForm}/>
                        <Route path=":id/view" component={ProductDetail}/>
                    </Route>

                </Route>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root-container')
);