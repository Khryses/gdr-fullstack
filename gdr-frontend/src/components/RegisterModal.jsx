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
        <label htmlFor="reg-given-name" className="sr-only">Nome</label>
        <input
          id="reg-given-name"
          name="givenName"
          type="text"
          placeholder="Nome"
          required
          autoComplete="given-name"
        />
        <label htmlFor="reg-family-name" className="sr-only">Cognome</label>
        <input
          id="reg-family-name"
          name="familyName"
          type="text"
          placeholder="Cognome"
          required
          autoComplete="family-name"
        />
        <label htmlFor="reg-sex" className="sr-only">Sesso</label>
        <input
          id="reg-sex"
          name="sex"
          type="text"
          placeholder="Sesso"
          required
          autoComplete="sex"
        />
        <label htmlFor="reg-race" className="sr-only">Razza</label>
        <input
          id="reg-race"
          name="race"
          type="text"
          placeholder="Razza"
          required
          autoComplete="off"
        />
        <label htmlFor="reg-email" className="sr-only">Email</label>
        <input
          id="reg-email"
          name="email"
          type="email"
          placeholder="Email"
          required
          autoComplete="email"
        />
        <label htmlFor="reg-password" className="sr-only">Password</label>
        <input
          id="reg-password"
          name="password"
          type="password"
          placeholder="Password"
          required
          autoComplete="new-password"
        />
        <button type="submit">Registrati</button>
        <button type="button" onClick={onClose} style={{ marginTop: '10px' }}>
          Chiudi
        </button>
      </form>
    </div>
  );
};

export default RegisterModal;
