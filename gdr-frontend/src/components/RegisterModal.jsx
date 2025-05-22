
import React from "react";
import "../styles/DocsModal.css";

const RegisterModal = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    console.log("Registrazione:", Object.fromEntries(form.entries()));
    onClose();
  };

  return (
    <div className="sheet-overlay">
      <div className="sheet">
        <button className="close-button" onClick={onClose}>✖</button>
        <h2>ISCRIZIONE</h2>
        <form onSubmit={handleSubmit}>
          <input name="nickname" placeholder="Nickname" required />
          <input name="email" type="email" placeholder="Email" required />
          <input name="password" type="password" placeholder="Password" required />
          <input name="confirm" type="password" placeholder="Conferma Password" required />
          <button type="submit">Registrati</button>
        </form>
        <p style={{ textAlign: "center", marginTop: "1rem" }}>
          Hai già un account? <a href="#" onClick={(e) => { e.preventDefault(); onClose(); window.dispatchEvent(new Event("openLoginModal")); }}>Accedi</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterModal;
