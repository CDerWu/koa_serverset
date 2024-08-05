cd /d %~dp0
cd ../..

cmd /c npm un koa_sse

del ".\script\enginesetting\sse_server.js"