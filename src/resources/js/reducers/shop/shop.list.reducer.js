import { handleActions } from 'redux-actions';

export const shopListReducer = handleActions({
    GET_SHOP_LIST: (state, action) => ({
        type: action.type,
        payload: action.payload
    })
}, { payload: [] });