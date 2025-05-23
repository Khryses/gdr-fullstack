// src/components/Navbar.jsx
import React from "react";
import "../styles/Navbar.css";

console.log("🎉 Navbar component loaded");

export default function Navbar({ onLogin, onRegister }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">EODUM</div>
      <div className="navbar-buttons">
        <button onClick={() => { console.log("→ click Accedi"); onLogin(); }}>
          Accedi
        </button>
        <button onClick={() => { console.log("→ click Registrati"); onRegister(); }}>
          Registrati
        </button>
      </div>
    </nav>
  );
}
