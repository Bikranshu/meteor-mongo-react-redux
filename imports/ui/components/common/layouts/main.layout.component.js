import React, {Component} from 'react';
import {Route} from 'react-router-dom';

// Import custom components
import Header from '../header/header.component';
import Sidebar from '../sidebar/sidebar.component';
import Footer from '../footer/footer.component';

const MainLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <div className="wrapper">
                <Header />
                <Sidebar />
                <div className="content-wrapper">
                    <Component {...matchProps} />
                </div>
                <Footer />
            </div>
        )}/>
    )
};

export default MainLayout;