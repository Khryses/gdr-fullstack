
import React, { useEffect, useState } from "react";

const NotificationBell = () => {
  const [notifiche, setNotifiche] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("/api/notifications", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      })
        .then(res => res.json())
        .then(data => setNotifiche(data));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="notification-bell">
      🔔 {notifiche.length}
    </div>
  );
};

export default NotificationBell;
