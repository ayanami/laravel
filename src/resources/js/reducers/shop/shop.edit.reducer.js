import { handleActions } from 'redux-actions';

export const shopEditReducer = handleActions({
    GET_SHOP_EDIT: (state, action) => ({ payload: action.payload })
}, { payload: {} });