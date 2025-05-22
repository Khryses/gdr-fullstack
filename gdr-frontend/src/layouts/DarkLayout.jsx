
import React from "react";
import { Link } from "react-router-dom";
import "../styles/DarkLayout.css";

const DarkLayout = ({ children }) => {
  return (
    <div className="dark-layout">
      <nav className="dark-navbar">
        <div className="logo">EODUM</div>
        <div className="nav-links">
          <Link to="/login">Accedi</Link>
          <Link to="/register">Registrati</Link>
        </div>
      </nav>
      <main className="dark-content">{children}</main>
      <footer className="dark-footer">© 2500 Eodum. Tutti i diritti riservati.</footer>
    </div>
  );
};

export default DarkLayout;
