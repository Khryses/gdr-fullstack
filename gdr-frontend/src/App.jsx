import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import LandLayout from "./layouts/LandLayout";
import LandPage from "./pages/LandPage";
import QuartierePage from "./pages/QuartierePage";
import ChatPage from "./pages/ChatPage";

import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";
import ForgotPasswordModal from "./components/ForgotPasswordModal";

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/land");

  return (
    <>
      {!hideNavbar && (
        <Navbar
          onLogin={() => setShowLogin(true)}
          onRegister={() => setShowRegister(true)}
        />
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/land" element={<LandLayout />}>
          <Route index element={<LandPage />} />
          <Route path="quartiere/:nome" element={<QuartierePage />} />
          <Route path="chat/:quartiere/:luogo" element={<ChatPage />} />
        </Route>
      </Routes>

      {!hideNavbar && <Footer />}
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onForgot={() => {
            setShowLogin(false);
            setShowForgot(true);
          }}
        />
      )}
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
      {showForgot && <ForgotPasswordModal onClose={() => setShowForgot(false)} />}
    </>
  );
}