import React, { useState } from 'react';
import { useDraggable } from '@dnd-kit/core';
import '../styles/modal.css';

export default function LoginModal({ onClose }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: 'login' });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  const [mode, setMode] = useState('tab');

  const handleSubmit = (e) => {
    e.preventDefault();
    // qui potresti chiamare l’API di login
    window.open('/land', mode === 'popup' ? 'EodumLand' : '_blank', mode === 'popup' ? 'width=1024,height=768' : '');
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} className="modal">
      <button className="modal-close" onClick={onClose}>×</button>
      <h2>Accedi a Eodum</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="login-email" className="sr-only">Email</label>
        <input id="login-email" name="email" type="email" placeholder="Email" required autoComplete="email" />

        <label htmlFor="login-password" className="sr-only">Password</label>
        <input id="login-password" name="password" type="password" placeholder="Password" required autoComplete="current-password" />

        <select
          value={mode}
          onChange={e => setMode(e.target.value)}
          style={{ width: '100%', margin: '15px 0', padding: '10px' }}
        >
          <option value="tab">Apri in nuova scheda</option>
          <option value="popup">Apri in popup</option>
        </select>

        <button type="submit">Accedi</button>
      </form>
      <a href="#" className="modal-link">Hai dimenticato la password?</a>
    </div>
  );
}
