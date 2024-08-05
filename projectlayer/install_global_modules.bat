set nvmw_path=%APPDATA%\npm\node_modules\nvmw\bin\nvmw.cmd
set installjs_path=%APPDATA%\npm\node_modules\nvmw\lib\install.js

call npm install -g npm
call npm install -g eslint
call npm install -g eslint-plugin-react
call npm install -g babel-eslint
call npm install -g license-sniffer
call npm install -g nvmw
call npm install -g typescript

powershell -Command "(gc %nvmw_path%) -replace 'HKEY_CURRENT_USER', 'HKEY_LOCAL_MACHINE' | sc %nvmw_path%"
powershell -Command "(gc %installjs_path%) -replace 'https://raw.github.com/joyent/node/', 'https://raw.githubusercontent.com/nodejs/node/' | sc %installjs_path%"
rem powershell -Command "(gc %installjs_path%) -replace '\+ npmVersion \+ ', '% %+ \"1.4.9\" % %+ ' | sc %installjs_path%"
powershell -Command "(gc %installjs_path%) -replace 'downloadNpm\(version, callback\);', 'callback(true);' | sc %installjs_path%"

pause