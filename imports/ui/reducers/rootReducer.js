import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import custom components
import authReducer from './authReducer';
import crudReducer from './crudReducer';
import flashMessageReducer from './flashMessageReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    auth: authReducer,
    crud: crudReducer,
    form: formReducer,  // ← redux-form
    flash: flashMessageReducer,
    router: routerReducer
});

export default rootReducer;