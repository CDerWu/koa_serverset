module.exports = async function (app) {
    const session = require('koa-session-minimal');
    const MysqlStore = require('koa-mysql-session');

    // let profiles = require('@root/config/dbconfig.js');
    // let targetPool = profiles.mysql.pools[profiles.mysql.defaultPool];
    let targetPool = {};

    app.use(session({
        key: "SESSION_ID",
        store: new MysqlStore(targetPool),
        // cookie: {
        //     domain: 'localhost',    // 寫cookie所在的域名
        //     path: '/',              // 寫cookie所在的路徑
        //     maxAge: 10 * 60 * 1000, // cookie 有效時長
        //     expires: new Date('2017-02-15'), // cookie失效時間
        //     httpOnly: true,         // 是否只用於 http 請求中獲取
        //     overwrite: false        // 是否允許重寫
        // }
    }));
};