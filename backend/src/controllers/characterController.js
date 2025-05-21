const Character = require('../models/Character');

exports.aggiornaOnline = async (req, res) => {
  const { characterId, online } = req.body;
  try {
    const character = await Character.findByIdAndUpdate(characterId, { online }, { new: true });
    if (!character) return res.status(404).json({ error: 'Personaggio non trovato.' });
    res.status(200).json({ message: 'Online aggiornato.', character });
  } catch {
    res.status(500).json({ error: 'Errore aggiornamento.' });
  }
};

exports.aggiornaPosizione = async (req, res) => {
  const { characterId, posizione } = req.body;
  try {
    const character = await Character.findByIdAndUpdate(characterId, { posizione }, { new: true });
    if (!character) return res.status(404).json({ error: 'Personaggio non trovato.' });
    res.status(200).json({ message: 'Posizione aggiornata.', character });
  } catch {
    res.status(500).json({ error: 'Errore aggiornamento posizione.' });
  }
};