import axios from 'axios';

export const request = (path) => axios
    .get(path)
    .then(response => {
        const data = response.data;
        console.log('data => ' + data);
        return {
            data
        }
    })
    .catch(error => {
        console.log('error => ' + error);
        throw new Error(error);
    });
