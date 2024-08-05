const autorouter = require('koa_autorouter');
class StopWatch extends autorouter.BaseMiddlewareObj {
    desc() {
        return "計算路由耗費時間";
    }
    async func(ctx, next) {
        const start = Date.now();
        await next();
        const ms = Date.now() - start;
        console.log(`${ctx.method} ${ctx.path} - ${ms}ms`);
    }
}

module.exports = new StopWatch();