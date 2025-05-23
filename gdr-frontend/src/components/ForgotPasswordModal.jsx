import React, { useState } from 'react';
import { useDraggable } from '@dnd-kit/core';
import '../styles/modal.css';

export default function ForgotPasswordModal({ onClose }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: 'forgot' });
  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : undefined;

  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Link di recupero inviato a ${email}`);
    onClose();
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} className="modal">
      <button className="modal-close" onClick={onClose}>×</button>
      <h2>Recupera Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
        <button type="submit">Invia</button>
      </form>
    </div>
  );
}

