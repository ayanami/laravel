import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { serverErrorReducer } from '../reducers/error/server.error.reducer';
import { shopListReducer } from '../reducers/shop/shop.list.reducer';

export const reducer = history => combineReducers({
        router: connectRouter(history),
        serverError: serverErrorReducer,
        shops: shopListReducer,
});