module.exports = async function (app) {
    const passport = require('koa-passport');
    app.use(passport.initialize());
    app.use(passport.session());
    //搭配view, 使用passport登入機制
    //搭配db_proxy, 修改config\dbconfig.js DB connection
    //依需求改寫策略LocalStrategy內dbAgent.xxx (script\system\user\routes.js)
    //搜尋打開 middleWare.CheckLogin(exports); 需要宣告 CheckLogin in script\initial.js
}