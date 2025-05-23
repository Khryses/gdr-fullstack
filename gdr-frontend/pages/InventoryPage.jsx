
import React, { useEffect, useState } from "react";

const InventoryPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/inventory", {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    })
      .then(res => res.json())
      .then(setItems);
  }, []);

  return (
    <div>
      <h2>Inventario</h2>
      <ul>
        {items.map(i => (
          <li key={i.id}>Oggetto ID: {i.itemId} – Quantità: {i.quantita}</li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryPage;
