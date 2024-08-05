cd /d %~dp0

@ECHO OFF
FOR /D %%d IN (*) DO (
	cd %%d
	echo %%d
	cmd /c npm update
	cd ..
)

pause