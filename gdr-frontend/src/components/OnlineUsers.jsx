
import React, { useEffect, useState } from "react";

const OnlineUsers = () => {
  const [utenti, setUtenti] = useState([]);

  useEffect(() => {
    const update = () => {
      fetch("/api/online", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      })
        .then(res => res.json())
        .then(setUtenti);
    };

    update();
    const ping = setInterval(() => {
      fetch("/api/online/ping", {
        method: "POST",
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      });
      update();
    }, 60000);

    return () => clearInterval(ping);
  }, []);

  return (
    <div>
      <h3>Utenti Online</h3>
      <ul>
        {utenti.map(u => (
          <li key={u.id}>User ID: {u.userId}</li>
        ))}
      </ul>
    </div>
  );
};

export default OnlineUsers;
