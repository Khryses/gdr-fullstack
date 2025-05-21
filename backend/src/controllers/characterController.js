
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.aggiornaOnline = async (req, res) => {
  const { characterId, online } = req.body;

  try {
    const character = await prisma.character.update({
      where: { id: characterId },
      data: { online }
    });

    res.status(200).json({ message: 'Stato online aggiornato.', character });
  } catch (err) {
    res.status(500).json({ error: 'Errore aggiornamento stato online.' });
  }
};

exports.aggiornaPosizione = async (req, res) => {
  const { characterId, posizione } = req.body;

  try {
    const character = await prisma.character.update({
      where: { id: characterId },
      data: { posizione }
    });

    res.status(200).json({ message: 'Posizione aggiornata.', character });
  } catch (err) {
    res.status(500).json({ error: 'Errore aggiornamento posizione.' });
  }
};
