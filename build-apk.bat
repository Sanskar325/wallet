@echo off
echo 📦 RedX Wallet APK Builder
echo.
echo This will build an Android APK using Expo EAS
echo.

REM Check if EAS CLI is installed
where eas >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Installing EAS CLI...
    call npm install -g eas-cli
)

echo.
echo Navigating to wallet-native folder...
cd wallet-native

echo.
echo ========================================
echo STEP 1: Login to Expo
echo ========================================
echo.
echo You'll need an Expo account (free)
echo Create one at: https://expo.dev
echo.
call eas login

echo.
echo ========================================
echo STEP 2: Configure Project
echo ========================================
echo.
call eas build:configure

echo.
echo ========================================
echo STEP 3: Build APK
echo ========================================
echo.
echo This will take 10-15 minutes...
echo You'll get a download link when done!
echo.
call eas build -p android --profile preview

echo.
echo ========================================
echo BUILD COMPLETE!
echo ========================================
echo.
echo Download your APK from the link above
echo Install it on your Android device
echo.
echo To check build status later:
echo   cd wallet-native
echo   eas build:list
echo.
pause
