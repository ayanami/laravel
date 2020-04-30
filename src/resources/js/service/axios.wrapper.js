import axios from 'axios';
import { store } from '../redux/store';
import { notifyServerError } from '../actions/server.error.action';

const axiosWrapper = axios.create();
const onSuccess = response => response;
const onError = error => {
    console.log("http error: ", error.response);
    const { status, data } = error.response;
    store.dispatch(notifyServerError({ status, data }));
}

axiosWrapper.defaults.headers.common['X-CSRF-Token'] = document.getElementsByName('csrf-token')[0].content;
axiosWrapper.interceptors.response.use(onSuccess, onError);

export default axiosWrapper;