import React from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const openLogin = () => window.dispatchEvent(new Event("openLoginModal"));
  const openRegister = () => window.dispatchEvent(new Event("openRegisterModal"));

  return (
    <nav className="navbar">
      <div className="navbar-logo">EODUM</div>
      <div className="navbar-buttons">
        <button onClick={openLogin}>Accedi</button>
        <button onClick={openRegister}>Registrati</button>
      </div>
    </nav>
  );
}
