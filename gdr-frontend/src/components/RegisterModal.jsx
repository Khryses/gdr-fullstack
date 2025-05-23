import React from 'react';
import '../styles/modal.css';

const RegisterModal = () => {
  return (
    <div className="modal">
      <h2>Registrati a Eodum</h2>
      <input type="text" placeholder="Nome" required />
      <input type="text" placeholder="Cognome" required />
      <input type="text" placeholder="Sesso" required />
      <input type="text" placeholder="Razza" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button>Registrati</button>
    </div>
  );
};

export default RegisterModal;