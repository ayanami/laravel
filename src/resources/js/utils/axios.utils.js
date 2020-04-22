import wrapper from '../service/axios.wrapper';

export const get = (path, callback) => {
    console.log("path: ", path);
    wrapper.get(path)
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
}

export const post = (path, request, callback) => {
    console.log("path: ", path);
    console.log("request: ", request);
    wrapper.post(path, request)
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
}

export const patch = (path, request, callback) => {
    console.log("path: ", path);
    console.log("request: ", request);
    wrapper.patch(path, request)
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
}

export const del = (path, callback) => {
    console.log("path: ", path);
    wrapper.delete(path)
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
}