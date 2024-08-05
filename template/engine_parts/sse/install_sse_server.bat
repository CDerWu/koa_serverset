cd /d %~dp0
cd ../..

cmd /c npm install https://github.com/CDerWu/koa_sse.git

xcopy /y/E/D ".\node_modules\koa_serverset\lib\engine_parts\sse\sse_server.js" ".\script\enginesetting"
