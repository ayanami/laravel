import { all, call } from 'redux-saga/effects';
import shopListSaga from '../sagas/shop/shop.list.saga';
import shopCreateSaga from '../sagas/shop/shop.create.saga';
import shopEditSaga from '../sagas/shop/shop.edit.saga';

export default function* saga() {
    yield all([
        call(shopListSaga),
        call(shopCreateSaga),
        call(shopEditSaga),
    ]);
}