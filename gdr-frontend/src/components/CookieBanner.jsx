
import React, { useEffect, useState } from "react";
import "../styles/CookieBanner.css";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("eodum_cookie_accept");
    if (!accepted) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("eodum_cookie_accept", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      Questo sito utilizza i cookie per migliorare l'esperienza utente.
      <button onClick={handleAccept}>Accetta</button>
    </div>
  );
};

export default CookieBanner;
