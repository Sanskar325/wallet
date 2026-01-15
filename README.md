# 🔴 RedX WalletConnect Demo

A fully functional Web3 WalletConnect demo with premium dark/red UI featuring real-time QR scanning and WebSocket communication.

> 📚 **New to this project?** Start with [INDEX.md](INDEX.md) for a complete documentation guide!

## 🏗️ Architecture

- **Backend**: Node.js + Express + Socket.IO (Port 4000)
- **dApp Web**: React + Vite (Port 3000)
- **Wallet Mobile**: React Native + Expo

## 🚀 Quick Start

### 1. Backend Setup

```bash
cd backend
npm install
npm start
```

Backend will run on `http://localhost:4000`

### 2. dApp Web Setup

```bash
cd dapp-web
npm install
npm run dev
```

dApp will run on `http://localhost:3000`

### 3. Wallet Mobile Setup

**IMPORTANT**: Update the backend URL in both files:
- `wallet-native/screens/Scan.js` - Change `YOUR-IP` to your local IP
- Get your local IP: 
  - Windows: `ipconfig` (look for IPv4)
  - Mac/Linux: `ifconfig` or `ip addr`

```bash
cd wallet-native
npm install
npm start
```

Then:
- Press `i` for iOS simulator
- Press `a` for Android emulator
- Scan QR with Expo Go app on your phone

## 📱 How It Works

1. Open the **dApp** in your browser
2. A QR code appears with a unique session ID
3. Open the **Wallet app** on your phone
4. Tap "Scan & Connect"
5. Scan the QR code
6. Connection established instantly via WebSocket!

## 🎨 UI Features

- Pure black background (#000)
- Neon red accents (#ff0033)
- Glowing shadows and effects
- Premium MetaMask-style design
- Smooth animations
- Full-screen camera scanner with corner guides

## 🔌 WebSocket Events

- `create-session` - dApp creates a new session
- `join-session` - Wallet joins the session
- `wallet-connected` - Wallet sends connection data
- `connected` - Backend broadcasts to dApp

## 📝 Notes

- No real blockchain interaction
- Dummy ETH balance (3.14 ETH)
- Fake wallet addresses generated
- Camera permissions required for mobile app
- Works on local network (same WiFi)

## 🛠️ Tech Stack

- React 18
- React Native (Expo)
- Socket.IO
- Vite
- Express
- expo-barcode-scanner
- react-qr-code

---

Built with ❤️ for Web3 developers
