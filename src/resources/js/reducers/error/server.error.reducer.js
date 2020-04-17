import { handleActions } from 'redux-actions';

export const serverErrorReducer = handleActions({
    NOTIFY_SERVER_ERROR: (state, action) => ({ payload: action.payload }),
    CLEAR_SERVER_ERROR: () => ({ payload: null })
}, { payload: null });