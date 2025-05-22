import React, { useState } from "react";
import "../styles/Modal.css";

const RegisterModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    razza: "",
    caratteristiche: {
      forza: 1,
      destrezza: 1,
      costituzione: 1,
      carisma: 1,
      persuasione: 1,
      leadership: 1,
      intelligenza: 1,
      prontezza: 1,
      intuito: 1,
    },
  });

  const maxTotale = 9;
  const maxSingolo = 3;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaratteristica = (key, delta) => {
    const current = formData.caratteristiche[key];
    const sommaAttuale = Object.values(formData.caratteristiche).reduce((a, b) => a + b, 0);

    if (
      current + delta >= 1 &&
      current + delta <= maxSingolo &&
      sommaAttuale + delta <= 9
    ) {
      setFormData({
        ...formData,
        caratteristiche: {
          ...formData.caratteristiche,
          [key]: current + delta,
        },
      });
    }
  };

  const razzeDisponibili = ["Umano", "Feralux", "Varghul", "Antigene", "Miroh", "Zorn"];

  const handleSubmit = () => {
    const nameRegex = /^[a-zA-ZàèìòùáéíóúÀÈÌÒÙÁÉÍÓÚçÇ\\s'-]+$/;
    if (!nameRegex.test(formData.nome) || !nameRegex.test(formData.cognome)) {
      alert("Nome o Cognome non validi (no simboli, no nomi vietati)");
      return;
    }

    console.log("Invio dati:", formData);
    alert("Registrazione inviata! Controlla la tua email.");
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Registrazione Personaggio</h2>
        <input name="nome" type="text" placeholder="Nome" onChange={handleChange} />
        <input name="cognome" type="text" placeholder="Cognome" onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} />

        <select name="razza" value={formData.razza} onChange={handleChange}>
          <option value="">Seleziona razza</option>
          {razzeDisponibili.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>

        <h4 style={{ marginTop: "1rem" }}>Distribuisci 9 punti:</h4>
        {Object.entries(formData.caratteristiche).map(([key, val]) => (
          <div key={key} style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
            <span style={{ textTransform: "capitalize" }}>{key}</span>
            <div>
              <button onClick={() => handleCaratteristica(key, -1)}>-</button>
              <span style={{ margin: "0 0.5rem" }}>{val}</span>
              <button onClick={() => handleCaratteristica(key, 1)}>+</button>
            </div>
          </div>
        ))}

        <button className="modal-action" onClick={handleSubmit}>
          Registrati
        </button>
      </div>
    </div>
  );
};

export default RegisterModal;
