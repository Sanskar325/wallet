#!/bin/bash

echo "🚀 Starting WalletConnect Demo..."
echo ""

# Check if node_modules exist
if [ ! -d "backend/node_modules" ]; then
    echo "📦 Installing backend dependencies..."
    cd backend && npm install && cd ..
fi

if [ ! -d "dapp-web/node_modules" ]; then
    echo "📦 Installing dApp dependencies..."
    cd dapp-web && npm install && cd ..
fi

if [ ! -d "wallet-native/node_modules" ]; then
    echo "📦 Installing wallet dependencies..."
    cd wallet-native && npm install && cd ..
fi

echo ""
echo "✅ All dependencies installed!"
echo ""
echo "Starting services..."
echo "- Backend: http://localhost:4000"
echo "- dApp: http://localhost:3000"
echo ""
echo "⚠️  IMPORTANT: Update YOUR-IP in wallet-native/screens/Scan.js"
echo ""

# Start backend in background
cd backend && npm start &
BACKEND_PID=$!

# Wait a bit for backend to start
sleep 2

# Start dApp in background
cd dapp-web && npm run dev &
DAPP_PID=$!

echo ""
echo "✅ Backend and dApp are running!"
echo ""
echo "To start the wallet app, run in a new terminal:"
echo "  cd wallet-native && npm start"
echo ""
echo "Press Ctrl+C to stop all services"
echo ""

# Wait for user interrupt
trap "kill $BACKEND_PID $DAPP_PID; exit" INT
wait
