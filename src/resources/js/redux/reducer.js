import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { clientErrorReducer } from '../reducers/error/client.error.reducer';
import { serverErrorReducer } from '../reducers/error/server.error.reducer';
import { shopListReducer } from '../reducers/shop/shop.list.reducer';

export const reducer = history => combineReducers({
        router: connectRouter(history),
        clientError: clientErrorReducer,
        serverError: serverErrorReducer,
        shops: shopListReducer,
});