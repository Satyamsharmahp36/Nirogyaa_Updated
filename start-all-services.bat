@echo off
echo ========================================
echo Starting Nirogya with Translation
echo ========================================
echo.

echo [1/3] Starting Translation Service...
cd /d "%~dp0\translation-service"
start "Translation Service" cmd /k "python translation_server.py"
echo Translation service starting in new window...
echo.

echo [2/3] Starting Video Call Server...
cd /d "%~dp0\Server"
start "Video Server" cmd /k "npm start"
echo Video server starting in new window...
echo.

echo [3/3] Starting Web Client...
cd /d "%~dp0\Client"
start "Web Client" cmd /k "npm run dev"
echo Web client starting in new window...
echo.

echo ========================================
echo All services are starting!
echo ========================================
echo.
echo Services will be available at:
echo - Translation Service: http://localhost:5000
echo - Video Call Server:   http://localhost:8000  
echo - Web Application:     http://localhost:5173
echo.
echo Wait for all services to fully start before using the application.
echo Close this window when done.
echo.
pause
