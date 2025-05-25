import React from "react";

export default function Navbar({ onLogin, onRegister }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">EODUM</div>
      <div className="navbar-right">
        <button onClick={onLogin}>Accedi</button>
        <button onClick={onRegister}>Registrati</button>
      </div>
    </nav>
  );
}