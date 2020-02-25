import { all, call } from 'redux-saga/effects';
import shopsSaga from '../sagas/shops.saga';

export default function* saga() {
    yield all([call(shopsSaga)]);
}