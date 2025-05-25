
import React from "react";
import { useNavigate } from "react-router-dom";

import SidebarSinistra from "./SidebarSinistra";
import BarraSuperiore from "./BarraSuperiore";
import MappaCentrale from "./MappaCentrale";
import SidebarDestra from "./SidebarDestra";

const LandLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch("http://localhost:4000/api/logout", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).finally(() => {
      localStorage.removeItem("token");
      navigate("/");
    });
  };

  return (
    <div className="land-layout">
      <div className="barra-superiore">
        <button onClick={handleLogout}>Logout</button>
        <button className="admin-only">Bacheca Admin</button>
        <button>Bacheche ON/OFF</button>
      </div>
      <div className="contenuto">
        <SidebarSinistra />
        <MappaCentrale />
        <SidebarDestra />
      </div>
    </div>
  );
};

export default LandLayout;
