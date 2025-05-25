import React from "react";

export default function SidebarSinistra() {
  return (
    <aside className="sidebar-sinistra">
      <h4>Menù</h4>
      <button>Mestieri</button>
      <button>Mercato</button>
      <button>Guide</button>
      <button>Documenti</button>
      <h4>Messaggi</h4>
      <button>ON</button>
      <button>OFF</button>
      <img src="/avatar.png" alt="avatar" width="50" />
      <button onClick={() => window.location.reload()}>Aggiorna</button>
    </aside>
  );
}