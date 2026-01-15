# 🚀 Build APK - Quick Start

## ✅ Files Ready!

All configuration files are set up. Your IP (172.17.100.116) is already configured.

---

## 🎯 Method 1: Expo EAS Build (Recommended - 10 minutes)

### Step 1: Install EAS CLI
```bash
npm install -g eas-cli
```

### Step 2: Navigate to Project
```bash
cd wallet-native
```

### Step 3: Login to Expo
```bash
eas login
```
- Create free account at https://expo.dev if needed
- Enter email and password

### Step 4: Configure Project (First Time Only)
```bash
eas build:configure
```
- Press Enter to accept defaults
- This creates your project on Expo

### Step 5: Build APK
```bash
eas build -p android --profile preview
```
- Build starts on Expo servers
- Takes 10-15 minutes
- You'll get a download link when done

### Step 6: Download & Install
- Click the download link
- Transfer APK to phone
- Install and enjoy!

---

## 🎯 Method 2: Expo Go (Instant Testing - No Build Needed)

### Step 1: Install Expo Go
- Download "Expo Go" from Google Play Store
- Open the app

### Step 2: Start Dev Server
```bash
cd wallet-native
npm start
```

### Step 3: Scan QR Code
- Scan the QR code in terminal with Expo Go
- App loads instantly!
- Test without building APK

---

## 📦 What's Configured

✅ App name: RedX Wallet
✅ Package: com.redxwallet.app
✅ Version: 1.0.0
✅ Backend URL: http://172.17.100.116:4000
✅ Camera permissions: Enabled
✅ Dark theme: Enabled
✅ Build config: Ready (eas.json)

---

## 🔧 Build Commands Reference

```bash
# Install EAS CLI globally
npm install -g eas-cli

# Login to Expo
eas login

# Configure project (first time)
cd wallet-native
eas build:configure

# Build APK (preview/testing)
eas build -p android --profile preview

# Build AAB (production/Play Store)
eas build -p android --profile production

# Check build status
eas build:list

# Start dev server (Expo Go)
npm start
```

---

## 📱 After Building

### Install APK on Phone:

1. **Download APK**
   - Get link from EAS build
   - Download on phone or computer

2. **Transfer to Phone** (if downloaded on computer)
   - USB cable
   - Google Drive
   - Email
   - Any file transfer method

3. **Install**
   - Open APK file on phone
   - Tap "Install"
   - Allow "Install from unknown sources" if prompted
   - Open app!

4. **Test Connection**
   - Make sure phone is on same WiFi
   - Backend must be running on computer
   - Open dApp on computer (http://localhost:3000)
   - Open RedX Wallet on phone
   - Tap "Scan & Connect"
   - Scan QR code!

---

## ⚠️ Important Notes

### Network Requirements
- Phone and computer must be on **same WiFi**
- Backend must be running: `cd backend && npm start`
- dApp must be running: `cd dapp-web && npm run dev`

### Backend URL
Currently set to: `http://172.17.100.116:4000`

If your IP changes:
1. Edit `wallet-native/screens/Scan.js`
2. Update `BACKEND_URL`
3. Rebuild APK

### For Production
To make APK work anywhere:
1. Deploy backend to cloud (Heroku, Railway, Render)
2. Update `BACKEND_URL` to cloud URL
3. Rebuild APK

---

## 🎉 Quick Start Commands

### Build APK Now:
```bash
npm install -g eas-cli
cd wallet-native
eas login
eas build -p android --profile preview
```

### Test Without Building:
```bash
cd wallet-native
npm start
# Scan QR with Expo Go app
```

---

## 📊 Build Time

| Method | Time | Result |
|--------|------|--------|
| Expo Go | Instant | Test only |
| EAS Build | 10-15 min | APK file |
| Local Build | 30-60 min | APK file |

---

## 🆘 Troubleshooting

### "eas command not found"
```bash
npm install -g eas-cli
```

### "Not logged in"
```bash
eas login
```

### "Build failed"
- Check internet connection
- Verify Expo account
- Check build logs: `eas build:list`

### "APK won't install"
- Enable "Unknown sources" in Android settings
- Check Android version (5.0+)
- Verify APK downloaded completely

---

## 💡 Pro Tips

1. **Test First**: Use Expo Go before building APK
2. **Check Logs**: Use `eas build:list` to see build status
3. **Save APK**: Keep APK file for distribution
4. **Update IP**: Change backend URL if IP changes
5. **Cloud Backend**: Deploy backend for production use

---

## 🎯 Next Steps

1. ✅ Configuration files created
2. ⏳ Install EAS CLI
3. ⏳ Login to Expo
4. ⏳ Build APK
5. ⏳ Install on phone
6. ⏳ Test connection!

---

**Ready to build? Run the commands above!** 🚀

See [APK-BUILD-GUIDE.md](APK-BUILD-GUIDE.md) for detailed instructions.
