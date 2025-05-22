
import React, { useState } from "react";
import "../styles/ForgotPasswordModal.css";

const ForgotPasswordModal = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setSubmitted(true);
    }
  };

  return (
    <div className="login-modal-container">
      <div className="login-modal">
        <button className="close-button" onClick={onClose}>✖</button>
        {submitted ? (
          <p>Controlla la tua email per il link di recupero.</p>
        ) : (
          <>
            <h2>Recupera password</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Inserisci la tua email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Invia link</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
