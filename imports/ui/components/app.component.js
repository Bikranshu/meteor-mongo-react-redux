import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

// Import custom components
import Header from './common/header/header.component';
import Sidebar from './common/sidebar/sidebar.component';
import Footer from './common/footer/footer.component';

class App extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (!this.props.isAuthenticated) {
            this.context.router.push('/');
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (!this.props.isAuthenticated) {
            this.context.router.push('/');
        }
    }

    componentWillUpdate(nextProps) {
        if (!nextProps.isAuthenticated) {
            this.context.router.push('/dashboard');
        }
    }

    render() {
        return (
            <div className="wrapper">
                <Header />
                <Sidebar />
                <div className="content-wrapper">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}

App.contextTypes = {
    router: PropTypes.object.isRequired
};

/**
 * Map the state to props.
 */
function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

/**
 * Connect the component to the Redux store.
 */
export default connect(mapStateToProps)(App)