// src/components/ForgotPasswordModal.jsx
import React, { useState } from "react";
import "../styles/modal.css";

const ForgotPasswordModal = ({ onClose }) => {
  const [email, setEmail] = useState("");

  const handleForgot = (e) => {
    e.preventDefault();
    // forgot logic
    onClose();
  };

  return (
    <div className="modal">
      <h2>Recupera Password</h2>
      <form onSubmit={handleForgot} style={{ width: "100%" }}>
        <label htmlFor="forgot-email" className="sr-only">Email</label>
        <input
          id="forgot-email"
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
        <button type="submit">Invia</button>
        <button type="button" onClick={onClose} style={{ marginTop: "10px" }}>
          Chiudi
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordModal;
