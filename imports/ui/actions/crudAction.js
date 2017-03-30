import {Meteor} from 'meteor/meteor';
import {browserHistory} from 'react-router';

import * as ActionType from '../constants/actionType';
import * as FlashMessage from './flashMessage';
import Products from '../../api/products/products';

export function fetchAll(entity) {
    return function (dispatch) {
        Meteor.subscribe('fetchAll', function () {
            dispatch({
                type: ActionType.LIST,
                entity: entity,
                data: Products.find({}, {sort: {createdAt: 1}}).fetch()
            });
        });
    };
}

export function fetchById(entity, id) {
    return function (dispatch) {
        Meteor.subscribe('fetchById', id, function () {
            dispatch({
                type: ActionType.SELECT_ITEM,
                entity: entity,
                data: Products.findOne({_id: id})
            });
        });
    };
}

export function storeItem(entity, data) {
    return function (dispatch) {
        Meteor.call('storeProduct', data, error => {
            if (error) {
                dispatch({
                    type: ActionType.FAILURE,
                    error,
                });
                dispatch(FlashMessage.addFlashMessage('error', error.reason));
            } else {
                dispatch({
                    type: ActionType.ADD
                });
                dispatch(FlashMessage.addFlashMessage('success', 'Product added successfully.'));
                browserHistory.goBack();
            }
        });
    };
}


export function updateItem(entity, data, id) {
    return function (dispatch) {
        Meteor.call('updateProduct', id, data, error => {
            if (error) {
                dispatch({
                    type: ActionType.FAILURE,
                    error,
                });
                dispatch(FlashMessage.addFlashMessage('error', error.reason));
            } else {
                dispatch({
                    type: ActionType.UPDATE
                });
                dispatch(FlashMessage.addFlashMessage('success', 'Product updated successfully.'));
                browserHistory.goBack();
            }
        });
    };
}

export function destroyItem(entity, id) {
    return function (dispatch) {
        Meteor.call('destroyProduct', id, error => {
            if (error) {
                dispatch({
                    type: ActionType.FAILURE,
                    error,
                });
                dispatch(FlashMessage.addFlashMessage('error', error.reason));
            } else {
                dispatch({
                    type: ActionType.DELETE
                });
                dispatch(FlashMessage.addFlashMessage('success', 'Product deleted successfully.'));
            }
        });
    };
}


export function submitForm(entity, data, id) {
    return function (dispatch) {
        if (id) {
            dispatch(updateItem(entity, data, id));
        } else {
            dispatch(storeItem(entity, data));
        }
    }
}

export function updateSelectedItem(entity, key, value) {
    return {
        type: ActionType.UPDATE_SELECTED_ITEM,
        entity: entity,
        key: key,
        value: value
    }
}

export function clearSelectedItem(entity) {
    return {
        type: ActionType.CLEAR_SELECTED_ITEM,
        entity: entity
    }
}