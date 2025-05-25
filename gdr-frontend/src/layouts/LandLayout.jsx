import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import SidebarSinistra from "../components/SidebarSinistra";
import SidebarDestra from "../components/SidebarDestra";

export default function LandLayout() {
  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload();
    }, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="land-layout">
      <SidebarSinistra />
      <main className="land-main">
        <Outlet />
      </main>
      <SidebarDestra />
    </div>
  );
}