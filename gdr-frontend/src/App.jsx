// src/App.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";
import ForgotPasswordModal from "./components/ForgotPasswordModal";

console.log("🎉 App component loaded");

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showForgot, setShowForgot] = useState(false);

  useEffect(() => {
    const onForgot = () => {
      console.log("App: openForgotPasswordModal event");
      setShowForgot(true);
    };
    window.addEventListener("openForgotPasswordModal", onForgot);
    return () => window.removeEventListener("openForgotPasswordModal", onForgot);
  }, []);

  console.log("App render state:", { showLogin, showRegister, showForgot });

  return (
    <>
      <Navbar
        onLogin={() => {
          console.log("App: onLogin()");
          setShowLogin(true);
        }}
        onRegister={() => {
          console.log("App: onRegister()");
          setShowRegister(true);
        }}
      />
      <HomePage />
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
      {showForgot && <ForgotPasswordModal onClose={() => setShowForgot(false)} />}
    </>
  );
}
