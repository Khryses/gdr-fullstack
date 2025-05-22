
import React, { useState, useEffect } from "react";
import "../styles/Modal.css";

const nomiVietati = ["harry potter", "batman", "superman", "frodo", "gandalf"];

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

  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);

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
      setFormData((prev) => ({
        ...prev,
        caratteristiche: {
          ...prev.caratteristiche,
          [key]: current + delta,
        },
      }));
    }
  };

  useEffect(() => {
    const fullName = `${formData.nome} ${formData.cognome}`.toLowerCase().trim();
    const symbolRegex = /[^a-zA-ZàèìòùáéíóúÀÈÌÒÙÁÉÍÓÚçÇ\s'-]/;

    if (
      symbolRegex.test(formData.nome) ||
      symbolRegex.test(formData.cognome) ||
      nomiVietati.includes(fullName)
    ) {
      setError("Nome o Cognome non validi o protetti da copyright.");
    } else {
      setError("");
    }
  }, [formData.nome, formData.cognome]);

  const razzeDisponibili = ["Umano", "Varghul"];

  const handleSubmit = () => {
    if (!accepted) {
      alert("Devi accettare i termini e le condizioni.");
      return;
    }

    if (error) {
      alert("Correggi gli errori prima di procedere.");
      return;
    }

    console.log("Dati registrazione inviati:", formData);
    alert("Registrazione inviata! Controlla la tua email.");
    onClose();
  };

  return (
    <div className="modal-overlay draggable">
      <div className="modal-box">
        <button className="close-button" onClick={onClose}>×</button>

        {!accepted ? (
          <>
            <h2>Accetta i Termini</h2>
            <div className="modal-disclaimer">
              <p>Registrandoti accetti i <a href="#">Termini di utilizzo</a> e l'<a href="#">Informativa Privacy</a>.</p>
              <p>Questo è un gioco di ruolo puramente immaginario. Ogni riferimento a persone, fatti o luoghi reali è puramente casuale.</p>
            </div>
            <button className="modal-action" onClick={() => setAccepted(true)}>Accetto e continuo</button>
          </>
        ) : (
          <>
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

            {error && <p className="error-message">{error}</p>}

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
          </>
        )}
      </div>
    </div>
  );
};

export default RegisterModal;
