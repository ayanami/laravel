import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import shopListReducer from '../reducers/shop/shop.list.reducer';
import shopCreateReducer from '../reducers/shop/shop.create.reducer';

const reducer = history => combineReducers({
        router: connectRouter(history),
        shops: shopListReducer,
        shop: shopCreateReducer,
});

export default reducer;