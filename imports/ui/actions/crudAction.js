import {Meteor} from 'meteor/meteor';

import * as ActionType from '../constants/actionType';
import * as FlashMessage from './flashMessage';

export function fetchAll(entity) {
    return function (dispatch) {
        return Meteor.subscribe('fetchAll');
    };
}

export function fetchById(entity, id) {
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
                    type: ActionType.SELECT_ITEM
                });
                dispatch(FlashMessage.addFlashMessage('success', 'Product added successfully.'));
            }
        });
    };
}

export function storeItem(entity, data) {
    return function (dispatch) {
        console.log(data);
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