
const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
console.log('os.cpus().length = ' + os.cpus().length);

const path = require("path");
const webpack = require("webpack");
const fs = require("fs");

const findHtmlBundle = function () {
    let entryList = {};
    let path = "./views/react/components/entry";
    let files = fs.readdirSync(path);
    for (let i in files) {
        let fileFullName = files[i];
        let fileName = fileFullName.split(".")[0];
        entryList[`${fileName}`] = [
            //'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
            `./views/react/components/entry/${fileName}`
        ];
    }
    return entryList;
}


module.exports = {
    mode: 'development',
    entry: findHtmlBundle(),

    output: {
        path: __dirname + '/public/static/build/',
        filename: '[name].js',
        publicPath: '/static/build/'   // 開發模式指向source位置; online模式則指向CDN上source位置,並且會幫css等中引用圖片的網址例如:./test.jpg的前方插入CDN位址
    },

    /** production
     * 'cheap-source-map'        : transformed code (lines only)
     * 'cheap-module-source-map' : original source  (lines only)
     * 'source-map'              : original source
     */
    /** development
     * 'eval'                         : generated code
     * 'cheap-eval-source-map'        : transformed code (lines only)
     * 'cheap-module-eval-source-map' : original source  (lines only)
     * 'eval-source-map'              : original source
     */
    /**
     * devtool: false
    */
    devtool: 'eval-source-map',
    
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: ['happypack/loader?id=babel'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['happypack/loader?id=css'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ['happypack/loader?id=scss'],
                exclude: /node_modules/
            }
        ]
    },

    optimization: {
        runtimeChunk: {
            name: "common_rtc"
        },
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: "initial",
                    minChunks: 2,
                    maxInitialRequests: 5,
                    minSize: 0,
                    name: "common_sc"
                }
            }
        }
    },
    
    externals: {
        jquery: "jQuery"
    },

    plugins: [
        new webpack.BannerPlugin('版權所有，翻版必究'),
        //new webpack.HotModuleReplacementPlugin(),
        new webpack.DllReferencePlugin({
            context: path.join(__dirname, "public", "dll", "development"),
            manifest: require("./public/dll/development/vendor-manifest.json")
        }),
        new HappyPack({
            id: 'babel',
            threadPool: happyThreadPool,
            loaders: ['babel-loader?cacheDirectory']
        }),
        new HappyPack({
            id: 'css',
            threadPool: happyThreadPool,
            loaders: [
                { loader: "style-loader" },
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            mode: 'local', // 指定啟用css modules
                            localIdentName: '[local]' //指定css的類名格式, '[name]__[local]', '[name]__[local]--[hash:base64:5]'
                        }
                    }
                },
                { loader: "postcss-loader" }
            ]
        }),
        new HappyPack({
            id: 'scss',
            threadPool: happyThreadPool,
            loaders: [
                { loader: "style-loader" }, // creates style nodes from JS strings
                { loader: "css-loader" },   // translates CSS into CommonJS
                { loader: "sass-loader" }   // compiles Sass to CSS
            ]
        })
    ],
    resolve: {
        alias: {
            '@react': path.join(__dirname, '/views/react'),
            '@widgets': path.join(__dirname, '/views/react/components/widgets'),
            '@components': path.join(__dirname, '/views/react/components'),
            '@actions':path.join(__dirname, '/views/react/redux/actions'),
            '@reducers':path.join(__dirname, '/views/react/redux/reducers'),
            "@containers":path.join(__dirname, '/views/react/redux/containers'),
            "@intl":path.join(__dirname, '/views/react/redux/containers/locale/locales')
        }
    }
};