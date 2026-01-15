const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server, { 
  cors: { 
    origin: "*",
    methods: ["GET", "POST"]
  } 
});

const sessions = new Map();

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("create-session", (sessionId) => {
    socket.join(sessionId);
    sessions.set(sessionId, { dapp: socket.id, wallet: null });
    console.log("Session created:", sessionId);
  });

  socket.on("join-session", (sessionId) => {
    socket.join(sessionId);
    const session = sessions.get(sessionId);
    if (session) {
      session.wallet = socket.id;
      console.log("Wallet joined session:", sessionId);
    }
  });

  socket.on("wallet-connected", ({ sessionId, address }) => {
    console.log("Wallet connected to session:", sessionId, address);
    io.to(sessionId).emit("connected", {
      wallet: "RedX Wallet",
      address: address || "0xRED" + Math.random().toString(36).slice(2, 12).toUpperCase()
    });
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

server.listen(4000, () => console.log("🚀 Backend running on port 4000"));