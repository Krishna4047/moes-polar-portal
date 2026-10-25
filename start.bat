@echo off
setlocal enabledelayedexpansion
title POLARIS - MoES Polar Portal Server
echo ========================================================
echo   POLARIS: MoES Polar Portal - Dev Server Starting
echo ========================================================
echo.

set CURRENT_IP=10.106.91.50
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /r /c:"IPv4 Address.*[0-9]"') do (
    set IP_TRIM=%%a
    set CURRENT_IP=!IP_TRIM: =!
)

echo Local Computer Access:     http://localhost:3000
echo Phone Access (Same Wi-Fi): http://!CURRENT_IP!:3000
echo.
echo Tips:
echo  1. Make sure your phone is connected to the same Wi-Fi
echo     (or your laptop Mobile Hotspot).
echo  2. If using Hostel/College Wi-Fi, turn on Windows Mobile
echo     Hotspot and connect your phone to it.
echo  3. To share with ANY phone outside Wi-Fi, run:
echo     share-to-any-phone.bat
echo ========================================================
echo.

call npm.cmd run dev
pause
