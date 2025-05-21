import { useEffect, useState } from 'react';
import api from '../services/api';

function ManageSkills() {
  const [skills, setSkills] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchSkills = async () => {
      const res = await api.get('/stats');
      setSkills(res.data);
    };
    fetchSkills();
  }, []);

  const addSkill = async (e) => {
    e.preventDefault();
    const res = await api.post('/stats', { name });
    setSkills([...skills, res.data]);
    setName('');
  };

  const deleteSkill = async (id) => {
    await api.delete(`/stats/${id}`);
    setSkills(skills.filter(s => s._id !== id));
  };

  return (
    <div>
      <h2>Gestione Abilità</h2>
      <form onSubmit={addSkill}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Nome abilità" required />
        <button type="submit">Aggiungi</button>
      </form>
      <ul>
        {skills.map(s => (
          <li key={s._id}>
            {s.name} <button onClick={() => deleteSkill(s._id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManageSkills;