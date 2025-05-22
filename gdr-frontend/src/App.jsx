import React, { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";
import ForgotPasswordModal from "./components/ForgotPasswordModal";



function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showForgot, setShowForgot] = useState(false);

  useEffect(() => {
    const handleLogin = () => setShowLogin(true);
    const handleRegister = () => setShowRegister(true);

    window.addEventListener("openLoginModal", handleLogin);
    window.addEventListener("openRegisterModal", handleRegister);

    return () => {
      window.removeEventListener("openLoginModal", handleLogin);
      window.removeEventListener("openRegisterModal", handleRegister);
    };
  }, []);

  
useEffect(() => {
  const handleForgot = () => setShowForgot(true);
  window.addEventListener("openForgotPasswordModal", handleForgot);
  return () => window.removeEventListener("openForgotPasswordModal", handleForgot);
}, []);

  return (
    <>
      <HomePage />
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
        {showForgot && <ForgotPasswordModal onClose={() => setShowForgot(false)} />}
    </>
  );
}

export default App;
