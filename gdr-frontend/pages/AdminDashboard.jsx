
import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/admin/dashboard", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="admin-dashboard">
      <h1>Pannello di Amministrazione</h1>
      {data ? (
        <>
          <p>{data.message}</p>
          <ul>
            {data.sezioni.map((sezione) => (
              <li key={sezione}>{sezione}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>Caricamento...</p>
      )}
    </div>
  );
};

export default AdminDashboard;
