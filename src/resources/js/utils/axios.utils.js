import wrapper from '../service/axios.wrapper';
import { log } from './log.utils';

export const get = (path, callback) => wrapper
    .get(path)
    .then(response => {
        log({ response: response });
        if (Object.keys(response).length) {
            callback(response);
        }
        return { response }
    })
    .catch(error => {
        log({ error: error });
        return { error }
    });

export const post = (path, request, callback) => wrapper.post(path, request)
    .then(response => {
        log({ response: response });
        if (Object.keys(response).length) {
            callback(response);
        }
        return { response }
    })
    .catch(error => {
        log({ error: error });
        return { error }
    });