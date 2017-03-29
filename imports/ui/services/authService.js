import * as ActionType from '../constants/actionType';
import AppConstant from '../constants/app';
import * as FlashMessage from '../actions/flashMessage';

export function login({email, password}) {
    return function (dispatch) {
        Meteor.loginWithPassword(email, password, (error) => {
            if (error) {
                dispatch({
                    type: ActionType.LOG_IN_FAILURE,
                    error,
                });
                dispatch(FlashMessage.addFlashMessage('error', 'Invalid username and password.'));
            } else {
                dispatch({
                    type: ActionType.LOG_IN_SUCCESS
                });
                window.location.href = AppConstant.ROOT_URL + 'dashboard';
            }
        });
    };
}


export function logout() {
    return function (dispatch) {
        Meteor.logout((error) => {
            if (error) {
                dispatch({
                    type: ActionType.LOG_OUT_FAILURE,
                    error,
                });
                dispatch(FlashMessage.addFlashMessage('error', error.reason));
            } else {
                dispatch({
                    type: ActionType.LOG_OUT
                });
                window.location.href = AppConstant.ROOT_URL;
            }
        });

    };
}