
import React, { useEffect, useState } from "react";

const ClanPage = () => {
  const [clans, setClans] = useState([]);

  useEffect(() => {
    fetch("/api/clan", {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    })
      .then(res => res.json())
      .then(setClans);
  }, []);

  return (
    <div>
      <h1>Fazioni</h1>
      <ul>
        {clans.map(clan => (
          <li key={clan.id}><strong>{clan.nome}</strong>: {clan.descrizione}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClanPage;
