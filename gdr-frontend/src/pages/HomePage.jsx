
import React from "react";
import DarkLayout from "../layouts/DarkLayout";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <DarkLayout>
      <section className="hero">
        <h1 className="title">La città dimenticata non dorme mai</h1>
        <p className="subtitle">Scopri il tuo destino a Eodum</p>
        <div className="cta-buttons">
          <a href="/login" className="btn">Accedi</a>
          <a href="/register" className="btn alt">Registrati</a>
        </div>
      </section>
    </DarkLayout>
  );
};

export default HomePage;
