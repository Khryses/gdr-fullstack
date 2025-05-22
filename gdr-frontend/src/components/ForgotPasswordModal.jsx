import React from "react";
import "../styles/Modal.css";

const ForgotPasswordModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Recupera password</h2>
        <input type="email" placeholder="Inserisci la tua email" />
        <button className="modal-action">Invia istruzioni</button>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;