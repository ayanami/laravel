import axios from 'axios';

export const get = path => axios
    .get(path)
    .then(response => {
        console.log('response => ' + JSON.stringify(response));
        return { response }
    })
    .catch(error => {
        console.log('error => ' + error);
        throw new Error(error);
    });

export const post = (path, request) => axios
    .post(path, request)
    .then(response => {
        console.log('response => ' + JSON.stringify(response));
        return { response }
    })
    .catch(error => {
        console.log('error => ' + error);
        throw new Error(error);
    });
