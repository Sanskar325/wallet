import QRCode from "react-qr-code";
import io from "socket.io-client";
import { useEffect, useState } from "react";

const BACKEND_URL = "http://localhost:4000";

export default function App() {
  const [session] = useState("wc-" + Math.random().toString(36).slice(2, 12));
  const [wallet, setWallet] = useState(null);
  const [status, setStatus] = useState("waiting");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(BACKEND_URL, {
      transports: ['websocket', 'polling']
    });

    newSocket.on("connect", () => {
      console.log("✅ dApp connected to backend:", newSocket.id);
      newSocket.emit("create-session", session);
      console.log("📤 Created session:", session);
    });
    
    newSocket.on("connected", (data) => {
      console.log("🎉 Wallet connected!", data);
      setWallet(data);
      setStatus("connected");
    });

    newSocket.on("disconnect", () => {
      console.log("❌ dApp disconnected from backend");
    });

    setSocket(newSocket);

    return () => {
      newSocket.off("connected");
      newSocket.disconnect();
    };
  }, [session]);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(145deg, #000000, #1a0000)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Inter', -apple-system, sans-serif"
    }}>
      <div style={{
        padding: "50px 40px",
        borderRadius: 24,
        background: "#0a0a0a",
        border: "1px solid #1a1a1a",
        boxShadow: wallet ? "0 0 60px rgba(255,0,51,0.5)" : "0 0 40px rgba(255,0,51,0.2)",
        textAlign: "center",
        maxWidth: 420,
        transition: "all 0.3s ease"
      }}>
        <div style={{
          fontSize: 14,
          color: "#ff0033",
          fontWeight: 600,
          letterSpacing: 2,
          marginBottom: 20
        }}>
          WALLETCONNECT
        </div>

        <h1 style={{
          color: "#fff",
          fontSize: 28,
          fontWeight: 700,
          marginBottom: 30,
          letterSpacing: -0.5
        }}>
          {wallet ? "✓ Connected" : "Scan to Connect"}
        </h1>

        {!wallet ? (
          <>
            <div style={{
              background: "#fff",
              padding: 20,
              borderRadius: 16,
              display: "inline-block",
              boxShadow: "0 0 30px rgba(255,0,51,0.3)"
            }}>
              <QRCode 
                value={session} 
                size={220}
                fgColor="#000"
                bgColor="#fff"
              />
            </div>
            <div style={{
              marginTop: 25,
              fontSize: 13,
              color: "#888",
              fontFamily: "monospace"
            }}>
              Session: {session}
            </div>
            <div style={{
              marginTop: 15,
              fontSize: 14,
              color: "#666"
            }}>
              Open your wallet app and scan this QR code
            </div>
          </>
        ) : (
          <div style={{
            background: "linear-gradient(135deg, #ff0033, #cc0029)",
            padding: 30,
            borderRadius: 16,
            boxShadow: "0 8px 32px rgba(255,0,51,0.4)"
          }}>
            <div style={{
              fontSize: 16,
              fontWeight: 600,
              marginBottom: 15,
              opacity: 0.9
            }}>
              {wallet.wallet}
            </div>
            <div style={{
              fontSize: 15,
              fontFamily: "monospace",
              background: "rgba(0,0,0,0.3)",
              padding: "12px 16px",
              borderRadius: 8,
              wordBreak: "break-all"
            }}>
              {wallet.address}
            </div>
            <div style={{
              marginTop: 20,
              fontSize: 13,
              opacity: 0.8
            }}>
              🔗 Connection established
            </div>
          </div>
        )}
      </div>
    </div>
  );
}