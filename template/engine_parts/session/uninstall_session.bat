cd /d %~dp0
cd ../..

cmd /c npm un koa-session-minimal
cmd /c npm un koa-mysql-session

del ".\script\enginesetting\session.js"