module.exports = async function (app) {
    const bodyParser = require('koa-bodyparser');
    app.use(bodyParser());
}