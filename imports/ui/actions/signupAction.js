import * as ActionType from '../constants/actionType';
import * as FlashMessage from './flashMessage';

export function storeItem(data) {
    return function (dispatch) {
        Accounts.createUser(data, (error) => {
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
                dispatch(FlashMessage.addFlashMessage('success', 'User added successfully.'));
            }
        });
    };
}

export function submitForm(entity, data) {
    return function (dispatch) {
        dispatch(storeItem(entity, data));

    }
}
