import React, { useState } from 'react';
import { useDraggable } from '@dnd-kit/core';
import '../styles/modal.css';

export default function RegisterModal({ onClose }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: 'register' });
  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : undefined;

  const races = ['Umano', 'Varghul'];
  const [accepted, setAccepted] = useState(false);
  const [points, setPoints] = useState({ Forza:1, Carisma:1, Intelletto:1, Destrezza:1 });
  const maxPoints = 9;
  const usedPoints = Object.values(points).reduce((a,b) => a+b, 0);

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
      alert(`Devi distribuire tutti i ${maxPoints} punti`);
      return;
    }
    alert('Registrazione completata!');
    onClose();
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} className="modal">
      <button className="modal-close" onClick={onClose}>×</button>
      <h2>Registrati a Eodum</h2>
      <form onSubmit={handleSubmit}>
        {/* Termini e Privacy */}
        <div className="modal-terms">
          <input type="checkbox" id="accept" checked={accepted} onChange={e => setAccepted(e.target.checked)} />
          <label htmlFor="accept">Accetto <a href="/terms" target="_blank">termini</a> e <a href="/privacy" target="_blank">privacy</a></label>
        </div>

        {/* Info base */}
        <input type="text"   placeholder="Nome"     required autoComplete="given-name" />
        <input type="text"   placeholder="Cognome"  required autoComplete="family-name" />
        <input type="text"   placeholder="Sesso"    required autoComplete="sex" />
        <select required defaultValue="" >
          <option value="" disabled>Seleziona Razza</option>
          {races.map(r=> <option key={r} value={r}>{r}</option>)}
        </select>
        <input type="email"  placeholder="Email"    required autoComplete="email" />
        <input type="password" placeholder="Password" required autoComplete="new-password" />

        {/* Distribuzione punti */}
        <fieldset className="modal-points">
          <legend>Punti da distribuire ({usedPoints} / {maxPoints})</legend>
          {Object.keys(points).map(attr => (
            <div key={attr} className="modal-point-row">
              <label>{attr}</label>
              <input
                type="range"
                min="1" max="3"
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

