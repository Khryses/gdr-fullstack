import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { registerUser } from '../services/auth';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await registerUser({ email, password });
      login(user);
      navigate('/dashboard');
    } catch (err) {
      alert('Registrazione fallita: ' + err.response?.data?.message || err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrati</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
      <button type="submit">Registrati</button>
    </form>
  );
}

export default RegisterPage;