import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

function CreateCharacter() {
  const [name, setName] = useState('');
  const [race, setRace] = useState('');
  const [role, setRole] = useState('');
  const [avatar, setAvatar] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/characters', { name, race, role, avatar });
      navigate('/dashboard');
    } catch (err) {
      alert('Errore nella creazione del personaggio');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crea Personaggio</h2>
      <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Razza" value={race} onChange={(e) => setRace(e.target.value)} required />
      <input type="text" placeholder="Ruolo" value={role} onChange={(e) => setRole(e.target.value)} required />
      <input type="text" placeholder="URL Avatar" value={avatar} onChange={(e) => setAvatar(e.target.value)} />
      <button type="submit">Crea</button>
    </form>
  );
}

export default CreateCharacter;