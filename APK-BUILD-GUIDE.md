# 📦 Build Android APK Guide

## 🎯 Quick Build (Easiest Method)

### Using Expo EAS Build (Recommended)

1. **Install EAS CLI**
   ```bash
   npm install -g eas-cli
   ```

2. **Login to Expo**
   ```bash
   eas login
   ```
   (Create free account at expo.dev if needed)

3. **Configure Project**
   ```bash
   cd wallet-native
   eas build:configure
   ```

4. **Build APK**
   ```bash
   eas build -p android --profile preview
   ```

5. **Download APK**
   - Build will take 10-15 minutes
   - You'll get a download link
   - Install APK on your Android device

---

## 🚀 Alternative: Local Build (Advanced)

### Prerequisites
- Android Studio installed
- Java JDK 11+
- Android SDK configured

### Steps:

1. **Install Dependencies**
   ```bash
   cd wallet-native
   npm install
   ```

2. **Generate Android Project**
   ```bash
   npx expo prebuild -p android
   ```

3. **Build APK**
   ```bash
   cd android
   ./gradlew assembleRelease
   ```
   (Windows: `gradlew.bat assembleRelease`)

4. **Find APK**
   ```
   android/app/build/outputs/apk/release/app-release.apk
   ```

---

## 📱 Quick APK Build Script

I'll create a simple build script for you:

### For Expo EAS (Easiest):

```bash
# Install EAS CLI
npm install -g eas-cli

# Navigate to project
cd wallet-native

# Login (first time only)
eas login

# Configure (first time only)
eas build:configure

# Build APK
eas build -p android --profile preview

# Wait for build to complete
# Download APK from the link provided
```

---

## ⚙️ Build Configuration

### app.json (Already Configured)
```json
{
  "expo": {
    "name": "RedX Wallet",
    "slug": "redx-wallet",
    "version": "1.0.0",
    "android": {
      "package": "com.redxwallet.app",
      "permissions": ["CAMERA"]
    }
  }
}
```

### eas.json (Create This)
```json
{
  "build": {
    "preview": {
      "android": {
        "buildType": "apk"
      }
    },
    "production": {
      "android": {
        "buildType": "app-bundle"
      }
    }
  }
}
```

---

## 🎯 Fastest Way to Get APK

### Option 1: Expo EAS (10-15 min)
```bash
cd wallet-native
npm install -g eas-cli
eas login
eas build -p android --profile preview
```
✅ No Android Studio needed
✅ Cloud build
✅ Get download link

### Option 2: Expo Go App (Instant)
```bash
cd wallet-native
npm start
```
✅ Scan QR with Expo Go app
✅ No build needed
✅ Test immediately

---

## 📲 Install APK on Phone

### Method 1: Direct Download
1. Build completes
2. Get download link
3. Open link on phone
4. Install APK
5. Allow "Install from unknown sources"

### Method 2: Transfer via USB
1. Connect phone to computer
2. Copy APK to phone
3. Open file manager on phone
4. Tap APK file
5. Install

### Method 3: Cloud Storage
1. Upload APK to Google Drive/Dropbox
2. Download on phone
3. Install

---

## ⚠️ Important Notes

### Backend URL
The APK is configured to connect to:
```
http://172.17.100.116:4000
```

**For APK to work:**
- Phone must be on same WiFi as computer
- Backend must be running on computer
- Or update IP in code before building

### For Production APK
To make it work anywhere, you need to:
1. Deploy backend to cloud (Heroku, Railway, etc.)
2. Update BACKEND_URL to cloud URL
3. Rebuild APK

---

## 🔧 Troubleshooting

### "eas command not found"
```bash
npm install -g eas-cli
```

### "Not logged in"
```bash
eas login
```
Create account at expo.dev

### "Build failed"
- Check internet connection
- Verify app.json is valid
- Check Expo account has build credits

### "APK won't install"
- Enable "Install from unknown sources"
- Check Android version (5.0+)
- Verify APK downloaded completely

---

## 💡 Pro Tips

### Quick Test Without Building
Use Expo Go app:
1. Install "Expo Go" from Play Store
2. Run `npm start` in wallet-native
3. Scan QR code
4. Test immediately!

### Build for Production
```bash
eas build -p android --profile production
```
Creates AAB file for Play Store

### Update Backend URL
Before building, edit `wallet-native/screens/Scan.js`:
```javascript
const BACKEND_URL = "https://your-backend.com";
```

---

## 📊 Build Time Estimates

| Method | Time | Difficulty |
|--------|------|------------|
| Expo Go | Instant | Easy |
| EAS Build | 10-15 min | Easy |
| Local Build | 30-60 min | Hard |

---

## 🎉 Ready to Build?

### Recommended Steps:
1. Test with Expo Go first
2. Build APK with EAS
3. Install on phone
4. Test full flow

---

**Want me to create the build files and start the build process?**
