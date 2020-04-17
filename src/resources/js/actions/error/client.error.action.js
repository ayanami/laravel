import { createAction } from 'redux-actions';

export const NOTIFY_CLIENT_ERROR = 'NOTIFY_CLIENT_ERROR';
export const notifyClientError = createAction(NOTIFY_CLIENT_ERROR);