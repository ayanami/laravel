import { handleActions } from 'redux-actions';

export const errorReducer = handleActions({
    NOTIFY_ERROR: (state, action) => ({ payload: action.payload })
}, { payload: null });