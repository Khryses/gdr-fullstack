import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function ProtectedRoute({ requiredRole }) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;

  if (requiredRole && user.role !== requiredRole) {
    return <div>Accesso negato: permessi insufficienti.</div>;
  }

  return <Outlet />;
}

export default ProtectedRoute;