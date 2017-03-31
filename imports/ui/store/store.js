import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();
const middleware = routerMiddleware(history);


// Import custom components
import rootReducer from '../reducers/rootReducer';

/**
 * Create a Redux store that holds the app state.
 */
const store = createStore(rootReducer, compose(
    applyMiddleware(thunkMiddleware, middleware, logger),

    //For working redux dev tools in chrome (https://github.com/zalmoxisus/redux-devtools-extension)
    window.devToolsExtension ? window.devToolsExtension() : function (f) {
        return f;
    }
));
export default store;