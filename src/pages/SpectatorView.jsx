import { useEffect, useState } from 'react';
import api from '../services/api';

function SpectatorView() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    api.get('/protected/notifications').then(res => setEvents(res.data));
  }, []);

  return (
    <div>
      <h2>Modalità Spettatore</h2>
      <ul>
        {events.map((e, i) => <li key={i}>{e.message}</li>)}
      </ul>
    </div>
  );
}

export default SpectatorView;