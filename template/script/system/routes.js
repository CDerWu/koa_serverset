const autorouter = require('koa_autorouter');
const middleWare = autorouter.getMiddleware();
//middleWare.MIDDLEWARE(exports);
//const renderDefaultPage = require('_common').renderDefaultPage;

// GET /test
exports.get_test = async function (ctx, next) {
    let param = ctx.request.query;
    ctx.body = `123 321 ${JSON.stringify(param)}`;
}

// POST /test
exports.post_test = async function (ctx, next) {
    let param = ctx.request.body;
    ctx.body = { result: 0, param, msg: '/test call success' };
}

// POST /hh/test
exports.post_hh_test = async function (ctx, next) {
    let param = ctx.request.body;
    ctx.body = `789 987 ${JSON.stringify(param)}`;
}

// GET /
// exports.get_ = async function (ctx, next) {
//     await ctx.render('handlebars/layouts/main', renderDefaultPage('login', { title: 'login Page' }));
// }


autorouter.routerAdder(exports);