
import React, { useEffect, useState } from "react";

const RazzePage = () => {
  const [razze, setRazze] = useState([]);

  useEffect(() => {
    fetch("/api/razze", {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    })
      .then(res => res.json())
      .then(setRazze);
  }, []);

  return (
    <div>
      <h1>Enciclopedia Razze</h1>
      <ul>
        {razze.map(r => (
          <li key={r.id}><strong>{r.nome}</strong>: {JSON.stringify(r.poteri)}</li>
        ))}
      </ul>
    </div>
  );
};

export default RazzePage;
