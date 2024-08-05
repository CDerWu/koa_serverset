cd /d %~dp0
cd ../..

cmd /c npm install koa-passport
cmd /c npm install passport-local
                  
xcopy /y/E/D ".\node_modules\koa_serverset\lib\engine_parts\passport\passport.js" ".\script\enginesetting"
xcopy /y/E/D ".\node_modules\koa_serverset\lib\engine_parts\passport\checklogin.js" ".\script\middleware"
xcopy /y/E/D ".\node_modules\koa_serverset\lib\engine_parts\passport\routes.js" ".\script\system\user"