# 🔧 Troubleshooting Guide

## Common Issues & Solutions

### 🔴 Backend Issues

#### "Port 4000 already in use"
**Solution:**
```bash
# Windows
netstat -ano | findstr :4000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:4000 | xargs kill -9
```

Or change the port in `backend/server.js`:
```javascript
server.listen(5000, () => console.log("Backend running on 5000"));
```

#### "Cannot find module 'socket.io'"
**Solution:**
```bash
cd backend
rm -rf node_modules package-lock.json
npm install
```

#### "Backend not responding"
**Check:**
- Is the server running? Look for "🚀 Backend running on port 4000"
- Check firewall settings
- Try `curl http://localhost:4000` to test

---

### 🌐 dApp Web Issues

#### "Cannot connect to backend"
**Solution:**
1. Check backend is running
2. Update `BACKEND_URL` in `dapp-web/src/App.js`:
   ```javascript
   const BACKEND_URL = "http://localhost:4000";
   ```
3. Check browser console for errors (F12)

#### "QR code not displaying"
**Solution:**
```bash
cd dapp-web
npm install react-qr-code
npm run dev
```

#### "Blank white screen"
**Check:**
- Browser console (F12) for errors
- Is Vite dev server running?
- Try clearing browser cache (Ctrl+Shift+R)

#### "Module not found: react-qr-code"
**Solution:**
```bash
cd dapp-web
npm install react-qr-code --save
```

---

### 📱 Wallet Mobile Issues

#### "Cannot connect to backend from phone"
**Solution:**
1. Get your computer's local IP:
   ```bash
   # Windows
   ipconfig
   
   # Mac/Linux
   ifconfig | grep "inet "
   ```

2. Update `wallet-native/screens/Scan.js`:
   ```javascript
   const BACKEND_URL = "http://192.168.1.100:4000"; // Your IP here
   ```

3. Ensure phone and computer are on **same WiFi network**

#### "Camera not working"
**Solution:**
1. Grant camera permissions in phone settings
2. On iOS Simulator: Use a real device (simulator camera is limited)
3. Check `app.json` has camera permissions:
   ```json
   "ios": {
     "infoPlist": {
       "NSCameraUsageDescription": "This app uses the camera..."
     }
   }
   ```

#### "Expo app crashes on scan"
**Solution:**
```bash
cd wallet-native
npm install expo-barcode-scanner
expo install expo-barcode-scanner
```

#### "Cannot scan QR code"
**Check:**
- QR code is fully visible on screen
- Good lighting conditions
- Camera is focused
- QR code is not too small/large
- Try moving phone closer/farther

#### "Module 'socket.io-client' not found"
**Solution:**
```bash
cd wallet-native
npm install socket.io-client
```

#### "Expo won't start"
**Solution:**
```bash
cd wallet-native
npm install -g expo-cli
expo start --clear
```

---

### 🔌 Connection Issues

#### "Wallet scans but dApp doesn't connect"
**Debug steps:**
1. Check backend console for logs
2. Check browser console (F12)
3. Verify session IDs match
4. Check WebSocket connection status

**Solution:**
```javascript
// Add to dapp-web/src/App.js
socket.on("connect", () => console.log("✅ Connected to backend"));
socket.on("disconnect", () => console.log("❌ Disconnected"));

// Add to wallet-native/screens/Scan.js
socket.on("connect", () => console.log("✅ Wallet connected"));
```

#### "Connection works but address not showing"
**Check:**
1. Backend is emitting correct data
2. dApp is listening to "connected" event
3. Check browser/Expo console for errors

---

### 💻 Platform-Specific Issues

#### Windows: "npm command not found"
**Solution:**
- Install Node.js from [nodejs.org](https://nodejs.org)
- Restart terminal after installation
- Verify: `node --version` and `npm --version`

#### Mac: "Permission denied"
**Solution:**
```bash
sudo chown -R $USER /usr/local/lib/node_modules
```

#### Linux: "EACCES: permission denied"
**Solution:**
```bash
sudo npm install -g expo-cli --unsafe-perm
```

---

### 🐛 Development Issues

#### "Hot reload not working"
**Solution:**
```bash
# dApp
cd dapp-web
npm run dev -- --force

# Wallet
cd wallet-native
expo start --clear
```

#### "Changes not reflecting"
**Solution:**
1. Stop all servers (Ctrl+C)
2. Clear caches:
   ```bash
   # dApp
   rm -rf dapp-web/node_modules/.vite
   
   # Wallet
   expo start --clear
   ```
3. Restart servers

#### "Build errors after git pull"
**Solution:**
```bash
# Clean install everything
cd backend && rm -rf node_modules && npm install
cd ../dapp-web && rm -rf node_modules && npm install
cd ../wallet-native && rm -rf node_modules && npm install
```

---

### 📊 Performance Issues

#### "Slow QR scanning"
**Solution:**
- Ensure good lighting
- Clean camera lens
- Use newer device (better camera)
- Reduce QR code complexity

#### "Laggy UI"
**Solution:**
- Close other apps
- Restart Expo dev server
- Use production build instead of dev

---

### 🔍 Debugging Tips

#### Enable verbose logging

**Backend:**
```javascript
io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);
  
  socket.onAny((event, ...args) => {
    console.log("Event:", event, "Args:", args);
  });
});
```

**dApp:**
```javascript
socket.onAny((event, ...args) => {
  console.log("Received:", event, args);
});
```

**Wallet:**
```javascript
socket.onAny((event, ...args) => {
  console.log("Wallet received:", event, args);
});
```

#### Check WebSocket connection

**Browser Console:**
```javascript
// In dApp
console.log("Socket connected:", socket.connected);
console.log("Socket ID:", socket.id);
```

**Expo Console:**
```javascript
// In Wallet
console.log("Socket connected:", socket.connected);
```

---

### 📞 Still Having Issues?

1. **Check all three components are running:**
   - Backend: `http://localhost:4000`
   - dApp: `http://localhost:3000`
   - Wallet: Expo dev server

2. **Verify network connectivity:**
   - Same WiFi for phone and computer
   - No VPN blocking connections
   - Firewall allows port 4000

3. **Check versions:**
   ```bash
   node --version    # Should be 16+
   npm --version     # Should be 8+
   expo --version    # Should be 50+
   ```

4. **Start fresh:**
   ```bash
   # Delete all node_modules
   rm -rf backend/node_modules
   rm -rf dapp-web/node_modules
   rm -rf wallet-native/node_modules
   
   # Reinstall everything
   cd backend && npm install
   cd ../dapp-web && npm install
   cd ../wallet-native && npm install
   ```

5. **Check the logs:**
   - Backend terminal
   - Browser console (F12)
   - Expo console
   - Look for error messages

---

### 📚 Additional Resources

- [Socket.IO Troubleshooting](https://socket.io/docs/v4/troubleshooting-connection-issues/)
- [Expo Troubleshooting](https://docs.expo.dev/troubleshooting/overview/)
- [Vite Troubleshooting](https://vitejs.dev/guide/troubleshooting.html)
- [React Native Debugging](https://reactnative.dev/docs/debugging)

---

**Still stuck? Double-check:**
✅ All dependencies installed
✅ Correct IP address configured
✅ Same WiFi network
✅ Backend running first
✅ Camera permissions granted
✅ No firewall blocking
