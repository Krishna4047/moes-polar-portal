@echo off
title POLARIS - Cloudflare Mobile Tunnel
echo ========================================================
echo   POLARIS: Cloudflare Global Edge Tunnel for Phones
echo ========================================================
echo.
echo Make sure your dev server is running (start.bat)!
echo.
echo Connecting to Cloudflare global network...
echo No password or IP entry required.
echo ========================================================
echo.

call npx.cmd -y cloudflared tunnel --url http://localhost:3000
pause
