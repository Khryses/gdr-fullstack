
import React from "react";
import "../styles/Modal.css";

const LoginModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Accedi a Eodum</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="modal-action">Accedi</button>
        <p className="modal-footer">Hai dimenticato la password?</p>
      </div>
    </div>
  );
};

export default LoginModal;
