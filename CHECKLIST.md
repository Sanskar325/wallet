# ✅ Pre-Launch Checklist

## Before You Start

### System Requirements
- [ ] Node.js 16+ installed (`node --version`)
- [ ] npm 8+ installed (`npm --version`)
- [ ] Git installed (optional)
- [ ] Code editor (VS Code recommended)
- [ ] Modern web browser (Chrome, Firefox, Safari, Edge)

### For Mobile Development
- [ ] Expo CLI installed (`npm install -g expo-cli`)
- [ ] iOS Simulator (Mac only) OR
- [ ] Android Emulator OR
- [ ] Physical phone with Expo Go app

### Network Setup
- [ ] Computer and phone on same WiFi network
- [ ] Firewall allows port 4000
- [ ] No VPN blocking local connections
- [ ] Know your local IP address

---

## Installation Checklist

### Backend
- [ ] Navigate to `backend/` folder
- [ ] Run `npm install`
- [ ] Verify `node_modules/` created
- [ ] Check `package.json` exists
- [ ] No error messages during install

### dApp Web
- [ ] Navigate to `dapp-web/` folder
- [ ] Run `npm install`
- [ ] Verify `node_modules/` created
- [ ] Check `package.json` exists
- [ ] No error messages during install

### Wallet Mobile
- [ ] Navigate to `wallet-native/` folder
- [ ] Run `npm install`
- [ ] Verify `node_modules/` created
- [ ] Check `package.json` exists
- [ ] No error messages during install

---

## Configuration Checklist

### Get Your Local IP
- [ ] Windows: Run `ipconfig` in CMD
- [ ] Mac: Run `ifconfig | grep "inet "` in Terminal
- [ ] Linux: Run `ip addr show` in Terminal
- [ ] Write down your IPv4 address (e.g., 192.168.1.100)

### Update Backend URL
- [ ] Open `wallet-native/screens/Scan.js`
- [ ] Find line: `const BACKEND_URL = "http://YOUR-IP:4000";`
- [ ] Replace `YOUR-IP` with your actual IP
- [ ] Save file

### Optional: Update dApp URL (if testing on phone)
- [ ] Open `dapp-web/src/App.js`
- [ ] Find line: `const BACKEND_URL = "http://localhost:4000";`
- [ ] Replace `localhost` with your IP (if accessing from phone)
- [ ] Save file

---

## Launch Checklist

### Terminal 1: Backend
- [ ] Open terminal/command prompt
- [ ] Navigate to `backend/` folder
- [ ] Run `npm start`
- [ ] See message: "🚀 Backend running on port 4000"
- [ ] No error messages
- [ ] Keep terminal open

### Terminal 2: dApp Web
- [ ] Open new terminal/command prompt
- [ ] Navigate to `dapp-web/` folder
- [ ] Run `npm run dev`
- [ ] See message with local URL (http://localhost:3000)
- [ ] Browser opens automatically (or open manually)
- [ ] See QR code displayed
- [ ] No error messages
- [ ] Keep terminal open

### Terminal 3: Wallet Mobile
- [ ] Open new terminal/command prompt
- [ ] Navigate to `wallet-native/` folder
- [ ] Run `npm start`
- [ ] Expo dev server starts
- [ ] See QR code in terminal
- [ ] Choose option:
  - [ ] Press `i` for iOS Simulator
  - [ ] Press `a` for Android Emulator
  - [ ] Scan QR with Expo Go app on phone
- [ ] App loads successfully
- [ ] See "RedX Wallet" home screen
- [ ] Keep terminal open

---

## Testing Checklist

### Visual Verification

#### dApp Web
- [ ] Black background visible
- [ ] Red accents/glow visible
- [ ] QR code displayed clearly
- [ ] Session ID shown below QR
- [ ] "Scan to Connect" heading visible
- [ ] Card has rounded corners
- [ ] Glow effect around card

#### Wallet Home Screen
- [ ] Black background
- [ ] "RedX WALLET" branding at top
- [ ] Balance card visible (3.14 ETH)
- [ ] USD value shown
- [ ] Wallet address displayed
- [ ] "Scan & Connect" button visible
- [ ] Button has red color
- [ ] Info box at bottom

### Functional Testing

#### Camera Permissions
- [ ] Tap "Scan & Connect" button
- [ ] Camera permission prompt appears
- [ ] Grant permission
- [ ] Camera view opens
- [ ] Can see through camera
- [ ] Red corner guides visible
- [ ] Close button (X) visible top-right

#### QR Scanning
- [ ] Position phone to see dApp QR code
- [ ] QR code detected automatically
- [ ] Alert appears: "✓ Connected!"
- [ ] Wallet address shown in alert
- [ ] Tap "OK" on alert
- [ ] Returns to home screen

#### Connection Verification
- [ ] Switch to browser (dApp)
- [ ] UI updated to "Connected" state
- [ ] "✓ Connected" heading visible
- [ ] Red gradient card displayed
- [ ] "RedX Wallet" name shown
- [ ] Wallet address displayed
- [ ] "🔗 Connection established" message visible
- [ ] Stronger glow effect

#### Backend Logs
- [ ] Check backend terminal
- [ ] See "Client connected" messages
- [ ] See "Session created" message
- [ ] See "Wallet joined session" message
- [ ] See "Wallet connected to session" message
- [ ] No error messages

---

## Troubleshooting Checklist

### If Backend Won't Start
- [ ] Check port 4000 is not in use
- [ ] Run `npm install` again
- [ ] Check Node.js version (16+)
- [ ] Look for error messages
- [ ] Try different port (change in server.js)

### If dApp Won't Load
- [ ] Check backend is running
- [ ] Clear browser cache (Ctrl+Shift+R)
- [ ] Check browser console (F12) for errors
- [ ] Run `npm install` again
- [ ] Try different browser

### If Wallet Won't Connect
- [ ] Verify IP address is correct
- [ ] Check phone and computer on same WiFi
- [ ] Check backend is running
- [ ] Check firewall settings
- [ ] Restart Expo dev server
- [ ] Check Expo console for errors

### If Camera Won't Work
- [ ] Grant camera permissions in phone settings
- [ ] Restart app
- [ ] Use real device (not simulator)
- [ ] Check good lighting
- [ ] Clean camera lens

### If QR Won't Scan
- [ ] Ensure QR code fully visible
- [ ] Move phone closer/farther
- [ ] Check good lighting
- [ ] Ensure QR code not too small
- [ ] Try refreshing dApp (new QR)

---

## Performance Checklist

### Backend
- [ ] Starts in < 5 seconds
- [ ] No memory leaks
- [ ] Handles connections smoothly
- [ ] Logs are clear and helpful

### dApp Web
- [ ] Loads in < 2 seconds
- [ ] QR code generates instantly
- [ ] Smooth animations
- [ ] No layout shifts
- [ ] Responsive on different screen sizes

### Wallet Mobile
- [ ] App loads in < 5 seconds
- [ ] Smooth navigation
- [ ] Camera opens quickly
- [ ] Scanning is responsive
- [ ] No lag or stuttering

---

## Documentation Checklist

### Files Present
- [ ] README.md
- [ ] SETUP.md
- [ ] TROUBLESHOOTING.md
- [ ] PROJECT-OVERVIEW.md
- [ ] FEATURES.md
- [ ] DEMO-SCRIPT.md
- [ ] CHECKLIST.md (this file)
- [ ] .gitignore

### Code Quality
- [ ] All files have proper formatting
- [ ] Comments where needed
- [ ] No console.log spam
- [ ] Error handling in place
- [ ] Consistent naming conventions

---

## Final Verification

### All Systems Go
- [ ] Backend running ✅
- [ ] dApp web running ✅
- [ ] Wallet mobile running ✅
- [ ] Can scan QR code ✅
- [ ] Connection works ✅
- [ ] UI looks premium ✅
- [ ] No errors in any console ✅

### Ready to Demo
- [ ] Practiced the flow 2-3 times
- [ ] Know how to explain each part
- [ ] Can troubleshoot common issues
- [ ] Have backup plan (screenshots/video)
- [ ] Confident in the setup

---

## Post-Demo Checklist

### Cleanup
- [ ] Stop all servers (Ctrl+C in each terminal)
- [ ] Close Expo dev server
- [ ] Close browser tabs
- [ ] Save any changes

### Optional: Git Commit
- [ ] `git add .`
- [ ] `git commit -m "Complete WalletConnect demo"`
- [ ] `git push` (if using remote repo)

### Share
- [ ] Take screenshots
- [ ] Record demo video
- [ ] Share with team
- [ ] Get feedback

---

## 🎉 Success Criteria

You're ready when:
✅ All three components start without errors
✅ QR code displays on web
✅ Camera opens on mobile
✅ Scanning connects instantly
✅ UI looks premium and polished
✅ No console errors anywhere
✅ Connection is reliable
✅ You can explain the flow confidently

---

**Time to complete checklist: ~30 minutes**
**Recommended: Go through this before any demo or presentation**
