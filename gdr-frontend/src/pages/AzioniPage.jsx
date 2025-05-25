
import React, { useEffect, useState } from "react";

const AzioniPage = () => {
  const [azioni, setAzioni] = useState([]);

  useEffect(() => {
    fetch("/api/azioni", {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    })
      .then(res => res.json())
      .then(setAzioni);
  }, []);

  return (
    <div>
      <h1>Cronologia Azioni</h1>
      <ul>
        {azioni.map(a => (
          <li key={a.id}>{new Date(a.timestamp).toLocaleString()} — {a.descrizione}</li>
        ))}
      </ul>
    </div>
  );
};

export default AzioniPage;
