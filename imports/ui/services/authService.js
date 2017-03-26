import axios from 'axios';
import cookie from 'react-cookie';

import * as ActionType from '../constants/actionType';
import AppConstant from '../constants/app';
import * as FlashMessage from '../actions/flashMessage';

export function login({email, password}) {
    return function (dispatch) {
        axios.post(AppConstant.API_URL + 'auth/login', {email, password}).then((response) => {
            dispatch({
                type: ActionType.LOG_IN_SUCCESS,
                payload: response.data.token
            });
            cookie.save(AppConstant.TOKEN, response.data.token, {path: '/'});
            window.location.href = AppConstant.ROOT_URL + 'dashboard';
        })
            .catch((error) => {
                authErrorHandler(dispatch, error.response, ActionType.LOG_IN_FAILURE);
                dispatch(FlashMessage.addFlashMessage('error', 'Invalid username and password.'));
            });
    };
}


export function logout() {
    return function (dispatch) {
        cookie.remove(AppConstant.TOKEN, {path: '/'});
        dispatch({type: ActionType.LOG_OUT});

        window.location.href = AppConstant.BASE_URL;
        return false;
    };
}

export function authErrorHandler(dispatch, error, type) {
    let errorMessage = (error.data.message) ? error.data.message : error.data;

    // NOT AUTHENTICATED ERROR
    if (error.status === 401) {
        errorMessage = 'You are not authorized to do this. Please login and try again.';
    }

    dispatch({
        type,
        payload: errorMessage,
    });
}