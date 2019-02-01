(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.returnExports = factory();
    }
}(this, function () {
    return {
        // host: 'http://localhost:3001',
        host: 'https://silentport.cn',
        port: 3001
    }
}));