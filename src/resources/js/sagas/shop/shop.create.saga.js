import { call, takeLatest } from 'redux-saga/effects';
import { post } from '../../utils/axios.utils';
import * as actions from '../../actions/shop/shop.create.action';

function* postShop(action) {
    yield call(post, '/api/shop/create', action.payload.values, () => {
        action.payload.callback();
    });
}
export default function* shopCreateSaga() {
    yield takeLatest(actions.POST_SHOP_CREATE, postShop);
}