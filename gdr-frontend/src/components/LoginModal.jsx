import React, { useState } from 'react';
import '../styles/modal.css';

const LoginModal = () => {
  const [mode, setMode] = useState('tab');

  const handleLogin = () => {
    const url = "/land"; // URL della land (modifica se necessario)
    if (mode === 'popup') {
      window.open(url, 'EodumLand', 'width=1024,height=768');
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="modal">
      <h2>Accedi a Eodum</h2>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <select
        value={mode}
        onChange={(e) => setMode(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '15px' }}
      >
        <option value="tab">Apri in nuova scheda</option>
        <option value="popup">Apri in popup</option>
      </select>
      <button onClick={handleLogin}>Accedi</button>
      <a href="#">Hai dimenticato la password?</a>
    </div>
  );
};

export default LoginModal;
