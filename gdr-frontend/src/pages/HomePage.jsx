import { Link } from 'react-router-dom';
import './HomePage.css'; // se vuoi aggiungere uno stile separato

function HomePage() {
  return (
    <div className="homepage-container">
      <div className="hero">
        <h1>Benvenuto su EODUM - Il GDR Futuristico</h1>
        <p>
          Esplora la città divisa tra clan, potere e segreti. 
          Scegli il tuo ruolo, scrivi la tua storia, e cambia il destino del mondo.
        </p>
        <div className="homepage-buttons">
          <Link to="/login" className="btn">Entra nel Gioco</Link>
          <Link to="/register" className="btn-outline">Non hai un account?</Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
