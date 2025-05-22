
import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const openLogin = () => {
    window.dispatchEvent(new Event("openLoginModal"));
  };

  const openRegister = () => {
    window.dispatchEvent(new Event("openRegisterModal"));
  };

  return (
    <nav className="navbar">
      <div className="logo">EODUM</div>
      <div className="nav-links">
        <button className="nav-button" onClick={openLogin}>Accedi</button>
        <button className="nav-button" onClick={openRegister}>Registrati</button>
      </div>
    </nav>
  );
};

export default Navbar;
