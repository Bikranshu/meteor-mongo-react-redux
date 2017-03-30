import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {IndexLink} from 'react-router';
import _ from 'lodash';

// Import custom components
import Common from '../../constants/common';
import * as crudAction from '../../actions/crudAction';
import * as flashMessage  from '../../actions/flashMessage';
import ProductModelBox from './product-model-box.component';
import FlashMessage from '../common/flash/message.component';

class ProductList extends Component {

    constructor(props) {
        super(props);
    }


    componentWillMount() {
        this.fetchData();
    }

    componentWillUnmount() {
        this.props.actions.removeFlashMessage();
    }

    fetchData() {
        this.props.actions.fetchAll(Common.PRODUCT);
    }

    render() {

        let message = this.props.message;

        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="box box-primary">
                        <div className="box-header">
                            <h3 className="box-title">Product List:</h3>
                            <div className="pull-right box-tools">
                                <IndexLink to={'/products/new'} className="btn btn-primary" title="Add Product"><i
                                    className="glyphicon glyphicon-plus"></i>&nbsp;Add Product
                                </IndexLink>
                            </div>
                        </div>

                        <FlashMessage message={message}/>

                        <div className="box-body">

                        </div>

                    </div>
                </div>

                <ProductModelBox />

            </div>

        );
    }
}

/**
 * Map the state to props.
 */
function mapStateToProps(state) {
    return {
        products: state.crud.products,
        message: state.flash.message
    }
}

/**
 * Map the actions to props.
 */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(_.assign({}, crudAction, flashMessage), dispatch)
    }
}

/**
 * Connect the component to the Redux store.
 */

export default  connect(mapStateToProps, mapDispatchToProps)(ProductList)