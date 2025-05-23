import React, { useState } from 'react';
import '../styles/modal.css';

const LoginModal = ({ onClose }) => {
  const [mode, setMode] = useState('tab');

  const handleLogin = (e) => {
    e.preventDefault();
    const url = "/land";
    if (mode === 'popup') {
      window.open(url, 'EodumLand', 'width=1024,height=768');
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="modal">
      <h2>Accedi a Eodum</h2>
      <form onSubmit={handleLogin} style={{ width: '100%' }}>
        <label htmlFor="login-email" className="sr-only">Email</label>
        <input
          id="login-email"
          name="email"
          type="email"
          placeholder="Email"
          required
          autoComplete="email"
        />
        <label htmlFor="login-password" className="sr-only">Password</label>
        <input
          id="login-password"
          name="password"
          type="password"
          placeholder="Password"
          required
          autoComplete="current-password"
        />
        <select
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          style={{ width: '100%', padding: '10px', margin: '15px 0' }}
        >
          <option value="tab">Apri in nuova scheda</option>
          <option value="popup">Apri in popup</option>
        </select>
        <button type="submit">Accedi</button>
        <button type="button" onClick={onClose} style={{ marginTop: '10px' }}>
          Chiudi
        </button>
      </form>
      <a href="#">Hai dimenticato la password?</a>
    </div>
  );
};

export default LoginModal;
