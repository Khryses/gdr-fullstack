import Notifications from '../components/Notifications';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  const { user } = useAuth();

  return (
    <div>
      <h2>Dashboard: {user?.role?.toUpperCase()}</h2>
      <Notifications />
      <ul>
        {(user.role === 'moderatore' || user.role === 'gestore') && (
          <>
            <li><Link to="/skills">Gestione Abilità</Link></li>
            <li><Link to="/dice">Lancia Dadi</Link></li>
          </>
        )}
        {(user.role === 'narratore' || user.role === 'gestore') && (
          <li><Link to="/event">Crea Evento</Link></li>
        )}
        {user.role === 'gestore' && (
          <li><Link to="/visual-editor">Editor Totale</Link></li>
        )}
        {(user.role === 'guida' || user.role === 'gestore') && (
          <li><Link to="/dashboard">Assistenza giocatori</Link></li>
        )}
      </ul>
    </div>
  );
}

export default AdminDashboard;