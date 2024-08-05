cd /d %~dp0
cd ../..

cmd /c npm install koa2-cors
                  
xcopy /y/E/D ".\node_modules\koa_serverset\lib\engine_parts\cors\cors.js" ".\script\enginesetting"