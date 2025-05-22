import React, { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

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

  return (
    <>
      <HomePage />
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
    </>
  );
}

export default App;
