import client from '../service/axios.client';
import { log } from './log.utils';

export const get = path => client
    .get(path)
    .then(response => {
        log({ response: response });
        return { response }
    })
    .catch(error => {
        log({ error: error });
        return { error }
    });

export const post = (path, request) => client.post(path, request)
    .then(response => {
        log({ response: response });
        return { response }
    })
    .catch(error => {
        log({ error: error });
        return { error }
    });