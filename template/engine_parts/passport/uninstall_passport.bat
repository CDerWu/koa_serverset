cd /d %~dp0
cd ../..

cmd /c npm uninstall koa-passport
cmd /c npm uninstall passport-local

del ".\script\enginesetting\passport.js"
del ".\script\middleware\checklogin.js"
del ".\script\system\user\routes.js"