cd /d %~dp0
cd ../..

cmd /c npm uni handlebars
cmd /c npm uni koa-views
cmd /c npm uni koa-static
cmd /c npm uni ant-design-pro
cmd /c npm uni antd
cmd /c npm uni babel-loader
cmd /c npm uni @babel/core
cmd /c npm uni @babel/plugin-proposal-class-properties
cmd /c npm uni @babel/plugin-proposal-object-rest-spread
cmd /c npm uni @babel/plugin-transform-runtime
cmd /c npm uni @babel/preset-env
cmd /c npm uni @babel/preset-react
cmd /c npm uni cross-env
cmd /c npm uni css-loader
cmd /c npm uni happypack
cmd /c npm uni koa-webpack
cmd /c npm uni node-sass
cmd /c npm uni npm-run
cmd /c npm uni postcss-cssnext
cmd /c npm uni postcss-loader
cmd /c npm uni prop-types
cmd /c npm uni react
cmd /c npm uni react-dom
cmd /c npm uni react-intl
cmd /c npm uni react-redux
cmd /c npm uni react-router-dom
cmd /c npm uni redux
cmd /c npm uni sass-loader
cmd /c npm uni style-loader
cmd /c npm uni webpack
cmd /c npm uni webpack-cli


del ".\script\enginesetting\view.js"
del ".\.babelrc"
del ".\postcss.config.js"
del ".\webpack.config.dev.js"
del ".\webpack.config.dll.js"
del ".\webpack.config.prod.js"

RD /S/Q ".\public"
RD /S/Q ".\views"