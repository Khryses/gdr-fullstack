const express = require('express');
const Character = require('../models/Character');

const router = express.Router();

// Recupera tutti i personaggi (eventualmente filtrati per utente)
router.get('/', async (req, res) => {
  const chars = await Character.find();
  res.json(chars);
});

// Recupera uno specifico personaggio
router.get('/:id', async (req, res) => {
  const char = await Character.findById(req.params.id);
  if (!char) return res.status(404).json({ message: 'Personaggio non trovato' });
  res.json(char);
});

// Crea un personaggio
router.post('/', async (req, res) => {
  const { name, race, role, avatar, userId } = req.body;
  const char = await Character.create({ name, race, role, avatar, userId });
  res.status(201).json(char);
});

// Modifica un personaggio
router.put('/:id', async (req, res) => {
  const char = await Character.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(char);
});

// Elimina un personaggio
router.delete('/:id', async (req, res) => {
  await Character.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;