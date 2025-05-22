
import React from "react";
import "../styles/DocsModal.css";

const DocumentationModal = ({ onClose }) => {
  return (
    <div className="sheet-overlay">
      <div className="sheet">
        <button className="close-button" onClick={onClose}>✖</button>
        <h2>DOCUMENTAZIONE</h2>
        <div className="tabs">
          <button>Ambientazione</button>
          <button>Regole</button>
          <button>Sistema</button>
          <button>Personaggi</button>
        </div>
        <div className="content">
          <p>Qui andrà il contenuto testuale delle varie sezioni. Puoi inserire qui testo HTML o componenti dinamici se vuoi.</p>
        </div>
      </div>
    </div>
  );
};

export default DocumentationModal;
