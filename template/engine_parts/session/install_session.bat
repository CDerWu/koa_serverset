cd /d %~dp0
cd ../..

cmd /c npm i koa-session-minimal
cmd /c npm i koa-mysql-session

xcopy /y/E/D ".\node_modules\koa_serverset\lib\engine_parts\session\session.js" ".\script\enginesetting"