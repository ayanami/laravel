import { call, put, takeEvery } from 'redux-saga/effects';
import { get } from '../../utils/connection.utils';
import * as actions from '../../actions/shop/shop.list.action';

function* getShopList() {
    const { response } = yield call(get, '/api/shop/list');
    yield put({
        type: actions.GET_SHOP_LIST,
        payload: response.data
    });
}

export default function* shopListSaga() {
    yield takeEvery(actions.INIT_SHOP_LIST, getShopList);
}