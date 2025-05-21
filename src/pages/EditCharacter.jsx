import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';

function EditCharacter() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const res = await api.get(`/characters/${id}`);
        setCharacter(res.data);
      } catch (err) {
        alert('Personaggio non trovato');
      }
    };
    fetchCharacter();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/characters/${id}`, character);
      navigate(`/character/${id}`);
    } catch (err) {
      alert('Errore nella modifica');
    }
  };

  if (!character) return <p>Caricamento...</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Modifica Personaggio</h2>
      <input type="text" value={character.name} onChange={(e) => setCharacter({ ...character, name: e.target.value })} />
      <input type="text" value={character.race} onChange={(e) => setCharacter({ ...character, race: e.target.value })} />
      <input type="text" value={character.role} onChange={(e) => setCharacter({ ...character, role: e.target.value })} />
      <input type="text" value={character.avatar} onChange={(e) => setCharacter({ ...character, avatar: e.target.value })} />
      <button type="submit">Salva Modifiche</button>
    </form>
  );
}

export default EditCharacter;