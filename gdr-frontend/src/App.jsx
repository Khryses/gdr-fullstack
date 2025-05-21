import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import CreateCharacter from './pages/CreateCharacter';
import EditCharacter from './pages/EditCharacter';
import ProtectedRoute from './components/ProtectedRoute';
import ManageSkills from './pages/ManageSkills';
import DiceLogger from './pages/DiceLogger';
import CreateEvent from './pages/CreateEvent';
import AdminDashboard from './pages/AdminDashboard';
import VisualEditor from './pages/VisualEditor';
import FullEditor from './pages/FullEditor';
import RoleManager from './pages/RoleManager';
import AuditLog from './pages/AuditLog';
import SpectatorView from './pages/SpectatorView';
import CharacterSheet from './pages/character/CharacterSheet';
import CharacterProfile from './pages/character/CharacterProfile';
import CharacterStats from './pages/character/CharacterStats';
import CharacterStory from './pages/character/CharacterStory';
import CharacterMessages from './pages/character/CharacterMessages';
import CharacterDice from './pages/character/CharacterDice';
import CharacterChat from './pages/character/CharacterChat';
import MainLayout from './layouts/MainLayout';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/create-character" element={<ProtectedRoute />}>
              <Route index element={<CreateCharacter />} />
            </Route>
            <Route path="/edit-character/:id" element={<ProtectedRoute />}>
              <Route index element={<EditCharacter />} />
            </Route>
            <Route path="/skills" element={<ProtectedRoute requiredRole="admin" />}>
              <Route index element={<ManageSkills />} />
            </Route>
            <Route path="/dice" element={<DiceLogger />} />
            <Route path="/admin" element={<ProtectedRoute requiredRole="admin" />}>
              <Route index element={<AdminDashboard />} />
            </Route>
            <Route path="/visual-editor" element={<VisualEditor />} />
            <Route path="/full-editor" element={<ProtectedRoute requiredRole="gestore" />}>
              <Route index element={<FullEditor />} />
            </Route>
            <Route path="/roles" element={<ProtectedRoute requiredRole="gestore" />}>
              <Route index element={<RoleManager />} />
            </Route>
            <Route path="/audit" element={<ProtectedRoute requiredRole="gestore" />}>
              <Route index element={<AuditLog />} />
            </Route>
            <Route path="/spettatore" element={<ProtectedRoute requiredRole="gestore" />}>
              <Route index element={<SpectatorView />} />
            </Route>
            <Route path="/event" element={<ProtectedRoute requiredRole="master" />}>
              <Route index element={<CreateEvent />} />
            </Route>
            <Route path="/character/:id" element={<CharacterSheet />}>
              <Route index element={<CharacterProfile />} />
              <Route path="stats" element={<CharacterStats />} />
              <Route path="story" element={<CharacterStory />} />
              <Route path="messages" element={<CharacterMessages />} />
              <Route path="dice" element={<CharacterDice />} />
              <Route path="chat" element={<CharacterChat />} />
            </Route>
          </Routes>
        </MainLayout>
      </Router>
    </AuthProvider>
  );
}

export default App;
