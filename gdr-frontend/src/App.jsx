import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";
import ForgotPasswordModal from "./components/ForgotPasswordModal";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showForgot, setShowForgot] = useState(false);

  useEffect(() => {
    const handleForgot = () => setShowForgot(true);
    window.addEventListener("openForgotPasswordModal", handleForgot);
    return () => window.removeEventListener("openForgotPasswordModal", handleForgot);
  }, []);

  return (
    <>
      <Navbar
        onLogin={() => setShowLogin(true)}
        onRegister={() => setShowRegister(true)}
      />
      <HomePage />
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
      {showForgot && <ForgotPasswordModal onClose={() => setShowForgot(false)} />}
    </>
  );
}

export default App;