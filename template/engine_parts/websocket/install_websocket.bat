cd /d %~dp0
cd ../..

cmd /c npm install koa-websocket

xcopy /y/E/D ".\node_modules\koa_serverset\lib\engine_parts\websocket\websocket_server.js" ".\script\enginesetting"
xcopy /y/E/D ".\node_modules\koa_serverset\lib\engine_parts\websocket\websocket_client.js" ".\script\enginesetting"