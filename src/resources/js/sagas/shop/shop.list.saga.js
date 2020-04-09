import { call, takeEvery } from 'redux-saga/effects';
import store from '../../redux/store';
import { get } from '../../utils/axios.utils';
import * as actions from '../../actions/shop/shop.list.action';

function* getShopList() {
    yield call(get, '/api/shop/list', response => {
        store.dispatch(actions.getShopList(response.data));
    });
}

export default function* shopListSaga() {
    yield takeEvery(actions.INIT_SHOP_LIST, getShopList);
}