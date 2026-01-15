import { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import { Html5QrcodeScanner } from "html5-qrcode";

const BACKEND_URL = "http://localhost:4000";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [scanning, setScanning] = useState(false);
  const scannerRef = useRef(null);

  useEffect(() => {
    if (screen === "scan" && !scanning) {
      setScanning(true);
      
      const scanner = new Html5QrcodeScanner("qr-reader", {
        fps: 10,
        qrbox: { width: 250, height: 250 },
        aspectRatio: 1.0
      });

      scanner.render(
        (decodedText) => {
          const walletAddress = "0xRED" + Math.random().toString(36).slice(2, 12).toUpperCase();
          
          socket.emit("join-session", decodedText);
          socket.emit("wallet-connected", {
            sessionId: decodedText,
            address: walletAddress
          });

          scanner.clear();
          alert(`✓ Connected!\n\nConnected to dApp\n${walletAddress}`);
          setScreen("home");
          setScanning(false);
        },
        (error) => {
          // Ignore scan errors
        }
      );

      scannerRef.current = scanner;
    }

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch(() => {});
      }
    };
  }, [screen]);

  if (screen === "scan") {
    return (
      <div style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        padding: "24px"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px"
        }}>
          <h2 style={{ color: "#ff0033", fontSize: "24px" }}>Scan QR Code</h2>
          <button
            onClick={() => {
              if (scannerRef.current) {
                scannerRef.current.clear();
              }
              setScreen("home");
              setScanning(false);
            }}
            style={{
              background: "#ff0033",
              color: "#fff",
              border: "none",
              padding: "12px 24px",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: "700",
              cursor: "pointer"
            }}
          >
            ✕ Close
          </button>
        </div>

        <div id="qr-reader" style={{
          maxWidth: "500px",
          margin: "0 auto"
        }}></div>

        <div style={{
          textAlign: "center",
          marginTop: "30px",
          color: "#888"
        }}>
          <p>Position the QR code within the camera frame</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#000",
      color: "#fff",
      padding: "24px"
    }}>
      <div style={{ marginTop: "60px", marginBottom: "40px" }}>
        <h1 style={{
          color: "#ff0033",
          fontSize: "42px",
          fontWeight: "900",
          letterSpacing: "2px"
        }}>
          RedX
        </h1>
        <p style={{
          color: "#ff0033",
          fontSize: "12px",
          fontWeight: "600",
          letterSpacing: "4px",
          opacity: 0.7,
          marginTop: "4px"
        }}>
          WALLET
        </p>
      </div>

      <div style={{
        background: "#0a0a0a",
        padding: "32px",
        borderRadius: "24px",
        border: "1px solid #1a1a1a",
        boxShadow: "0 8px 20px rgba(255,0,51,0.3)",
        marginBottom: "40px"
      }}>
        <p style={{
          color: "#888",
          fontSize: "13px",
          fontWeight: "600",
          letterSpacing: "1px",
          marginBottom: "8px"
        }}>
          TOTAL BALANCE
        </p>
        <h2 style={{
          color: "#fff",
          fontSize: "48px",
          fontWeight: "700",
          marginBottom: "8px"
        }}>
          3.14 ETH
        </h2>
        <p style={{
          color: "#666",
          fontSize: "16px",
          marginBottom: "20px"
        }}>
          ≈ $5,847.32 USD
        </p>
        <div style={{
          background: "#111",
          padding: "10px 16px",
          borderRadius: "12px",
          display: "inline-block"
        }}>
          <span style={{
            color: "#ff0033",
            fontSize: "13px",
            fontFamily: "monospace",
            fontWeight: "600"
          }}>
            0xRED...x7a9f
          </span>
        </div>
      </div>

      <button
        onClick={() => setScreen("scan")}
        style={{
          width: "100%",
          background: "#ff0033",
          color: "#fff",
          border: "none",
          padding: "20px 32px",
          borderRadius: "16px",
          fontSize: "18px",
          fontWeight: "700",
          cursor: "pointer",
          boxShadow: "0 8px 16px rgba(255,0,51,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px"
        }}
      >
        <span style={{ fontSize: "24px" }}>📷</span>
        Scan & Connect
      </button>

      <div style={{
        marginTop: "24px",
        padding: "20px",
        background: "#0a0a0a",
        borderRadius: "12px",
        border: "1px solid #1a1a1a"
      }}>
        <p style={{
          color: "#666",
          fontSize: "13px",
          lineHeight: "20px",
          textAlign: "center"
        }}>
          Scan a WalletConnect QR code to connect with dApps securely
        </p>
      </div>
    </div>
  );
}
