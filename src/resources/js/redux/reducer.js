import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { serverErrorReducer } from '../reducers/server.error.reducer';

export const reducer = history => combineReducers({
        router: connectRouter(history),
        serverError: serverErrorReducer,
});