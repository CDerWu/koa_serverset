const autorouter = require('koa_autorouter');
class GetParam extends autorouter.BaseMiddlewareObj {
    desc() {
        return `取得路由輸入參數的統一方法 "ctx.getParam(key, defVal)"`;
    }
    async func(ctx, next) {
        ctx.getParam = function (key, defVal = ''){
            let val = undefined
            if (ctx.method === 'POST') {
                val = ctx.request.body[key];
            }
            if (ctx.method === 'GET') {
                val = ctx.request.query[key];
            }
            if (typeof val === 'undefined'){
                val = defVal;
            }
            return val;
        }
        await next();
    }
}

module.exports = new GetParam();