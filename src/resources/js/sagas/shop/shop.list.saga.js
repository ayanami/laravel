import { call, put, takeEvery } from 'redux-saga/effects';
import { request } from '../../utils/connection.utils';
import * as actions from '../../actions/shop/shop.list.action';

function* getShopList() {
    const { data } = yield call(request, '/api/shop/list');
    yield put({
        type: actions.GET_SHOP_LIST,
        data
    });
}

export default function* shopListSaga() {
    yield takeEvery(actions.INIT_SHOP_LIST, getShopList);
}