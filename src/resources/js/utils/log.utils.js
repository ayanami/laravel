export const log = message => {
    for (let key in message) {
        console.log(key + " => " + JSON.stringify(message));
    }
}