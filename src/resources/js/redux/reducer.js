import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import { errorReducer } from '../reducers/error.reducer';
import { shopListReducer } from '../reducers/shop/shop.list.reducer';

export const reducer = history => combineReducers({
        router: connectRouter(history),
        form: formReducer,
        error: errorReducer,
        shops: shopListReducer,
});