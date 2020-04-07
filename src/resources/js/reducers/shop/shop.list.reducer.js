import { handleActions } from 'redux-actions';
import * as actions from '../../actions/shop/shop.list.action';

const initialState = {
    type: actions.INIT_SHOP_LIST,
    shops: [],
}

const shopListReducer = handleActions({
    GET_SHOP_LIST: (state, action) => ({
        type: action.type,
        shops: action.payload
    })
}, initialState);

export default shopListReducer;