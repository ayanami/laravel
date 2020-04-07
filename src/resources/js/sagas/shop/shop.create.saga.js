import { call, takeLatest } from 'redux-saga/effects';
import { post } from '../../utils/connection.utils';
import * as actions from '../../actions/shop/shop.create.action';

function* postShopList(action) {
    console.log('action => ' + JSON.stringify(action));
    yield call(post, '/api/shop/create', action.payload.value);
    action.payload.callback();
}
export default function* shopCreateSaga() {
    yield takeLatest(actions.POST_SHOP_CREATE, postShopList);
}