import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import { clientErrorReducer } from '../reducers/error/client.error.reducer';
import { serverErrorReducer } from '../reducers/error/server.error.reducer';
import { shopListReducer } from '../reducers/shop/shop.list.reducer';

export const reducer = history => combineReducers({
        router: connectRouter(history),
        form: formReducer,
        clientError: clientErrorReducer,
        serverError: serverErrorReducer,
        shops: shopListReducer,
});