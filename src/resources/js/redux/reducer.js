import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import shopListReducer from '../reducers/shop/shop.list.reducer';

const reducer = history => combineReducers({
        router: connectRouter(history),
        form: formReducer,
        shops: shopListReducer,
});

export default reducer;