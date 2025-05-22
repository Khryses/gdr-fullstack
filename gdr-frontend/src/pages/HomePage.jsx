import React from "react";
import DarkLayout from "../layouts/DarkLayout";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <DarkLayout>
      <section className="hero">
        <div className="background-animation"></div>
        <h1 className="title">La città dimenticata non dorme mai</h1>
        <p className="subtitle">Scopri il tuo destino a Eodum</p>
      </section>
    </DarkLayout>
  );
};

export default HomePage;
