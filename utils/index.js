export const getType = (data) => {
    return Object.prototype.toString.call(data).match(/[A-Z]\w+/)[0].toLowerCase();
}