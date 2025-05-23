// src/components/Navbar.jsx
import React from "react";
import "../styles/Navbar.css";

export default function Navbar({ onLogin, onRegister }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">EODUM</div>
      <div className="navbar-buttons">
        <button onClick={onLogin}>Accedi</button>
        <button onClick={onRegister}>Registrati</button>
      </div>
    </nav>
  );
}