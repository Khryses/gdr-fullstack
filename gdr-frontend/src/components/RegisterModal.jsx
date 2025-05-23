import React from 'react';
import '../styles/modal.css';

const RegisterModal = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registrazione inviata!');
  };

  return (
    <div className="modal">
      <h2>Registrati a Eodum</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" required />
        <input type="text" placeholder="Cognome" required />
        <input type="text" placeholder="Sesso" required />
        <input type="text" placeholder="Razza" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Registrati</button>
      </form>
    </div>
  );
};

export default RegisterModal;