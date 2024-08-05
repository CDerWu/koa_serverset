cd /d %~dp0
cd ../..

cmd /c npm un i18next
cmd /c npm un i18next-sync-fs-backend
cmd /c npm un koa-i18next

del ".\script\enginesetting\i18n.js"

del /Q/S ".\locales"
RD /S/Q ".\locales"