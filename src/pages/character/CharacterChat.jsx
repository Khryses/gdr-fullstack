import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

function CharacterChat() {
  const { id } = useParams();
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    api.get(`/characters/${id}/chat`).then(res => setLogs(res.data));
  }, [id]);

  return (
    <div>
      <h2>Chat Log</h2>
      <ul>{logs.map((log, i) => <li key={i}>{log.text}</li>)}</ul>
    </div>
  );
}

export default CharacterChat;