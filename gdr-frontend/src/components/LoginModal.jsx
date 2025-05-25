
import React, { useState } from "react";

const LoginModal = ({ onClose, onForgot }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [openInPopup, setOpenInPopup] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");
    try {
      const res = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Errore imprevisto.");
        return;
      }

      if (rememberMe) {
        localStorage.setItem("token", data.token);
      } else {
        sessionStorage.setItem("token", data.token);
      }

      if (openInPopup) {
        window.open("/land", "_blank", "width=1200,height=800");
      } else {
        window.location.href = "/land";
      }

    } catch (err) {
      setError("Errore di connessione.");
    }
  };

  return (
    <div className="modal">
      <h2>Login</h2>
      {error && <p className="errore">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
        />
        Ricorda credenziali
      </label>
      <label>
        <input
          type="checkbox"
          checked={openInPopup}
          onChange={() => setOpenInPopup(!openInPopup)}
        />
        Apri in pop-up
      </label>
      <button onClick={handleLogin}>Accedi</button>
      <button onClick={onForgot}>Password dimenticata?</button>
      <button onClick={onClose}>Chiudi</button>
    </div>
  );
};

export default LoginModal;
