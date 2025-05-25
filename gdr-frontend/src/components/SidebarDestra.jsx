import React from "react";
import { useParams } from "react-router-dom";

export default function SidebarDestra() {
  const { luogo } = useParams();
  const meteo = "Nuvoloso, vento moderato";

  return (
    <aside className="sidebar-destra">
      <h4>{luogo ? decodeURIComponent(luogo) : "Posizione attuale"}</h4>
      <img src="/mappa.png" alt="mappa" width="150" />
      <div>Descrizione del luogo corrente.</div>
      <h4>Meteo</h4>
      <div>{meteo}</div>
      <h4>Presenti</h4>
      <ul>
        <li>Personaggio1</li>
        <li>Personaggio2</li>
      </ul>
      <button>Elenco di tutti i presenti</button>
    </aside>
  );
}