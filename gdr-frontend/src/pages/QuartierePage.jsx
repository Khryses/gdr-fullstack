import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function QuartierePage() {
  const { nome } = useParams();
  const navigate = useNavigate();

  const luoghi = ["Officina Diaz", "Piazza Centrale", "Tetto del Sole"];

  return (
    <div className="quartiere-page">
      <h2>{decodeURIComponent(nome)}</h2>
      {luoghi.map((luogo) => (
        <button
          key={luogo}
          onClick={() =>
            navigate(`/land/chat/${nome.toLowerCase()}/${luogo.toLowerCase().replace(/ /g, '-')}`)
          }
        >
          {luogo}
        </button>
      ))}
      <br />
      <button onClick={() => navigate("/land")}>Torna alla mappa principale</button>
    </div>
  );
}