import React from 'react';
import '../styles/documentation.css';

const Documentation = () => {
  return (
    <div className="documentation-container">
      <div className="doc-card">
        <h2>Introduzione</h2>
        <p>Benvenuto in Eodum, un mondo urban fantasy distopico...</p>
      </div>
      <div className="doc-card">
        <h2>Regole</h2>
        <p>Scopri le regole principali del gioco...</p>
      </div>
      <div className="doc-card">
        <h2>Fazioni</h2>
        <p>Informazioni dettagliate sulle fazioni di gioco...</p>
      </div>
    </div>
  );
};

export default Documentation;