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

export const post = (path, request) => axios
    .post(path, request)
    .then(response => {
        log({response: response});
        return { response }
    })
    .catch(error => {
        log({error: error});
        throw new Error(error);
    });
