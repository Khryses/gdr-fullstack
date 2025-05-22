
import React from "react";
import "../styles/Modal.css";

const RegisterModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Registrati a Eodum</h2>
        <input type="text" placeholder="Nome utente" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="modal-action">Crea Account</button>
      </div>
    </div>
  );
};

export default RegisterModal;
