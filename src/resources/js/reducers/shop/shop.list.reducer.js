import { handleActions } from 'redux-actions';

export const shopListReducer = handleActions({
    GET_SHOP_LIST: (state, action) => ({ payload: action.payload })
}, { payload: [] });