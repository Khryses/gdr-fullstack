
import React, { useEffect, useState } from "react";

const EventiPage = () => {
  const [eventi, setEventi] = useState([]);

  useEffect(() => {
    fetch("/api/eventi", {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    })
      .then(res => res.json())
      .then(setEventi);
  }, []);

  return (
    <div>
      <h1>Calendario Eventi</h1>
      <ul>
        {eventi.map(e => (
          <li key={e.id}>
            <strong>{e.titolo}</strong> – {new Date(e.dataEvento).toLocaleDateString()} – {e.descrizione}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventiPage;
