
import React from "react";
import BarraSuperiore from "../components/BarraSuperiore";
import SidebarSinistra from "../components/SidebarSinistra";
import SidebarDestra from "../components/SidebarDestra";
import { Outlet } from "react-router-dom";

const LandLayout = () => {
  return (
    <div className="land-layout" style={{
      display: "flex",
      flexDirection: "column",
      height: "100vh" // Altezza massima visibile
    }}>
      <BarraSuperiore />
      <div style={{ display: "flex", flex: 1, minHeight: 0 }}>
        <SidebarSinistra />
        <div style={{
          flex: 1,
          overflow: "hidden",
          minHeight: 0 // Cruciale per bloccare scroll
        }}>
          <Outlet />
        </div>
        <SidebarDestra />
      </div>
    </div>
  );
};

export default LandLayout;
