
import React, { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";
import DocsModal from "./components/DocsModal";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showDocs, setShowDocs] = useState(false);

  useEffect(() => {
    const handleLogin = () => setShowLogin(true);
    const handleRegister = () => setShowRegister(true);
    const handleDocs = () => setShowDocs(true);

    window.addEventListener("openLoginModal", handleLogin);
    window.addEventListener("openRegisterModal", handleRegister);
    window.addEventListener("openDocsModal", handleDocs);

    return () => {
      window.removeEventListener("openLoginModal", handleLogin);
      window.removeEventListener("openRegisterModal", handleRegister);
      window.removeEventListener("openDocsModal", handleDocs);
    };
  }, []);

  return (
    <>
      <HomePage />
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
      {showDocs && <DocsModal onClose={() => setShowDocs(false)} />}
    </>
  );
}

export default App;
