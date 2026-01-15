# 🚀 Setup Instructions

## Prerequisites
- Node.js 16+ installed
- npm or yarn
- Expo CLI (install with: `npm install -g expo-cli`)
- iOS Simulator or Android Emulator (or Expo Go app on phone)

## Step-by-Step Setup

### 1️⃣ Install Backend
```bash
cd backend
npm install
```

### 2️⃣ Install dApp Web
```bash
cd dapp-web
npm install
```

### 3️⃣ Install Wallet Mobile
```bash
cd wallet-native
npm install
```

### 4️⃣ Configure IP Address (CRITICAL!)

Find your local IP address:
- **Windows**: Open CMD and run `ipconfig` (look for IPv4 Address)
- **Mac**: Open Terminal and run `ifconfig | grep "inet "` 
- **Linux**: Run `ip addr show`

Example: `192.168.1.100`

Update these files:
1. `wallet-native/screens/Scan.js` - Line 6:
   ```javascript
   const BACKEND_URL = "http://192.168.1.100:4000"; // Replace with YOUR IP
   ```

2. `dapp-web/src/App.js` - Line 5 (if testing on phone):
   ```javascript
   const BACKEND_URL = "http://192.168.1.100:4000"; // Replace with YOUR IP
   ```
   (Keep as `localhost:4000` if testing dApp on same computer)

### 5️⃣ Start Everything

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```
✅ Should see: "🚀 Backend running on port 4000"

**Terminal 2 - dApp:**
```bash
cd dapp-web
npm run dev
```
✅ Should see: "Local: http://localhost:3000"

**Terminal 3 - Wallet:**
```bash
cd wallet-native
npm start
```
✅ Then press:
- `i` for iOS
- `a` for Android
- Or scan QR with Expo Go app

## 🎯 Testing the Flow

1. Open browser to `http://localhost:3000`
2. You'll see a QR code
3. Open wallet app on phone/simulator
4. Tap "Scan & Connect"
5. Scan the QR code
6. Watch the magic happen! ✨

## 🐛 Troubleshooting

**"Cannot connect to backend"**
- Make sure backend is running
- Check IP address is correct
- Ensure phone and computer are on same WiFi

**"Camera not working"**
- Grant camera permissions in phone settings
- On iOS simulator, use a real device instead

**"Module not found"**
- Run `npm install` in the respective folder
- Clear cache: `npm start -- --reset-cache` (for React Native)

**"Port already in use"**
- Backend: Change port in `backend/server.js`
- dApp: Change port in `dapp-web/vite.config.js`

## 📱 Device Requirements

- **iOS**: iOS 13+ (Simulator or real device)
- **Android**: Android 5.0+ (Emulator or real device)
- **Web**: Any modern browser (Chrome, Firefox, Safari, Edge)

## 🎨 What You'll See

**dApp (Web):**
- Black background with red glow
- QR code in center
- Session ID below
- "Connected" state with wallet address

**Wallet (Mobile):**
- RedX branding
- Balance card (3.14 ETH)
- Scan button with red glow
- Full-screen camera scanner
- Corner guides for QR alignment

---

Need help? Check the README.md for more details!
