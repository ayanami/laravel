import client from '../service/axios.client';
import { log } from './log.utils';

export const get = (path, callback) => client
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

export const post = (path, request, callback) => client.post(path, request)
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