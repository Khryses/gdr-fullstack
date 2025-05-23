
import React, { useEffect, useState } from "react";

const ItemManager = () => {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ nome: "", descrizione: "", prezzo: 0, tipo: "", quantita: 1 });

  const fetchItems = () => {
    fetch("/api/items", {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    })
      .then(res => res.json())
      .then(data => setItems(data));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(form),
    }).then(() => {
      fetchItems();
      setForm({ nome: "", descrizione: "", prezzo: 0, tipo: "", quantita: 1 });
    });
  };

  return (
    <div>
      <h2>Gestione Oggetti</h2>
      <form onSubmit={handleSubmit}>
        <input value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} placeholder="Nome" />
        <input value={form.descrizione} onChange={e => setForm({ ...form, descrizione: e.target.value })} placeholder="Descrizione" />
        <input type="number" value={form.prezzo} onChange={e => setForm({ ...form, prezzo: parseInt(e.target.value) })} placeholder="Prezzo" />
        <input value={form.tipo} onChange={e => setForm({ ...form, tipo: e.target.value })} placeholder="Tipo" />
        <input type="number" value={form.quantita} onChange={e => setForm({ ...form, quantita: parseInt(e.target.value) })} placeholder="Quantità" />
        <button type="submit">Aggiungi</button>
      </form>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.nome} - {item.prezzo} crediti</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemManager;
