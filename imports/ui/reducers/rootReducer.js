import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import custom components
import authReducer from './authReducer';
import flashMessageReducer from './flashMessageReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    auth: authReducer,
    form: formReducer,  // ← redux-form
    flash: flashMessageReducer,
    routing: routerReducer
});

export default rootReducer;