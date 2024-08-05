cd /d %~dp0
cd ../..

cmd /c npm install https://github.com/CDerWu/systemLog.git

xcopy /y/E/D ".\node_modules\koa_serverset\lib\engine_parts\system_log\system_log.js" ".\script\enginesetting"

cmd /c .\node_modules\system_log\copytemplate.bat