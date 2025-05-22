
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulazione login (sostituire con logica reale)
    if (email && password) {
      setLoggedIn(true);
    }
  };

  const openInPopup = () => {
    window.open("/dashboard", "EodumLand", "width=1024,height=768");
  };

  const openInNewTab = () => {
    window.open("/dashboard", "_blank");
  };

  if (loggedIn) {
    return (
      <div className="login-choice">
        <h2>Benvenuto su Eodum!</h2>
        <p>Come vuoi accedere alla Land?</p>
        <div className="choice-buttons">
          <button onClick={openInPopup}>🔲 Pop-up</button>
          <button onClick={openInNewTab}>↗️ Nuova scheda</button>
        </div>
      </div>
    );
  }

  return (
    <div className="login-form">
      <h2>Accedi</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Accedi</button>
      </form>
    </div>
  );
};

export default LoginPage;
