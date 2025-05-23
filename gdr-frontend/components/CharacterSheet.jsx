
import React from "react";

const CharacterSheet = ({ user }) => {
  return (
    <div className="character-sheet">
      <h2>{user.nome} {user.cognome}</h2>
      <p><strong>Razza:</strong> {user.razza}</p>
      <p><strong>Sesso:</strong> {user.sesso}</p>
      <p><strong>Livello:</strong> {user.livello}</p>
      <p><strong>Reputazione:</strong> {user.reputazione}</p>
      <p><strong>Caratteristiche:</strong></p>
      <ul>
        {Object.entries(user.caratteristiche).map(([key, value]) => (
          <li key={key}>{key}: {value}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterSheet;
