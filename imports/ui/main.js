import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {hashHistory, Router, Route, IndexRoute} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

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


const history = syncHistoryWithStore(hashHistory, store);

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={LoginForm}/>
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

            <Route path="*" component={NotFoundPage}/>
        </Router>
    </Provider>,
    document.getElementById('root-container')
);