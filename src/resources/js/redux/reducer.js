import { combineReducers } from 'redux';
import shopsReducer from '../reducers/shops.reducer';

const reducer = combineReducers({
    shops: shopsReducer,
});

export default reducer;