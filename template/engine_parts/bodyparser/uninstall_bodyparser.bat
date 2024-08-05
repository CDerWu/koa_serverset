cd /d %~dp0
cd ../..

cmd /c npm uninstall koa-bodyparser

del ".\script\enginesetting\bodyparser.js"