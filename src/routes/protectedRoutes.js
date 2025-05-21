const express = require('express');
const router = express.Router();
const { requireRole } = require('../middleware/authRole');

// Simulazione database mock
const users = [
  { _id: '1', email: 'utente1@example.com', role: 'player' },
  { _id: '2', email: 'admin@example.com', role: 'gestore' }
];

const audit = [
  { timestamp: '2025-05-21', actor: 'admin@example.com', action: 'creato evento' },
  { timestamp: '2025-05-20', actor: 'admin@example.com', action: 'modificato abilità' }
];

// Ritorna lista utenti (solo per gestore)
router.get('/users', requireRole('gestore'), (req, res) => {
  res.json(users);
});

// Modifica ruolo utente
router.put('/users/:id/role', requireRole('gestore'), (req, res) => {
  const user = users.find(u => u._id === req.params.id);
  if (user) {
    user.role = req.body.role;
    res.json(user);
  } else {
    res.status(404).json({ message: 'Utente non trovato' });
  }
});

// Audit log
router.get('/audit', requireRole('gestore'), (req, res) => {
  res.json(audit);
});

// Notifiche simulate
router.get('/notifications', (req, res) => {
  res.json([
    { message: 'Nuova missione disponibile' },
    { message: 'Un narratore ha aperto una nuova quest!' }
  ]);
});

module.exports = router;