import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import _ from 'lodash';

import Common from '../../constants/common';
import Message from '../../constants/message';
import * as productAction from '../../actions/productAction';

class ProductModelBox extends Component {

    constructor(props) {
        super(props);

        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(event) {
        event.preventDefault();
        let id = $("#product-id").val();
        this.props.actions.destroyItem(Common.PRODUCT, id);
        $("#products-box-modal").modal('hide');

        this.props.actions.fetchAll(Common.PRODUCT);

    }

    render() {
        return (
            <div className="modal fade" id="products-box-modal" tabIndex="1" role="dialog"
                 aria-labelledby="confirm-modal-label" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content confirm-modal-box-small">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            <h4 className="modal-title" id="myModalLabel">Delete</h4>
                        </div>

                        <div className="modal-body">
                            <input id="product-id" value="" type="hidden"/>
                            <p>{Message.DELETE_PRODUCT_CONFIRM_MESSAGE}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="product-delete-yes-btn btn btn-primary"
                                    onClick={this.handleRemove}><span
                                className="glyphicon glyphicon-ok-sign"></span>&nbsp;Yes
                            </button>
                            <button type="button" className="btn btn-default" data-dismiss="modal"><span
                                className="glyphicon glyphicon-remove"></span>&nbsp;No
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

/**
 * Map the actions to props.
 */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(_.assign({}, productAction), dispatch)
    }
}

/**
 * Connect the component to the Redux store.
 */
export default connect(null, mapDispatchToProps)(ProductModelBox)