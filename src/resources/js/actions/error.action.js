import { createAction } from 'redux-actions';

export const NOTIFY_ERROR = 'NOTIFY_ERROR';
export const notifyError = createAction(NOTIFY_ERROR);
