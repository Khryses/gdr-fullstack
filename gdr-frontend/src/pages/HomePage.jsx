
import React from "react";
import "../styles/HomePage.css";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="home-container">
      <Navbar />
      <h1 style={{ fontSize: "2rem", color: "#b0e0e6" }}>Benvenuto su Eodum</h1>
    </div>
  );
};

export default HomePage;
