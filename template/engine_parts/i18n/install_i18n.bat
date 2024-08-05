cd /d %~dp0
cd ../..

cmd /c npm i i18next
cmd /c npm i i18next-sync-fs-backend
cmd /c npm i koa-i18next

xcopy /y/E/D ".\node_modules\koa_serverset\lib\engine_parts\i18n\i18n.js" ".\script\enginesetting"

xcopy /y/E/D/I ".\node_modules\koa_serverset\lib\engine_parts\i18n\locales" ".\locales"
RD /S/Q ".\script\enginesetting\locales"