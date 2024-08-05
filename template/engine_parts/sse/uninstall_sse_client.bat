cd /d %~dp0
cd ../..

cmd /c npm un eventsource

del ".\script\enginesetting\sse_client.js"