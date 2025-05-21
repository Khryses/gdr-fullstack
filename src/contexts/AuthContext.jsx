import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if (savedUser) {
      setUser(token ? { ...JSON.parse(savedUser), token } : null);
    }
  }, []);

  const login = (userData) => {
    const role = userData.role || 'player'; // ruoli: player, moderatore, narratore, guida, gestore
    setUser({ ...userData, role });
    localStorage.setItem('token', userData.token);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);