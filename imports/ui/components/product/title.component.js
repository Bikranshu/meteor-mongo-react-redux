import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Title extends Component {
    render(){
        return (
                <section className="content-header">
                    <h1>Product</h1>
                    <ol className="breadcrumb">
                        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                        <li className="active">
                            <Link to={'/products'}>Product</Link>
                        </li>
                    </ol>
                </section>
        );
    }
}

export default Title