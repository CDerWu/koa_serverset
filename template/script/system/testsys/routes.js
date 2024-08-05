const autorouter = require('koa_autorouter');
const middleWare = autorouter.getMiddleware();

// GET /testsys/test
exports.get_test = async function (ctx, next) {
    let param = ctx.request.query;
    ctx.body = `123 321 ${JSON.stringify(param)}`;
}
middleWare.OUTPUT(exports);

// POST /testsys/test
exports.post_test = async function (ctx, next) {
    let param = ctx.request.body;
    ctx.body = `321 123 ${JSON.stringify(param)}`;
}

// POST /testsys/hh/test
exports.post_hh_test = async function (ctx, next) {
    let param = ctx.request.body;
    ctx.body = `789 987 ${JSON.stringify(param)}`;
}


autorouter.routerAdderWithMid(exports);