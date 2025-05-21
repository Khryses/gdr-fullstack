import { useState } from 'react';
import api from '../services/api';

function DiceLogger() {
  const [log, setLog] = useState('');
  const [result, setResult] = useState(null);

  const logDice = async () => {
    const roll = Math.floor(Math.random() * 20) + 1;
    const res = await api.post('/dice', { description: log, result: roll });
    setResult(roll);
    setLog('');
  };

  return (
    <div>
      <h2>Tiro di dado</h2>
      <input value={log} onChange={e => setLog(e.target.value)} placeholder="Descrizione tiro" />
      <button onClick={logDice}>Lancia d20</button>
      {result !== null && <p>Risultato: {result}</p>}
    </div>
  );
}

export default DiceLogger;