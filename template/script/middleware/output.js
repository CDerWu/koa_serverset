const autorouter = require('koa_autorouter');
class Output extends autorouter.BaseMiddlewareObj {
    desc() {
        return "顯示路由輸出參數";
    }
    async func(ctx, next) {
        await next();
        console.log(`${ctx.method} ${ctx.path} - ${JSON.stringify(ctx.body)}`);
    }
}

module.exports = new Output();