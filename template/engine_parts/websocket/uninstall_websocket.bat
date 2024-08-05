cd /d %~dp0
cd ../..

cmd /c npm un koa-websocket

del ".\script\enginesetting\websocket_server.js"
del ".\script\enginesetting\websocket_client.js"