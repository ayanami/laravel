import axios from 'axios';
import { log } from './log.utils';

export const get = path => axios
    .get(path)
    .then(response => {
        log({response: response});
        return { response }
    })
    .catch(error => {
        log({error: error});
        throw new Error(error);
    });

const setCsrfToken = () => {
    axios.defaults.headers.common['X-CSRF-Token'] = document.getElementsByName('csrf-token')[0].content;
}

export const post = (path, request) => {
    setCsrfToken();
    axios.post(path, request)
    .then(response => {
        log({response: response});
        return { response }
    })
    .catch(error => {
        log({error: error});
        throw new Error(error);
    });
}