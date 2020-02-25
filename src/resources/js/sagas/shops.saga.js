import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/shops.action';

const request = (path) => axios
    .get(path)
    .then(response => {
        const data = response.data;
        console.log('data => ' + data);
        return {
            data
        }
    })
    .catch(error => {
        console.log('error => ' + error);
        return {
            error
        }
    });

function* get() {
    const { data, error } = yield call(request, '/api/shops');
    yield put({
        type: actions.GET,
        data
    });
}

export default function* shopsSaga() {
    yield takeEvery(actions.INIT, get);
}