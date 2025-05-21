import { useEffect, useState } from 'react';
import api from '../services/api';

function Notifications() {
  const [notifiche, setNotifiche] = useState([]);

  useEffect(() => {
    api.get('/protected/notifications').then(res => setNotifiche(res.data));
  }, []);

  if (!notifiche.length) return null;

  return (
    <div className="card-box">
      <h3>Notifiche recenti</h3>
      <ul>
        {notifiche.map((n, i) => <li key={i}>{n.message}</li>)}
      </ul>
    </div>
  );
}

export default Notifications;