const autorouter = require('koa_autorouter');
let getCtxParam = function (ctx) {
    if (ctx.method === 'POST') {
        return ctx.request.body;
    }
    if (ctx.method === 'GET') {
        return ctx.request.query;
    }
    return '';
};
class Input extends autorouter.BaseMiddlewareObj {
    desc() {
        return "顯示路由輸入參數";
    }
    async func(ctx, next) {
        console.log(`${ctx.method} ${ctx.path} - ${JSON.stringify(getCtxParam(ctx))}`);
        await next();
    }
}

module.exports = new Input();