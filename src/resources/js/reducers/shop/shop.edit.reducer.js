import { handleActions } from 'redux-actions';

export const shopEditReducer = handleActions({
    INIT_SHOP_EDIT: (state, action) => ({
        type: action.type,
        payload: {}
    }),
    GET_SHOP_EDIT: (state, action) => ({
        type: action.type,
        payload: action.payload
    })
}, { payload: {} });