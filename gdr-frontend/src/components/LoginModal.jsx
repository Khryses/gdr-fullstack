
import React from "react";
import "../styles/LoginModal.css";

const LoginModal = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    console.log("Login attempt", { email, password });
    onClose();
  };

  return (
    <div className="login-modal-container">
      <div className="login-modal">
        <button className="close-button" onClick={onClose}>✖</button>
        <h2>Accedi a Eodum</h2>
        <form onSubmit={handleSubmit}>
          <input name="email" type="email" placeholder="Email" required />
          <input name="password" type="password" placeholder="Password" required />
          <button type="submit">Accedi</button>
        </form>
        <a
          href="#"
          className="forgot-link"
          onClick={(e) => {
            e.preventDefault();
            const event = new CustomEvent("openForgotPasswordModal");
            window.dispatchEvent(event);
            onClose();
          }}
        >
          Hai dimenticato la password?
        </a>
      </div>
    </div>
  );
};

export default LoginModal;
