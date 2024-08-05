const autorouter = require('koa_autorouter');
const middleWare = autorouter.getMiddleware();
const passport = require('koa-passport')
const LocalStrategy = require('passport-local');

passport.use(new LocalStrategy(async (username, password, done) => {
    let error;
    let data = await dbAgent.Userdata_UserAuthenticate({ "account": username, "password": password }).doneAsync((err) => {
        console.log(`Userdata_UserAuthenticate return error, Message : ${err.message}`);
        error = err.message;
    });

    if (error) {
        return done(null, false, error);
    }

    if (data && data.recordsets && data.recordsets.length > 0) {
        console.log("###### dbAgent.Userdata_UserAuthenticate ###### 1 ");
        return done(null, data.recordsets[0]);
    }

    console.log("###### dbAgent.Userdata_UserAuthenticate ###### 2 ");
    return done(null, false, 'No User or Password Error');
}));

// serializeUser 在用戶登錄驗證成功以後將會把用戶的數據存儲到 session 中
passport.serializeUser((user, done) => {
    done(null, user);
});

// deserializeUser 在每次請求的時候將從 session 中讀取用戶對象
passport.deserializeUser((user, done) => {
    return done(null, user);
});

exports.post_login = async (ctx, next) => {
    return passport.authenticate('local', (err, user, info, status) => {
        if (user) {
            ctx.body = { user, err, info, status };
            return ctx.login(user);
        } else {
            ctx.body = info;
        }
    })(ctx, next);
}

//middleWare.CheckLogin(exports);

exports.Get_logintest = async (ctx, next) => {
    ctx.body = ctx.session;
    // console.log('------------------------------------');
    // console.log(ctx.session);
    // console.log(ctx.state.user);
    // console.log(ctx.cookies);
}

exports.post_logout = async (ctx, next) => {
    ctx.logout();
    ctx.body = { auth: ctx.isAuthenticated(), user: ctx.state.user };
}

autorouter.routerAdderWithMid(exports);