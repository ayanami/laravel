import axios from 'axios';
import { store } from '../redux/store';
import { notifyServerError } from '../actions/server.error.action';

const wrapper = axios.create();
const onSuccess = response => response;
const onError = error => {
    console.log("http error: ", error.response);
    const { status, data } = error.response;
    store.dispatch(notifyServerError({ status, data }));
}

wrapper.defaults.headers.common['X-CSRF-Token'] = document.getElementsByName('csrf-token')[0].content;
wrapper.interceptors.response.use(onSuccess, onError);

export default wrapper;