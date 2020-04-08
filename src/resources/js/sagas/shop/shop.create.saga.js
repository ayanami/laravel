import { call, takeLatest } from 'redux-saga/effects';
import { post } from '../../utils/ajax.utils';
import * as actions from '../../actions/shop/shop.create.action';
import { log } from '../../utils/log.utils';

function* postShopList(action) {
    log({action: action});
    yield call(post, '/api/shop/create', action.payload.value);
    action.payload.callback();
}
export default function* shopCreateSaga() {
    yield takeLatest(actions.POST_SHOP_CREATE, postShopList);
}