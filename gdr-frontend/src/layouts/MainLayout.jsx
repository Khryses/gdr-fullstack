import { Link } from 'react-router-dom';

function MainLayout({ children }) {
  return (
    <div className="app-container dark">
      <header className="navbar">
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/login">Login</Link> | 
          <Link to="/register">Register</Link> | 
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default MainLayout;