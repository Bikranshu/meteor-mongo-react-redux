import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// Import custom components
import UserPanel from './user-panel.component';
import Search from './search.component';

class Sidebar extends Component {
    render() {
        return (
            <aside className="main-sidebar">
                <section className="sidebar">

                    <UserPanel/>

                    <Search/>

                    <ul className="sidebar-menu">
                        <li className="header">MAIN NAVIGATION</li>
                        <li className="active">
                            <Link to={'/dashboard'}><i className="fa fa-dashboard"></i><span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/products'}><i className="fa fa-cart-plus"></i><span>Product</span>
                            </Link>
                        </li>
                    </ul>
                </section>
            </aside>
        );
    }
}

export default Sidebar