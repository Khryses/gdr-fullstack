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

  useEffect(() => {
    const handleLogin = () => setShowLogin(true);
    const handleRegister = () => setShowRegister(true);
    const handleForgot = () => setShowForgot(true);

    window.addEventListener("openLoginModal", handleLogin);
    window.addEventListener("openRegisterModal", handleRegister);
    window.addEventListener("openForgotPasswordModal", handleForgot);

    return () => {
      window.removeEventListener("openLoginModal", handleLogin);
      window.removeEventListener("openRegisterModal", handleRegister);
      window.removeEventListener("openForgotPasswordModal", handleForgot);
    };
  }, []);

  return (
    <>
      <Navbar />
      <HomePage />
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
      {showForgot && <ForgotPasswordModal onClose={() => setShowForgot(false)} />}
    </>
  );
}
