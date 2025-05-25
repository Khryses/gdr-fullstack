import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandPage() {
  const navigate = useNavigate();

  const quartieri = [
    "Green Acres", "Sanctuary", "Lago d'Acciaio",
    "Central Business District", "Ground Zero",
    "Barrio del Sol", "Dunwich"
  ];

  return (
    <div className="land-map">
      <h2>Mappa Quartieri</h2>
      {quartieri.map((nome) => (
        <button
          key={nome}
          onClick={() => navigate(`/land/quartiere/${nome.toLowerCase().replace(/ /g, '-')}`)}
        >
          {nome}
        </button>
      ))}
    </div>
  );
}