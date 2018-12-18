export const getType = (data) => {
    return Object.prototype.toString.call(data).match(/[A-Z]\w+/)[0].toLowerCase();
}

export const getDate = (timestamp) => {
    const time = new Date(timestamp);
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const date = time.getDate();
    return `${year}.${month > 9 ? month : `0${month}`}.${date > 9 ? date : `0${date}`}`
}