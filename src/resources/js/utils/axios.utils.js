import axiosWrapper from '../service/axios.wrapper';

const publish = (promise, callback) => {
    let status = 'pending';
    let result;

    const suspend = promise.then(
        response => {
            if (response?.status === 200) {
                console.log("response: ", response);
                status = 'fulfilled';
                result = response;
                callback?.();
            } else {
                throw response;
            }
        }).catch(error => {
            status = 'rejected';
            result = error;
        });

    const subscribe = () => {
        console.log("status: ", status)
        if (status === 'pending') {
            throw suspend;
        } else {
            return result;
        }
    };

    return { subscribe };
}

const subscribe = (promise, callback) => {
    promise.then(
        response => {
            if (response?.status === 200) {
                console.log("response: ", response);
                callback?.();
                return { response }
            } else {
                throw response;
            }
        }).catch(error => {
            return { error }
        });
}

export const get = (path, callback) => publish(axiosWrapper.get(path), callback);

export const post = (path, request, callback) => subscribe(axiosWrapper.post(path, request), callback);

export const patch = (path, request, callback) => subscribe(axiosWrapper.patch(path, request), callback);

export const del = (path, callback) => subscribe(axiosWrapper.delete(path), callback);