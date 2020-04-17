import { handleActions } from 'redux-actions';

export const clientErrorReducer = handleActions({
    NOTIFY_CLIENT_ERROR: (state, action) => ({ payload: action.payload })
}, { payload: {} });