# 🔧 Environment Setup Guide

## Prerequisites Installation

### 1. Node.js & npm

#### Windows
1. Download from [nodejs.org](https://nodejs.org/)
2. Run installer (LTS version recommended)
3. Verify installation:
   ```cmd
   node --version
   npm --version
   ```

#### Mac
```bash
# Using Homebrew
brew install node

# Or download from nodejs.org
```

#### Linux (Ubuntu/Debian)
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Required versions:**
- Node.js: 16.x or higher
- npm: 8.x or higher

---

### 2. Expo CLI (for Mobile Development)

```bash
npm install -g expo-cli
```

Verify:
```bash
expo --version
```

---

### 3. Code Editor

**Recommended: Visual Studio Code**
- Download: [code.visualstudio.com](https://code.visualstudio.com/)

**Useful VS Code Extensions:**
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- ESLint
- React Native Tools
- vscode-icons

---

### 4. Mobile Development Setup

#### Option A: Physical Device (Easiest)

**iOS (iPhone/iPad):**
1. Install "Expo Go" from App Store
2. Connect to same WiFi as computer
3. Ready to scan QR codes!

**Android:**
1. Install "Expo Go" from Play Store
2. Connect to same WiFi as computer
3. Ready to scan QR codes!

#### Option B: iOS Simulator (Mac Only)

1. Install Xcode from App Store
2. Open Xcode → Preferences → Components
3. Install iOS Simulator
4. Run: `expo start` then press `i`

#### Option C: Android Emulator

**Windows/Mac/Linux:**
1. Install Android Studio
2. Open Android Studio → Tools → AVD Manager
3. Create Virtual Device
4. Select device (e.g., Pixel 5)
5. Download system image (Android 11+)
6. Run: `expo start` then press `a`

---

## Network Configuration

### Find Your Local IP Address

#### Windows
```cmd
ipconfig
```
Look for "IPv4 Address" under your active network adapter.
Example: `192.168.1.100`

#### Mac
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
```
Or: System Preferences → Network → Advanced → TCP/IP

#### Linux
```bash
ip addr show
# or
hostname -I
```

### Firewall Configuration

#### Windows Firewall
1. Open Windows Defender Firewall
2. Click "Advanced settings"
3. Inbound Rules → New Rule
4. Port → TCP → 4000
5. Allow the connection
6. Apply to all profiles

#### Mac Firewall
```bash
# Usually no configuration needed
# If issues, go to:
# System Preferences → Security & Privacy → Firewall → Firewall Options
# Ensure Node.js is allowed
```

#### Linux (UFW)
```bash
sudo ufw allow 4000/tcp
sudo ufw reload
```

---

## Project Setup

### 1. Clone/Download Project

```bash
# If using Git
git clone <repository-url>
cd walletconnect-demo

# Or extract ZIP file
```

### 2. Install All Dependencies

#### Quick Install (All at once)
```bash
# Windows
cd backend && npm install && cd ..
cd dapp-web && npm install && cd ..
cd wallet-native && npm install && cd ..

# Mac/Linux
cd backend && npm install && cd .. && \
cd dapp-web && npm install && cd .. && \
cd wallet-native && npm install && cd ..
```

#### Or use the startup script
```bash
# Windows
start-all.bat

# Mac/Linux
chmod +x start-all.sh
./start-all.sh
```

### 3. Configure Backend URL

Edit `wallet-native/screens/Scan.js`:
```javascript
// Line 6 - Replace YOUR-IP with your actual IP
const BACKEND_URL = "http://192.168.1.100:4000";
```

**Optional:** If testing dApp from phone, edit `dapp-web/src/App.js`:
```javascript
// Line 5
const BACKEND_URL = "http://192.168.1.100:4000";
```

---

## Verification

### Test Backend
```bash
cd backend
npm start
```
✅ Should see: "🚀 Backend running on port 4000"

### Test dApp
```bash
cd dapp-web
npm run dev
```
✅ Should see: "Local: http://localhost:3000"
✅ Browser opens automatically
✅ QR code visible

### Test Wallet
```bash
cd wallet-native
npm start
```
✅ Expo dev server starts
✅ QR code in terminal
✅ Can press 'i' or 'a' or scan with phone

---

## Common Setup Issues

### "npm: command not found"
**Solution:** Node.js not installed or not in PATH
- Reinstall Node.js
- Restart terminal
- Check PATH environment variable

### "expo: command not found"
**Solution:** Expo CLI not installed globally
```bash
npm install -g expo-cli
```

### "Port 4000 already in use"
**Solution:** Another process using port
```bash
# Windows
netstat -ano | findstr :4000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:4000 | xargs kill -9
```

### "Cannot connect from phone"
**Checklist:**
- [ ] Phone and computer on same WiFi
- [ ] Correct IP address in Scan.js
- [ ] Backend is running
- [ ] Firewall allows port 4000
- [ ] No VPN active

### "Module not found" errors
**Solution:** Dependencies not installed
```bash
# In the affected folder
rm -rf node_modules package-lock.json
npm install
```

---

## Development Tools

### Recommended Browser Extensions

**Chrome/Edge:**
- React Developer Tools
- Redux DevTools (if using Redux)

**Firefox:**
- React Developer Tools

### Terminal Setup

**Windows:**
- Use Windows Terminal (from Microsoft Store)
- Or Git Bash
- Or PowerShell

**Mac:**
- Built-in Terminal
- Or iTerm2 (recommended)

**Linux:**
- Built-in terminal

### Multiple Terminals

You'll need 3 terminals running simultaneously:
1. Backend server
2. dApp dev server
3. Wallet Expo server

**Tips:**
- Use terminal tabs
- Or split panes
- Or separate windows
- Or use tmux/screen (Linux/Mac)

---

## Environment Variables (Optional)

Create `.env` files if you want to customize:

### backend/.env
```env
PORT=4000
NODE_ENV=development
```

### dapp-web/.env
```env
VITE_BACKEND_URL=http://localhost:4000
```

### wallet-native/.env
```env
BACKEND_URL=http://192.168.1.100:4000
```

**Note:** You'll need to update code to use these variables.

---

## Performance Optimization

### Node.js Memory
If you encounter memory issues:
```bash
export NODE_OPTIONS="--max-old-space-size=4096"
```

### Expo Cache
Clear Expo cache if issues:
```bash
cd wallet-native
expo start --clear
```

### Vite Cache
Clear Vite cache:
```bash
cd dapp-web
rm -rf node_modules/.vite
npm run dev
```

---

## Production Build (Optional)

### Backend
```bash
cd backend
npm start
# Or use PM2 for production
npm install -g pm2
pm2 start server.js
```

### dApp
```bash
cd dapp-web
npm run build
npm run preview
```

### Wallet
```bash
cd wallet-native
expo build:android
# or
expo build:ios
```

---

## Troubleshooting Commands

### Check Node/npm versions
```bash
node --version
npm --version
expo --version
```

### Check running processes
```bash
# Windows
netstat -ano | findstr :4000
netstat -ano | findstr :3000

# Mac/Linux
lsof -i :4000
lsof -i :3000
```

### Clear all caches
```bash
# Backend
cd backend
rm -rf node_modules package-lock.json
npm install

# dApp
cd dapp-web
rm -rf node_modules package-lock.json node_modules/.vite
npm install

# Wallet
cd wallet-native
rm -rf node_modules package-lock.json
npm install
expo start --clear
```

### Reinstall everything
```bash
# From project root
rm -rf backend/node_modules dapp-web/node_modules wallet-native/node_modules
rm -rf backend/package-lock.json dapp-web/package-lock.json wallet-native/package-lock.json

cd backend && npm install && cd ..
cd dapp-web && npm install && cd ..
cd wallet-native && npm install && cd ..
```

---

## System Requirements

### Minimum
- **CPU:** Dual-core 2.0 GHz
- **RAM:** 4 GB
- **Storage:** 2 GB free space
- **OS:** Windows 10, macOS 10.14, Ubuntu 18.04

### Recommended
- **CPU:** Quad-core 2.5 GHz+
- **RAM:** 8 GB+
- **Storage:** 5 GB+ free space
- **OS:** Windows 11, macOS 12+, Ubuntu 20.04+

### Mobile Device
- **iOS:** 13.0 or higher
- **Android:** 5.0 (API 21) or higher
- **Camera:** Required for QR scanning
- **WiFi:** Required for connection

---

## Next Steps

After setup is complete:
1. ✅ Read `QUICK-START.md` for quick commands
2. ✅ Follow `SETUP.md` for detailed walkthrough
3. ✅ Check `TROUBLESHOOTING.md` if issues arise
4. ✅ Review `ARCHITECTURE.md` to understand system
5. ✅ Use `CHECKLIST.md` before demos

---

**Setup Time Estimate:**
- First time: 30-45 minutes
- Subsequent times: 5-10 minutes

**Need help? Check TROUBLESHOOTING.md**
