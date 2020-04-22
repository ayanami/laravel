import { createAction } from 'redux-actions';

export const INIT_SHOP_CREATE = 'INIT_SHOP_CREATE';
export const initShopCreate = createAction(INIT_SHOP_CREATE);
export const POST_SHOP_CREATE = 'POST_SHOP_CREATE';
export const postShopCreate = createAction(POST_SHOP_CREATE, (value, callback) => ({ value, callback }));