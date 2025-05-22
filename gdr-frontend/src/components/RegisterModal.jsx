
import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import "../styles/Modal.css";

const nomiVietati = ["harry potter", "batman", "superman", "frodo", "gandalf"];

const RegisterModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    sesso: "",
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
  const [submitted, setSubmitted] = useState(false);

  const maxTotale = 9;
  const maxSingolo = 3;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaratteristica = (key, delta) => {
    const current = formData.caratteristiche[key];
    const sommaAttuale = Object.values(formData.caratteristiche).reduce((a, b) => a + b, 0);
    const nuovoTotale = sommaAttuale + delta;

    if (
      current + delta >= 1 &&
      current + delta <= maxSingolo &&
      nuovoTotale >= Object.keys(formData.caratteristiche).length &&
      nuovoTotale <= Object.keys(formData.caratteristiche).length + maxTotale - 1
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
  const sessiDisponibili = ["Maschio", "Femmina", "Nonbinary", "Altro"];

  const handleSubmit = () => {
    if (!accepted) {
      alert("Devi accettare i termini e le condizioni.");
      return;
    }

    if (error) {
      alert("Correggi gli errori prima di procedere.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="modal-overlay">
      <Draggable handle=".modal-header">
        <div className="modal-box">
          <div className="modal-header">
            <button className="close-button" onClick={onClose}>×</button>
            <h2 style={{ marginTop: 0 }}>Registrazione Personaggio</h2>
          </div>

          {!accepted ? (
            <>
              <div className="modal-disclaimer">
                <p><strong>Termini di utilizzo:</strong> Questo gioco è riservato a un pubblico adulto e ha solo finalità ludiche. Nessun contenuto ha valore di realtà o riferimento a persone o fatti reali.</p>
                <p><strong>Privacy:</strong> I dati forniti (nome, email, razza) non saranno condivisi né salvati per scopi commerciali.</p>
                <p><strong>Disclaimer:</strong> Ogni riferimento a nomi, luoghi o eventi è frutto di fantasia. È un ambiente narrativo immaginario.</p>
              </div>
              <button className="modal-action" onClick={() => setAccepted(true)}>Accetto e continuo</button>
            </>
          ) : submitted ? (
            <div className="confirmation-message">
              <h3>Registrazione completata!</h3>
              <p>Controlla la tua email per la password iniziale e accedi alla land.</p>
            </div>
          ) : (
            <>
              <input name="nome" type="text" placeholder="Nome" onChange={handleChange} />
              <input name="cognome" type="text" placeholder="Cognome" onChange={handleChange} />
              <input name="email" type="email" placeholder="Email" onChange={handleChange} />

              <select name="sesso" value={formData.sesso} onChange={handleChange}>
                <option value="">Seleziona sesso</option>
                {sessiDisponibili.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>

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
      </Draggable>
    </div>
  );
};

export default RegisterModal;
