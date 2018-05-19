const TARGET = process.env.npm_lifecycle_event;

if (TARGET === 'build:dev' || TARGET === 'dev' || !TARGET) {
    module.exports = require('./webpack/webpack.config.dev');
    console.info('--> ./webpack/webpack.config.dev.js');
}
if (TARGET === 'build' || TARGET === 'prod') {
    module.exports = require('./webpack/webpack.config.prod');
    console.info('--> ./webpack/webpack.config.prod.js');
}
