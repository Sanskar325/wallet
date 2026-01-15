# ⚡ Quick Start Guide

## 🚀 Get Running in 5 Minutes

### Step 1: Install Dependencies (2 min)
```bash
# Backend
cd backend && npm install && cd ..

# dApp
cd dapp-web && npm install && cd ..

# Wallet
cd wallet-native && npm install && cd ..
```

### Step 2: Configure IP Address (1 min)
1. Get your IP:
   - Windows: `ipconfig`
   - Mac/Linux: `ifconfig`

2. Update `wallet-native/screens/Scan.js` line 6:
   ```javascript
   const BACKEND_URL = "http://YOUR-IP:4000";
   ```

### Step 3: Start Everything (2 min)

**Terminal 1:**
```bash
cd backend
npm start
```

**Terminal 2:**
```bash
cd dapp-web
npm run dev
```

**Terminal 3:**
```bash
cd wallet-native
npm start
# Then press 'i' (iOS) or 'a' (Android)
```

### Step 4: Test Connection (30 sec)
1. Open browser to `http://localhost:3000`
2. Open wallet app on phone/simulator
3. Tap "Scan & Connect"
4. Scan QR code
5. ✅ Connected!

---

## 📋 Command Cheat Sheet

### Backend
```bash
npm start          # Start server
npm run dev        # Start with auto-reload
```

### dApp
```bash
npm run dev        # Start dev server
npm run build      # Build for production
```

### Wallet
```bash
npm start          # Start Expo
npm run ios        # Run on iOS
npm run android    # Run on Android
```

---

## 🎯 Key Files to Know

| File | Purpose |
|------|---------|
| `backend/server.js` | WebSocket server |
| `dapp-web/src/App.js` | Web dApp UI |
| `wallet-native/screens/Home.js` | Wallet home |
| `wallet-native/screens/Scan.js` | QR scanner |

---

## 🔧 Quick Fixes

**Backend won't start?**
```bash
cd backend
rm -rf node_modules
npm install
```

**dApp blank screen?**
- Check browser console (F12)
- Hard refresh (Ctrl+Shift+R)

**Wallet can't connect?**
- Verify IP address in `Scan.js`
- Same WiFi network
- Backend running

**Camera not working?**
- Grant permissions
- Use real device (not simulator)

---

## 📱 Ports Used

- Backend: `4000`
- dApp: `3000`
- Wallet: Expo dev server (19000+)

---

## 🎨 UI Colors

- Black: `#000000`
- Red: `#ff0033`
- Dark Gray: `#0a0a0a`
- Border: `#1a1a1a`

---

## 🔗 Important URLs

- dApp: `http://localhost:3000`
- Backend: `http://localhost:4000`
- Docs: See `README.md`

---

## ⚠️ Remember

1. Update IP address in `Scan.js`
2. Same WiFi for phone & computer
3. Start backend first
4. Grant camera permissions
5. Keep all terminals open

---

## 📚 Full Documentation

- `README.md` - Overview
- `SETUP.md` - Detailed setup
- `TROUBLESHOOTING.md` - Fix issues
- `PROJECT-OVERVIEW.md` - Architecture
- `FEATURES.md` - Feature list
- `DEMO-SCRIPT.md` - Presentation guide
- `CHECKLIST.md` - Pre-launch checks

---

**Need help? Check TROUBLESHOOTING.md**

**Ready to present? Read DEMO-SCRIPT.md**

**Want details? See PROJECT-OVERVIEW.md**
