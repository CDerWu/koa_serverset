cd /d %~dp0
cd ../..

cmd /c npm i koa-bodyparser

xcopy /y/E/D ".\node_modules\koa_serverset\lib\engine_parts\bodyparser\bodyparser.js" ".\script\enginesetting"