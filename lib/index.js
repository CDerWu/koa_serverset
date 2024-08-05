const Koa = require('koa');
const app = new Koa();

let tryRequire = function (...param) {
    try {
        return require.apply(global, param);
    } catch (e) {
        console.log(e.message);
    }
}

let mainProcess = async function () {
    //system_log
    let system_log = tryRequire(`${process.cwd()}/script/enginesetting/system_log.js`);
    if (system_log) {
        await system_log(app);
    }

    //Aliases
    const paths = require(`${process.cwd()}/.paths.js`);
    const packages = require(`${process.cwd()}/package.json`);
    packages['_moduleAliases'] = paths['_moduleAliases'];
    const fs = require('fs');
    fs.writeFileSync(`${process.cwd()}/package.json`, JSON.stringify(packages, null, 4));
    require('module-alias/register');

    //session
    let session = tryRequire(`${process.cwd()}/script/enginesetting/session.js`);
    if (session) {
        await session(app);
    }

    //bodyparser
    let bodyparser = tryRequire(`${process.cwd()}/script/enginesetting/bodyparser.js`);
    if (bodyparser) {
        await bodyparser(app);
    }

    //passport
    let passport = tryRequire(`${process.cwd()}/script/enginesetting/passport.js`);
    if (passport) {
        await passport(app);
    }

    //cors
    let cors = tryRequire(`${process.cwd()}/script/enginesetting/cors.js`);
    if (cors) {
        await cors(app);
    }

    //i18n
    let i18n = tryRequire(`${process.cwd()}/script/enginesetting/i18n.js`);
    if (i18n) {
        await i18n(app);
    }

    //view
    let view = tryRequire(`${process.cwd()}/script/enginesetting/view.js`);
    if (view) {
        await view(app);
    }

    //讀取server初始設定
    let serverInitial = tryRequire(`${process.cwd()}/script/initial.js`);
    if (serverInitial) {
        serverInitial.getMiddleware();
        serverInitial.loadSystem();
        //SSE
        tryRequire(`${process.cwd()}/script/enginesetting/sse_server.js`);
        serverInitial.launchRouter(app);
    }
    
    app.listen(process.env.PORT || 3000);

    //websocket

    //蒐集全域關鍵字
    let collectGlobalKey = function () {
        let gKey = {};
        for (let key in global) {
            gKey[key] = true;
        }
        let eslintrc = require(`${process.cwd()}/.eslint.js`);
        eslintrc.globals = gKey;

        let newESlintrc = `module.exports = ${JSON.stringify(eslintrc, null, 4)}`;

        fs.writeFile(`${process.cwd()}/.eslintrc.js`, newESlintrc, (err) => {
            if (err) throw err;
            console.log("eslintrc.js saved");
        });
    };

    if (serverInitial) {
        await serverInitial.start(app);
        collectGlobalKey();
    }
}
mainProcess();