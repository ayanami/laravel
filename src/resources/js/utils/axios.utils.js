import wrapper from '../service/axios.wrapper';

export const get = (path, callback) => wrapper
    .get(path)
    .then(response => {
        console.log("response: ", response);
        if (Object.keys(response).length) {
            callback(response);
        }
        return { response }
    })
    .catch(error => {
        console.log("error: ", error);
        return { error }
    });

export const post = (path, request, callback) => wrapper.post(path, request)
    .then(response => {
        console.log("response: ", response);
        if (Object.keys(response).length) {
            callback(response);
        }
        return { response }
    })
    .catch(error => {
        console.log("error: ", error);
        return { error }
    });

export const patch = (path, request, callback) => wrapper.patch(path, request)
    .then(response => {
        console.log("response: ", response);
        if (Object.keys(response).length) {
            callback(response);
        }
        return { response }
    })
    .catch(error => {
        console.log("error: ", error);
        return { error }
    });