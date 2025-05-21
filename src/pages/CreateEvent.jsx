import { useState } from 'react';
import api from '../services/api';

function CreateEvent() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/protected/events', { title, description });
    setTitle('');
    setDescription('');
    alert('Evento creato!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crea Evento/Giocata</h2>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Titolo" required />
      <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Descrizione" required />
      <button type="submit">Crea</button>
    </form>
  );
}

export default CreateEvent;