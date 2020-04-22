import { createAction } from 'redux-actions';

export const INIT_SHOP_LIST = 'INIT_SHOP_LIST';
export const initShopList = createAction(INIT_SHOP_LIST);
export const GET_SHOP_LIST = 'GET_SHOP_LIST';
export const getShopList = createAction(GET_SHOP_LIST);
export const DELETE_SHOP = 'DELETE_SHOP';
export const deleteShop = createAction(DELETE_SHOP);