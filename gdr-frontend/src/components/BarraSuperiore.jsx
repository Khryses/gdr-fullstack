
import React from "react";

const BarraSuperiore = () => {
  const handleLogout = () => {
    fetch("http://localhost:4000/api/logout", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + (localStorage.getItem("token") || sessionStorage.getItem("token")),
      },
    }).finally(() => {
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
      window.location.href = "/";
    });
  };

  return (
    <div style={{ background: "#222", color: "#fff", padding: "0.5rem 1rem", display: "flex", justifyContent: "space-between" }}>
      <div>Land Eodum</div>
      <div>
        <button onClick={handleLogout}>Logout</button>
        <button style={{ marginLeft: "10px" }}>Bacheca Admin</button>
        <button style={{ marginLeft: "10px" }}>Bacheche ON/OFF</button>
      </div>
    </div>
  );
};

export default BarraSuperiore;
