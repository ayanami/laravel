import { createAction } from 'redux-actions';

export const INIT_SHOP_EDIT = 'INIT_SHOP_EDIT';
export const initShopEdit = createAction(INIT_SHOP_EDIT);
export const GET_SHOP_EDIT = 'GET_SHOP_EDIT';
export const getShopEdit = createAction(GET_SHOP_EDIT);
export const PATCH_SHOP_EDIT = 'PATCH_SHOP_EDIT';
export const patchShopEdit = createAction(PATCH_SHOP_EDIT, (id, value, callback) => ({ id, value, callback }));