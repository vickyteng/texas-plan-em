import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import sessionReducer from 'reducers/sessionReducer';
import userReducer from 'reducers/userReducer';
import thunk from 'redux-thunk';
import gameReducer from 'reducers/gameReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(combineReducers({
            session: sessionReducer,
            user: userReducer,
            game: gameReducer,
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};