cd /d %~dp0

xcopy /y/E ".\template" "..\..\"

cd..
cd..
cmd /c npm install

md ".\script\enginesetting"

cmd /c .\engine_parts\system_log\install_system_log.bat
cmd /c .\engine_parts\bodyparser\install_bodyparser.bat
cmd /c .\engine_parts\config_collect\install_configcollect.bat