import axios from 'axios';
import store from '../redux/store';
import { notifyError } from '../actions/error.action';

const wrapper = axios.create();
const onSuccess = response => response;
const onError = error => {
    const { status, data } = error.response;
    store.dispatch(notifyError({ status, data }));
}

wrapper.defaults.headers.common['X-CSRF-Token'] = document.getElementsByName('csrf-token')[0].content;
wrapper.interceptors.response.use(onSuccess, onError);

export default wrapper;