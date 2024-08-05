cd /d %~dp0
cd ../..

cmd /c npm i handlebars
cmd /c npm i koa-views
cmd /c npm i koa-static
cmd /c npm i -D ant-design-pro
cmd /c npm i -D antd
cmd /c npm i -D babel-loader
cmd /c npm i -D @babel/core
cmd /c npm i -D @babel/plugin-proposal-class-properties
cmd /c npm i -D @babel/plugin-proposal-object-rest-spread
cmd /c npm i -D @babel/plugin-transform-runtime
cmd /c npm i -D @babel/preset-env
cmd /c npm i -D @babel/preset-react
cmd /c npm i -D cross-env
cmd /c npm i -D css-loader
cmd /c npm i -D happypack
cmd /c npm i -D koa-webpack
cmd /c npm i -D node-sass
cmd /c npm i -D npm-run
cmd /c npm i -D postcss-cssnext
cmd /c npm i -D postcss-loader
cmd /c npm i -D prop-types
cmd /c npm i -D react
cmd /c npm i -D react-dom
cmd /c npm i -D react-intl
cmd /c npm i -D react-redux
cmd /c npm i -D react-router-dom
cmd /c npm i -D redux
cmd /c npm i -D sass-loader
cmd /c npm i -D style-loader
cmd /c npm i -D webpack
cmd /c npm i -D webpack-cli

xcopy /y/D ".\node_modules\koa_serverset\lib\engine_parts\view\view.js" ".\script\enginesetting"
xcopy /y/E/D/I ".\node_modules\koa_serverset\lib\engine_parts\view\settings" ".\"
xcopy /y/E/D/I ".\node_modules\koa_serverset\lib\engine_parts\view\public" ".\public"
xcopy /y/E/D/I ".\node_modules\koa_serverset\lib\engine_parts\view\views" ".\views"