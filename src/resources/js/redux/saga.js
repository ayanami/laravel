import { all, call } from 'redux-saga/effects';
import shopSaga from '../sagas/shop.saga';

export default function* saga() {
    yield all([call(shopSaga)]);
}