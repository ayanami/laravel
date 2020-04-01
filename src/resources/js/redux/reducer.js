import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import shopReducer from '../reducers/shop.reducer';

const reducer = history => combineReducers({
        router: connectRouter(history),
        shops: shopReducer,
});

export default reducer;