import { combineReducers } from 'redux';
import shopReducer from '../reducers/shop.reducer';

const reducer = combineReducers({
    shops: shopReducer,
});

export default reducer;