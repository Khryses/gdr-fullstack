
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.logPlay = async (req, res) => {
  const { characterId, contenuto } = req.body;

  try {
    const log = await prisma.playLog.create({
      data: {
        characterId,
        contenuto
      }
    });

    res.status(201).json({ message: 'Giocata salvata.', log });
  } catch (err) {
    res.status(500).json({ error: 'Errore salvataggio giocata.' });
  }
};

exports.getPlayLog = async (req, res) => {
  const { id } = req.params;

  try {
    const logs = await prisma.playLog.findMany({
      where: { characterId: id },
      orderBy: { timestamp: 'desc' }
    });

    res.status(200).json({ logs });
  } catch (err) {
    res.status(500).json({ error: 'Errore recupero log giocate.' });
  }
};


exports.deletePlayLog = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.playLog.delete({ where: { id } });
    res.status(200).json({ message: 'Log giocata eliminato.' });
  } catch (err) {
    res.status(500).json({ error: 'Errore eliminazione log giocata.' });
  }
};
