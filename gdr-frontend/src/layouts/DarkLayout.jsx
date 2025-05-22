
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginModal from "../components/LoginModal";
import "../styles/DarkLayout.css";

const DarkLayout = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="dark-layout">
      <nav className="dark-navbar">
        <div className="logo">EODUM</div>
        <div className="nav-links">
          <button className="nav-button" onClick={() => setShowLogin(true)}>Accedi</button>
          <Link to="/register">Registrati</Link>
        </div>
      </nav>
      <main className="dark-content">{children}</main>
      <footer className="dark-footer">© 2500 Eodum. Tutti i diritti riservati.</footer>
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </div>
  );
};

export default DarkLayout;
