
import React, { useState } from "react";
import Draggable from "react-draggable";
import "../styles/Modal.css";

const RegisterModal = ({ onClose }) => {
  const [accepted, setAccepted] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [pointsLeft, setPointsLeft] = useState(9);
  const [stats, setStats] = useState({
    forza: 1,
    destrezza: 1,
    costituzione: 1,
    carisma: 1,
    persuasione: 1,
    leadership: 1,
    intelligenza: 1,
    prontezza: 1,
    intuito: 1,
  });

  const updateStat = (key, delta) => {
    const newVal = stats[key] + delta;
    if (newVal < 1 || newVal > 3) return;
    const totalUsed = Object.values(stats).reduce((a, b) => a + b, 0) + delta - stats[key];
    if (totalUsed > 9 + Object.keys(stats).length) return;

    setStats(prev => ({ ...prev, [key]: newVal }));
    setPointsLeft(prev => prev - delta);
  };

  return (
    <div className="modal-overlay">
      <Draggable handle=".modal-header">
        <div className="modal-box">
          <div className="modal-header">
            <button className="close-button" onClick={onClose}>×</button>
            <h2>Registrazione Personaggio</h2>
          </div>

          {!accepted ? (
            <>
              <div className="disclaimer">
                <p>
                  Questo è un gioco di ruolo ambientato in un mondo fittizio. Ogni riferimento a fatti o persone reali è puramente casuale. <br />
                  Il gioco è vietato ai minori di 18 anni. Accedendo confermi di aver letto e accettato i Termini di Servizio e l'Informativa Privacy.
                </p>
              </div>
              <button className="modal-action" onClick={() => setAccepted(true)}>Accetto</button>
            </>
          ) : !confirmation ? (
            <>
              <input type="text" placeholder="Nome" />
              <input type="text" placeholder="Cognome" />
              <input type="email" placeholder="Email" />
              <select>
                <option>Seleziona razza</option>
                <option>Umano</option>
                <option>Varghul</option>
              </select>
              <select>
                <option>Seleziona sesso</option>
                <option>Maschio</option>
                <option>Femmina</option>
                <option>Nonbinary</option>
                <option>Altro</option>
              </select>
              <p>Distribuisci {pointsLeft} punti:</p>
              {Object.keys(stats).map(key => (
                <div key={key}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}:
                  <button onClick={() => updateStat(key, -1)}>-</button>
                  <span>{stats[key]}</span>
                  <button onClick={() => updateStat(key, 1)}>+</button>
                </div>
              ))}
              <button className="modal-action" onClick={() => setConfirmation(true)}>Registrati</button>
            </>
          ) : (
            <p className="confirmation-text">Registrazione completata con successo!</p>
          )}
        </div>
      </Draggable>
    </div>
  );
};

export default RegisterModal;
