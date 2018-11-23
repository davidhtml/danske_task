import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import inputReducer from '../reducers/input';

const middlewares = composeWithDevTools(applyMiddleware(thunk));

const reducers = combineReducers({
    app: inputReducer,
    form: formReducer,
});

export default () => {
    const store = createStore(reducers, middlewares);
    return store;
};
