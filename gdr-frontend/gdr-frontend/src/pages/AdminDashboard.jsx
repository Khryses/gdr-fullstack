import Notifications from '../components/Notifications';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  return (
    <div>
      <h2>Dashboard Admin/Master</h2>
      <Notifications />
      <ul>
        <li><Link to="/skills">Gestione Abilità</Link></li>
        <li><Link to="/event">Crea Evento</Link></li>
        <li><Link to="/dice">Lancia Dadi</Link></li>
      </ul>
    </div>
  );
}

export default AdminDashboard;