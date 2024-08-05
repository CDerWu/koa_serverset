cd /d %~dp0
cd ../..

cmd /c npm uninstall koa2-cors

del ".\script\enginesetting\cors.js"