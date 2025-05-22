
import React from "react";
import Navbar from "../components/Navbar";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <div className="hero-text">
        <h1>BENVENUTO A EODUM</h1>
        <p>Un gioco di ruolo urban-fantasy ambientato nel 2500.</p>
      </div>
    </div>
  );
};

export default HomePage;
