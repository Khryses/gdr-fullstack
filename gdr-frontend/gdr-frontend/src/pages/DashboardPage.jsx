import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import api from '../services/api';

function DashboardPage() {
  const { user } = useAuth();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const res = await api.get('/characters');
        setCharacters(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <h2>Benvenuto, {user?.email}</h2>
      <h3>I tuoi personaggi</h3>
      <Link to="/create-character">➕ Crea nuovo personaggio</Link>
      <ul>
        {characters.map(char => (
          <li key={char._id}>
            <Link to={`/character/${char._id}`}>{char.name}</Link> | 
            <Link to={`/edit-character/${char._id}`}>✏️</Link>
          </li>
        ))}
      </ul>

      <h3>Reputazione</h3>
      <p>In costruzione: sistema reputazione e riepilogo giocate.</p>
    </div>
  );
}

export default DashboardPage;