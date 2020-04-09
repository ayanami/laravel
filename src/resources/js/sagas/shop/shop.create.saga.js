import { call, select, takeLatest } from 'redux-saga/effects';
import { post } from '../../utils/axios.utils';
import * as actions from '../../actions/shop/shop.create.action';

function* postShopList(action) {
    yield call(post, '/api/shop/create', action.payload.value);
    const error = yield select(state => state.error.payload);
    if (!error) {
        action.payload.callback();
    }
}
export default function* shopCreateSaga() {
    yield takeLatest(actions.POST_SHOP_CREATE, postShopList);
}