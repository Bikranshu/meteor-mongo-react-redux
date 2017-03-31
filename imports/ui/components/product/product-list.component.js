import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link, IndexLink} from 'react-router';
import _ from 'lodash';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

// Import custom components
import Common from '../../constants/common';
import * as productAction from '../../actions/productAction';
import * as flashMessage  from '../../actions/flashMessage';
import ProductModelBox from './product-model-box.component';
import FlashMessage from '../common/flash/message.component';

class ProductList extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.actionFormatter = this.actionFormatter.bind(this);
        this.statusFormatter = this.statusFormatter.bind(this);
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

    handleClick(event) {
        event.preventDefault();
        $("#products-box-modal").modal('show');
        $("#product-id").val($(event.target).parent().attr('id'));

    }

    actionFormatter(cell, row) {
        return (
            <div>
                <a href={"/#/products/" + row._id + "/view"} title="View"><i className="fa fa-eye" aria-hidden="true"></i></a>&nbsp;
                <a href={"/#/products/" + row._id} title="Edit"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></a>&nbsp;
                <a href="javascript:void(0)" id={ row._id } title="Remove" onClick={this.handleClick}><i className="fa fa-trash" aria-hidden="true"></i></a>
            </div>
        )
    }

    statusFormatter(cell, row) {
        if (row.status == 0) {
            return `<span class="label label-warning">Open</span>`;
        } else {
            return `<span class="label label-success">Close</span>`;
        }

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
                                <TableHeaderColumn dataField="status" dataSort={true} dataFormat={this.statusFormatter}>Status</TableHeaderColumn>
                                <TableHeaderColumn dataField="action" dataFormat={this.actionFormatter}>Actions</TableHeaderColumn>
                            </BootstrapTable>,
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
        actions: bindActionCreators(_.assign({}, productAction, flashMessage), dispatch)
    }
}

/**
 * Connect the component to the Redux store.
 */

export default  connect(mapStateToProps, mapDispatchToProps)(ProductList)