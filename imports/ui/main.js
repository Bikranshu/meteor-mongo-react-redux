import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory';

import {Router, Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
const history = createHistory();

// Import custom components
import NotFoundPage from './components/error/not-found.component';
import LoginForm from './components/login/login.component';
import Dashboard from './components/dashboard/dashboard.component';
import SignUpForm from './components/signup/signup.component';
import ForgotForm from './components/forgot/forgot.component';
import ProductList from './components/product/product-list.component';
import ProductForm from './components/product/product-form.component';
import ProductDetail from './components/product/product-detail.component';

import MainLayout from './components/common/layouts/main.layout.component';
import ProductLayout from './components/common/layouts/product.layout.component';

import store from './store/store.js';

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Switch>
                    <Route exact path="/" component={LoginForm}/>
                    <Route path="/forgot" component={ForgotForm}/>
                    <Route path="/signup" component={SignUpForm}/>

                    <MainLayout path="/dashboard" component={Dashboard}/>
                    <ProductLayout exact path="/products" component={ProductList}/>
                    <ProductLayout path="/products/new" component={ProductForm}/>
                    <ProductLayout path="/products/:id" component={ProductForm}/>
                    <ProductLayout path="/products/:id/view" component={ProductDetail}/>

                    <Route component={NotFoundPage}/>
                </Switch>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root-container')
);