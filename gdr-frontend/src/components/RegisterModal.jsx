// src/components/RegisterModal.jsx
import React from 'react';
import '../styles/modal.css';

const RegisterModal = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registrazione inviata!');
    onClose?.();
  };

  return (
    <div className="modal">
      <h2>Registrati a Eodum</h2>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <input
          type="text"
          placeholder="Nome"
          required
          autoComplete="given-name"
        />
        <input
          type="text"
          placeholder="Cognome"
          required
          autoComplete="family-name"
        />
        <input
          type="text"
          placeholder="Sesso"
          required
          autoComplete="sex"
        />
        <input
          type="text"
          placeholder="Razza"
          required
          autoComplete="off"
        />
        <input
          type="email"
          placeholder="Email"
          required
          autoComplete="email"
        />
        <input
          type="password"
          placeholder="Password"
          required
          autoComplete="new-password"
        />
        <button type="submit">Registrati</button>
        <button
          type="button"
          onClick={onClose}
          style={{ marginTop: '10px' }}
        >
          Chiudi
        </button>
      </form>
    </div>
  );
};

export default RegisterModal;