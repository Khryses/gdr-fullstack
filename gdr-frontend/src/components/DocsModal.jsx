
import React from "react";
import "../styles/Modal.css";

const DocsModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-box docs">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Documentazione</h2>
        <p>Benvenuto nella land di Eodum. Qui troverai tutte le informazioni necessarie per iniziare a giocare.</p>
      </div>
    </div>
  );
};

export default DocsModal;
