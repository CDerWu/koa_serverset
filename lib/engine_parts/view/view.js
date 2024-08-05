module.exports = async function (app) {
    const path = require('path');
    const views = require('koa-views');
    let idx = __dirname.indexOf('\script');
    let rootPath = __dirname.substr(0, idx - 1);
    app.use(views(path.join(rootPath, 'views'), {
        extension: 'hbs',
        map: { hbs: 'handlebars' },
        options: {
            helpers: {
                section: function (name, options) {
                    if (!this._sections) {
                        this._sections = {};
                    }
                    this._sections[name] = options.fn(this);
                    return null;
                }
            },

            partials: {
                partialTest: path.join(rootPath, 'views/handlebars/partials/test')
            }
        }
    }));

    const serve = require('koa-static');
    app.use(serve(path.join(rootPath, 'public')));

    //------webpack------
    let fs = require('fs');
    let buildpath = process.cwd() + '/public/static/build';
    if (fs.existsSync(buildpath)) {
        let files = fs.readdirSync(buildpath);
        files.forEach(function (file, index) {
            let curPath = buildpath + "/" + file;
            if (!fs.statSync(curPath).isDirectory())
                fs.unlinkSync(curPath);
        });
    }

    let isProduction = function () {
        return process.env.ISPRODUCTION;
    }

    if (isProduction()) {
        const npmRun = require('npm-run');
        npmRun.exec('webpack --config webpack.config.prod.js', { cwd: process.cwd() }, function (err, stdout, stderr) {
            if (err)
                console.log('webpack.config.prod : npmRun.exec error : ' + err);
            else
                console.log('webpack.config.prod : npmRun.exec success');
        });
    }
    else {
        const webpack = require('webpack');
        const webpackConfig = require(`${process.cwd()}/webpack.config.dev.js`);
        const compiler = webpack(webpackConfig);
        const koaWebpack = require('koa-webpack');
        let hotClient = {
            allEntries: false,
            autoConfigure: false, // true : wait up git to test
            hmr: true,
            reload: true
        };
        koaWebpack({ compiler, hotClient }).then((middleware) => {
            app.use(middleware);
        });
    }
}