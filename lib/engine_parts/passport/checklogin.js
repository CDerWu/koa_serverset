const autorouter = require('koa_autorouter');
class CheckLogin extends autorouter.BaseMiddlewareObj {
    desc() {
        return "檢查是否登入(passport)";
    }
    async func(ctx, next) {
        if (ctx.isAuthenticated()) {
            //ctx.body = '認證通過';
            await next();
        } else {
            ctx.throw(401);
            //ctx.body = '非法訪問';
        }
    }
}

module.exports = new CheckLogin();