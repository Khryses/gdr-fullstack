// gdr-frontend/src/components/RegisterModal.jsx
import React, { useState } from 'react';
import { useDraggable } from '@dnd-kit/core';
import '../styles/modal.css';

export default function RegisterModal({ onClose }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: 'register' });
  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : undefined;

  const races = ['Umano', 'Varghul'];
  const characteristics = ['Forza', 'Carisma', 'Intelletto', 'Destrezza'];
  const maxPoints = 9;

  const [accepted, setAccepted] = useState(false);
  const [points, setPoints] = useState(
    Object.fromEntries(characteristics.map(attr => [attr, 1]))
  );

  const usedPoints = Object.values(points).reduce((a, b) => a + b, 0);

  const handleChange = (attr) => (e) => {
    const val = Number(e.target.value);
    setPoints(prev => ({ ...prev, [attr]: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!accepted) {
      alert('Devi accettare termini e privacy');
      return;
    }
    if (usedPoints !== maxPoints) {
      alert(`Devi distribuire esattamente ${maxPoints} punti (hai distribuito ${usedPoints})`);
      return;
    }
    alert('Registrazione completata!');
    onClose();
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="modal"
    >
      <button className="modal-close" onClick={onClose}>×</button>
      <h2>Registrati a Eodum</h2>
      <form onSubmit={handleSubmit}>
        <div className="modal-terms">
          <input
            type="checkbox"
            id="accept"
            checked={accepted}
            onChange={e => setAccepted(e.target.checked)}
          />
          <label htmlFor="accept" style={{ marginLeft: '8px' }}>
            Accetto <a href="/terms" target="_blank">termini</a> e{' '}
            <a href="/privacy" target="_blank">privacy</a>
          </label>
        </div>

        <label htmlFor="reg-name" className="sr-only">Nome</label>
        <input id="reg-name" name="name" type="text" placeholder="Nome" required autoComplete="given-name" />

        <label htmlFor="reg-surname" className="sr-only">Cognome</label>
        <input id="reg-surname" name="surname" type="text" placeholder="Cognome" required autoComplete="family-name" />

        <label htmlFor="reg-sex" className="sr-only">Sesso</label>
        <input id="reg-sex" name="sex" type="text" placeholder="Sesso" required />

        <label htmlFor="reg-race" className="sr-only">Razza</label>
        <select id="reg-race" name="race" required defaultValue="">
          <option value="" disabled>Seleziona Razza</option>
          {races.map(r => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>

        <label htmlFor="reg-email" className="sr-only">Email</label>
        <input id="reg-email" name="email" type="email" placeholder="Email" required autoComplete="email" />

        <label htmlFor="reg-password" className="sr-only">Password</label>
        <input id="reg-password" name="password" type="password" placeholder="Password" required autoComplete="new-password" />

        <fieldset className="modal-points">
          <legend>Punti ({usedPoints} / {maxPoints})</legend>
          {characteristics.map(attr => (
            <div key={attr} className="modal-point-row">
              <label htmlFor={`pt-${attr}`}>{attr}</label>
              <input
                id={`pt-${attr}`}
                type="range"
                min="1"
                max="3"
                value={points[attr]}
                onChange={handleChange(attr)}
              />
              <span>{points[attr]}</span>
            </div>
          ))}
        </fieldset>

        <button type="submit">Registrati</button>
      </form>
    </div>
  );
}
