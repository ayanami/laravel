import { call, takeLatest } from 'redux-saga/effects';
import store from '../../redux/store';
import { get, del } from '../../utils/axios.utils';
import * as actions from '../../actions/shop/shop.list.action';

function* getShops() {
    yield call(get, '/api/shop/list', response => {
        store.dispatch(actions.getShopList(response.data));
    });
}

function* deleteShop(action) {
    yield call(del, '/api/shop/delete/' + action.payload, () => {
        store.dispatch(actions.initShopList());
    });
}

export default function* shopListSaga() {
    yield takeLatest(actions.INIT_SHOP_LIST, getShops);
    yield takeLatest(actions.DELETE_SHOP, deleteShop);
}