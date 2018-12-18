/* eslint-disable */
const withCss = require('@zeit/next-css');

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
    require.extensions['.css'] = (file) => {}
}
console.log(withCss);

module.exports = withCss({
    webpack: (config, {}) => {
        return config;
    },
    distDir: '_next'
});