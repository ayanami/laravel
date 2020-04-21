import { call, takeLatest } from 'redux-saga/effects';
import store from '../../redux/store';
import { get, patch } from '../../utils/axios.utils';
import * as actions from '../../actions/shop/shop.edit.action';

function* getShopEdit(action) {
    yield call(get, '/api/shop/edit/' + action.payload, response => {
        store.dispatch(actions.getShopEdit(response.data));
    });
}

function* patchShopEdit(action) {
    yield call(patch, '/api/shop/edit/' + action.payload.id, action.payload.value, () => {
        action.payload.callback();
    });
}

export default function* shopEditSaga() {
    yield takeLatest(actions.INIT_SHOP_EDIT, getShopEdit);
    yield takeLatest(actions.PATCH_SHOP_EDIT, patchShopEdit);
}