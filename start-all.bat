@echo off
echo 🚀 Starting WalletConnect Demo...
echo.

REM Check if node_modules exist
if not exist "backend\node_modules" (
    echo 📦 Installing backend dependencies...
    cd backend
    call npm install
    cd ..
)

if not exist "dapp-web\node_modules" (
    echo 📦 Installing dApp dependencies...
    cd dapp-web
    call npm install
    cd ..
)

if not exist "wallet-native\node_modules" (
    echo 📦 Installing wallet dependencies...
    cd wallet-native
    call npm install
    cd ..
)

echo.
echo ✅ All dependencies installed!
echo.
echo Starting services...
echo - Backend: http://localhost:4000
echo - dApp: http://localhost:3000
echo.
echo ⚠️  IMPORTANT: Update YOUR-IP in wallet-native\screens\Scan.js
echo.

REM Start backend
start "Backend" cmd /k "cd backend && npm start"

REM Wait a bit
timeout /t 2 /nobreak >nul

REM Start dApp
start "dApp" cmd /k "cd dapp-web && npm run dev"

echo.
echo ✅ Backend and dApp are running in separate windows!
echo.
echo To start the wallet app, run in a new terminal:
echo   cd wallet-native
echo   npm start
echo.
echo Close the terminal windows to stop services
echo.
pause
