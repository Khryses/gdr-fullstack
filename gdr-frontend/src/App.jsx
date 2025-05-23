// src/App.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";
import ForgotPasswordModal from "./components/ForgotPasswordModal";

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showForgot, setShowForgot] = useState(false);

  // Solo se vuoi ancora l’evento forgot pw:
  useEffect(() => {
    const onForgot = () => setShowForgot(true);
    window.addEventListener("openForgotPasswordModal", onForgot);
    return () => window.removeEventListener("openForgotPasswordModal", onForgot);
  }, []);

  return (
    <>
      {/* **ECCO QUI**: passo SEMPRE onLogin/onRegister */}
      <Navbar
        onLogin={() => setShowLogin(true)}
        onRegister={() => setShowRegister(true)}
      />
      <HomePage />
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showRegister && (
        <RegisterModal onClose={() => setShowRegister(false)} />
      )}
      {showForgot && (
        <ForgotPasswordModal onClose={() => setShowForgot(false)} />
      )}
    </>
  );
}