import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link, IndexLink} from 'react-router';
import _ from 'lodash';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

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
        let products = this.props.products,
            message = this.props.message;

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
                            <BootstrapTable
                                data={products}
                                striped={true}
                                pagination={ true }
                                search={ true }
                                hover={true}>
                                <TableHeaderColumn dataField="_id" isKey={true} dataSort={true}>Product ID</TableHeaderColumn>
                                <TableHeaderColumn dataField="code" dataSort={true}>Product Code</TableHeaderColumn>
                                <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
                                <TableHeaderColumn dataField="description" dataSort={true}>Description</TableHeaderColumn>
                                <TableHeaderColumn dataField="status" dataSort={true}>Status</TableHeaderColumn>
                                <TableHeaderColumn dataField="action" dataFormat={buttonFormatter}>Actions</TableHeaderColumn>
                            </BootstrapTable>,
                        </div>

                    </div>
                </div>

                <ProductModelBox />

            </div>

        );
    }
}

function buttonFormatter(cell, row) {
    return `<a href="/#/products/${row._id}/view" title="View"><i class="fa fa-eye" aria-hidden="true"></i></a>&nbsp;
            <a href="/#/products/${row._id}" title="Edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a>&nbsp;
            <a href="javascript:void(0)" title="Remove" data-toggle='modal' data-target="products-box-modal"><i class="fa fa-trash" aria-hidden="true"></i></a>`;
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