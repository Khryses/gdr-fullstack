
import React, { useState } from "react";
import "../styles/RegisterModal.css";

const tooltips = {
  Forza: "Misura la potenza fisica del personaggio.",
  Destrezza: "Abilità nei movimenti, agilità e precisione.",
  Vigore: "Resistenza fisica e capacità di sopportare fatica.",
  Carisma: "Capacità di attrarre e influenzare gli altri.",
  Persuasione: "Abilità nell'argomentare e convincere.",
  Aspetto: "Aspetto fisico e presenza scenica.",
  Percezione: "Sensibilità ai dettagli e all’ambiente circostante.",
  Intelligenza: "Capacità analitica e conoscenza.",
  Prontezza: "Rapidità di reazione e lucidità sotto pressione."
};

const defaultStats = {
  Forza: 1,
  Destrezza: 1,
  Vigore: 1,
  Carisma: 1,
  Persuasione: 1,
  Aspetto: 1,
  Percezione: 1,
  Intelligenza: 1,
  Prontezza: 1,
};

const RegisterModal = ({ onClose }) => {
  const [form, setForm] = useState({ nome: "", cognome: "", email: "", razza: "" });
  const [stats, setStats] = useState({ ...defaultStats });
  const [pointsLeft, setPointsLeft] = useState(9);

  const razzeDisponibili = ["Umano", "Vampiro", "Licantropo", "Feralux", "Zorn", "Miroh"];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const increaseStat = (key) => {
    if (pointsLeft > 0 && stats[key] < 4) {
      setStats({ ...stats, [key]: stats[key] + 1 });
      setPointsLeft(pointsLeft - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, caratteristiche: stats })
      });

      const result = await res.json();
      if (res.ok) {
        alert("Registrazione completata! Controlla la tua email per la password.");
        onClose();
      } else {
        alert(result.error || "Errore nella registrazione.");
      }
    } catch (err) {
      alert("Errore di connessione con il server.");
    }
    
    onClose();
  };

  return (
    <div className="register-sheet-overlay">
      <div className="register-sheet">
        <button className="close-button" onClick={onClose}>✖</button>
        <h2>ISCRIZIONE</h2>
        <form onSubmit={handleSubmit}>
          <input name="nome" placeholder="Nome" onChange={handleChange} required />
          <input name="cognome" placeholder="Cognome" onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
          <select name="razza" onChange={handleChange} required>
            <option value="">-- Seleziona Razza --</option>
            {razzeDisponibili.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>

          <h3>Distribuisci i tuoi punti ({pointsLeft} rimanenti)</h3>
          <div className="stats-grid">
            {Object.entries(stats).map(([key, val]) => (
              <div key={key} className="stat-box">
                <label title={tooltips[key]}>{key}</label>
                <div>
                  <span>{val}</span>
                  <button type="button" onClick={() => increaseStat(key)}>+</button>
                </div>
              </div>
            ))}
          </div>

          <button type="submit" disabled={pointsLeft > 0}>Registrati ora</button>
        </form>
        <p className="info">
          Una password temporanea ti sarà inviata via email. Ti consigliamo di cambiarla al primo accesso.
        </p>
      </div>
    </div>
  );
};

export default RegisterModal;
