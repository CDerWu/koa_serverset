'use strict';
const autorouter = require('koa_autorouter');
class Server {
    async start(app) {
        /*
         * Server開機時執行
         */
    }
    getMiddleware() {
        /*
         * 設定需要的Middleware
         */
        autorouter.setRequireMiddleware({
            STOPWATCH: require('./middleware/stopwatch.js'),
            GETPARAM: require('./middleware/getparam.js'),
            INPUT: require('./middleware/input.js'),
        });
        autorouter.setOptionMiddleware({
            OUTPUT: require('./middleware/output.js'),
        });
    }
    loadSystem() {
        //開始讀取系統位置
        autorouter.autoLoadBySystem(`${process.cwd()}/script/system`);
    }
    launchRouter(app) {
        //啟動路由
        autorouter.launchRouter(app);
    }
}
module.exports = new Server();