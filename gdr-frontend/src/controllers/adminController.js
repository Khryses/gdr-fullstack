
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.bannaUtente = async (req, res) => {
  const { userId } = req.params;
  const { livello, durataOre } = req.body;

  try {
    const banScadenza = new Date();
    banScadenza.setHours(banScadenza.getHours() + durataOre);

    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        banned: true,
        banLivello: livello,
        banScadenza
      }
    });

    res.status(200).json({ message: `Utente bannato con livello ${livello}`, user });
  } catch (err) {
    res.status(500).json({ error: 'Errore ban utente.' });
  }
};

exports.sbloccaUtente = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        banned: false,
        banLivello: 0,
        banScadenza: null
      }
    });

    res.status(200).json({ message: 'Utente sbloccato.', user });
  } catch (err) {
    res.status(500).json({ error: 'Errore sblocco utente.' });
  }
};

exports.listaBannati = async (req, res) => {
  try {
    const utenti = await prisma.user.findMany({
      where: { banned: true },
      orderBy: { banLivello: 'desc' }
    });

    res.status(200).json({ utenti });
  } catch (err) {
    res.status(500).json({ error: 'Errore recupero utenti bannati.' });
  }
};
