import { createAction } from 'redux-actions';

export const NOTIFY_SERVER_ERROR = 'NOTIFY_SERVER_ERROR';
export const notifyServerError = createAction(NOTIFY_SERVER_ERROR);
export const CLEAR_SERVER_ERROR = 'CLEAR_SERVER_ERROR';
export const clearServerError = createAction(CLEAR_SERVER_ERROR);