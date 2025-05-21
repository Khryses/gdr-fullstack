import { useEffect, useState } from 'react';
import api from '../services/api';

function AuditLog() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    api.get('/protected/audit').then(res => setLogs(res.data));
  }, []);

  return (
    <div>
      <h2>Storico Azioni (Audit Log)</h2>
      <ul>
        {logs.map((log, i) => (
          <li key={i}>{log.timestamp} - {log.actor} ha {log.action}</li>
        ))}
      </ul>
    </div>
  );
}

export default AuditLog;