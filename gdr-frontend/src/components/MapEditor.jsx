
import React, { useEffect, useState } from "react";

const MapEditor = () => {
  const [buttons, setButtons] = useState([]);

  const fetchButtons = () => {
    fetch("/api/map", {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    })
      .then(res => res.json())
      .then(data => setButtons(data));
  };

  useEffect(() => {
    fetchButtons();
  }, []);

  const handleChange = (id, field, value) => {
    setButtons(prev =>
      prev.map(btn => (btn.id === id ? { ...btn, [field]: value } : btn))
    );
  };

  const handleSave = (id) => {
    const btn = buttons.find(b => b.id === id);
    fetch("/api/map/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(btn),
    }).then(() => fetchButtons());
  };

  return (
    <div>
      <h2>Editor Mappa</h2>
      {buttons.map(btn => (
        <div key={btn.id}>
          <input value={btn.nome} onChange={e => handleChange(btn.id, "nome", e.target.value)} />
          <input value={btn.link} onChange={e => handleChange(btn.id, "link", e.target.value)} />
          <input value={btn.x} type="number" onChange={e => handleChange(btn.id, "x", parseInt(e.target.value))} />
          <input value={btn.y} type="number" onChange={e => handleChange(btn.id, "y", parseInt(e.target.value))} />
          <button onClick={() => handleSave(btn.id)}>Salva</button>
        </div>
      ))}
    </div>
  );
};

export default MapEditor;
