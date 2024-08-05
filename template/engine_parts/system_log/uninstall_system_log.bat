cd /d %~dp0
cd ../..

cmd /c npm un system_log

del ".\script\enginesetting\system_log.js"

RD /S/Q ".\systemlog"