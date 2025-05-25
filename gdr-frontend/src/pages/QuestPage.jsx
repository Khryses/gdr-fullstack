
import React, { useEffect, useState } from "react";

const QuestPage = () => {
  const [quests, setQuests] = useState([]);

  useEffect(() => {
    fetch("/api/quests", {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    })
      .then(res => res.json())
      .then(setQuests);
  }, []);

  return (
    <div>
      <h1>Missioni Attive</h1>
      <ul>
        {quests.map(q => (
          <li key={q.id}>
            <strong>{q.titolo}</strong>: {q.descrizione} {q.attiva ? "" : "(Completata)"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestPage;
