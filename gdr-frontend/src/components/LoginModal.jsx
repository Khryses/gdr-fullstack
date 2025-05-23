import React from 'react';
import '../styles/modal.css';

const LoginModal = () => {
  return (
    <div className="modal">
      <h2>Accedi a Eodum</h2>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button>Accedi</button>
      <a href="#">Hai dimenticato la password?</a>
    </div>
  );
};

export default LoginModal;