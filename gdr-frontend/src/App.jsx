// src/App.jsx
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";
import ForgotPasswordModal from "./components/ForgotPasswordModal";

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showForgot, setShowForgot] = useState(false);

  return (
    <>
      <Navbar
        onLogin={() => setShowLogin(true)}
        onRegister={() => setShowRegister(true)}
      />
      <HomePage />
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} onForgot={() => {
            setShowLogin(false);
           setShowForgot(true); }} />}
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
      {showForgot && <ForgotPasswordModal onClose={() => setShowForgot(false)} />}
    </>
  );
}
