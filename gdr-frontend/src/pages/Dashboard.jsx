
import React from "react";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2 className="logo">EODUM</h2>
        <nav>
          <ul>
            <li><a href="#">Bacheca</a></li>
            <li><a href="#">Mappa</a></li>
            <li><a href="#">Personaggi</a></li>
            <li><a href="#">Fazioni</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </nav>
      </aside>
      <main className="main-area">
        <h1>Benvenuto nella Land di Eodum</h1>
        <p>Da qui puoi accedere a tutte le funzionalità principali del gioco.</p>
      </main>
    </div>
  );
};

export default Dashboard;
