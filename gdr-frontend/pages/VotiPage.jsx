
import React, { useEffect, useState } from "react";

const VotiPage = () => {
  const [voti, setVoti] = useState([]);

  useEffect(() => {
    fetch("/api/voti", {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    })
      .then(res => res.json())
      .then(setVoti);
  }, []);

  return (
    <div>
      <h1>Voti ricevuti</h1>
      <ul>
        {voti.map(v => (
          <li key={v.id}>
            Voto: {v.valore > 0 ? "+" : "-"}1 – Motivo: {v.motivo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VotiPage;
