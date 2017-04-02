import React, {Component} from 'react';
import {Route} from 'react-router-dom';

// Import custom components
import MainLayout from './main.layout.component';
import Title from '../../../components/product/title.component';

const ProductLayout = ({component: Component, ...rest}) => {
    return (
        <MainLayout {...rest} component={matchProps => (
            <div>
                <Title/>
                <section className="content">
                    <Component {...matchProps} />
                </section>
            </div>
        )} />
    );
};

export default ProductLayout;