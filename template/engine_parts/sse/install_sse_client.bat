cd /d %~dp0
cd ../..

cmd /c npm install eventsource

xcopy /y/E/D ".\node_modules\koa_serverset\lib\engine_parts\sse\sse_client.js" ".\script\enginesetting"