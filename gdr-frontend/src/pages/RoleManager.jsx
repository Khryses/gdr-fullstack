import { useEffect, useState } from 'react';
import api from '../services/api';

function RoleManager() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/protected/users').then(res => setUsers(res.data));
  }, []);

  const updateRole = async (id, role) => {
    await api.put(`/protected/users/${id}/role`, { role });
    const updated = users.map(u => u._id === id ? { ...u, role } : u);
    setUsers(updated);
  };

  return (
    <div>
      <h2>Gestione Ruoli</h2>
      <ul>
        {users.map(u => (
          <li key={u._id}>
            {u.email} — ruolo attuale: <strong>{u.role}</strong>
            <select value={u.role} onChange={e => updateRole(u._id, e.target.value)}>
              <option value="player">player</option>
              <option value="moderatore">moderatore</option>
              <option value="narratore">narratore</option>
              <option value="guida">guida</option>
              <option value="gestore">gestore</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoleManager;